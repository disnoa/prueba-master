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
                data: { cdPageTitle: 'Entidad'},
                controller: 'EntidadCtrl as vm',
                resolve: {
                    loadPlugin: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                insertBefore: '#loadCSS',
                                files: [
                                    'bower_components/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.min.css',
                                    'bower_components/font-awesome/css/font-awesome.min.css',
                                ]
                            },
                            {
                                insertBefore: '#loadJS',
                                files: [
                                    'app/components/entidad/entidad.service.js',
                                    'app/components/entidad/entidad.controller.js'
                                ]
                            },

                        ]);
                    }]
                }
            })
            ;
    }
    
})();