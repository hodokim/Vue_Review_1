<template>
  <div>
    <div v-for="item in fetchedJobs" :key="item.id">{{ item.title }}</div>
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

<style>

</style>