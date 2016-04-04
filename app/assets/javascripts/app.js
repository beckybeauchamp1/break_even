'use strict';

(function(){
  angular
  .module("breakEven",[
    "ui.router",
    "ngResource",
    "days",
    "exercises"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);
  function RouterFunction($stateProvider){
   $stateProvider
   .state("welcome", {
     url: "",
     templateUrl: "js/welcome.html",
     controller: "WelcomeController",
     controllerAs: "WelcomeViewModel"
   });
 }
})();
