"use strict";

(function(){
  angular
  .module("drinks")
  .controller("DrinksIndexController", [
    "DrinksFactory",
    DrinksIndexControllerFunction
  ]);

  function DrinksIndexControllerFunction(DrinksFactory){
    this.drinks = DrinksFactory.query();
}
}());
