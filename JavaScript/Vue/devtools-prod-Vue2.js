// Snippet for Vue 2.x DevTools
const app = Array.from(document.querySelectorAll('*')).find((e) => e.__vue__).__vue__
const version = app.version

const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__
devtools.enabled = true

const Vue = Object.getPrototypeOf(app).constructor
while (Vue.super) {
    Vue = Vue.super
}
Vue.config.devtools = true
devtools.emit('init', Vue)

/*
* 1. run snippet (CMD+Enter)
* 2. press Alt + R with console in focus to reload
* */
