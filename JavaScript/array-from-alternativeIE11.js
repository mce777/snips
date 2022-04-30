// Array.from() is nice
// The Array.from() method creates a new Array instance from an array-like or iterable object

const arr = Array.from(exampleData);

// but of course IE11 can't handle it so here's an alternative that does the same thing
responseArray = Object.keys(response.dienstleister).map((_) => { return response.dienstleister[_]; });

// or add a polyfill
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
