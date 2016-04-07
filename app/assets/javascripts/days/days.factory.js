"use strict";

(function(){
  angular
  .module( "days" )
  .factory( "DayFactory", [
    "$resource",
    DayFactoryFunction
  ]);

  function DayFactoryFunction($resource){
    return $resource( "http://localhost:3000/days.json" , {}, {
      update: {
        method: "PUT"
      },
      exercises: {
        method: "GET",
        url: "http://localhost:3000/exercises.json",
        isArray: true
      }
    });
  }

}());
