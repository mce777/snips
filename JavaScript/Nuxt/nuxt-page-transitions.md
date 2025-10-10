nuxt.config.ts
```ts
// available on page and layout
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },   
  },
})

```

```vue
<template>
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
```

#### Transition with NuxtPage
```html
<template>
  <div>
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'bounce',
          mode: 'out-in',
        }"
      />
    </NuxtLayout>
  </div>
</template>
```
