<template>
  <div class="reviews-item">
    <ReviewsHeader :rating="review.rating" :author="review.author" />
    <p class="reviews-item__content">{{ review.content }}</p>
  </div>
</template>

<script>
import ReviewsHeader from "./ReviewsHeader";
export default {
  name: "ReviewsItem",
  components: {
    ReviewsHeader,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-item {
  margin-bottom: 2px;
  padding: 20px 22px;

  line-height: 1.3;

  background-color: var(--main-bg-cl);

  &:last-child {
    margin-bottom: 0;
  }
}

.reviews-item__content {
  text-align: start;
  display: -webkit-box;
  margin-top: 20px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}
</style>
