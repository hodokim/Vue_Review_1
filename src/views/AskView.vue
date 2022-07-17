<template>
  <div>
    <p v-for="item in this.$store.state.ask" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{item.time_ago}}, {{item.user}}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>