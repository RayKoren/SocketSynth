angular.module("app.services").factory('chatSocket', ['socketFactory', function(socketFactory){
	return socketFactory();
}]);
