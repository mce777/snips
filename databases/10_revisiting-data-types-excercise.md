- Diff between CHAR and VARCHAR
  - CHAR if predictable fixed size, VARCHAR for everything else

Create table
- item_name: VARCHAR
- price: DECIMAL(7,2)
- quantity: INT
- 
```
SELECT CURDATE();
SELECT CURTIME();
```
```
SELECT DAY(CURDATE());
SELECT DAYNAME(CURDATE());
```
```
SELECT DATE_FORMAT(CURDATE(), '%m/%e/%Y');
```
```
SELECT DATE_FORMAT(NOW(), '%M %D at %k:%i');
```

```
CREATE Table tweets (
content VARCHAR(180),
username VARCHAR(50),
created_at TIMESTAMP default CURRENT_TIMESTAMP
);

INSERT INTO tweets (content, username)
VALUES ('this is my tweet', 'asdf123');

SELECT * FROM tweets;
```
