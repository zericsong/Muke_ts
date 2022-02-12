<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props : {
    isOpen: Boolean
  },
  emits : {
    /* 'close-model': (playload: any) => {
      return playload.type === 'close'
    } */
    'close-model': null    // 没有验证
  },
  /* setup(props,context) {
    const  buttonClick = () => {
      context.emit('close-model')
    }
    return {
      buttonClick
    }
  } */
  // 也可以用methods方法发出唤起组件方法
  methods: {
    buttonClick(){
      this.$emit('close-model')

    }
  }
})
</script>


<template>
  <teleport to="#app">
    <div id="center" v-if="isOpen">
      <h2><slot>this is a modal</slot></h2>
      <button @click="buttonClick">close</button>
    </div>
  </teleport>
</template>
<style>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>