(function() {

    angular.module('app')
        .factory('suppliersService', suppliersService);

    suppliersService.$inject = ['$http', 'globalFactory', '$localStorage'];

    function suppliersService($http, globalFactory, $localStorage) {

        service = {
            get: get,
            put: put,
            post: post,
            del: del
        };
        return service;

        function get() {
            return $http.get(globalFactory.urlApi + '/supplier/', {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

        function put(supplier) {
            return $http.put(globalFactory.urlApi + '/supplier/' + supplier._id, supplier, {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

        function post(product) {
            return $http.post(globalFactory.urlApi + '/supplier/', product, {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

        function del(id) {
            return $http.delete(globalFactory.urlApi + '/supplier/' + id, {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }


    }

}());
