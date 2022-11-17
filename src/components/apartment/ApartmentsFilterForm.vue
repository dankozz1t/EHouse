<template>
  <form class="form" @submit.prevent="handleSubmit">
    <b-row>
      <b-col cols="12" lg="4"
        ><MySelect :items="cities" v-model="city" class="form__select" />
      </b-col>
      <b-col cols="12" lg="4"
        ><MyInput v-model="price" placeholder="Price from" />
      </b-col>
      <b-col cols="12" lg="4">
        <MyButton class="form__submit" type="submit" variant="primary">
          Housing selection
        </MyButton>
      </b-col>
    </b-row>
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

<style lang="scss" scoped></style>
