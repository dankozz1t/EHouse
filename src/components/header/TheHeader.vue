<template>
  <header class="header">
    <b-container>
      <b-row>
        <b-col>
          <router-link :to="{ name: 'home' }"><TheLogo /> </router-link>
        </b-col>
        <b-col>
          <nav>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'about' }">About</router-link>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import TheLogo from "../TheLogo";

export default {
  name: "TheHeader",
  components: {
    TheLogo,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 16px 0;

  color: var(--secondary-text-cl);
  background-color: var(--secondary-bg-cl);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
