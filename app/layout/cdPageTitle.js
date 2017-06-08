(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('cdPageTitle', cdPageTitle);

    /* @ngInject */
    cdPageTitle.$inject = ['$rootScope','$timeout','configConst'];
    /**
    * cdPageTitle - Directiva para el título de la página
    */
    function cdPageTitle($rootScope, $timeout,configConst) {
        var directive = {
            link: link
        };

        return directive;

        function link(scope, element) {
            function listener(event, toState, toParams, fromState, fromParams) {
                var title = configConst.appName+' | Inicio'; // si el state (core.config.js) data.cdPageTitle no esta definido title por defecto es
                if (toState.data && toState.data.cdPageTitle) title = configConst.appName+' | ' + toState.data.cdPageTitle;
                $timeout(function() {
                    element.text(title);
                });
            }
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
})();