(function() {

    angular.module('app')
        .controller('listController', listController);

    listController.$inject = ['$scope', 'listService', '$localStorage', '$location'];

    function listController($scope, listService, $localStorage, $location) {

        var vm = this;
        vm.search = {};
        vm.search.name = '';

        init();

        function init() {
            vm.category = $localStorage.category;
            if (vm.category == 'cellphone')
                vm.showCategory = 'Celulares';
            if (vm.category == 'notebook')
                vm.showCategory = 'Notebooks';
            if (vm.category == 'console')
                vm.showCategory = 'Consoles';
        }

        get();

        function get() {
            listService.get()
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
