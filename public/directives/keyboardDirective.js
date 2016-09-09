angular.module('app.directives')  .directive("keyboard", function(){
  return {
       templateUrl: './templates/keyboard.html',
       replace: true,
   };
});
