(function() {
    'use strict';
    config.$inject = ["$stateProvider", "$urlRouterProvider", "$ocLazyLoadProvider", "$httpProvider"];
    angular
        .module('app.core')
        .config(config);
        
    function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider,$httpProvider) {

        $urlRouterProvider.otherwise('main/entidad');

        $stateProvider

            .state('main', {
                url: "/main",
                templateUrl: "app/layout/content.html",
            })
            .state('main.entidad', {
                url: "/entidad",
                templateUrl: "app/components/entidad/entidad.html",
                data: { cdPageTitle: 'Entidad'}
            })
            ;
    }
    
})();