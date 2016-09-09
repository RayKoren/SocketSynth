angular.module('app.directives')  .directive("topnav", function(){
  return {
       templateUrl: './templates/topnav.html',
       replace: true,
   };
});
