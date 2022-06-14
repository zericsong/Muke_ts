import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import { useStore } from '@/store'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')

export const store = useStore()

console.log('state',store.count)
console.log('getter',store.add)
console.log('getter',store.add)
console.log('getter2',store.doubleCount)

/* ------------------------------定义data ------------------------------*/
/* ------------------------------定义data ------------------------------*/