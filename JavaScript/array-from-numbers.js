const thisMany = 5
const arrayFromNumberRange = Array.from([...Array(thisMany).keys()], (x) => x + 1)

console.log(arrayFromNumberRange); // [ 1, 2, 3, 4, 5 ]
