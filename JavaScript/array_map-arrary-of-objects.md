## Mapping over an array of objects, then joining/combining the array results

```js
const errors2 = [ {code: 123, message: 'hello'}, {code: 124, message: 'goodbye'}]

// with 'join' you combine, with that param you determine with what they're separated
// in the example below, with a comma + space
const result = errors2.map(err => err.message).join(', ') // hello, goodbye

console.log(result)
```
