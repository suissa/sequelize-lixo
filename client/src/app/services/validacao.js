'use strict';

var _VALIDACOES = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
];

function ValidacaoService($q) {

    var service = {};

    service.getValidacoes = function() {
        return $q.when(_VALIDACOES);
    }

    service.getValidacao = function(id) {
        for (let validacao of _VALIDACOES) {
            if (validacao.id == id) {
                return $q.when(validacao);
            }
        }
    }

    return service;
}

angular.module('my-app').factory('Validacao', ValidacaoService);
