angular.module("app.services")
    .service('oscillator2Service', ["audioContext",
        function(audioContext) {
            return function() {
                var vco2 = audioContext.createOscillator();
                
                vco2.start(0);
                return vco2;
            };

        }

    ]);
