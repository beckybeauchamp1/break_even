"use strict";

(function(){
  angular
  .module("days")
  .controller("DayIndexController", [
    DayIndexControllerFunction
  ]);

  function DayIndexControllerFunction(){
    this.days = [
      // {title: "These"},
      // {title: "Are"},
      // {title: "Hardcoded"},
      // {title: "Grumbles"}
    ]
  }
}());
