"use strict";

(function(){
  angular
    .module( "days" )
    .factory( "DayFactory", [
      "$resource",
      DayFactoryFunction
    ]);

  function DayFactoryFunction($resource){
    console.log("yolo");
    return $resource( "http://localhost:3000/days.json" );
    }
}());
