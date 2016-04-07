"use strict";

(function(){
  angular
  .module("exercises")
  .controller("ExerciseIndexController", [
    "ExerciseFactory",
    "DayFactory",
    ExerciseIndexControllerFunction
  ]);

  function ExerciseIndexControllerFunction(ExerciseFactory, DayFactory){
    this.exercises = ExerciseFactory.query();
    this.days = DayFactory.query();
    this.totalCalories = function() {
      var totalCalories = 0;
      this.exercises.forEach(function(exercise, index){
        totalCalories += exercise.calories_burned;
      })
      return totalCalories;
    }
  }
}());
