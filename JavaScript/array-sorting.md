### Alphabetic sorting (array of objects)

```js
// sort alphabetically
anArrayOfObjects.sort((a, b) => a.firstname.localeCompare(b.firstname))

// the opposite (DESC) way
users.sort((a, b) => -1 * a.firstname.localeCompare(b.firstname))
```
https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

### Numeric Sorting
```js
const exampleArray = [2,3,1,9,4]

const sort1 = exampleArray.sort()
console.log('a simlple sort:::', sort1) // this is ok if you have 1 digit ints

// but since sort() sorts alphabetically, the following array will be fucked up
const notNiceArray = [1, 14, 8, 4, 17]
const fuckedUpSort = notNiceArray.sort()
console.log('see how fucked up it is:::', fuckedUpSort)

// but you can use a simple sort function to make it work
const sort2 = notNiceArray.sort((a,b) => a-b)
console.log('there, we fixed it:::', sort2)
```
