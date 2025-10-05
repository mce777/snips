const obj = { d: 19 };
const object1 = { a: 1, b: 2, c: 3 };

// creates a clone
// note the target is a new object
const copy = Object.assign({}, obj, object1);

const anotherCopy = {...obj, ...object1}

console.log('copy::',copy)
console.log('another copy::', anotherCopy)
