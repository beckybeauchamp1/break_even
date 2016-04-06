"use strict";

(function(){
  angular
  .module("exercises")
  .controller("ExerciseIndexController", [
    "ExerciseFactory",
    "DayFactory",
    "DrinkFactory"
    ExerciseIndexControllerFunction
  ]);

  function ExerciseIndexControllerFunction(ExerciseFactory, DayFactory){
    this.exercises = ExerciseFactory.query();
    this.days = DayFactory.query();
    this.drinks = DrinksFactory.query();
  }
}());
