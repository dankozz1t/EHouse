<template>
  <form class="form" @submit.prevent="handleSubmit">
    <MySelect :items="cities" v-model="city" class="form__select" />
    <MyInput v-model="price" placeholder="Price from" />
    <MyButton class="form__submit" type="submit" variant="primary">
      Housing selection
    </MyButton>
  </form>
</template>

<script>
import MySelect from "../shared/MySelect";
import MyInput from "../shared/MyInput";
import MyButton from "../shared/MyButton";

export default {
  name: "ApartmentsFilterForm",

  components: {
    MySelect,
    MyInput,
    MyButton,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
