(function() {

    angular.module('app')
        .factory('listService', listService);

    listService.$inject = ['$http', '$localStorage', 'globalFactory'];

    function listService($http, $localStorage, globalFactory) {

        var service = {
            get: get
        };
        return service;

        function get() {
            return $http.get(globalFactory.urlApi + '/product/');
        }

    }

}());
