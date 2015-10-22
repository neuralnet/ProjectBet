var DB = require('./db').DB;

var User = DB.Model.extend({
	tableName: 'Users',
	idAttribute: 'userId',
});

var Bet = DB.Model.extend({
	tableName: 'Bets',
	idAttribute: 'betId'
});

var Match = DB.Model.extend({
	tableName: 'Matchs',
	idAttribute: 'matchId'
});

var Request = DB.Model.extend({
	tableName: 'Requests',
	idAttribute: 'requestId'
});

var UserFriend = DB.Model.extend({
	tableName: 'UserFriendList',
});

var PlayerBet = DB.Model.extend({
	tableName: 'PlayerBetList',
});

module.exports = {
   User: User,
   Bet: Bet,
   Match: Match,
   Request: Request,
   UserFriend: UserFriend,
   PlayerBet: PlayerBet
};
