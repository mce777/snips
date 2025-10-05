## Using the Vite bundler

- vitejs.dev
- Getting started
  - `npm init @vitejs/app`
    - that's really all (and pretty fast)
  - choose options
    - vanilla, vue, vue w/TS, React, etc.
  - `npm i`
- General notes
  - hot reloading works out of the box (i.e. really fast)
  - easy support for something like sass
    - just run `npm i sass` (no vite-specific plugin required)


###Switching to Vue framework after the fact
- `npm install -D @vitejs/plugin-vue`
- `npm install vue@next`
  - Vue itself
- `npm install -D @vue/compiler-sfc` 
  - Vue3 package that handles single file components
  
```vue
// vite.config.js (in root)
// if you choose vue during initial setup, this will be created for you

import vuePlugin from @vitejs/plugin-vue

export default {
    plugins: [
        vuePlugin()
    ]
}
```

