<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedJobs" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title"> 
          <a :href="item.url" >
            {{ item.title }}
          </a>
          </p>
          <small>
            {{item.time_ago}} by 
            <a :href="item.url">{{item.domain}} </a>
          </small>
        </div>
      </li>
    </ul>    
  </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])

    // mapState를 활용한 방법
    // ...mapState({
    //   jobs: state => state.jobs
    // })
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }

}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.news-title {
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

</style>