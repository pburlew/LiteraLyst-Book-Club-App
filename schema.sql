CREATE DATABASE bookclubs_db;

USE bookclubs_db;

CREATE TABLE clubs (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE members (
    id INT AUTO_INCREMENT,
    name
    club_id
);

CREATE TABLE book (
    id INT AUTO_INCREMENT,
    title VARCHAR()
    synopsis
    author
    genre
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT,
    book_id
    member_id
    title
    text
);

CREATE TABLE club_books (
    club_id
    book_id
    book_status
);