(function() {

    angular.module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope', 'homeService', '$location'];

    function homeController($scope, homeService, $location) {

        var vm = this;

        get();

        function get() {
            homeService.get()
                .then(function(res) {
                    vm.products = res.data;
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        vm.selectProduct = function(product) {
            id = product._id;
            $location.path('/product/' + id);
        };

    }

}());
