create database if not exists book_booth;

drop table users;
create table users(id int primary key auto_increment, first_name varchar(10), last_name varchar(10), email varchar(30), password varchar(30), CONSTRAINT email_unique UNIQUE (email));

insert into users(first_name, last_name, email, password) value ('Waqas', 'Javed', 'jwaqas42@gmail.com', '123123')