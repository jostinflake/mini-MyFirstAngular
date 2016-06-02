angular.module('friendsList').controller('mainCtrl', function($scope){

	$scope.friends = ['ryan', 'scott', 'zane', 'adam', 'jon', 'mckay', 'lindsey'];

	$scope.addFriend = function() {

		$scope.friends.push($scope.friendname);
		$scope.friendname = '';
	};


});