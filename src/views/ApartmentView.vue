<template>
  <b-container>
    <p v-if="!apartment">Loading...</p>
    <b-row v-else>
      <b-col cols="12" lg="8"><ApartmentsInfo :apartment="apartment" /> </b-col>
      <b-col cols="12" lg="4">
        <b-row>
          <b-col cols="12">
            <ApartmentsOwner :owner="apartment.owner" />
          </b-col>

          <b-col cols="12">
            <ReviewsList :reviews="reviews" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ApartmentsInfo from "@/components/apartment/ApartmentsInfo.vue";
import ApartmentsOwner from "@/components/apartment/ApartmentsOwner.vue";
import ReviewsList from "@/components/reviews/ReviewsList.vue";
import {
  getApartmentById,
  getReviewsApartmentById,
} from "@/services/apartments.service";

export default {
  components: { ApartmentsInfo, ApartmentsOwner, ReviewsList },
  data() {
    return { apartment: null, reviews: null };
  },

  async created() {
    try {
      const apartment = await getApartmentById(this.$route.params.id);
      const reviews = await getReviewsApartmentById(this.$route.params.id);

      this.apartment = apartment.data;
      this.reviews = reviews.data;
    } catch (error) {
      console.log(error.message);
    }
  },
};
</script>

<style lang="scss"></style>
