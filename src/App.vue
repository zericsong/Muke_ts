<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <loader v-if="isLoading"></loader>
    <h1>{{error.message}}</h1>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
import { useStore } from './store'
import Loader from './components/Loader.vue'
import axios from 'axios'


export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader
  },
  setup() {
    const store = useStore()
    const currentUser = computed(()=>store.user)
    const isLoading = computed(() => store.loading)
    const token = computed(() => store.token)
    const error = computed(()=> store.error)
    onMounted(()=>{
      if(!currentUser.value.isLogin && token.value) {
        axios.defaults.headers.common.Authorization = `Bearer ${token.value}`
        store.fetchCurrentUser()
      }
    })
    return {
      currentUser,
      isLoading,
      error
    }
  }
})
</script>

<style>

</style>