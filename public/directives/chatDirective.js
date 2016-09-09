angular.module('app.directives')  .directive("socketform", function(){
  return {
       templateUrl: './templates/socketform.html',
       replace: true
   };
});
