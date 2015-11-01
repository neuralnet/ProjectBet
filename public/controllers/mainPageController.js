mainPage = angular.module('mainPage', []).controller('MainPageController', ['$scope', '$http', function($scope, $http) {
	var controller = this;
	controller.submitBet = function() {
		$http.post('/makeBet', $scope.bet);
	};
}]);
	  
