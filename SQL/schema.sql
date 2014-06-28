CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT(7) NOT NULL AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  time DATETIME NOT NULL,
  id_users INT(7) NOT NULL,
  id_chatrooms INT(7) NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT(7) NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE chatrooms (
  id INT(7) NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE friends (
  id INT(7) NOT NULL AUTO_INCREMENT,
  id_friender INT(7) NOT NULL,
  id_friendee INT(7) NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/
