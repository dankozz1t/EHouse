<template>
  <main class="main">
    <b-container>
      <ApartmentsFilterForm @submit="filter" />

      <h2 v-if="!filteredApartments.length">Sorry, Nothing found</h2>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:title> <h2>List Apartments</h2> </template>
      </ApartmentsList>

      <MyButton variant="primary">Button primary </MyButton>
      <MyButton variant="secondary">Button secondary </MyButton>
    </b-container>
  </main>
</template>

<script>
import MyButton from "@/components/shared/MyButton.vue";
import ApartmentsList from "@/components/apartment/ApartmentsList.vue";
import ApartmentsFilterForm from "@/components/apartment/ApartmentsFilterForm.vue";

import { getApartmentsList } from "@/services/apartments.service";

export default {
  name: "HomeView",
  data() {
    return { apartments: [], filters: { city: "", price: 0 } };
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

  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.log(error.message);
    }
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

<style scoped>
.main {
  margin: 60px 0;
}
</style>
