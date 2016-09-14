angular.module('socketSynth', [
      'ui.router',
      'app.directives',
      'app.controllers',
      'app.services'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
         $urlRouterProvider.otherwise('/');
         
         });
