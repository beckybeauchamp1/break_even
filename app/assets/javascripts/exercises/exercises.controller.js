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
    var vm = this;
    this.exercises = ExerciseFactory.query();
    this.days = DayFactory.query();
    this.totalCalories = 0
    // function() {
    //   var totalCalories = 0;
    //   this.exercises.forEach(function(exercise, index){
    //     totalCalories += exercise.calories_burned;
    //   })
    //   return totalCalories;
    // }
    this.change = function(calories){
      vm.totalCalories += calories
      console.log("it'll be okay. I'm here")
      console.log(calories)
    }
    this.beers = [{name: 'Natty Boh', calories: 135}, {name: "Troegs", calories: 250},{name: "Yuengling", calories: 128},{name: "PBR", calories: 144},{name: "Guinness", calories: 125},{name: "Vodka Water w/ three lemons tall", calories: 96}]
  }
}());
