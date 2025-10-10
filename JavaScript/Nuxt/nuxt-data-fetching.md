`$fetch` is the simplest way to make a network request

The `useFetch` and `useAsyncData` ensure that if an API call is made on the server, the data is forwarded to the client in the payload.

```vue
<!--here you do need any reactivity, and won't have multiple calls-->
<!-- don't use composables in a function -->
<script setup lang="ts">
async function addTodo () {
  const todo = await $fetch('/api/todos', {
    method: 'POST',
    body: {
      // My todo data
    },
  })
}
</script>
```
If you really want to use `useFetch` in a function, do it like this
```vue
<script setup lang="ts">
const { error, data, pending, refresh } = useFetch('/api/login', {
    method: 'POST',
    body,
    immediate: false,
    watch: false,
    onResponse() {
        callCount.value++
    }
})
  
async function onSubmit() {
    await refresh()
    if (!error.value) {
        didItWork.value = true
    }
}

</script>
```

### useFetch
The `useFetch` composable uses $fetch under-the-hood to make SSR-safe network calls in the setup function.
- This composable is a wrapper around the useAsyncData composable and $fetch utility.

### useAsyncData
The `useAsyncData` composable is responsible for wrapping async logic and returning the result once it is resolved.
- kind of a more low-level fetching function
- There are some cases when using the useFetch composable is not appropriate, for example when a CMS or a third-party provide their own query layer. In this case, you can use useAsyncData to wrap your calls and still keep the benefits provided by the composable.
```vue
<script setup lang="ts">
// The first argument of useAsyncData is a unique key used to cache the response of the second argument, the querying function. This key can be ignored by directly passing the querying function, the key will be auto-generated.
const { data, error } = await useAsyncData('users', () => myGetFunction('users'))

// This is also possible:
const { data, error } = await useAsyncData(() => myGetFunction('users'))
</script>
```
