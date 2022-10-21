.headers on
.mode column 

create table data_type(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "String" varchar(50),
    "Integer" INTEGER,
    "Float" FLOAT,
    "Date" DATE,
    "Boolean" BOOLEAN
);

INSERT INTO
    data_type("String", "Integer", "Float", "Date", "Boolean")
VALUES
    ('super', '14','1.3','1993-03-11', 'False'),
    ('boruto', '19', '7.8.', '2024-02-05', 'False'),
    ('one two', '17', '6.4', '2017-12-11', 'False'),
    ('wind1', '12','1.3','2022-05-08', 'True'),
    ('wind2', '12','1.3','1906-03-11', 'True'),
    ('wind3', '15', '3.6', '2007-11-04', 'True'),
    ('what two', '73', '1.1', '2013-05-04', 'False'),
    ('tast string', '92', '1.2', '1990-07-13', 'True'),
    ('waduh', '15', '2.5', '2011-06-16', 'False'),
    ('what', '99', '2.4', '2014-05-18', 'True'),
    ('wadaw', '80','1.3','2015-04-19', 'False');