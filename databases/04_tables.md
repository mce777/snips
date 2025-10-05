## Tables
- (relational) databases are made up of lots of tables 
- columns (headers)
  - these should have a specific datatype
    - e.g. `varchar(100)`: string up to 100 characters
    - e.g. `int`
- rows: the actual data

### Creating tables:
```
CREATE TABLE cats (
    name VARCHAR(50),
    age INT
);
 
CREATE TABLE dogs (
    name VARCHAR(50),
    breed VARCHAR(50),
    age INT
);
```

### Confirming your shit worked
```
SHOW TABLES;

SHOW COLUMNS FROM cats;

DESC cats;
```

### To drop a table:

`DROP TABLE <table-name>;`

### Insert:

```
INSERT INTO cats (name, age) 
VALUES ('Jenkins', 7);
```

### SELECT (ie see if it worked):
`SELECT * FROM cats;`

### Multi-Inserts:
```
INSERT INTO cats (name, age) 
VALUES 
  ('Meatball', 5), 
  ('Turkey', 1), 
  ('Potato Face', 15);
```

### Not null
```
CREATE TABLE cats2 (
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL
);
```

### Default Values
```
CREATE TABLE cats3  (    
    name VARCHAR(20) DEFAULT 'no name provided',    
    age INT DEFAULT 99  
);
```

FYI: a `DEFAULT` value does not eliminate the need for a `NOT NULL` setting (assuming that's what you want).
```
CREATE TABLE cats4  (    
    name VARCHAR(20) NOT NULL DEFAULT 'unnamed',    
    age INT NOT NULL DEFAULT 99 
);
```

### Primary Keys
```
-- One way of specifying a PRIMARY KEY

CREATE TABLE unique_cats (
	cat_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL
);

-- Another option:

CREATE TABLE unique_cats2 (
	cat_id INT,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY (cat_id)
);
```

You don't need to specify the key yourself.<br>
Use AUTO_INCREMENT
```
CREATE TABLE unique_cats3 (
    cat_id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY (cat_id)
);
```

Another example:::
```
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    age INT NOT NULL,
    current_status VARCHAR(255) NOT NULL DEFAULT 'employed'
);
```
