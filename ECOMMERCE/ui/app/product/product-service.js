(function() {

    angular.module('app')
        .factory('productService', productService);

    productService.$inject = ['$http', '$localStorage', 'globalFactory'];

    function productService($http, $localStorage, globalFactory) {

        var service = {
            get: get
        };
        return service;

        function get(id) {
            return $http.get(globalFactory.urlApi + '/product/' + id);
        }

    }

}());
