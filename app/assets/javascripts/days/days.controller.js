"use strict";

(function(){
  angular
  .module("days")
  .controller("DayIndexController", [
    "DayFactory",
    DayIndexControllerFunction
  ]);

  function DayIndexControllerFunction(DayFactory){
    DayFactory.helloWorld();
  }
}());
