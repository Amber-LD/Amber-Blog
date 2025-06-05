<script setup lang="ts">
import Message from './Message.vue'
import Tagline from './Tagline.vue'

defineProps<{
  name?: string
  avatar?: string
  tagline?: string
}>()


</script>

<template>
  <div class="left-container">
    <Message :name="name" :avatar="avatar"/>
    <Tagline :tagline="tagline" />
  </div>
</template>

<style scoped>
.left-container {
  display: flex;
  flex-direction: column;
  flex: 1 2;
}
</style>
