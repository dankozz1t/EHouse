<template>
  <div id="app">
    <b-container>
      <ApartmentsFilterForm @submit="filter" />

      <h2 v-if="!filteredApartments.length">Sorry, Nothing found</h2>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:title> <h2>List Apartments</h2> </template>
      </ApartmentsList>

      <MyButton variant="primary">Button primary </MyButton>
      <MyButton variant="secondary">Button secondary </MyButton>
    </b-container>
  </div>
</template>

<script>
import MyButton from "./components/shared/MyButton.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import ApartmentsFilterForm from "./components/apartment/ApartmentsFilterForm.vue";

export default {
  name: "App",
  data() {
    return {
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  components: {
    MyButton,
    ApartmentsList,

    ApartmentsFilterForm,
  },
  computed: {
    filteredApartments() {
      return this.filterByCity(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCity(apartments) {
      if (!this.filters.city) {
        return apartments;
      }

      return apartments.filter(
        (apartment) => apartment.location.city === this.filters.city
      );
    },
    filterByPrice(apartments) {
      if (!this.filters.price) {
        return apartments;
      }

      return apartments.filter(
        (apartment) => apartment.price >= this.filters.price
      );
    },
  },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
