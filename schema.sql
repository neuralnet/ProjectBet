DROP database IF EXISTS dbBet;
CREATE database dbBet;

USE dbBet;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users(
   userId VARCHAR(255) NOT NULL PRIMARY KEY,
   username VARCHAR(255) UNIQUE,
   password VARCHAR(255),
   balance DOUBLE
)engine=innodb;

DROP TABLE IF EXISTS Matchs;
CREATE TABLE Matchs(
	matchId VARCHAR(255) NOT NULL PRIMARY KEY,
	matchType INT,
	description VARCHAR(255),
	duration DATETIME,
	due DATETIME
)engine=innodb;

DROP TABLE IF EXISTS Bets;
CREATE TABLE Bets(
	betId VARCHAR(255) NOT NULL PRIMARY KEY,
	matchId VARCHAR(255),
	amount DOUBLE,
	totalPlayers INT,
	isActive INT,
	dueTime DATETIME, 
	/* 
		Due for bet not for the actual match, for exp. beting end 5mins before match starts, 
		may group within a config.xml later.
	*/
	FOREIGN KEY (matchId)
		REFERENCES Matchs(matchId)
		ON UPDATE CASCADE
)engine=innodb;

DROP TABLE IF EXISTS PlayerBetList;
CREATE TABLE PlayerBetList(
	userId VARCHAR(255) NOT NULL,
	betId VARCHAR(255) NOT NULL,
	FOREIGN KEY (userId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE,
	FOREIGN KEY (betId)
		REFERENCES Bets(betId)
		ON UPDATE CASCADE
)engine=innodb;

DROP TABLE IF EXISTS UserFriendList;
CREATE TABLE UserFriendList(
	userId VARCHAR(255) NOT NULL,
	friendId VARCHAR(255) NOT NULL,
	FOREIGN KEY (userId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE,
	FOREIGN KEY (friendId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE
)engine=innodb;

DROP TABLE IF EXISTS RequestList;
CREATE TABLE RequestList(
	userId VARCHAR(255) NOT NULL,
	friendId VARCHAR(255) NOT NULL,
	betId VARCHAR(255) NOT NULL,
	status INT,	/* 0: Pending, 1: Accepted, 2: Refused */
	FOREIGN KEY (userId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE,
	FOREIGN KEY (friendId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE
	FOREIGN KEY (betId)
		REFERENCES Bets(userId)
		ON UPDATE CASCADE
)engine=innodb;
