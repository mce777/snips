// when Vue Devtools are hidden in deployed environments
const app = Array.from(document.querySelectorAll('*')).find((e) => e.__vue_app__).__vue_app__
const version = app.version

const devtoolsProdVue3 = window.__VUE_DEVTOOLS_GLOBAL_HOOK__
devtoolsProdVue3.enabled = true
devtoolsProdVue3.emit('app:init', app, version, {})

/*
* 1. run snippet (CMD+Enter)
* 2. press Alt + R with console in focus to reload
* */
