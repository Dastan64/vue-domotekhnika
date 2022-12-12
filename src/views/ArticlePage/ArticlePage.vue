<script setup>
import { onMounted, reactive } from 'vue';
import notFound from '../../assets/images/not-found.jpg';

const props = defineProps(['number', 'slug']);
const content = reactive({
  title: '',
  text: '',
  image: null,
})

onMounted(() => {
  fetch(`https://domotekhnika.ru/api/v1/news/${props.slug}`).then(response => response.json()).then(data => {
    const { data: news } = data;
    content.title = news.news.title;
    content.text = news.news.text;
    content.image = news.news.image;
  }).catch(error => console.log(error))
})

</script>

<template>
  <section class="news">
    <h1>{{ content.title }}</h1>
    <div class="news__container">
      <figure>
        <img v-if="content.image !== null" class="news__image" :src="content.image || notFound" alt="">
      </figure>
      <div v-html="content.text"></div>
    </div>
  </section>

</template>
<style scoped>
.news {
  padding: 26px 16px 32px;
}

.news figure {
  flex-shrink: 0;
}

.news__image {
  border-radius: 10px;
}

.news__container {
  display: flex;
  gap: 16px;
}

@media screen and (max-width: 767px) {
  .news__container {
    flex-direction: column;
    align-items: flex-start;
  }
}

.news h1 {
  margin-bottom: 10px;
  font-size: 28px;
  line-height: 140%;
  color: rgba(0, 0, 0, 0.8);
}

.news:deep p, .news:deep h3 {
  line-height: 1.5;
  margin-bottom: 16px;
}

.news:deep td {
  padding: 4px;
}

</style>
