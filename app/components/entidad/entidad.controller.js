(function() {
    'use strict';

    angular
        .module('app.entidad')
        .controller('EntidadCtrl',EntidadCtrl);

    /* @ngInject */
    EntidadCtrl.$inject = ['dataService','$scope','DTOptionsBuilder', 'DTColumnBuilder'];
    /**
    * EntidadCtrl - Descripcion 
    **/
    function EntidadCtrl(dataService,$scope,DTOptionsBuilder, DTColumnBuilder) {
        var vm = this;
        // variables
        vm.settings = {
            title: "Titulo"
        };

        vm.dtOptions = DTOptionsBuilder.fromSource('data.json') 
            .withPaginationType('full_numbers')
            .withDisplayLength(10)
            .withDOM('');
        vm.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('').notSortable().renderWith(function (data) {
              return '<label class="pos-rel"> <input type="checkbox" class="ace"> <span class="lbl"></span> </label>'; }),
            DTColumnBuilder.newColumn('lorem').withTitle('Lorem').notSortable(),
            DTColumnBuilder.newColumn('ipsum').withTitle('Ipsum').notSortable(),
            DTColumnBuilder.newColumn('dolor').withTitle('Dolor').notSortable(),
            DTColumnBuilder.newColumn('sit').withTitle('Sit').notSortable(),
            DTColumnBuilder.newColumn('amet').withTitle('Amet').notSortable()
        ];

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

      $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
      };

      $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      };

      // Disable weekend selection
      function disabled(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      }

      $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
      };

      $scope.toggleMin();

      $scope.open1 = function() {
        $scope.popup1.opened = true;
      };

      $scope.open2 = function() {
        $scope.popup2.opened = true;
      };

      $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];
      $scope.altInputFormats = ['M!/d!/yyyy'];

      $scope.popup1 = {
        opened: false
      };

      $scope.popup2 = {
        opened: false
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 1);
      $scope.events = [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ];

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