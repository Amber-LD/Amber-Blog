<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { ThemeHomeConfigBase } from 'vuepress-theme-plume'

const backgroundImage = ref<string>('');

const props = defineProps< ThemeHomeConfigBase & {
  backgroundImage?: string;
}>();

onMounted(async () => {
  backgroundImage.value = props.backgroundImage
});

</script>

<template>
  <div class="background-container">
    <div
    class="background-inner"
    :style="{ backgroundImage: `url(${backgroundImage})`}"
    />
  </div>
</template>

<style scoped>
.background-container {
  position: absolute;
  width: 100%;
  height: calc(100vh - var(--vp-nav-height));
  pointer-events: none;
}

.background-inner {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media (max-width: 767px) {
  .background-inner {
    background-position: 78% center; 
  }
}
</style>
