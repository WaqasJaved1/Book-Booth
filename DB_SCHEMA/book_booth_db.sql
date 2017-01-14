create database if not exists book_booth;

drop table users;
create table users(id int primary key auto_increment, first_name varchar(10), last_name varchar(10), email varchar(30), password varchar(30), CONSTRAINT email_unique UNIQUE (email));

create table followers(email0 varchar(30), email1 varchar(30), FOREIGN KEY (email0) REFERENCES users(email),  FOREIGN KEY (email1) REFERENCES users(email), CONSTRAINT email_unique2 UNIQUE (email0, email1));
insert into users(first_name, last_name, email, password) value ('Waqas', 'Javed', 'jwaqas42@gmail.com', '123123');

insert into friend value('jwaqas42@gmail.com', '14bscswjaved@seecs.edu.pk');

select first_name, last_name, email from users where first_name = 'Waqas' and last_name = 'Javed';


create table books(id int primary key auto_increment, email varchar(30), title varchar(30), author varchar(30), edition varchar(30), category varchar(30), price int, cond varchar(10), sale boolean, sold boolean, updatetime datetime,FOREIGN KEY (email) REFERENCES users(email));

create table messages(email0 varchar(30), email1 varchar(30), FOREIGN KEY (email0) REFERENCES users(email), message varchar(255) not null, senttime datetime, FOREIGN KEY (email1) REFERENCES users(email));

UPDATE books SET sold=value WHERE id = value and email=value;
insert into followers value('jwaqas42@gmail.com', 'jwaqas42@gmail.com');
insert into messages value('jwaqas42@gmail.com', 'jwaqas43@gmail.com', 'hi', NOW())