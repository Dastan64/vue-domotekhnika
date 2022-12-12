<script setup>
import { computed } from 'vue';
import notFound from '../../../assets/images/not-found.jpg';

const props = defineProps(['article'])
const { article } = props;

const formattedDate = computed(() => {
  const dateObj = new Date(article.datePublish);
  const monthsArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const year = dateObj.getFullYear();
  const monthDay = dateObj.getDate();
  const month = dateObj.getMonth();
  return `${monthDay} ${monthsArray[month]} ${year} г.`;
})
</script>

<template>
  <li>
    <article class="article">
      <div class="article__container">
        <figure>
          <img draggable="false" class="article__image" :src="article.image || notFound" alt="" width="200"
               height="200">
        </figure>
        <div class="article__info">
          <span class="article__date">{{ formattedDate }}</span>
          <router-link class="article__link" :to="article.slug"><h3 class="article__title">{{
              article.title
            }}</h3>
          </router-link>
          <p class="article__text">{{ article.shortText }}</p>
        </div>
      </div>
    </article>
  </li>
</template>

<style scoped>
.article__container {
  display: flex;
  gap: 16px;
}

@media screen and (max-width: 800px) {
  .article__container {
    flex-direction: column;
  }
}

.article__image {
  border-radius: 10px;
}

.article__info {
  padding-top: 5px;
}

.article figure {
  flex-shrink: 0;
}

.article__date {
  display: inline-block;
  margin-bottom: 7px;
  color: rgba(0, 0, 0, 0.5);
}

.article__link {
  text-decoration: none;
}

.article__title {
  margin-bottom: 5px;
  font-size: 20px;
  color: #1D5AB6;
}

.article__text {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
