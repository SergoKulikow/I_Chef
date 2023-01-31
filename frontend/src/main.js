import { createApp } from 'vue'
import App from './App.vue'
import router from "@/components/router/router"

const app = createApp(App)
// const components = ''
// components.forEach(component => {
//     app.component(component.name, component)
// });

app
    .use(router)
    .mount('#app')
