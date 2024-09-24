import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from './locale/index.json'

const app = createApp(App)

export const i18n = createI18n({
    locale:'en',
    messages,
})

app.use(router)
app.use(i18n)
app.mount('#app')
