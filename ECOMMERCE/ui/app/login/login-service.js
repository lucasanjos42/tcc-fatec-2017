(function() {

    angular.module('app')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', '$localStorage', 'globalFactory'];

    function loginService($http, $localStorage, globalFactory) {

        var service = {
            post: post
        };
        return service;

        function post(data) {
            return $http.post(globalFactory.urlApi + '/login/', data);
        }

    }

}());
