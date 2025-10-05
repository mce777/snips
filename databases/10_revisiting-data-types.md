## Revisiting Data Types

#### CHAR vs VARCHAR
- `CHAR` if you have a fixed size (e.g. state abbreviations)
  - Better memory management
- Otherwise, just use `VARCHAR`

#### TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT
<table>
<colgroup>
<col style="width: 16%"><col style="width: 16%"><col style="width: 16%">
<col style="width: 16%"><col style="width: 16%"><col style="width: 16%">
</colgroup>
<thead>
<tr>
    <th scope="col">Type</th>
    <th scope="col">Storage (Bytes)</th>
    <th scope="col">Minimum Value Signed</th>
    <th scope="col">Minimum Value Unsigned</th>
    <th scope="col">Maximum Value Signed</th>
    <th scope="col">Maximum Value Unsigned</th>
</tr>
</thead>
<tbody><tr>
            <th scope="row"><code class="literal">TINYINT</code></th>
            <td>1</td>
            <td><code class="literal">-128</code></td>
            <td><code class="literal">0</code></td>
            <td><code class="literal">127</code></td>
            <td><code class="literal">255</code></td>
          </tr><tr>
            <th scope="row"><code class="literal">SMALLINT</code></th>
            <td>2</td>
            <td><code class="literal">-32768</code></td>
            <td><code class="literal">0</code></td>
            <td><code class="literal">32767</code></td>
            <td><code class="literal">65535</code></td>
          </tr><tr>
            <th scope="row"><code class="literal">MEDIUMINT</code></th>
            <td>3</td>
            <td><code class="literal">-8388608</code></td>
            <td><code class="literal">0</code></td>
            <td><code class="literal">8388607</code></td>
            <td><code class="literal">16777215</code></td>
          </tr><tr>
            <th scope="row"><code class="literal">INT</code></th>
            <td>4</td>
            <td><code class="literal">-2147483648</code></td>
            <td><code class="literal">0</code></td>
            <td><code class="literal">2147483647</code></td>
            <td><code class="literal">4294967295</code></td>
          </tr><tr>
            <th scope="row"><code class="literal">BIGINT</code></th>
            <td>8</td>
            <td><code class="literal">-2<sup>63</sup></code></td>
            <td><code class="literal">0</code></td>
            <td><code class="literal">2<sup>63</sup>-1</code></td>
            <td><code class="literal">2<sup>64</sup>-1</code></td>
          </tr>
  </tbody>
</table>


#### DECIMAL
- `DECIMAL(5,2)`: means 5 total numbers, 2 of which can be after decimal
  - `100.24` is valid, but something like `1001.2` is not
  - `100.236` will be truncated to `100.24`

#### FLOAT and DOUBLE
- FLOAT accurate to 7 digits after the decimal
- DOUBLE accurate to 15 digits after the decimal
  - Both take up less memory than a DECIMAL, but at the cost of precision

#### DATE and TIME
```
CREATE TABLE people (
    name VARCHAR(100),
    birthdate DATE,
    birthtime TIME,
    birthdt DATETIME
);
 
INSERT INTO people (name, birthdate, birthtime, birthdt)
VALUES ('Elton', '2000-12-25', '11:00:00', '2000-12-25 11:00:00');
 
INSERT INTO people (name, birthdate, birthtime, birthdt)
VALUES ('Lulu', '1985-04-11', '9:45:10', '1985-04-11 9:45:10');
 
INSERT INTO people (name, birthdate, birthtime, birthdt)
VALUES ('Juan', '2020-08-15', '23:59:00', '2020-08-15 23:59:00');
```

#### CURTIME, CURDATE, NOW
```
SELECT CURTIME();
 
SELECT CURDATE();
 
SELECT NOW();
 
INSERT INTO people (name, birthdate, birthtime, birthdt)
VALUES ('Hazel', CURDATE(), CURTIME(), NOW());
```

#### Date functions
```
SELECT 
    birthdate,
    DAY(birthdate),
    DAYOFWEEK(birthdate),
    DAYOFYEAR(birthdate)
FROM people;
 
SELECT 
    birthdate,
    MONTHNAME(birthdate),
    YEAR(birthdate)
FROM people;
```

#### Time functions
```
SELECT 
    birthtime,
    HOUR(birthtime),
    MINUTE(birthtime)
FROM people;
 
SELECT 
    birthdt,
    MONTH(birthdt),
    DAY(birthdt),
    HOUR(birthdt),
    MINUTE(birthdt)
FROM people;
```

#### DATE_FORMAT function
- see: https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html 
  - because no one can remember all that shit

```
SELECT birthdate, DATE_FORMAT(birthdate, '%a %b %D') FROM people;
 
SELECT birthdt, DATE_FORMAT(birthdt, '%H:%i') FROM people;
 
SELECT birthdt, DATE_FORMAT(birthdt, 'BORN ON: %r') FROM people;
```

#### DATETIME and TIMESTAMP
The DATETIME type is used for values that contain both date and time parts. MySQL retrieves and displays DATETIME values in 'YYYY-MM-DD hh:mm:ss' format. The supported range is '1000-01-01 00:00:00' to '9999-12-31 23:59:59'.

The TIMESTAMP data type is used for values that contain both date and time parts. TIMESTAMP has a range of '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC.

#### TIMESTAMP
```
CREATE TABLE captions (
  text VARCHAR(150),
  created_at TIMESTAMP default CURRENT_TIMESTAMP
);
 
CREATE TABLE captions2 (
  text VARCHAR(150),
  created_at TIMESTAMP default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```
