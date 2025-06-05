<script setup lang="ts">
import VPIcon from 'vuepress-theme-plume/components/VPIcon.vue'
import VPLink from 'vuepress-theme-plume/components/VPLink.vue'

interface links {
  text: string
  link?: string
  icon: string
}

defineProps<{
  links?: links[]
}>()
</script>

<template>
  <div class="links-container">
    <div
      v-for="(item, index) in links"
      :key="item.text + index"
      class="amber-card links-item"
    >
      <VPLink :href="item.link" no-icon class="links-item-link">
        <VPIcon v-if="item.icon" :name="item.icon" />
        <span>{{ item.text }}</span>
      </VPLink>
    </div>
  </div>
</template>

<style scoped>
.links-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.amber-card.links-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.amber-card .links-item-link {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  gap: 8px 16px;
  width: 100%;
  padding: 24px 16px;
}

.amber-card .links-item-link :deep(.vp-icon) {
  margin: 0;
  width: 1.5em;
  height: 1.5em;
}

@media (max-width: 767px) {
  .amber-card .links-item-link {
    gap: 8px;
    font-size: 14px;
    padding: 16px 8px;
  }

  .amber-card .links-item-link :deep(.vp-icon) {
  width: 1.25em;
  height: 1.25em;
}
}
</style>
