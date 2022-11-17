<template>
  <section class="reviews">
    <div class="reviews__header">
      <h2 class="reviews__title">Comments</h2>
      <div class="reviews__rating">
        <span>{{ amountOfReviews }} review(s) </span>
        <StarRating v-if="totalRating" :rating="totalRating" />
      </div>
    </div>

    <transition-group name="reviews--animation">
      <ReviewsItem
        v-for="review in currentReviews"
        :key="review.id"
        :review="review"
      />
    </transition-group>

    <button
      v-if="reviews.length > reviewsLimit || buttonText === 'Less'"
      @click="toggleReviews"
      class="reviews__show-more"
    >
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import StarRating from "../StarRating.vue";
import ReviewsItem from "./ReviewsItem.vue";
export default {
  name: "ReviewsList",
  components: {
    StarRating,
    ReviewsItem,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },
    amountOfReviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? "Less"
        : "Read more...";
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }
      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  margin-top: 20px;
  background-color: var(--secondary-accent-cl);
  padding: 0 2px;
}
.reviews__header {
  padding: 20px 20px 10px;
}
.reviews__title {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}
.reviews__rating {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.reviews__show-more {
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 12px;
  font-family: inherit;
  font-size: 16px;
}

.reviews--animation-item {
  display: inline-block;
  margin-right: 10px;
}
.reviews--animation-enter-active,
.reviews--animation-leave-active {
  transition: all 0.4s ease;
}
.reviews--animation-enter-from,
.reviews--animation-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.reviews--animation-move {
  transition: transform 0.4s ease;
}
</style>
