<script setup>
import { ref } from 'vue'
import { useObserver } from './useObserver';

const poopRef = ref(null)
const imgContainer = ref(null)
useObserver(poopRef, doSomething)
const msg = ref('Hello World!')

const images = [
  "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
  "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
]

function doSomething(entries, obs) {
  console.log({obs})
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.body.style.background = "tomato"
    } else {
      document.body.style.background = "lawngreen"
    }
  })
  console.log(entries)
}

</script>

<template>
  <h1 ref="poopRef">{{ msg }}</h1>
  <div class="poop">
    <img width="800" ref="imgContainer" v-for="img in images" :key="img" :src="img" />
  </div>
</template>


<style>
body {
  height: 200vh;
}
div.poop {
  display: flex;
  flex-direction: column;
  gap: 64rem;
}
</style>
