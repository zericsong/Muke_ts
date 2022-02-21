<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" @click.prevent="toggleOpen">
      {{title}}
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" :style="{display:'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent,ref,watch } from "vue"
import useClickOutsides from "@/hooks/useClickOutsides"

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
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    
    const isClickOutsides = useClickOutsides(dropdownRef)
    watch(isClickOutsides,()=>{
      if(isOpen.value && isClickOutsides.value) {
        isOpen.value = false
      }
    })

    return {
      isOpen,
      toggleOpen,
      dropdownRef,
    }
  }
})
</script>



<style lang="">
  
</style>