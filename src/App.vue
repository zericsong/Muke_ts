<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Model from './components/Model.vue'
import {ref, onErrorCaptured} from 'vue'


// 自定义事件
const modelIsOpen = ref(false)
const openModel = () => {
  modelIsOpen.value = true
}
const onModelClose = () => {
  modelIsOpen.value = false

}

// 获取异步组件中的错误信息
const error = ref(null)
onErrorCaptured((e: any) => {
  error.value = e
  return true
})

</script>

<template>
  <p>{{error}}</p>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <model :is-open="modelIsOpen" @close-model="onModelClose">My Model!!!!</model>
  <button @click="openModel">openModel</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
