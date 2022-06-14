import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import ColumnDetail from '@/views/ColumnDetail.vue'

const routes = [
  { path: '/', 
    name: 'home',
    component: Home
  },
  { path: '/login', 
    name: 'login',
    component: Login
  },
  { path: '/column/:id', 
    name: 'column',
    component: ColumnDetail
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes, // routes: routes 的缩写
})


export default router