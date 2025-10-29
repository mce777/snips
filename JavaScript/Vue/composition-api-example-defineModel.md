### Using defineModel
`defineModel` is for two-way data flow (bidirectional)*: The child component receives data from the parent and gets a local, mutable ref that is automatically synchronized with the parent's data.
```vue
// child component
<script setup>
const modelValue = defineModel<string>({ required: true })
</script>

<template>
  <input
    type="text"
    v-model="modelValue"
  />
<template>

// use in the parent component
<template>
  <MyNiceComponent v-model="usernameOrSomething" />
</template>
```

*`defineProps` is for one-way data flow (unidirectional): The child component receives data from the parent and cannot directly change it.
