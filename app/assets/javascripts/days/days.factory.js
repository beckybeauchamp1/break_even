"use strict";

(function(){
  angular
    .module( "days" )
    .factory( "DayFactory", [
      DayFactoryFunction
    ]);

  function DayFactoryFunction(){
    return {
      helloWorld: function(){
        console.log( "Hello world!" );
      }
    }
  }
}());
