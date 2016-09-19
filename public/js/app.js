angular.module('socketSynth', [
      'ui.router',
      'ngRoute',
      'app.directives',
      'app.controllers',
      'app.services',
      'btford.socket-io'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
         $urlRouterProvider.otherwise('/');

         });
