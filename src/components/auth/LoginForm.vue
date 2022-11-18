<template>
  <MyForm ref="form" class="login__form" @submit.prevent="handleSubmit">
    <h1 class="login__title">Login</h1>
    <MyInput
      v-model="formData.email"
      placeholder="Email"
      autocomplete="email"
      name="email"
      :rules="emailRules"
      class="login__input"
    />
    <MyInput
      v-model="formData.password"
      placeholder="Password"
      autocomplete="current-password"
      type="password"
      name="password"
      :rules="passwordRules"
      class="login__input"
    />
    <MyButton
      class="login__btn"
      variant="primary"
      type="submit"
      :loading="loading"
    >
      Вход
    </MyButton>
  </MyForm>
</template>

<script>
import MyForm from "@/components/shared/MyForm";
import MyInput from "@/components/shared/MyInput";
import MyButton from "@/components/shared/MyButton";

import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "@/utils/validationRules";
import { loginUser } from "@/services/auth.service";

export default {
  name: "LoginForm",
  components: {
    MyForm,
    MyInput,
    MyButton,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        try {
          this.loading = true;
          const { data } = await loginUser(this.formData);
          console.log(data);
        } catch (error) {
          this.$notify({ type: "error", title: "Error!", text: error.message });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login__form {
  display: block;
  flex-direction: column;
}

.login__title {
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;

  text-align: center;
}

.login__input {
  margin-bottom: 20px;
  width: 100%;
}

.login__btn {
  margin-top: 15px;
  width: 100%;
}
</style>
