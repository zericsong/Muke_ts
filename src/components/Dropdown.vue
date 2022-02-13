<template>
  <div class="dropdown">
    <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" @click.prevent="toggleOpen">
      {{title}}
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" :style="{display:'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent,PropType,ref } from "vue"
export default defineComponent({
  name: 'Dropdown',
  props:{
    title: {
      type: String,
      required: true
    }
  },
  setup(){
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      toggleOpen
    }
  }
})
</script>



<style lang="">
  
</style>