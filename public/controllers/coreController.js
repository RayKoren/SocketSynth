angular.module('app.controllers').controller('coreController', ['$scope', '$location', '$document', 'audioContext', 'oscillatorService', 'vcaService', function($scope, $location, $document, audioContext, oscillatorService, vcaService) {
    var vco = oscillatorService();
    var vca = vcaService();
    $scope.wave = {
        value: 'square'
    };
    $scope.key = {
        value: '200'
    };
    $scope.vol = {
        value: 5
    };
    $scope.min = 0;
    $scope.max = 10;


    $scope.noteStart = function() {
        vco.type = $scope.wave.value;
        vco.frequency.value = $scope.key.value;
        vca.gain.value = $scope.vol.value;
        /* Connections */
        vco.connect(vca);
        vca.connect(audioContext.destination);

    };
    $scope.noteStop = function() {
        vca.gain.value = 0;
    };

}]);
