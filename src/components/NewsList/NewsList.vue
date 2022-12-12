<script setup>
import NewsItem from './NewsItem/NewsItem';

defineProps(['news'])
</script>

<template>
  <ul class="news__list">
    <news-item v-for="article in news" :key="article.slug" :article="article"></news-item>
  </ul>
</template>

<style scoped>
.news__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 40px;
  margin-top: 16px;
  margin-bottom: 32px;
  list-style: none;
}

@media screen and (max-width: 800px) {
  .news__list {
    grid-template-columns: 1fr;
  }
}
</style>
