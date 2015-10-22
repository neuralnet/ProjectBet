DROP database IF EXISTS dbBet;
CREATE database dbBet;

USE dbBet;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users(
   userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   username VARCHAR(255) UNIQUE,
   password VARCHAR(255),
   balance DOUBLE
)engine=innodb;

DROP TABLE IF EXISTS Matchs;
CREATE TABLE Matchs(
	matchId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	matchType INT,
	description VARCHAR(255),
	duration DATETIME,
	due DATETIME
)engine=innodb;

DROP TABLE IF EXISTS Bets;
CREATE TABLE Bets(
	betId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	creatorId INT,
	matchId INT,
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
		ON UPDATE CASCADE,
	FOREIGN KEY (creatorId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE
)engine=innodb;

DROP TABLE IF EXISTS UserBetList;
CREATE TABLE UserBetList(
	userId INT NOT NULL,
	betId INT NOT NULL,
	FOREIGN KEY (userId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE,
	FOREIGN KEY (betId)
		REFERENCES Bets(betId)
		ON UPDATE CASCADE
)engine=innodb;

DROP TABLE IF EXISTS UserFriendList;
CREATE TABLE UserFriendList(
	userId INT NOT NULL,
	friendId INT NOT NULL,
	FOREIGN KEY (userId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE,
	FOREIGN KEY (friendId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE
)engine=innodb;

DROP TABLE IF EXISTS Requests;
CREATE TABLE Requests(
	requestId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	userId INT NOT NULL,
	friendId INT NOT NULL,
	betId INT NOT NULL,
	status INT,	/* 0: Pending, 1: Accepted, 2: Refused */
	FOREIGN KEY (userId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE,
	FOREIGN KEY (friendId)
		REFERENCES Users(userId)
		ON UPDATE CASCADE,
	FOREIGN KEY (betId)
		REFERENCES Bets(betId)
		ON UPDATE CASCADE
)engine=innodb;

/* POPULATE */
INSERT INTO Matchs VALUES(1, 1, 'Vietname vs. Thailand', Null, Null);
INSERT INTO Users VALUE(1, 'gothdn', '$2a$10$zPRmgO8dXtN5XVgaLAgk4uIF2K0NVyf5DkIrc1qRxkwRhCU.iviVO', 0);
INSERT INTO Users VALUE(20, 'testuser', '$2a$10$ktzR0fT33BCswO4ggVj4yu3eCsNwgTCCu4GKzO05yZTXxhmWeCLR.', 0);
