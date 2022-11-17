<template>
  <div id="app">
    <TheHeader />

    <main class="main">
      <router-view />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",

  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  margin: 60px 0;
  flex-grow: 1;
}
</style>
