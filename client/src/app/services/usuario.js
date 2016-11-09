'use strict';

var Usuario = [
    { "id": 11, "name": "Mr. Nice" },
];

function UsuarioService($q) {

  var service = {};

  service.getUsuarios = function() {
      return $q.when(_HEROES);
  }

  service.getUsuario = function(id) {
      for (let hero of _HEROES) {
          if (hero.id == id) {
              return $q.when(hero);
          }
      }
  }

  return service;
}

angular.module('my-app').factory('Hero', HeroService);
