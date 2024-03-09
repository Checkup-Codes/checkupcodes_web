<template>
  <Link href="/">Main Page</Link>&nbsp;
  <Link href="/hello">Show Page</Link>
  <div>The page with time {{ timer }}</div>
  
  <div v-if="flashSuccess" class="success">
    {{ flashSuccess }}
  </div>
  <div>{{ y }}</div>

  <slot>Default</slot>
</template>

<script setup>
import { computed,ref } from 'vue'
import { Link, usePage } from '@inertiajs/inertia-vue3'


const page = usePage()
const flashSuccess = computed(
  () => page.props.value.flash.success,
)

const timer = ref(0)
setInterval(() => timer.value++, 1000)
</script>


<style scoped>
  .success {
    background-color: green;
    color: white;
  }
</style>