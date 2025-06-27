-- Active: 1747739130417@@127.0.0.1@5432@Basic_tutorial
CREATE TABLE student (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);

INSERT INTO student VALUES 
(1, 'Sumaiya', 21),
(2, 'Rohan', 22),
(3, 'Lamia', 21);


-- a piece of different table create holo,,and we can use it later
CREATE VIEW students_age_21 AS
SELECT id, name
FROM student
WHERE age = 21;


SELECT * FROM students_age_21;

DROP TABLE student;