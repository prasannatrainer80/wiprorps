drop database if exists wipro;

create database wipro;

use Wipro;

Drop Table If Exists Employ;

Create Table Employ
(
    Empno INT, 
    Name varchar(30) NOT NULL,
    Gender ENUM('MALE','FEMALE'),
    Dept varchar(30),
	Desig varchar(30),
    Basic Numeric(9,2),
    constraint pk_emp_empno primary key(empno)
);

Insert into Employ(Empno,Name,Gender,Dept,Desig,Basic)
values(1,'Atchaya','FEMALE','Java','Programmer',99522),
(2,'Devadarshan','MALE','Angular','Expert',88113),
(3,'Navin','MALE','Java','Manager',99922),
(4,'Bawin','MALE','React','Programmer',92343),
(5,'Mega','FEMALE','Angular','Expert',91134),
(6,'Balu','MALE','Java','Expert',92234)
