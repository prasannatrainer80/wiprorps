use wipro;

drop table if exists login;

create table Login
(
   username varchar(30) Primary Key,
   passcode varchar(30) NOT NULL
);

Insert into Login values('Hitasree','Hitasree'),
('Sunil','Sunil'),('Amarnath','Amarnath');