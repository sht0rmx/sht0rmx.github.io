import './assets/main.css'
import 'remixicon/fonts/remixicon.css'

import {createApp} from 'vue'
import {i18n} from "@/locales/index.js";
import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'
import { notifyUpdate } from './components/UpdatePopup.vue'

const updateSW = registerSW({
  onNeedRefresh() {
    notifyUpdate(updateSW)
  }
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
