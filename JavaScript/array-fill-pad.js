const baseArray = [ 0, 1, 2 ]

const newArray = [ ...Array(3).fill('-'), ...baseArray ]

// [ '-', '-', '-', 1, 2, 3]
console.log(newArray)
