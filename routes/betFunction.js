var Model = require('../model');

var createBet = function(req, res, next) {
	new Model.User().query({where: {username: req.user.get("username")}}).fetch().then(function(user) {
		new Model.User().query({where: {username: req.body.friend}}).fetch().then(function(friend) {
			if (friend != null) {
				new Model.Bet({matchID: 1, creatorId: user.get("userId"), amount: req.body.amount, isActive: 0}).save().then(function(bet) {
					new Model.Request({userId: user.get("userId"), friendId: friend.get("userId"), betId: bet.get("betId"), status: 0}).save().then(function(request) {
						console.log(request);
					});
				});
			}
		});
	});
}

module.exports.createBet = createBet;
