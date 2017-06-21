(function() {

    angular.module('app')
        .factory('loginService', loginService);


    loginService.$inject = ['$http', 'globalFactory'];

    function loginService($http, globalFactory) {

        service = {
            signin: signin
        };

        return service;

        function signin(data) {
            return $http.post(globalFactory.urlApi + '/login/', data);
        }

    }


}());
