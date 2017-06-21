(function() {

    angular.module('app')
        .factory('cartService', cartService);

    cartService.$inject = ['$http', '$localStorage', 'globalFactory'];

    function cartService($http, $localStorage, globalFactory) {

        var service = {
            post: post,
            checkToken: checkToken
        };
        return service;

        function checkToken(email, code) {
            return $http.get(globalFactory.urlApi + '/token?email=' + email + '&token=' + code, {
                headers: {
                    token: $localStorage.user.token
                }
            });
        }

        function post(data) {
            return $http.post(globalFactory.urlApi + '/order/', data, {
                headers: {
                    token: $localStorage.user.token
                }
            });
        }

    }

}());
