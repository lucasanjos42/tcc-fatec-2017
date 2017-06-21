(function() {

    angular.module('app')
        .factory('productsService', productsService);

    productsService.$inject = ['$http', 'globalFactory', '$localStorage'];

    function productsService($http, globalFactory, $localStorage) {

        service = {
            get: get,
            put: put,
            post: post,
            del: del
        };
        return service;

        function get() {
            return $http.get(globalFactory.urlApi + '/product/');
        }

        function put(product) {
            return $http.put(globalFactory.urlApi + '/product/' + product._id, product, {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

        function post(product) {
            return $http.post(globalFactory.urlApi + '/product/', product, {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

        function del(id) {
            return $http.delete(globalFactory.urlApi + '/product/' + id, {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

    }

}());
