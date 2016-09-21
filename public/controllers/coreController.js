angular.module('app.controllers').controller('coreController', ['$scope', '$element', '$location', '$document', 'audioContext', 'oscillatorService', 'oscillator2Service', 'vcaService', 'analyserService', 'analyserService2', '$timeout', 'bqfService', 'chatSocket', function($scope, $element, $location, $document, audioContext, oscillatorService, oscillator2Service, vcaService, analyserService, analyserService2, $timeout, bqfService, chatSocket) {
    var vco = oscillatorService();
    var vco2 = oscillator2Service();
    var vca = vcaService();
    var analyser = analyserService();
    var analyser2 = analyserService2();
    var bqf = bqfService();
    // socket chat //
    $scope.messages = [];

    chatSocket.on('message', function(data, $event) {
        noteStop();
        $scope.messages.push(data.message);
        var keyCode = data.message.toUpperCase().charCodeAt(0);
        $scope.keyPress(keyCode);
    });

    $scope.sendMessage = function() {
        chatSocket.emit('send:message', {
            message: $scope.message
        });
        $scope.messages.push({
            text: $scope.message
        });
        //  $scope.message = '';
    };
    chatSocket.on('noteOff', function(data) {
        noteStop();
    });




    // switch visual div //
    $scope.switch = function(aType) {
        if (aType == 'freqBars') {
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
    $scope.filterFreq = 487;
    $scope.filterQ = 800;
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
        // var x = getRand();
        var x;
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
            case 83:
                x = 138.59;
                break;
            case 68:
                x = 155.56;
                break;
            case 71:
                x = 185;
                break;
            case 72:
                x = 207.65;
                break;
            case 74:
                x = 233.08;
                break;
            case 50:
                x = 277.18;
                break;
            case 51:
                x = 311.13;
                break;
            case 53:
                x = 369.99;
                break;
            case 55:
                x = 369.99;
                break;
            case 56:
                x = 415.3;
                break;
            case 57:
                x = 466.16;
                break;
        }
        bqf.Q = $scope.filterQ;
        bqf.frequency.value = $scope.filterFreq;
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
        bqf.Q = $scope.filterQ;
        bqf.frequency.value = $scope.filterFreq;
        vco.type = $scope.wave.value;
        vco.frequency.value = $scope.key.value;
        vco.detune.value = $scope.detune.value;
        vco2.type = $scope.wave2.value;
        vco2.frequency.value = $scope.key.value;
        vco2.detune.value = $scope.detune2.value;
        vca.gain.value = $scope.vol.value;
        console.log($scope.filterQ.value);
    };
    /* Connections */
    vco.connect(vca);
    vco2.connect(vca);
    vca.connect(bqf);
    vca.connect(bqf);
    bqf.connect(analyser);
    bqf.connect(analyser2);
    analyser.connect(audioContext.destination);
    analyser2.connect(audioContext.destination);


    // Note Stops

    function noteStop() {
        vca.gain.value = 0;
    }
    $scope.noteStop = function() {
        vca.gain.value = 0;
        chatSocket.emit('noteOff');
    };
    $scope.keyOff = function() {
        noteStop();
    };

    // Filter Section //
    angular.element(document).ready(function () {
    $(function() {
        $(".dial").dial({
            'min': -200,
            'max': 200,
            'width': 50,
            'height': 50,
            'color': "#00CCFF",
            change: function(value) {
                $scope.detune2.value = value;
                $scope.$apply();
                console.log(value);
            }
        });
    });



        $(function() {
            $(".dial2").dial({
                'min': -200,
                'max': 200,
                'width': 50,
                'height': 50,
                'color': "#FFCC00",
                change: function(value) {
                    $scope.detune.value = value;
                    $scope.$apply();
                    console.log(value);
                }
            });
        });
        $(function() {
            $(".pad")
                .xy({
                    displayPrevious: true,
                    min: 10,
                    max: 2000,
                    fgColor: "#222222",
                    bgColor: "#555555",
                    change: function(value) {
                        $scope.filterQ = value["1"];
                        $scope.filterFreq = value["0"];
                        $scope.$apply();
                    }
                });

        });
    });


}]);
