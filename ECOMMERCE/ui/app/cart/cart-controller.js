(function () {

    angular.module('app')
        .controller('cartController', cartController);

    cartController.$inject = ['$localStorage', 'cartService', 'lodash', 'toastr', '$location'];

    function cartController($localStorage, cartService, lodash, toastr, $location) {

        var vm = this;
        var _ = lodash;
        vm.code = 'null';

        vm.items = $localStorage.products;

        vm.subtotalPay = 0;
        vm.freightPay = 0;
        vm.totalPay = 0;

        calculate();

        function calculate() {
            _.forEach(vm.items, function (item) {
                vm.subtotalPay = vm.subtotalPay + (item.price * item.quantityPay);
            });

            vm.totalPay = vm.subtotalPay;
        }

        vm.checkCode = function () {

            if (!$localStorage.user)
                return toastr.error('Você precisa estar logado', 'Erro!');

            cartService.checkToken($localStorage.user.user.email, vm.insertedCode)
                .then(function (res) {

                    vm.code = 'accepted';
                    vm.freightPay = 15;
                    vm.totalPay = vm.totalPay + vm.freightPay;

                })
                .catch(function (err) {
                    vm.code = 'rejected';
                });
        };

        vm.addItem = function (item) {

            _.find(vm.items, function (o) {
                if (o._id == item._id) {
                    o.quantityPay++;
                    vm.subtotalPay = vm.subtotalPay + o.price;
                    vm.totalPay = vm.totalPay + o.price;
                }

            });

        };

        vm.removeItem = function (item) {
            if (item.quantityPay == 1)
                return;

            _.find(vm.items, function (o) {
                if (o._id == item._id) {
                    o.quantityPay--;
                    vm.subtotalPay = vm.subtotalPay - o.price;
                    vm.totalPay = vm.totalPay - o.price;
                }
            });
        };

        vm.excludeItem = function (item) {
            _.remove(vm.items, function (o) {
                return item._id == o._id;
            });
        };

        vm.buy = function () {

            if (!$localStorage.user)
                return toastr.error('Você precisa estar logado', 'Erro!');

            user = $localStorage.user.user;

            filter = {
                "userId": user._id,
                "email": user.email,
                "name": user.name,
                "surname": user.surname,
                "totalPay": vm.totalPay
            };

            swal({
                    title: "Pedido Concluído!",
                    text: "Você receberá um e-mail em instantes! Obrigado!",
                    type: "success"
                },
                function () {
                    cartService.post(filter)
                        .then(function (res) {
                            $localStorage.products = [];
                            $location.path('/');
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                });
        };

    }

}());