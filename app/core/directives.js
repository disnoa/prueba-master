(function() {
    'use strict';

    angular
        .module('app.core')
        .directive('myNavigation', myNavigation)
        .directive('myPortlets', myPortlets)
        .directive('myFooter', myFooter);

    /**
     * myNavigation - ....
     */
    function myNavigation(){
        return {
            templateUrl: 'app/layout/navigation.html'
        };
    }

    /**
     * myFooter - ....
     */
    function myFooter(){
        return {
            templateUrl: 'app/layout/footer.html'
        };
    }

    /**
     * myFooter - ....
     */
    function myPortlets(){
        return {
            restrict: 'E',
            scope: {
                portletTitle: '@',
                portletBody: '@'
            },
            templateUrl: 'app/widgets/portlets.html'
        };
    }
})();