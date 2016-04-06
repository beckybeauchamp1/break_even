"use strict";

(function(){
  angular
  .module("drinks")
  .controller("DrinksIndexController", [
    "DrinkFactory",
    "ExerciseFactory",
    "DayFactory"
    DrinksIndexControllerFunction
  ]);

  function DrinksIndexControllerFunction(DrinkFactory){
    this.drinks = DrinkFactory.query();
      this.exercises = ExerciseFactory.query();
      this.days = DayFactory.query();
    }
}());
