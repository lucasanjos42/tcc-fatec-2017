(function() {

    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'ui/app/home/home.html',
                    controller: 'homeController as vm'
                })
                .when('/login', {
                    templateUrl: 'ui/app/login/login.html',
                    controller: 'loginController as vm'
                })
                .when('/register', {
                    templateUrl: 'ui/app/register/register.html',
                    controller: 'registerController as vm'
                })
                .when('/listProducts', {
                    templateUrl: 'ui/app/listProducts/listProducts.html',
                    controller: 'listController as vm'
                })
                .when('/product/:id', {
                    templateUrl: 'ui/app/product/product.html',
                    controller: 'productController as vm'
                })
                .when('/cart', {
                    templateUrl: 'ui/app/cart/cart.html',
                    controller: 'cartController as vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);

}());
