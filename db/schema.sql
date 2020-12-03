DROP DATABASE IF EXISTS PersonalityPupDB;

CREATE DATABASE PersonalityPupDB;

USE PersonalityPupDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(20) NOT NULL,
    quizzed BOOLEAN default false,
    personality VARCHAR(20),
    PRIMARY KEY(id)
);