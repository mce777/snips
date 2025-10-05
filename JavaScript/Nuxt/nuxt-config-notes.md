```ts
// file: nuxt.config.ts
// env based config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'My app',
            titleTemplate: '%s | extra text'
        }
    },
    $development: {
        app: {
            head: {
                title: 'Different app',
            }
        },
    }
})
```
```ts
// file: app/app.config.ts
// Public tokens that are determined at build time
export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  }
})

```
