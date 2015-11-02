mainPage = angular.module('mainPage', []).controller('MainPageController', ['$scope', '$http', function($scope, $http) {
	var controller = this;
	controller.submitBet = function() {
		$http.post('/submitBet', $scope.bet);
		refreshStatistic();
	};
	
	var refreshStatistic = function() {
		console.log("refreshing");
		$http.get('/userStat').success(function(res) {
			$scope.user = res;
		});
	}
	
	refreshStatistic()
}]);
