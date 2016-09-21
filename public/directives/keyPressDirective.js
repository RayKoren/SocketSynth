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
