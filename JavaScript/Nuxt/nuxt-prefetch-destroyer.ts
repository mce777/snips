// @ts-ignore
import { defineNuxtModule } from '@nuxt/kit'

// This module removes preloading / prefetching from the <head /> during build
// See https://github.com/nuxt/nuxt/issues/18376#issuecomment-1431318970

export default defineNuxtModule({
    meta: {
        name: 'prefetch',
        configKey: 'prefetch'
    },
    defaults: {},
    setup(_options, nuxt) {
        nuxt.hook('build:manifest', (manifest) => {
            for (const key in manifest) {
                manifest[key].dynamicImports = []
            }
        })
    }
})
