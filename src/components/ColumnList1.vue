<script setup lang="ts">
import { PropType, computed } from 'vue'
import imgUrl from '../assets/IMG_8393.jpg'

interface ColumnList {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

const props = defineProps({
  list: {
    type: Array as PropType<ColumnList[]>, //PropType可以在setup和template中获得属性提示
    required: true
  },
  
})

const columnList = computed(()=>{
      return props.list.map(column => {
        if(!column.avatar){
          //column.avatar = require('@/assets/IMG_8393.JPG') //vue-cli引入静态资源的方式
          column.avatar = imgUrl //vite引入静态资源的方式
        }
        return column
      })
    })

</script>

<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm ">
        <div class="card-body text-center">
          <img :src="column.avatar" class="rounded-circle border border-light w-25 my-3" :alt="column.title">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-start" >{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="">
  
</style>