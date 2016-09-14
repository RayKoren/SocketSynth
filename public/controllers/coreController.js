angular.module('app.controllers').controller('coreController', ['$scope', '$location', '$document', 'audioContext', 'oscillatorService', 'oscillator2Service', 'vcaService', 'analyserService', '$timeout', function($scope, $location, $document, audioContext, oscillatorService, oscillator2Service, vcaService, analyserService, $timeout) {
    var vco = oscillatorService();
    var vco2 = oscillator2Service();
    var vca = vcaService();
    var analyser = analyserService();

    $scope.wave = {
        value: 'square'
    };
    $scope.wave2 = {
        value: 'sawtooth'
    };
    $scope.detune = {
        value: 0
    };
    $scope.detune2 = {
        value: 0
    };
    $scope.key = {
        value: '200'
    };
    $scope.vol = {
        value: 5
    };
    $scope.min = 0;
    $scope.max = 20;


    $scope.noteStart = function() {
        vco.type = $scope.wave.value;
        vco.frequency.value = $scope.key.value;
        vco.detune.value = $scope.detune.value;
        vco2.type = $scope.wave2.value;
        vco2.frequency.value = $scope.key.value;
        vco2.detune.value = $scope.detune2.value;
        vca.gain.value = $scope.vol.value;
        /* Connections */
        vco.connect(vca);
        vco2.connect(vca);
        vca.connect(analyser);
        analyser.connect(audioContext.destination);
    };
    $scope.noteStop = function() {
        vca.gain.value = 0;

    };

}]);
