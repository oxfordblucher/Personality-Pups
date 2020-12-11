DROP DATABASE IF EXISTS `PersonalityPupDB`;

CREATE DATABASE `PersonalityPupDB`;

USE `PersonalityPupDB`;

CREATE TABLE users(
id int auto_increment ,
email varchar(30),
password varchar(30),
createdAt timestamp not null,
updatedAt timestamp not null,
primary key (id)
);

INSERT INTO users (email, password) VALUES ("artemishiu@gmail.com", "asdfasdf");

SELECT * FROM USERS;