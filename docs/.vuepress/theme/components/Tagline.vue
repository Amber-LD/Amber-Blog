<script setup lang="ts">
defineProps<{ tagline?: string }>();
</script>

<template>
  <div v-if="tagline" class="amber-card tagline">
    <div class="tagline-text1"></div>
    <div class="tagline-text2">{{ tagline }}</div>
  </div>
</template>

<style scoped>
.amber-card.tagline {
  width: fit-content;
  padding: 24px 32px;
  font-weight: 400;
  font-size: 20px;
  margin-top: 48px;
}

.amber-card.tagline::before,
.amber-card.tagline::after {
  position: absolute;
  color: var(--amber-c-text);
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  mask: var(--icon);
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: currentColor;
  transition: background-color var(--vp-t-color);
}

.tagline-text1 {
  font-size: 1.1rem;
  padding: 1rem 0 0 1rem;
  font-family: "Pacifico-Regular";
}

.tagline-text2 {
  font-size: 1.2rem;
  padding: 1rem;
  
}

.amber-card.tagline::before {
  --icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='24' viewBox='0 0 34 24'%3E%3Cpath fill='%23000' d='M31.2 0H24l-4.8 9.6V24h14.4V9.6h-7.2zM12 0H4.8L0 9.6V24h14.4V9.6H7.2z'/%3E%3C/svg%3E");
  top: 8px;
  left: 8px;
}

.amber-card.tagline::after {
  --icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='24' viewBox='0 0 34 24'%3E%3Cpath fill='%23000' d='M2.4 24h7.2l4.8-9.6V0H0v14.4h7.2zm19.2 0h7.2l4.8-9.6V0H19.2v14.4h7.2z'/%3E%3C/svg%3E");
  bottom: 8px;
  right: 8px;
}
</style>
