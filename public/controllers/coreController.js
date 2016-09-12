angular.module('app.controllers').controller('coreController', ['$scope', '$location', '$document', 'audioContext', 'oscillatorService', 'vcaService', function($scope, $location, $document, audioContext, oscillatorService, vcaService) {
var vco = oscillatorService();
var vca = vcaService();
    $scope.noteStart = function() {
        vco.frequency.value = 200;
        vca.gain.value = 1;
        /* Connections */
        vco.connect(vca);
        vca.connect(audioContext.destination);

    };
    $scope.noteStop = function() {
      console.log("up");
      vca.gain.value =0;
    };

}]);
