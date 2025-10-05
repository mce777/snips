```
SELECT COUNT(title) FROM books;

SELECT released_year, COUNT(released_year) FROM books
GROUP BY released_year ORDER BY released_year DESC;

SELECT SUM(stock_quantity) FROM books;

SELECT AVG(released_year), author_fname, author_lname FROM books
GROUP BY author_fname, author_lname;

SELECT CONCAT(author_fname, ' ', author_lname), pages FROM books
WHERE pages = (SELECT MAX(pages) FROM books);

SELECT released_year AS year, COUNT(released_year)
     AS "# books", AVG(pages) AS "avg pages"
FROM books
GROUP BY released_year
ORDER BY released_year;
