(function() {

    angular.module('app')
        .factory('registerService', registerService);

    registerService.$inject = ['$http', '$localStorage', 'globalFactory'];

    function registerService($http, $localStorage, globalFactory) {

        var service = {
            post: post
        };
        return service;

        function post(data) {
            return $http.post(globalFactory.urlApi + '/user/', data);
        }

    }

}());
