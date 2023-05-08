import { createApp } from 'vue'
import App from './11-自定义组件/App.vue'


let app = createApp(App)
app.config.unwrapInjectedRef = true
app.mount('#app')
