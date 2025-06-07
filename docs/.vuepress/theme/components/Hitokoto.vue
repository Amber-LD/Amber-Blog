<script setup lang="ts">
import { useHitokoto } from "../composables/hitokoto";
import { useExtract } from "../composables/extract";
const { hitokoto, updateHitokoto } = useHitokoto();
const { extract, updateExtract } = useExtract();
</script>

<template>
    <div
      v-if="hitokoto"
      class="amber-card hitokoto"
      @click="() => updateHitokoto()"
    >
      <p>{{ hitokoto.content }}</p>
      <p v-if="hitokoto.from || hitokoto.author" class="from">
        「 {{ hitokoto.from }}
        {{ hitokoto.from && hitokoto.author ? " | " : "" }}
        {{ hitokoto.author }} 」
      </p>
    </div>
    <div
      v-if="!hitokoto"
      class="amber-card hitokoto"
      @click="() => updateExtract()"
    >
      <p>{{ extract?.content }}</p>
      <p v-if="extract?.from || extract?.author" class="from">
        「 {{ extract?.from }}
        {{ extract?.from && extract.author ? " | " : "" }}
        {{ extract?.author }} 」
      </p>
    </div>
</template>

<style scoped>
.amber-card.hitokoto {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  gap: 8px;
}

@media (min-width: 960px) {
  .amber-card.hitokoto {
    display: flex;
    grid-column: span 2;
  }
}

@media (min-width: 1110px) {
  .amber-card.hitokoto {
    grid-column: auto;
  }
}

.amber-card.hitokoto > p {
  width: 100%;
}

.amber-card.hitokoto .from {
  margin-top: 8px;
  text-align: right;
  font-size: 14px;
}
</style>