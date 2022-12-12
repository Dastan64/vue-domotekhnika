<script setup>
import { onMounted, reactive } from 'vue';
import NewsList from '../../components/NewsList/NewsList.vue';
import Loader from '../../components/UI/Loader/Loader';

const state = reactive({
  news: [],
  page: 1,
  isLoading: true,
  error: false,
});

const getNews = () => {
  fetch(`https://domotekhnika.ru/api/v1/news?page=${state.page}`).then(response => response.json()).then(data => {
    const { data: news } = data;
    console.log(news.news.length)
    if (news.news.length < 20) {
      state.hasEnded = true;
    } else {
      state.news = [...state.news, ...news?.news];
      state.page++;
    }
    state.isLoading = false;
  }).catch(error => {
    state.error = true;
    state.isLoading = false;
    console.log(error)
  })
}

onMounted(getNews)
</script>

<template>
  <header class="header">
    <p>Тут могла бы быть ваша шапка</p>
  </header>
  <main class="main">
    <h1 class="main__title">Новости</h1>
    <NewsList v-if="state.news.length > 0" :news="state.news"/>
    <button v-if="!state.isLoading && !state.error" class="main__btn" type="button" @click="getNews">Показать ещё
    </button>
    <p class="main__warning" v-if="state.error">Новостей у нас пока нет!</p>
    <loader v-if="state.isLoading && !state.error"></loader>
  </main>
  <footer class="footer">
    <p>Тут мог бы быть ваш подвал</p>
  </footer>
</template>

<style scoped>
.header, .footer {
  padding: 20px;
  text-align: center;
  background-color: #E8E8E8;
}

.header p, .footer p {
  font-size: 1rem;
  font-weight: 700;
}

.main {
  flex: 1 1 auto;
  padding: 16px;
}

.main__title {
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e4e4;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.3;
}

.main__btn {
  display: block;
  cursor: pointer;
  margin: 0 auto 32px;
  padding: 12px 24px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  font-size: 20px;
  line-height: 23px;
}


.main__warning {
  margin-top: 48px;
  text-align: center;
  font-style: italic;
}

</style>
