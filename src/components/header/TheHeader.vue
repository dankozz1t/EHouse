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
              <b-col v-if="!$store.state.token">
                <router-link :to="{ name: 'login' }">Login</router-link>
                |
                <router-link :to="{ name: 'registration' }">
                  Registration
                </router-link>
              </b-col>
              <b-col v-else class="header__logout">
                <b-row align-v="center">
                  <b-col cols="12" lg="6">
                    <p>Hi {{ $store.state.user.name }}!</p>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <MyButton
                      variant="secondary"
                      size="small"
                      @click="handleLogout"
                      :loading="loading"
                    >
                      Logout
                    </MyButton>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import TheLogo from "../TheLogo";
import MyButton from "../shared/MyButton.vue";
import { logoutUser } from "@/services/auth.service";
import { axiosToken } from "@/utils/http";

export default {
  name: "TheHeader",
  components: {
    TheLogo,
    MyButton,
  },
  data() {
    return { loading: false };
  },
  methods: {
    async handleLogout() {
      try {
        this.loading = true;
        const { data } = await logoutUser(this.$store.state.token);

        axiosToken.unset();
        this.$store.commit("setUser", null);
        this.$store.commit("setToken", null);
        this.$notify({
          type: "success",
          title: "Success!",
          text: data.message,
        });
      } catch (error) {
        this.$notify({ type: "error", title: "Error!", text: error.message });
      } finally {
        this.loading = false;
      }
    },
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
