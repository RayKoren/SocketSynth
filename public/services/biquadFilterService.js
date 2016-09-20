angular.module("app.services")
    .service('bqfService', ["audioContext",
        function(audioContext) {
            return function() {
                var bqf = audioContext.createBiquadFilter();
                bqf.type = "lowpass";
                bqf.Q = 100;
                bqf.frequency.value = 1000;
                bqf.gain.value = 25;
                return bqf;
            };
        }
    ]);
