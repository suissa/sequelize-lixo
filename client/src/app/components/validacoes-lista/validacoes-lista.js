'use strict';

(function () {
    function ValidacoesListaController($scope, Validacao, $rootRouter) {
        $scope.selectedValidacao = null;

        Validacao.getValidacoes().then(function(data) {
            $scope.validacoes = data;
        });

        $scope.onSelect = function(validacao) {
            if ($scope.selectedValidacao == validacao) {
                $scope.selectedValidacao = null;
            } else {
                $scope.selectedValidacao = validacao;
            }
        }

        $scope.gotoDetail = function() {
            $rootRouter.navigate(['ValidacaoDetail', {id: $scope.selectedValidacao.id}]);
        }
    }

    angular.module('my-app').component('validacoesLista', {
        templateUrl: 'app/components/validacoes-lista/validacoes-lista.html',
        controller: ValidacoesListaController
    });
})();
