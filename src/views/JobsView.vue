<template>
  <div>
    <div v-for="item in jobs" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js';

export default {
  data() {
    return {
      jobs: []
    }
  },

  created() {
    fetchJobsList()
    .then( res => this.jobs = res.data)
    .catch( err => console.log(err))
  }

}
</script>

<style>

</style>