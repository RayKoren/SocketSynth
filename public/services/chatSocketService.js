angular.module("app.services").factory('chatSocket', ['socketFactory', function(socketFactory){
	var socket = socketFactory();

	socket.forward('broadcast');

	return socket;
}]);
