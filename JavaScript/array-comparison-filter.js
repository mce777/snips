function filterTwoArrays(mainArray, filterItemsArray) {
    return mainArray.filter(value => !filterItemsArray.includes(value))
}

const arr1 = ['test', 'foo', 'bar']
const arr2 = ['test']

console.log(filterTwoArrays(arr1, arr2))