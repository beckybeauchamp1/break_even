console.log("factory")
"use strict";

(function(){
  angular
    .module( "exercises" )
    .factory( "ExerciseFactory",[
      "$resource",
      ExerciseFactoryFunction
    ]);

  function ExerciseFactoryFunction($resource){
    console.log("aksljdflkjsdf");
    return {
      $resource( "http://localhost:3000/exercises/:id" );
    }
  }
})();
