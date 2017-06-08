(function() {
    'use strict';

    angular
        .module('app.entidad')
        .controller('EntidadCtrl',EntidadCtrl);

    /* @ngInject */
    EntidadCtrl.$inject = ['dataService'];
    /**
    * EntidadCtrl - Descripcion 
    **/
    function EntidadCtrl(dataService) {
        var vm = this;
        // variables
        vm.settings = {
            title: "Titulo"
        };
        vm.objeto = {};
        // functiones 
        vm.functions= functions;

        function functions () {
            // 
        }
    }
})();