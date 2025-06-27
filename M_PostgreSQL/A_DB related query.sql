-- Active: 1747739130417@@127.0.0.1@5432@Basic_tutorial

CREATE TABLE student(
id INT,
name VARCHAR(50),
age INT NOT NULL,
CONSTRAINT PK_student PRIMARY KEY (id)
);

INSERT INTO student VALUES(1, 'sumaiya', 21);
INSERT INTO student VALUES(2, 'rohan', 21);

SELECT * FROM student;
 
 -- drop -> all delete with table structure
 -- truncate -> tabler value delete kintu table structure thakbe
 DROP TABLE student;
 
 
  
 


