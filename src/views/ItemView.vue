<template>
  <div>
    <section>
      <div class="user-container">
        <i class="fa-solid fa-user"></i>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>        
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
        <div v-html="fetchedItem.content ">

        </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 8px;
}
.fa-user {
    font-size : 2.2rem;
}
.user-description {
    padding-left: 6px;
}
.time {
    font-size : 0.7rem;
}
</style>
