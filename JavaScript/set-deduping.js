// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const arrayWithDups = [1, 1, 1, 2, 3]
const deDupedWithSet = Array.from(new Set(arrayWithDups));

console.log('I am so de-duped:::', deDupedWithSet);
