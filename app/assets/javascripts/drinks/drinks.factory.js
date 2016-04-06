"use strict";

(function(){
  angular
    .module( "drinks" )
    .factory( "DrinkFactory", [
      "$resource",
      DrinkFactoryFunction
    ]);

  function DrinkFactoryFunction($resource){
    console.log("drinksworkng");
    return $resource( "http://localhost:3000/drinks/:id.json" );
    }
}());
