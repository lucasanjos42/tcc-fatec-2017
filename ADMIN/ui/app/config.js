(function() {

    angular.module('app')
        .run(['$rootScope', '$location', '$localStorage', function($rootScope, $location, $localStorage) {
            $rootScope.$on('$routeChangeStart', function(event) {
                if ($location['$$path'] != '/login') {
                    if (!$localStorage.userInfo) {
                        event.preventDefault();
                        $location.path('/login');
                    }
                }
            });
        }]);

    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'ui/app/dashboard/dashboard.html',
                    controller: 'dashboardController as vm'
                })
                .when('/login', {
                    templateUrl: 'ui/app/login/login.html',
                    controller: 'loginController as vm'
                })
                .when('/users', {
                    templateUrl: 'ui/app/users/users.html',
                    controller: 'usersController as vm'
                })
                .when('/products', {
                    templateUrl: 'ui/app/products/products.html',
                    controller: 'productsController as vm'
                })
                .when('/suppliers', {
                    templateUrl: 'ui/app/suppliers/suppliers.html',
                    controller: 'suppliersController as vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);

}());
