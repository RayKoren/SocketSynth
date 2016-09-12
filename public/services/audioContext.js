angular.module("app.services")

.service('audioContext', function() {
  try {
  console.log('audioContext intialized!');
    return new AudioContext(); }
    catch(e) {
            alert('The Web Audio API is not supported in this browser');
        }
});
