var DB = require('./db').DB;

var User = DB.Model.extend({
	tableName: 'Users',
	idAttribute: 'userId',
});

var Bet = DB.Model.extend({
	tableName: 'Bets',
	idAttribute: 'betId',
	match: function() {
		return this.belongTo(Match);
	},
	creator: function() {
		return this.belongTo(User);
	}
});

var Match = DB.Model.extend({
	tableName: 'Matchs',
	idAttribute: 'matchId'
});

var Request = DB.Model.extend({
	tableName: 'Requests',
	idAttribute: 'requestId',
	user: function() {
		return this.belongTo(User);
	},
	friend: function() {
		return this.belongTo(User);
	},
	bet: function() {
		return this.belongTo(Bet);
	}
});

var UserFriend = DB.Model.extend({
	tableName: 'UserFriendList',
	user: function() {
		return this.belongTo(User);
	},
	friend: function() {
		return this.belongTo(User);
	}
});

var UserBet = DB.Model.extend({
	tableName: 'UserBetList',
	user: function() {
		return this.belongTo(User);
	},
	bet: function() {
		return this.belongTo(Bet);
	}
});

module.exports = {
   User: User,
   Bet: Bet,
   Match: Match,
   Request: Request,
   UserFriend: UserFriend,
   UserBet: UserBet
};
