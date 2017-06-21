(function() {

    angular.module('app')
        .factory('homeService', homeService);

    homeService.$inject = ['$http', '$localStorage', 'globalFactory'];

    function homeService($http, $localStorage, globalFactory) {

        var service = {
            get: get
        };
        return service;

        function get() {
            return $http.get(globalFactory.urlApi + '/product/');
        }

    }

}());
