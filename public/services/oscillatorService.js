angular.module("app.services")
    .service('oscillatorService', ["audioContext",
        function(audioContext) {
            return function() {
                var vco = audioContext.createOscillator();
                vco.type = 'square';
                vco.start(0);
                return vco;
            };

        }

    ]);
