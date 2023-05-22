DROP DATABASE IF EXISTS tweets_dev;

CREATE DATABASE tweets_dev;
\c tweets_dev;

CREATE EXTENSION pgcrypto;

CREATE TABLE users(
    id SERIAL PRIMARY key,
    email TEXT NOT NULL UNIQUE,
    username VARCHAR(60) NOT NULL,
    _at VARCHAR(60) NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE tweets(
    id SERIAL PRIMARY KEY,
    body VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    edited_at TIMESTAMP NULL DEFAULT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

-- CREATE TABLE comments(

-- );