angular.module('app.controllers').controller('coreController', ['$scope', '$element', '$location', '$document', 'audioContext', 'oscillatorService', 'oscillator2Service', 'vcaService', 'analyserService', 'analyserService2', '$timeout', function($scope, $element, $location, $document, audioContext, oscillatorService, oscillator2Service, vcaService, analyserService, analyserService2, $timeout) {
    var vco = oscillatorService();
    var vco2 = oscillator2Service();
    var vca = vcaService();
    var analyser = analyserService();
    var analyser2 = analyserService2();


    /* Connections */
    vco.connect(vca);
    vco2.connect(vca);
    vca.connect(analyser);
    vca.connect(analyser2);
    analyser.connect(audioContext.destination);
    analyser2.connect(audioContext.destination);


    $scope.switch = function(aType){
      if (aType == 'freqBars' ){
        $scope.optic = false;
      } else {
        $scope.optic = true;
      }
    };


    $scope.wave = {
        value: 'square'
    };
    $scope.wave2 = {
        value: 'sawtooth'
    };
    $scope.detune = {
        value: -18.2
    };
    $scope.detune2 = {
        value: -11.2
    };
    $scope.key = {
        value: '200'
    };
    $scope.vol = {
        value: 5
    };
    $scope.min = 0;
    $scope.max = 20;
    $scope.vis = {
        value: 'freqBars'
    };

    function getRand(min, max) {
        min = Math.ceil(440);
        max = Math.floor(220);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
// Map Keyboard to Synth Keys and Play
    $scope.keyPress = function(keyCode) {
        var x = getRand();
        switch (keyCode) {
            case 90:
                x = 130.81;
                break;
            case 88:
                x = 146.83;
                break;
            case 67:
                x = 164.81;
                break;
            case 86:
                x = 174.61;
                break;
            case 66:
                x = 196;
                break;
            case 78:
                x = 220;
                break;
            case 77:
                x = 246.94;
                break;
            case 188:
                x = 261.63;
                break;
            case 81:
                x = 261.63;
                break;
            case 87:
                x = 293.66;
                break;
            case 69:
                x = 329.63;
                break;
            case 82:
                x = 349.23;
                break;
            case 85:
                x = 392;
                break;
            case 73:
                x = 440;
                break;
            case 79:
                x = 493.88;
                break;
            case 80:
                x = 523.25;
                break;
        }
        vco.type = $scope.wave.value;
        vco.frequency.value = x;
        vco.detune.value = $scope.detune.value;
        vco2.type = $scope.wave2.value;
        vco2.frequency.value = x;
        vco2.detune.value = $scope.detune2.value;
        vca.gain.value = $scope.vol.value;
    };

// Click To Play Note

    $scope.noteStart = function() {
        vco.type = $scope.wave.value;
        vco.frequency.value = $scope.key.value;
        vco.detune.value = $scope.detune.value;
        vco2.type = $scope.wave2.value;
        vco2.frequency.value = $scope.key.value;
        vco2.detune.value = $scope.detune2.value;
        vca.gain.value = $scope.vol.value;

    };
// Note Stops
    function noteStop() {
        vca.gain.value = 0;
    }

    $scope.noteStop = function() {
        vca.gain.value = 0;
    };
    $scope.keyOff = function() {
        noteStop();
    };
}]);
