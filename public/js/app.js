(function(){
  angular
    .module('socketSynth', [
      'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){

         $urlRouterProvider.otherwise('/');

         $stateProvider
           .state('synth',{
             url: '/',
             templateUrl: './templates/synth.html',
             controller: 'mainController'
           });
         });

})();
