<script setup lang="ts">
import { ref } from "vue";

const clickCount = ref<any>(0)

const clickHandler = () => {
  clickCount.value = clickCount.value + 2
}
</script>

<template>
  <div>
    <h1>Hello Jest!</h1>
    <p>{{ clickCount }} clicks</p>
    <button @click="clickHandler">Click me</button>
  </div>
</template>
