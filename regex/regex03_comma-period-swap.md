`^(\d+),(\d)`

// 21,5 becomes 21.5

Or in JavaScript like this:

```js
var tt="88,9827";
tt = tt.replace(/,/g, '.')
```