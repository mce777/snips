`npm init @vitejs/app my-vite-app --template vue-ts`

`npm install jest @types/jest ts-jest vue-jest@next @vue/test-utils@next --save-dev`

or...

`yarn create vite my-vue-app --template vue-ts`<br>
if you omit the `template` you'll be promted for options

`yarn add jest @types/jest ts-jest vue-jest@next @vue/test-utils@next --dev`

<hr>

By default, Jest doesn't understand Vue and Typescript files, so we need to transpile them before and pass the transpilation step as configuration (jest.config.js). We need the next version for multiple packages because they are the only ones that support Vue 3.<br>

```
// jest.config.js
module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest'
  }
}
```

```
// tsconfig.json
{
  "compilerOptions": {
    ...
    "types": ["vite/client", "@types/jest"],
    ...
  },
  ...
}
```

Finally, add the script to package.json, and after that, we can run the tests with npm test.
```
// package.json
{
  ...
  "scripts": {
    ...
    "test": "jest src"
  },
  ...
}
```

test should run now.

```
// src/components/HelloWorld.spec.ts
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3'
    const wrapper = mount(HelloWorld, { props: { msg } })

    expect(wrapper.find('h1').text()).toEqual(msg)
  })
})
```

source: https://dev.to/vuesomedev/add-testing-to-vite-4b75
