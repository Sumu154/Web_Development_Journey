
-- 1) null/ not null
-- 2) default -> oi col er value insert na dile default value set korbe
-- 3) check -> value insert korar somoy check kore insert korbe
-- 4) primary key
-- 5) foreign key

CREATE TABLE Student( 
	Roll CHAR(4) PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(60) UNIQUE,
    Age INT CHECK(Age>10),
    Status VARCHAR(8) DEFAULT(Status='Single')
);


CREATE TABLE Student( 
	Roll CHAR(4),
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(60),
    Age INT,
    Status VARCHAR(8),
    
    constraint pk_val PRIMARY KEY(roll),
    constraint unique_val UNIQUE(Email),
    constraint check_val CHECK(Age>10)
    -- evabe dea jay na -> not null and default 
); 




INSERT INTO Student VALUES (14);   
INSERT INTO Student VALUES (20);

SELECT * FROM Student;





  
 