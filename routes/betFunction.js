var Model = require('../model');

var createBet = function(req, res, next) {
	new Model.User().query({where: {username: req.user.get("username")}}).fetch().then(function(user) {
		new Model.User().query({where: {username: req.body.friend}}).fetch().then(function(friend) {
			if (friend !=  null)
				new Model.Bet({matchID: 1, creatorId: user.get("userId"), amount: req.body.amount, isActive: 0}).save().then(function(bet) {
					new Model.Request({userId: user.get("userId"), friendId: friend.get("userId"), betId: bet.get("betId"), status: 0}).save().then(function(request) {
						//console.log(request);
					});
				});
		});
	});
}

var userStat = function(req, res, next) {
	new Model.User().query({where: {username: req.user.get("username")}}).fetch().then(function(user) {
		Model.Request.where('friendId', user.get("userId")).count('userId').then(function(requests) {
			Model.Bet.where('creatorId', user.get("userId")).count('betId').then(function(bets) {
				var user = {requests: requests, bets: bets};
				res.json(user);
			});
		 });
	  });
}

module.exports.createBet = createBet;
module.exports.userStat = userStat;
