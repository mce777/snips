// process.argv is an array containing the command line arguments
// the first element will be 'node'
// the next elements will be any additional command line arguments

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
})