// sample search query string that doesn't have a closing quote
// which fucks up the search

let value = "\"testsearchstring"

/* 
    find quotes, 
    if it's only 1, add another at the end
*/
if ((value.match(/["]/g) || []).length === 1) {
    value = value.concat('"')
}

console.log(value)