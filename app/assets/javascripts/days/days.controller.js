"use strict";

(function(){
  angular
  .module("days")
  .controller("DayIndexController", [
    "DayFactory",
    DayIndexControllerFunction
  ]);

  function DayIndexControllerFunction(DayFactory){
    var vm = this;
    this.days = DayFactory.query();
    this.day = function(day){
      vm.dayClicked = day;
    }
}
}());
