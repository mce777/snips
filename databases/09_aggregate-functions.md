## Aggregate Functions

#### COUNT
```
SELECT COUNT(*) FROM books;
 
SELECT COUNT(author_lname) FROM books;
 
SELECT COUNT(DISTINCT author_lname) FROM books;
```

#### GROUP BY
```
SELECT author_lname, COUNT(*) 
FROM books
GROUP BY author_lname;
 
SELECT 
    author_lname, COUNT(*) AS books_written
FROM
    books
GROUP BY author_lname
ORDER BY books_written DESC;
```

#### MIN MAX
```
SELECT MAX(pages) FROM books;
 
SELECT MIN(author_lname) FROM books;

SELECT title, pages FROM books
-- check it out, a sub-query !
WHERE pages = (SELECT MAX(pages) FROM books);
 
SELECT MIN(released_year) FROM books;
 
SELECT title, released_year FROM books
-- check it out, a sub-query ! 
WHERE released_year = (SELECT MIN(released_year) FROM books);
```

#### GROUP BY, part 2: Grouping by multiple columns
```
SELECT author_fname, author_lname, COUNT(*) 
FROM books 
GROUP BY author_lname, author_fname; 
 
SELECT CONCAT(author_fname, ' ', author_lname) AS author,  COUNT(*)
FROM books
GROUP BY author;
```

#### MIN MAX with GROUP BY
```
SELECT author_lname, MIN(released_year) FROM books GROUP BY author_lname;
 
SELECT author_lname, MAX(released_year), MIN(released_year) FROM books GROUP BY author_lname;
 
SELECT 
     author_lname, 
     COUNT(*) as books_written, 
     MAX(released_year) AS latest_release,
     MIN(released_year)  AS earliest_release,
     MAX(pages) AS longest_page_count
FROM books GROUP BY author_lname;
 
 
SELECT 
     author_lname, 
     author_fname,
     COUNT(*) as books_written, 
     MAX(released_year) AS latest_release,
     MIN(released_year)  AS earliest_release
FROM books GROUP BY author_lname, author_fname;
```

#### SUM
```
-- needs to be numbers (SUM on strings returns 0)
SELECT SUM(pages) FROM books;

SELECT author_lname, COUNT(*), SUM(pages)
FROM books
GROUP BY author_lname;
```

#### AVG
```
SELECT AVG(pages) FROM books;
 
SELECT AVG(released_year) FROM books;
 
SELECT 
    released_year, 
    AVG(stock_quantity), 
    COUNT(*) FROM books
GROUP BY released_year;
```
