console.log("controller")
"use strict";

(function(){
  angular
  .module("exercises")
  .controller("ExerciseIndexController",[
    "ExerciseFactory",
    ExerciseIndexControllerFunction
  ]);

  function ExerciseIndexControllerFunction(ExerciseFactory){
    console.log("Hi We did it!")
      this.exercises = ExerciseFactory.query();
  }
})();
