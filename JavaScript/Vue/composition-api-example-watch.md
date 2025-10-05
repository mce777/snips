### Watchers and watch(ing) in Composition API

```ts
watch(computedOrWhateverYaWatchin, (newValue, oldValue) => {
  if (newValue) {
    availableEmployees.value = [
      { title: currentUserFullName.value, value: Number(currentUser.id) },
      ...generateDropdownEmployeeOptions(newValue),
    ]
  } else {
     console.info(`here I'm logging the ${oldValue}`)
  }
})
```

https://vuejs.org/guide/essentials/watchers.html
