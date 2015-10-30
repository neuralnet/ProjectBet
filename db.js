var knex = require('knex')({
	client: 'mysql',
	connection: {
		host: 'localhost',  // your host
		user: 'root', // your database user
		password: '1234', // your database password
		database: 'dbBet',
		charset: 'UTF8_GENERAL_CI'
	}
});

var DB = require('bookshelf')(knex);

module.exports.DB = DB;
