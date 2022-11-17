<template>
  <div class="reviews-heading">
    <Avatar class="reviews-heading__avatar" />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
      <StarRating :rating="rating" />
    </div>
  </div>
</template>

<script>
import StarRating from "../StarRating.vue";

import Avatar from "./ReviewsAvatar";
export default {
  name: "ReviewsHeading",
  components: {
    StarRating,
    Avatar,
  },
  props: {
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  align-items: center;
}

.reviews-heading__avatar {
  margin-right: 18px;
}
.reviews-heading__content {
  display: flex;
  flex-direction: column;
}
</style>
