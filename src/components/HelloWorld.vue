<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch} from 'vue'
import useMousePosition from '../hooks/useMousePosition'
import useURLLoader from '../hooks/useURLLoader'
import DogShow from '../components/DogShow.vue'
import AsyncShow from '../components/AsyncShow.vue'

defineProps<{ msg: string }>()

const count = ref(0)

const {x, y} = useMousePosition()

interface DogResult {
  message: string,
  status: string
}
interface CatResult {
  id: string,
  url: string,
  width: number,
  height: number
}
const {result, loading, error, loaded } = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
watch(result,() => {
  if(result.value != null) {
    console.log('value',result.value[0].url)
  }
})



</script>

<template>
  <Suspense>
    <dog-show />
  </Suspense>
  <Suspense>
    <async-show />
  </Suspense>
  <h1>X:{{x}} Y:{{y}}</h1>
  <h1 v-if="loading">Loading</h1>
  <img v-if="loaded" :src="result[0].url">
  <h1>{{ msg }}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
