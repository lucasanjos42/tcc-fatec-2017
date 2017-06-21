(function () {

    angular.module('app')
        .factory('dashboardService', dashboardService);

    dashboardService.$inject = ['$http', '$localStorage', 'globalFactory'];

    function dashboardService($http, $localStorage, globalFactory) {

        var service = {
            get: get,
            getSales: getSales
        };
        return service;

        function get() {
            return $http.get(globalFactory.urlApi + '/user/', {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

        function getSales() {
            return $http.get(globalFactory.urlApi + '/order/', {
                headers: {
                    token: $localStorage.userInfo.token
                }
            });
        }

    }

}());