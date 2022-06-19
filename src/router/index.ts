import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import ColumnDetail from '@/views/ColumnDetail.vue'
import CreatePost from '@/views/CreatePost.vue'

import pinia from '@/store'

import {useStore} from '../store'

const store = useStore(pinia)//最紧要的是添加参数pinia


const routes = [
  { path: '/', 
    name: 'home',
    component: Home
  },
  { path: '/login', 
    name: 'login',
    component: Login,
    meta: { redirectAlreadyLogin: true }
  },
  { path: '/column/:id', 
    name: 'column',
    component: ColumnDetail
  },
  { path:'/create',
    name: 'create',
    component: CreatePost,
    meta: { requiredLogin: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, // routes: routes 的缩写
})




router.beforeEach((to,from, next) => {
  console.log(to.meta)
  if (to.meta.requiredLogin && !store.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.user.isLogin) {
    next('/')
  } else {
    next()
  }
})

export default router