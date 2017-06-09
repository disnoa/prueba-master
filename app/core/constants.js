(function() {
    'use strict';
    var name = "BANCO DE CHILE";
    angular
        .module('app.core')
        .constant("configConst", {
		    "appName": name,
		    "description": name+" Lorem ipsum dolor sit amet consectetur adipiscing elit, metus scelerisque praesent vivamus natoque condimentum enim.",
		    "favicon": "",
		    "urlApi": "", 
		});
})();