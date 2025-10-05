### Middleware

- eg auth and such
- it's basically just a function
- Server Middleware
- Client Middleware
  - within Nuxt context we refer to it as _route_ middleware
  - Inline is done like this:

```js
// inline
definePageMeta({
  layout: "custom",
  middleware: [
      function (to, from) {
          const user = useSupabaseUser()
          if (user.value) {
              return
          }
          return navigateTo("/login")
      }]
});
```

"Named" like this:
```js
// first define with middleware directory, 'auth' file
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()
    if (user.value) {
        return
    }
    return navigateTo("/login")
})

// then use like this in view
definePageMeta({
    layout: "custom",
    middleware: ['auth']
});
```
