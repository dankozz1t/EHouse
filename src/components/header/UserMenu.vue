<template>
  <b-col class="header__logout">
    <b-row align-v="center">
      <b-col cols="12" lg="4">
        <p>Hi {{ $store.state.auth.user?.name }}!</p>
      </b-col>
      <b-col cols="12" lg="4">
        <router-link :to="{ name: 'orders' }">My orders</router-link>
      </b-col>
      <b-col cols="12" lg="4">
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
</template>

<script>
import MyButton from "../shared/MyButton.vue";
import { mapActions } from "vuex";

export default {
  name: "UserMenu",
  components: { MyButton },
  data() {
    return { loading: false };
  },

  methods: {
    ...mapActions("auth", ["logout"]),

    async handleLogout() {
      try {
        this.loading = true;

        this.logout();

        this.$notify({
          type: "success",
          title: "Success!",
          text: "Goodbye!",
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
<style lang="scss" scoped></style>
