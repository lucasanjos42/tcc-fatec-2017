(function() {

    angular.module('app')
        .directive('headerDirective', headerDirective);

    function headerDirective() {

        return {

            restrict: 'E',
            templateUrl: 'ui/app/directives/header.html',
            controller: ['$scope', '$localStorage', '$location', function($scope, $localStorage, $location) {

                $scope.exit = function() {
                    $localStorage.userInfo = null;
                    $location.path('/login');
                };

            }]

        };

    }

}());
