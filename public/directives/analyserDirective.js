angular.module('app.directives')
    .directive('analyser', ['$window', '$timeout', 'd3Service',
        function($window, $timeout, d3Service) {
            return {
                template: '<div class="row analyserContainer"><div class="svganalyserContainer"></div></div>'
            };
        }

    ]);
