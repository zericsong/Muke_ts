<template>
  <img :src="result && result.message">
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

// 自定义异步组件
export default defineComponent({
  async setup(){
    const rawData = await axios.get('https://dog.ceo/api/breeds/image/random')
    return {
      result: rawData.data
    }
  }
})
</script>