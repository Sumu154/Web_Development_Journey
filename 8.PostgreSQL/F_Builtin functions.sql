-- upper -> uppercase all, lower -> lowercase all
SELECT upper('Abc'), lower('Abc');
SELECT abs(-5);

-- angle related 
SELECT degrees(45), radians(45);

-- cos, sin, tan er jonne same
SELECT cos(45), cos(RADIANS(45));
SELECT acos(1);    -- radian e angle dibe

SELECT ceil(3.4), floor(3.4);
SELECT exp(4);
SELECT ln(10), log(10), log10(10), log2(10);

SELECT greatest(3, 1, 4, 7), least(3, 1, 4, 7);

SELECT 5 MOD 2, 4 DIV 2;
SELECT  pow(5,2),  sqrt(25);
SELECT round(4.67), truncate(4.67);

SELECT rand(), pi();

