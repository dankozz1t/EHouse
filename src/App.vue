<template>
  <div id="app">
    <b-container>
      <ApartmentsList :items="apartments">
        <template v-slot:title> <h2>List Apartments</h2> </template>
      </ApartmentsList>

      <MyButton variant="primary">Button primary </MyButton>
      <MyButton variant="secondary">Button secondary </MyButton>
    </b-container>
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";

export default {
  name: "App",
  data() {
    return {
      apartments,
    };
  },
  components: { MyButton, ApartmentsList },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
