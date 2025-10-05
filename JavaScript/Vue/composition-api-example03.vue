<script>
import { ref } from 'vue'

export default {
  setup() {
    // basically like "data" from options-api.
    // a "reactive reference"
    const count = ref(0)

    function increment() {
      // .value is needed in JavaScript
      count.value++
    }

    // don't forget to expose the function as well.
    return {
      count,
      increment
    }
  }
}
</script>

<template>
<!--  Exposed methods can then be used as event handlers:-->
  <button @click="increment">
    {{ count }}
  </button>
</template>
