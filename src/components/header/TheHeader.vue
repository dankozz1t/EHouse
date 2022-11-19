<template>
  <header class="header">
    <b-container class="header__container">
      <b-row align-v="center">
        <b-col cols="12" lg="8" class="text-start">
          <router-link :to="{ name: 'home' }"> <TheLogo /> </router-link>
        </b-col>
        <b-col cols="12" lg="4" class="text-start">
          <nav>
            <b-row align-v="center">
              <b-col>
                <router-link :to="{ name: 'home' }">Home</router-link> |
                <router-link :to="{ name: 'about' }">About</router-link>
              </b-col>

              <UserMenu v-if="isLoggedIn" />
              <AuthMenu v-else />
            </b-row>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import TheLogo from "../TheLogo";
import AuthMenu from "./AuthMenu.vue";
import UserMenu from "./UserMenu.vue";
import { mapGetters } from "vuex";

export default {
  name: "TheHeader",
  components: {
    TheLogo,
    AuthMenu,
    UserMenu,
  },

  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss">
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
