<template>
  <div id="app">
    <MyNotification />

    <TheHeader />

    <router-view />

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import MyNotification from "@/components/shared/MyNotification.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    TheHeader,
    TheFooter,
    MyNotification,
  },
  methods: {
    ...mapActions("auth", ["currentUser"]),
  },
  computed: { ...mapGetters("auth", ["isLoggedIn"]) },
  async mounted() {
    if (this.isLoggedIn) {
      this.currentUser();
    }
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
