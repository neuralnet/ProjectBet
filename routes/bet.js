var Model = require('../model');

	// For test
	new Model.User().query({where: {username: req.user.get("username")}}).fetch().then(function(user) {
		bet = new Model.Bet({matchID: 1, creatorId: user.get("userId"), amount: req.body.betAmount, isActive: 0});
		bet.save().then(function() {
			console.log(bet);
			console.log('Saved');
		});
	});
	res.redirect('/');
