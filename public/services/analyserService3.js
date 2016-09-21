angular.module("app.services")

.service('analyserService3', ["audioContext", "$document", '$rootScope',
    function(audioContext, $document, $rootScope) {
        return function() {
            var analyser = audioContext.createAnalyser();
            var frequencyData = new Uint8Array(600);
            var svgHeight = 190;
            var svgWidth = 580;
            var barPadding = '.1';

            var svg = d3.select('div.svganalyserContainer3').append('svg').attr('height', svgHeight).attr('width', svgWidth);

            svg.selectAll('rect')
                .data(frequencyData)
                .enter()
                .append('rect')
                .attr('x', function(d, i) {
                    return i * (svgWidth / frequencyData.length);
                })
                .attr('width', svgWidth / frequencyData.length - barPadding);


            // Continuously loop and update chart with frequency data.
            function renderChart() {
                requestAnimationFrame(renderChart);

                // Copy frequency data to frequencyData array.
                analyser.getByteFrequencyData(frequencyData);

                // Update d3 chart with new data.
                svg.selectAll('rect')
                    .data(frequencyData)
                    .attr('y', function(d) {
                        return svgHeight - d;
                    })
                    .attr('height', function(d) {
                        return d;
                    })
                    .attr("transform", function(d, i) {
                        return "scale(" + (i / 35) * 11 + [d * 9] + ")";
                    })
                    .attr('fill', function(d, i) {
                        return d3.hsl(Math.random() * 360, 1, .5);
                    });
            }
            renderChart();
            return analyser;

        };
    }
]);
