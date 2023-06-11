import { createApp } from 'vue'
import App from './App.vue'
import state from './store/index'

createApp(App).use(state).mount('#app')
