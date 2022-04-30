const sampleObject = { name: 'Bob', id: 2 }

// how you'd usually do it
console.log(sampleObject.name) // 'Bob'

// but sometimes you'll want to reference via string
const keyString = 'name'

// 'sampleObject.keyString' won't work
// but this will...
console.log(sampleObject[keyString]) // 'Bob'
