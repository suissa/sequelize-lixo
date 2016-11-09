'use strict';

(function () {
    angular.module('my-app', [
        'app.templates',
        'ngComponentRouter'
    ])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: `
            <ng-outlet></ng-outlet>
        `,
        $routeConfig: [
            {path: '/', name: 'Login', component: 'login', useAsDefault: true},
            {path: '/hero-list/', name: 'HeroList', component: 'heroList'},
            {path: '/hero-list/detail/:id', name: 'HeroDetail', component: 'heroDetail'},
            {path: '/painel', name: 'Painel', component: 'painel'},
            // {path: '/usuario', name: 'Usuario', component: 'heroList'},
            // {path: '/instrumentos', name: 'Instrumentos', component: 'heroList'},
            // {path: '/relatorios', name: 'Relatorios', component: 'heroList'},
            {path: '/validacoes-lista', name: 'ValidacoesLista', component: 'validacoesLista'},
        ]
    })
    .run(function ($rootScope) {
        console.log('my-app is running...');
    });
})();

'use strict';

var _HEROES = [
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

function HeroService($q) {

    var service = {};

    service.getHeroes = function() {
        return $q.when(_HEROES);
    }

    service.getHero = function(id) {
        for (let hero of _HEROES) {
            if (hero.id == id) {
                return $q.when(hero);
            }
        }
    }

    return service;
}

angular.module('my-app').factory('Hero', HeroService);

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

'use strict';

(function () {
    function DashboardController($scope, Hero) {
        Hero.getHeroes().then(function(data) {
            $scope.heroes = data.slice(0, 3);
        });
    }

    angular.module('my-app')
        .component('dashboard', {
            templateUrl: 'app/components/dashboard/dashboard.html',
            controller: DashboardController
        });
})();

'use strict';

(function () {
    function HeroDetailController($scope, Hero, $rootRouter) {
        this.$routerOnActivate = function(next, previous) {
            var hero_id = next.params.id;  // Get the hero identified by the route parameter

            Hero.getHero(hero_id).then(function(data) {
                $scope.hero = data;
            });
        };

        $scope.save = function() {
            $rootRouter.navigate(['HeroList']);
        }
    }

    angular.module('my-app').component('heroDetail', {
        templateUrl: 'app/components/hero-detail/hero-detail.html',
        controller: HeroDetailController
    });
})();

'use strict';

(function () {
    function HeroListController($scope, Hero, $rootRouter) {
        $scope.selectedHero = null;

        Hero.getHeroes().then(function(data) {
            $scope.heroes = data;
        });

        $scope.onSelect = function(hero) {
            if ($scope.selectedHero == hero) {
                $scope.selectedHero = null;
            } else {
                $scope.selectedHero = hero;
            }
        }

        $scope.gotoDetail = function() {
            $rootRouter.navigate(['HeroDetail', {id: $scope.selectedHero.id}]);
        }
    }

    angular.module('my-app').component('heroList', {
        templateUrl: 'app/components/hero-list/hero-list.html',
        controller: HeroListController
    });
})();

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

'use strict';

function MenuController() {}

angular.module('my-app').component('menu', {
    templateUrl: 'app/components/menu/menu.html',
    controller: MenuController,
});

'use strict';

function NavigationController() {}

angular.module('my-app').component('navigation', {
    templateUrl: 'app/components/navigation/navigation.html',
    controller: NavigationController,
});

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
