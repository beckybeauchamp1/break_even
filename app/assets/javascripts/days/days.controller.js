"use strict";

(function(){
  angular
  .module("days")
  .controller("DayIndexController", [
    "DayFactory",
    "DrinkFactory",
    "ExerciseFactory"
    DayIndexControllerFunction
  ]);

  function DayIndexControllerFunction(DayFactory){
    this.days = DayFactory.query();
    this.exercises = ExerciseFactory.query();
    this.drinks = DrinksFactory.query();
  }
}());
