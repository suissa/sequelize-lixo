'use strict';

(function () {
    function PainelController($scope, Hero) {
        Hero.getHeroes().then(function(data) {
            $scope.heroes = data.slice(0, 3);
        });
    }

    angular.module('my-app')
      .component('painel', {
          templateUrl: 'app/components/painel/painel.html',
          controller: PainelController
      });
})();
