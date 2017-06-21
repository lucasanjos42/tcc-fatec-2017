(function() {

    angular.module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['loginService', '$localStorage', 'toastr', 'lodash', '$location'];

    function loginController(loginService, $localStorage, toastr, lodash, $location) {

        var vm = this;
        var _ = lodash;
        var user = {};

        vm.login = function() {

            if (!vm.user)
                return toastr.error('Insira os dados', 'Erro!');

            if (!vm.user.email)
                return toastr.error('Insira o e-mail', 'Erro!');

            if (!vm.user.password)
                return toastr.error('Insira a senha', 'Erro!');

            var filter = {
                "email": vm.user.email,
                "password": vm.user.password
            };

            loginService.post(filter)
                .then(function(res) {
                    $location.path('/');
                    $localStorage.user = res.data;
                })
                .catch(function(err) {
                    toastr.error('Login ou Senha inválidos', 'Erro!');
                });

        };

    }

}());
