import { createApp } from 'vue'
import App from './App.vue'
//import { createPinia } from 'pinia'
import router from './router/index'
import pinia from '@/store'
import axios from 'axios'


// 替换 baseURL
axios.defaults.baseURL = 'http://apis.imooc.com/api/'

// 下面的 icode 值是从慕课网获取的 token 值，可以在课程右侧的项目接口校验码找到
axios.interceptors.request.use(config => {
  // get 请求，添加到 url 中
  config.params = { ...config.params, icode: '12D65C19FAAAAD71' }
  // 其他请求，添加到 body 中
  // 如果是上传文件，添加到 FormData 中
  if (config.data instanceof FormData) {
    config.data.append('icode', '12D65C19FAAAAD71')
  } else {
  // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: '12D65C19FAAAAD71' }
  }
  return config
})


const app = createApp(App)

app.use(pinia).use(router).mount('#app')
//.use(createPinia())







/* ------------------------------定义data ------------------------------*/
/* ------------------------------定义data ------------------------------*/