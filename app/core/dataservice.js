(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataService', dataService);

    /* @ngInject */
    dataService.$inject = ['$http','configConst','$q'];
    /**
    * dataService - Descripcion
    **/
    function dataService ($http,configConst,$q) {
        var service = {
                get:    get,
                post:   post,
                put:    put,
                remove: remove
            };
            return service;
            ////////////
            function get (q,cache) {
                return $http.get(configConst.urlApi + q,cache).then(function (results) {
                    return results;
                });
            }
            function post (q, object) {
                return $http.post(configConst.urlApi + q, object,{"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}).then(function (results) {
                    return results;
                });
            }
            function put (q, object) {
                return $http.put(configConst.urlApi + q, object,{"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}).then(function (results) {
                    return results;
                });
            }
            function remove (q) {
                return $http.delete(configConst.urlApi + q).then(function (results) {
                    return results;
                });
            }
    }
})();