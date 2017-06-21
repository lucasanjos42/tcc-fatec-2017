(function() {

    angular.module('app')
        .controller('registerController', registerController);

    registerController.$inject = ['registerService', '$localStorage', 'toastr', 'lodash', '$location'];

    function registerController(registerService, $localStorage, toastr, lodash, $location) {

        var vm = this;
        var _ = lodash;

        vm.register = function() {

            if (!vm.user || !vm.user.name || !vm.user.surname || !vm.user.email || !vm.user.password)
                return toastr.error('Preencha os dados', 'Erro!');

            filter = {
                "name": vm.user.name,
                "surname": vm.user.surname,
                "email": vm.user.email,
                "password": vm.user.password
            };

            registerService.post(filter)
                .then(function(res) {
                    toastr.success('Usuário registrado', 'Sucesso!');
                    $location.path('/login');
                })
                .catch(function(err) {
                    console.log(err);
                });

        };

    }

}());
