<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <!-- <router-link :to="`/user/${fetchedItem.user}`">
        {{ fetchedItem.user }}
      </router-link> -->
      <div class="time">
        <!-- {{ fetchedItem.time_ago }} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 8px;
}
.fa-user {
  font-size: 2.2rem;
}
.user-description {
  padding-left: 6px;
}
.time {
  font-size: 0.7rem;
}
</style>
