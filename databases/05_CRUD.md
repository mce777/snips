## CRUD

### SELECT
```
-- To get all the columns:
SELECT * FROM cats;

-- To only get the age column:
SELECT age FROM cats;

-- To select multiple specific columns:
SELECT name, breed FROM cats;
```

### SELECT WHERE
```
SELECT * FROM cats WHERE age = 4;    
SELECT * FROM cats WHERE name ='Egg';
```

### AS aliasing
```
-- Use 'AS' to alias a column in your results (it doesn't actually change the name of the column in the table)

SELECT cat_id AS id, name FROM cats;
```

### UPDATE
A `WHERE` isn't technically required, but you're probably gonna want to use it for real-life use-cases.
```
-- notice string cols in quotes, ints without

UPDATE cats SET age=14 WHERE name='Misty';
UPDATE cats SET breed='British Shorthair' WHERE name='Ringo'; 
```

### DELETE
```
-- Delete all cats with name of 'Egg':

DELETE FROM cats WHERE name='Egg';

-- Delete all rows in the cats table:

DELETE FROM cats;
```
