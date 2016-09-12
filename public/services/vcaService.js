angular.module("app.services")
.service('vcaService', ["audioContext", "oscillatorService",
function(audioContext) {
  return function() {
  /* VCA */
  var vca = audioContext.createGain();
  vca.gain.value = 0;
  return vca;
};
}
]);
