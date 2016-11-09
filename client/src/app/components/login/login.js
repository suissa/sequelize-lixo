'use strict';

(function () {
    function LoginController($scope) {
    }

    angular.module('my-app')
      .component('login', {
          templateUrl: 'app/components/login/login.html',
          controller: LoginController
      });
})();
