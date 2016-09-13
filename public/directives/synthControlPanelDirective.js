angular.module('app.directives')
.directive("controlpanel", function(){
  return {
       templateUrl: './templates/controlPanel.html',
       replace: true,
   };
});
