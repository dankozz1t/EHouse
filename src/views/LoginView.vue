<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";
import AuthSection from "@/components/auth/AuthSection.vue";
export default {
  name: "LoginView",
  components: {
    LoginForm,
    AuthSection,
  },
};
</script>

<style lang="scss" scoped></style>
