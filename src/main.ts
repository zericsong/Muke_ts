import { createApp } from 'vue'
import App from './App.vue'
//import { createPinia } from 'pinia'
import router from './router/index'
import pinia from '@/store'


const app = createApp(App)

app.use(pinia).use(router).mount('#app')
//.use(createPinia())


/* ------------------------------定义data ------------------------------*/
/* ------------------------------定义data ------------------------------*/