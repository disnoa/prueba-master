(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('MainCtrl', MainCtrl);

    /* @ngInject */
    MainCtrl.$inject = ['configConst'];
    /**
    * MainCtrl - Descripcion 
    **/
    function MainCtrl(configConst) {
        var main = this;
        main.appName        = configConst.appName;
        main.description    = configConst.description;
        main.favicon        = configConst.favicon;
    }
})();
