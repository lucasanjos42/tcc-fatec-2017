(function() {

    angular.module('app')
        .controller('usersController', usersController);

    usersController.$inject = ['usersService', 'toastr'];

    function usersController(usersService, toastr) {

        var vm = this;

        vm.showList = true;
        vm.showEdit = false;

        get();

        function get() {
            usersService.get()
                .then(function(res) {
                    vm.users = res.data;
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        vm.edit = function(user) {
            vm.showList = false;
            vm.showEdit = true;
            vm.user = user;
        };

        vm.goToList = function() {
            vm.user = {};
            vm.showEdit = false;
            vm.showList = true;
        };

        vm.updateUser = function() {

            usersService.put(vm.user)
                .then(function(res) {
                    toastr.success('Usuário atualizado com sucesso!', 'Sucesso');
                    vm.goToList();
                })
                .catch(function(err) {
                    toastr.error('Tente novamente!', 'Erro');
                });

        };

    }

}());
