angular.module('app.directives')
    .directive('analyser', ['$window', '$timeout', 'd3Service',
        function($window, $timeout, d3Service) {
            return {
                template: '<div class="row"><div class="col-xs-3  analyserContainer"><div class="svganalyserContainer" ng-hide="optic"></div><div class="svganalyserContainer2" ng-show="optic"></div></div></div>'
            };
        }

    ]);
