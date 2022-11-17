<template>
  <b-container>
    <b-row>
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
import apartments from "@/components/apartment/apartments";
import reviews from "../components/reviews/reviews";

export default {
  components: { ApartmentsInfo, ApartmentsOwner, ReviewsList },
  computed: {
    apartment() {
      return apartments.find(({ id }) => id === this.$route.params.id);
    },
    reviews() {
      return reviews;
    },
  },
};
</script>

<style lang="scss"></style>
