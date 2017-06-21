(function() {

  angular.module('app')
    .factory('globalFactory', globalFactory);

    function globalFactory() {

      return {
        urlApi: 'http://localhost:3000'
      };

    }

}());
