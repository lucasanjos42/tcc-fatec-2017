(function() {

    angular.module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$localStorage', 'loginService', 'toastr', '$location'];

    function loginController($localStorage, loginService, toastr, $location) {

      var vm = this;

        vm.login = function() {

            if (!vm.user.email)
                return;

            if (!vm.user.password)
                return;

            user = vm.user;

            filter = {
                email: user.email,
                password: user.password
            };

            loginService.signin(filter)
                .then(function(res) {
                    $localStorage.userInfo = res.data;
                    $location.path('/');
                })
                .catch(function(err) {
                    toastr.error('Credenciais inválidas', 'Erro');
                });

        };

    }

}());
