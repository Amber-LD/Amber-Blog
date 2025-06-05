<script setup lang="ts">
import VPIcon from 'vuepress-theme-plume/components/VPIcon.vue'
import Hitokoto from "./Hitokoto.vue";
import Today from "./Today.vue";
import Links from "./Links.vue";


withDefaults(
  defineProps<{
    hitokoto?: boolean;
    today?: boolean;
    links?: {
      text: string;
      link?: string;
      icon: string;
    }[];
  }>(),
  {
    hitokoto: true,
    today: true,
  }
);
</script>

<template>
  <div class="right-container">
    <div v-if="hitokoto || today" class="right-extra">
      <Hitokoto v-if="hitokoto" />
      <Today v-if="today" />
    </div>
    <div class="right-line">
      <VPIcon name="line-md:link" size="1.5em"/>
      <span class="right-title">网站列表</span>
    </div>
    <Links :links="links" />
  </div>
</template>

<style scoped>
.right-container {
  display: flex;
  flex-direction: column;
  flex: 1 2;
}

.right-extra {
  display: grid;
  gap: 24px;
  margin-bottom: 24px;
  grid-template-columns: 1;
}

.right-line {
  margin-bottom: 24px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  animation: fade 0.5s;
  font-weight: 600;
  color: var(--amber-c-text);
}

.right-title {
  margin-left: 8px;
  font-size: 1.15rem;
  color: var(--amber-c-text);
  text-shadow: 0 0 5px #00000050;
}

@media (min-width: 960px) {
  .right-extra {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1110px) {
  .right-extra {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
