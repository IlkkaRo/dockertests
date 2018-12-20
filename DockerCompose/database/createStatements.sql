create table person(
  personID integer not null primary key,
  firstname varchar(20) not null,
  lastname varchar(30) not null,
  department varchar(15),
  salary decimal(6,2)
);

insert into person values (1,'Leia','Organa','princess',5000),
                          (2,'Indiana','Jones','professor',7000);
