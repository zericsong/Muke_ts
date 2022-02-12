<template>
  <h1>{{result}}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//自定义异步组件
export default defineComponent({
  setup(){
    return new Promise ((resolve)=>{
      setTimeout(()=>{
        return resolve({
          result: 42
        })
      },3000)
    })
  }
})
</script>

