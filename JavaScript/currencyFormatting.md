### Currency Formatting with Intl.NumberFormat

```js
function convertToEuroFormat(number, denominator = 100) {
    const value = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    }).format(number / denominator) // the denominator converts it from cents

    return value
}

console.log(convertToEuroFormat(56.43, 1)) // 56,43 € 
```

See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options


```js
function formatMoneyWithoutSymbol(money) {
  const convertFromCents = money / 100
  // this below results in something like 3333,00  
  console.log('test:', convertFromCents.toFixed(2).replace('.', ','))
    
  // this below results in 3.333,00 for example
  return (money / 100).toLocaleString('de-DE', { minimumFractionDigits: 2 })
}
```
