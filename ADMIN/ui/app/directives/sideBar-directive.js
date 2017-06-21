(function() {

    angular.module('app')
        .directive('sidebarDirective', sidebarDirective);

    function sidebarDirective() {

      return {

        restrict: 'E',
        templateUrl: 'ui/app/directives/sidebar.html',
        controller: ['$scope', '$location', function($scope, $location) {



        }]

      };

    }

}());
