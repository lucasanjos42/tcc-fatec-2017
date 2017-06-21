(function () {

    angular.module('app')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', 'dashboardService', 'productsService'];

    function dashboardController($scope, dashboardService, productsService) {

        var vm = this;

        get();
        getProducts();
        getSales();

        function get() {
            dashboardService.get()
                .then(function (res) {
                    vm.users = res.data;
                })
                .catch(function (err) {
                    console.log(err);
                });
        }

        function getSales() {
            dashboardService.getSales()
                .then(function (res) {
                    vm.sales = res.data;
                })
                .catch(function (err) {
                    console.log(err);
                });
        }

        function getProducts() {
            productsService.get()
                .then(function (res) {
                    vm.products = res.data;
                })
                .catch(function (err) {
                    console.log(err);
                });
        }

    }

}());