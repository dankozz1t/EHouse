<template>
  <MyForm ref="form" class="registration__form" @submit.prevent="handleSubmit">
    <h1 class="registration__title">Registration</h1>
    <MyInput
      v-model="formData.name"
      placeholder="Name"
      autocomplete="username"
      name="name"
      :rules="nameRules"
      class="registration__input"
    />
    <MyInput
      v-model="formData.email"
      placeholder="Email"
      autocomplete="email"
      name="email"
      :rules="emailRules"
      class="registration__input"
    />
    <MyInput
      v-model="formData.password"
      placeholder="Password"
      autocomplete="current-password"
      type="password"
      name="password"
      :rules="passwordRules"
      class="registration__input"
    />
    <MyInput
      v-model="formData.confirmPassword"
      placeholder="Confirm password"
      autocomplete="current-password"
      type="password"
      name="password"
      :rules="confirmPassword"
      class="registration__input"
    />
    <MyButton class="registration__btn" type="submit" :loading="loading">
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
// import { mapActions } from "vuex";
export default {
  name: "RegistrationForm",
  components: {
    MyForm,
    MyInput,
    MyButton,
  },
  data() {
    return {
      loading: false,
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Пароли не совпадают",
        }),
      ];
    },
  },
  //   methods: {
  //     ...mapActions("auth", ["registerUser"]),
  //     async handleSubmit() {
  //       const { form } = this.$refs;
  //       const isFormValid = form.validate();
  //       const { name, password, email } = this.formData;
  //       if (isFormValid) {
  //         try {
  //           this.loading = true;
  //           await this.registerUser({
  //             name,
  //             password,
  //             email,
  //           });
  //           this.$router.push({ name: "homepage" });
  //           form.reset();
  //         } catch (error) {
  //           this.$notify({
  //             type: "error",
  //             title: "Произошла ошибка",
  //             text: error.message,
  //           });
  //         } finally {
  //           this.loading = false;
  //         }
  //       }
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
.registration__form {
  display: block;
  flex-direction: column;
}

.registration__title {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
}

.registration__input {
  margin-bottom: 20px;
  width: 100%;
}

.registration__btn {
  margin-top: 15px;
  width: 100%;
}
</style>
