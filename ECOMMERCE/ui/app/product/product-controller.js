(function() {

    angular.module('app')
        .controller('productController', productController);

    productController.$inject = ['$scope', 'productService', '$localStorage', '$routeParams', 'toastr', 'lodash'];

    function productController($scope, productService, $localStorage, $routeParams, toastr, lodash) {

        var vm = this;
        var _ = lodash;

        get();

        function get() {

            id = $routeParams.id;

            productService.get(id)
                .then(function(res) {
                    vm.product = res.data[0];
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        vm.addCart = function() {

            if (!$localStorage.products)
                $localStorage.products = [];

            _.forEach($localStorage.products, function(product) {
                if (product._id == vm.product._id) {
                    product.quantityPay++;
                }
            });

            produtFind = _.find($localStorage.products, function(o) {
                if (o._id == vm.product._id)
                    return o;
            });

            if (typeof produtFind !== 'object') {
                vm.product.quantityPay = 1;
                $localStorage.products.push(vm.product);
            }

            toastr.success('Produto adicionado ao carrinho', 'Sucesso!');
        };



    }

}());
