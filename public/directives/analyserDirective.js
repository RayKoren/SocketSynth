angular.module('app.directives')
    .directive('analyser', ['$window', '$timeout', 'd3Service',
        function($window, $timeout, d3Service) {
            return {
                template: '<div class="row"><div class="col-xs-12  analyserContainer"><div class="svganalyserContainer" ng-hide="!freqBars"></div><div class="svganalyserContainer2" ng-hide="!optic"><g transform="translate(480,480)"></g></div><div class="svganalyserContainer3" ng-hide="!o2"><g transform="translate(480,480)"></g></div></div><div class="col-xs-12 titleContainer hidden-sm hidden-xs text-center"><h1>Socket Synth</h1><h2>sound generator audio visualizer</h2></div></div>'
            };
        }

    ]);
