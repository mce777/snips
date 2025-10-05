const books = [
    { title: "C++", author: "Bjarne" },
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" }
];

function removeDuplicates(arr) {
    const jsonObject = arr.map(JSON.stringify);
    const uniqueSet = new Set(jsonObject);

    return Array.from(uniqueSet).map(JSON.parse);
}

console.log(removeDuplicates(books));

/*
* arr.map... gives you an array of [key, regular object(including key)]
* Map then dedupes this array for you, based on the key
* values() then returns the values without the key
* lastly, spread the result into a new array (or use Array.from())
* */
function superDeduper(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

console.log(superDeduper(books, "title"))


/*
* for a simple one-dimensional array
* */
function simpleDeduper(arr) {
    return [...new Set(arr)]
}

console.log(simpleDeduper(['test', 'test', 'foo', 'bar']))