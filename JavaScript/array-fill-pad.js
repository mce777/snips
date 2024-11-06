const baseArray = [ 0, 1, 2 ]

const newArray = [ ...new Array.from(6).fill('-'), ...baseArray ]

// [ '-', '-', '-', 1, 2, 3]
console.log(newArray)
