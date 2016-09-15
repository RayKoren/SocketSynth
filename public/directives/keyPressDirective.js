angular.module('app.directives')
.directive('hnEnterKey', function() {
    return function(scope, element, attrs) {
        $scope.bind("keydown keypress", function(event) {
            var keyCode = event.which || event.keyCode;
            console.log(keyCode);

                event.preventDefault();
            }
        });
    };
});
//
// function isNavigationKeycode(keyCode) {
//     switch (keyCode) {
//         case 8: //backspace
//         case 35: //end
//         case 36: //home
//         case 37: //left
//         case 38: //up
//         case 39: //right
//         case 40: //down
//         case 45: //ins
//         case 46: //del
//             return true;
//         default:
//             return false;
//     }
// }
// });
