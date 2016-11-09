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
