angular.module("app.services")
    .service('oscillatorService', ["audioContext",
        function(audioContext) {
            return function() {
                var vco = audioContext.createOscillator();
                // vco.type = vco.SINE;
                vco.frequency.value = 200;
                vco.type = "sine";
                vco.start(0);

                return vco;

            };

        }

    ]);
