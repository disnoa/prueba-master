(function() {
    'use strict';

    angular
        .module('app.entidad')
        .factory('entidadService', entidadService);

    /* @ngInject */
    entidadService.$inject = ['$http','configConst'];
    /**
    * entidadService - Descripcion 
    **/
    function entidadService($http,configConst) {
        var service = {
            functionEntidad:   functionEntidad
        };
        return service;
        ////////////
        function functionEntidad() {
            return '';
        }
    }

})();