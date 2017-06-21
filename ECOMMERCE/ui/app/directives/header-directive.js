(function() {

    angular.module('app')
        .directive('headerDirective', headerDirective);

    function headerDirective() {

        return {

            restrict: 'E',
            templateUrl: 'ui/app/directives/header.html',
            controller: ['$scope', '$localStorage', '$location', '$route', function($scope, $localStorage, $location, $route) {

                $scope.user = $localStorage.user;

                $scope.exit = function() {
                    $scope.user = null;
                    $localStorage.user = null;
                    $location.path('/login');
                };

                $scope.setCategory = function(category) {
                    $localStorage.category = category;
                    $route.reload();
                };

            }]

        };

    }

}());
