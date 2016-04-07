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
    };
    this.exercises = DayFactory.exercises().$promise.then(function(exercises){
      var exercisesNames = [];
      exercises.forEach(function(ex){
        exercisesNames.push(ex.exercise_name);
      });
      return exercisesNames;
    });
    this.exercisesNames = ["Running", "Jogging", "Biking"];
  }
}());
