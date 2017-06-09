(function() {
    'use strict';

    angular
        .module('app.entidad')
        .controller('EntidadCtrl',EntidadCtrl);

    /* @ngInject */
    EntidadCtrl.$inject = ['dataService','$scope','DTOptionsBuilder', 'DTColumnBuilder','$q','$filter'];
    /**
    * EntidadCtrl - Descripcion 
    **/
    function EntidadCtrl(dataService,$scope,DTOptionsBuilder, DTColumnBuilder,$q,$filter) {
      // variables
      var vm = this;
      vm.settings = {
          title: "Titulo"
      };
      vm.total = 0;
      // date options
      vm.today = today;
      vm.today = clear;
      vm.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      };
      vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      vm.format = vm.formats[0];
      vm.altInputFormats = ['M!/d!/yyyy'];
      vm.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
      };
      vm.open1 = open1;
      vm.open2 = open2;
      vm.popup1 = {opened: false };
      vm.popup2 = {opened: false };
       // datatable options
      vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        dataService.get('data.json').then(function (results) {vm.total = results.data.length; defer.resolve(results.data); }); 
        return defer.promise;
      }).withPaginationType('simple_numbers').withDisplayLength(10).withDOM('<"pagination-bottom"p><"clear">').withBootstrap().withLanguage({
        "oPaginate": {
            "sNext":     '<i class="fa fa-angle-double-right"></i>',
            "sPrevious": '<i class="fa fa-angle-double-left"></i>'
        }
      });
      vm.dtColumns = [
          DTColumnBuilder.newColumn('id').withTitle('').notSortable().withOption('className', 'hidden-xs hidden-sm').renderWith(function (data) {
            $('.table-nosort th:first-child').removeClass('sorting_asc');  
            return '<label class="pos-rel"> <input type="checkbox" class="ace" value="'+data+'"> <span class="lbl"></span> </label>'; 
          }),
          DTColumnBuilder.newColumn('lorem').withTitle('Lorem').notSortable(),
          DTColumnBuilder.newColumn('ipsum').withTitle('Ipsum').notSortable(),
          DTColumnBuilder.newColumn('dolor').withTitle('Dolor').notSortable(),
          DTColumnBuilder.newColumn('sit').withTitle('Sit').notSortable(),
          DTColumnBuilder.newColumn('amet').withTitle('Amet').notSortable().renderWith(function (data) {
            return $filter('currency')(data) ; 
          }),
      ];

      // date functions
      function today() {
        vm.dt = new Date();
      }
      function clear() {
        vm.dt = null;
      }
      function open1() {
        vm.popup1.opened = true;
      }
      function open2() {
        vm.popup2.opened = true;
      }
      function getDayClass(data) {
        var date = data.date,
          mode = data.mode;
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);

          for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }

        return '';
      }
    }
})();