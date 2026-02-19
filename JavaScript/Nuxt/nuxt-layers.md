### Creating layers
```
yarn create nuxt -- --template layer my-nuxt-layer
```
The --template layer (or -t layer) flag tells the CLI to use the layer starter template, which includes a basic structure and a playground Nuxt app for testing.

#### Install dependencies
After the command runs, navigate into the new layer directory and install its dependencies using your preferred package manager:
- `cd my-nuxt-layer` followed by `yarn install`

#### Develop and test
Develop: Place your reusable components, composables, utils, and configurations into the appropriate directories within your layer (e.g., components/, composables/, nuxt.config.ts).

Test: Use the development command to run the playground app, which is configured to extend your layer:

### Use it
```ts
// nuxt.config.ts of your main Nuxt app
export default defineNuxtConfig({
    extends: [
    '../path-to/my-nuxt-layer' // Adjust the relative path
    ]
})
```
