### Converting Class-based Vue Components to Options API

- this removes the class-component junk and converts your SFC to TypeScript-capable Options API
- watch out for `injects` and similar as `vue-declassify` has problems with it

#### Usage
```
vue-classify full/path/component/myComponent.vue
```
