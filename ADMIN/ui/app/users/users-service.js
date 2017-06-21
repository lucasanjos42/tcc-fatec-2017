(function() {

    angular.module('app')
        .factory('usersService', usersService);

    usersService.$inject = ['$http', 'globalFactory', '$localStorage'];

    function usersService($http, globalFactory, $localStorage) {

        service = {
            get: get,
            put: put
        };
        return service;

        function get() {
            return $http.get(globalFactory.urlApi + '/user/', {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

        function put(user) {
            return $http.put(globalFactory.urlApi + '/user/' + user._id, user, {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

    }

}());
