<template>
  <b-col>
    <router-link :to="{ name: 'login' }">Login</router-link>
    |
    <router-link :to="{ name: 'registration' }"> Registration </router-link>
  </b-col>
</template>
<script>
export default {
  name: "AuthMenu",
};
</script>
<style lang="scss" scoped></style>
