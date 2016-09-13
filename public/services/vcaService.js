angular.module("app.services")
    .service('vcaService', ["audioContext",
        function(audioContext) {
            return function() {
                var vca = audioContext.createGain();
                vca.gain.value = 0;
                return vca;
            };
        }
    ]);
  
