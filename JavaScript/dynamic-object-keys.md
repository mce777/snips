### How to create an object with dynamic keys in JavaScript
source: https://attacomsian.com/blog/javascript-create-object-with-dynamic-keys

To create an object with dynamic keys in JavaScript, you can use ES6's computed property names feature.

The `computed property names` feature allows us to assign an expression as the property name to an object within object literal notation.

Here is an example:
```js
const key = 'title';
const value = 'JavaScript';

const course = {
    [key]: value,
    price: '$99'
};

console.log(course.title);  // JavaScript
console.log(course.price);  // $99
```
The value of the key can be *ANY* expression as long as it is wrapped in brackets []:
```js
const key = 'title';
const value = 'JavaScript';

// some string interpolation is also possible here
const course = {
[key + '2']: value,
price: '$99'
};

console.log(course.title2);  // JavaScript
console.log(course.price);  // $99 
```
