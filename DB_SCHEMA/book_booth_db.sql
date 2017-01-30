create database if not exists book_booth_e;

create table users(id int primary key auto_increment, first_name varchar(10), last_name varchar(10), email varchar(30), password varchar(30), CONSTRAINT email_unique UNIQUE (email));

create table followers(email0 varchar(30), email1 varchar(30), FOREIGN KEY (email0) REFERENCES users(email),  FOREIGN KEY (email1) REFERENCES users(email), CONSTRAINT email_unique2 UNIQUE (email0, email1));



create table books(id int primary key auto_increment, email varchar(30), title varchar(30), author varchar(30), edition varchar(30), category varchar(30), price int, cond varchar(10), sale boolean, sold boolean, updatetime datetime,FOREIGN KEY (email) REFERENCES users(email));

create table messages(email0 varchar(30), email1 varchar(30), FOREIGN KEY (email0) REFERENCES users(email), message varchar(255) not null, senttime datetime, FOREIGN KEY (email1) REFERENCES users(email));

