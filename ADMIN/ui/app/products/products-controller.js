(function() {

    angular.module('app')
        .controller('productsController', productsController);

    productsController.$inject = ['$scope', 'productsService', 'toastr'];

    function productsController($scope, productsService, toastr) {

        var vm = this;

        vm.showList = true;
        vm.showEdit = false;
        vm.showNewProduct = false;

        get();

        function get() {
            productsService.get()
                .then(function(res) {
                    vm.products = res.data;
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        $scope.myImage = '';
        $scope.myCroppedImage = '';

        var handleFileSelect = function(evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function(evt) {
                $scope.$apply(function($scope) {
                    $scope.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);

        vm.edit = function(product) {
            vm.showList = false;
            vm.showEdit = true;
            vm.product = product;
        };

        vm.goToList = function() {
            vm.product = {};
            vm.newProduct = {};
            vm.showEdit = false;
            vm.showNewProduct = false;
            vm.showList = true;
        };

        vm.updateProduct = function() {
            productsService.put(vm.product)
                .then(function(res) {
                    toastr.success('Produto atualizado com sucesso!', 'Sucesso');
                    get();
                    vm.goToList();
                })
                .catch(function(err) {
                    toastr.error('Tente novamente!', 'Erro');
                });
        };

        vm.goToNewProduct = function() {
            vm.showList = false;
            vm.showNewProduct = true;
            vm.newProduct = {};
        };

        vm.createNewProduct = function() {
            var product = vm.newProduct;

            var filter = {
                name: product.name,
                brand: product.brand,
                category: product.category,
                shortDescription: product.shortDescription,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
                picture: product.picture
            };

            productsService.post(filter)
                .then(function(res) {
                    toastr.success('Produto cadastrado com sucesso!', 'Sucesso');
                    get();
                    vm.goToList();
                })
                .catch(function(err) {
                    toastr.error('Tente novamente!', 'Erro');
                });
        };

        vm.removeProduct = function() {
            var product = vm.product;

            productsService.del(product._id)
                .then(function(res) {
                    toastr.success('Produto excluído com sucesso!', 'Sucesso');
                    get();
                    vm.goToList();
                })
                .catch(function(err) {
                    toastr.error('Tente novamente!', 'Erro');
                });

        };

    }

}());
