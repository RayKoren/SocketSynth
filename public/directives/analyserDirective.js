angular.module('app.directives')
    .directive('analyser', ['$window', '$timeout', 'd3Service',
        function($window, $timeout, d3Service) {
            return {
                template: '<div class="row"><div class="col-sm-3 analyserCtrl">analyser ctrl</div><div class="col-sm-3  analyserContainer"><div class="svganalyserContainer"></div></div></div>'
            };
        }

    ]);
