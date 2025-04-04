## DefineExpose

When you want to call functions in the child component _from_ the parent.

```ts
// Parent Component
<script>
const myNiceRef = ref<ComponentPublicInstance | null>(null)

const sampleFn = async () => {
  myNiceRef.value.functionInTheChildComponent()
}
</script>

<template>
  <ChildComponent ref="myNiceRef" @change="otherFunction" />
</template>
```
```
// Child Component
function functionInTheChildComponent() {
  console.log('hello there')
}

defineExpose({
  functionInTheChildComponent,
})
```
