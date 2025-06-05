<script setup lang="ts">
import { useDate } from '../composables/date'
// import { useWeather } from '../composables/weather'

// const { city, weather } = useWeather()
const { date, time } = useDate()
</script>

<template>
    <div class="amber-card today">
    <p class="today-date">
      <span>{{ date.year }}</span><span>年</span>
      <span>{{ date.month }}</span><span>月</span>
      <span>{{ date.day }}</span><span>日</span>
      <span>星期{{ date.week }}</span>
    </p>
    <p class="today-time">
      <span>{{ time }}</span>
    </p>
    <!-- <p v-if="city && weather" class="today-weather">
      <span>{{ city.name }}</span>
      <span>{{ weather.weather }}</span>
      <span>{{ weather.temperature }}°C</span>
      <span>{{ weather.winddirection }}风</span>
      <span>{{ weather.windpower }}级</span>
    </p> -->
    <p>☃️ 于万人中万幸得以相逢 🐈</p>
  </div>
</template>

<style scoped>
.amber-card.today {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  gap: 8px;
}

@media (min-width: 960px) {
  .amber-card.today {
    grid-column: span 3;
  }
}

@media (min-width: 1110px) {
  .amber-card.today {
    grid-column: auto;
  }
}

.amber-card.today > p {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  text-align: center;
}

.amber-card.today .today-time {
  font-size: 48px;
  line-height: 1;
  letter-spacing: 2px;
  font-weight: 500;
}
</style>