import { createApp } from 'vue'
import App from './11-自定义组件/App.vue'
import registerIndex from './11-自定义组件/directives'


let app = createApp(App)
app.config.unwrapInjectedRef = true
// registerIndex(app)  //函数调用
app.use(registerIndex) // use注册
app.mount('#app')
