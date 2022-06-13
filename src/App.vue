<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
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
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'

const currentUser: UserProps = {
  isLogin: false,
  name: 'viking'
}
const testData : ColumnProps[] = [
  {
    id: 1,
    title: 'test1多专栏',
    description: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
    avatar: './assets/IMG_8393.jpg'
  },
  {
    id: 2,
    title: 'test2多专栏',
    description: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
    avatar: './assets/IMG_8393.jpg'
  },
]

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    ColumnList
  },
  setup() {
    return {
      currentUser,
      list: testData
    }
  }
})

export {testData}

</script>

<style>

</style>
