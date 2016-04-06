"use strict";

(function(){
  angular
    .module( "exercises" )
    .factory( "ExerciseFactory", [
      ExerciseFactoryFunction
    ]);

  function ExerciseFactoryFunction(){
    return {
      helloWorld: function(){
        console.log( "Hello world!" );
      }
    }
  }
}());
