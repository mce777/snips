Nuxt provides the `useState composable to create a reactive and SSR-friendly shared state across components.
- will be serialized to JSON

```vue
<!--simple example-->
<!--useState('keyToReference', () => pieceOfState() -->
<script setup lang="ts">
  const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
```
### Initializing State
Most of the time, you will want to initialize your state with data that resolves asynchronously. You can use the app.vue component with the callOnce util to do so.
```vue
<!--app/app.vue-->
<script setup lang="ts">
const websiteConfig = useState('config')

await callOnce(async () => {
  websiteConfig.value = await $fetch('https://my-cms.com/api/website-config')
})
</script>
```
