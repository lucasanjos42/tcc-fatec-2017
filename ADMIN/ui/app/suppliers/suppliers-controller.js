(function() {

    angular.module('app')
        .controller('suppliersController', suppliersController);

    suppliersController.$inject = ['suppliersService', 'toastr'];

    function suppliersController(suppliersService, toastr) {

        var vm = this;

        vm.showList = true;
        vm.showEdit = false;
        vm.showNewSupplier = false;

        get();

        function get() {
            suppliersService.get()
                .then(function(res) {
                    vm.suppliers = res.data;
                    console.log(vm.suppliers);
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        vm.edit = function(supplier) {
            vm.showList = false;
            vm.showEdit = true;
            vm.supplier = supplier;
        };

        vm.goToList = function() {
            vm.supplier = {};
            vm.newSupplier = {};
            vm.showEdit = false;
            vm.showNewSupplier = false;
            vm.showList = true;
        };

        vm.updateSupplier = function() {

            suppliersService.put(vm.supplier)
                .then(function(res) {
                    toastr.success('Usuário atualizado com sucesso!', 'Sucesso');
                    vm.goToList();
                })
                .catch(function(err) {
                    toastr.error('Tente novamente!', 'Erro');
                });

        };

        vm.goToNewSupplier = function() {
            vm.showList = false;
            vm.showNewSupplier = true;
            vm.newSupplier = {};
        };

        vm.createNewSupplier = function() {
            var supplier = vm.newSupplier;

            var filter = {
                name: vm.supplier.name,
                fantasyName: vm.supplier.fantasyName,
                cnpj: vm.supplier.cnpj,
                phoneNumber: vm.supplier.phoneNumber,
                email: vm.supplier.email,
                website: vm.supplier.website,
                cep: vm.supplier.cep,
                address: vm.supplier.address,
                province: vm.supplier.province,
                city: vm.supplier.city,
            };

            suppliersService.post(filter)
                .then(function(res) {
                    toastr.success('Fornecedor cadastrado com sucesso!', 'Sucesso');
                    get();
                    vm.goToList();
                })
                .catch(function(err) {
                    toastr.error('Tente novamente!', 'Erro');
                });
        };

        vm.removeSupplier = function() {
            var supplier = vm.supplier;

            suppliersService.del(supplier._id)
                .then(function(res) {
                    toastr.success('Fornecedor excluído com sucesso!', 'Sucesso');
                    get();
                    vm.goToList();
                })
                .catch(function(err) {
                    toastr.error('Tente novamente!', 'Erro');
                });

        };

    }

}());
