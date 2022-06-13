import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const routes = [
  { path: '/', 
    name: 'home',
    component: Home
  },
  { path: '/login', 
    name: 'login',
    component: Login
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})


export default router