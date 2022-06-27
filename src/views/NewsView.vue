<template>
  <div>
    <div v-for="news in news" :key="news">{{ news.title }}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      news: []
    }
  },

  created() {
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then( res => {
      this.news = res.data;
    })
    .catch()
  }

}
</script>

<style>

</style>