use new_world;
SELECT Name, Population FROM country WHERE Population > '8000000';
SELECT Name FROM country WHERE Name LIKE '%land';
SELECT Name, Population FROM city WHERE Population BETWEEN '500000' AND '1000000';
SELECT Name, Continent FROM country WHERE Continent = 'Europe';
SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC;
SELECT NAME FROM city where CountryCode = 'NLD'; 
SELECT Name, Population FROM city WHERE Name = 'Rotterdam';
SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10;
SELECT Name, population FROM city ORDER BY Population DESC LIMIT 10;
SELECT sum(population) FROM country;

