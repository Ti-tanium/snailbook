
create table book(
    id int auto_increment primary key,
    ISBN varchar(20) not null,
    openId varchar(50) not null,
    title varchar(100) not null,
    image varchar(100),
    alt varchar(100),
    publisher varchar(100),
    summary varchar(1000),
    price varchar(100),
    average float,
    tags varchar(100),
    author varchar(100)
);
