<template>
  <div class="reviews-header">
    <Avatar class="reviews-header__avatar" />
    <div class="reviews-header__content">
      <span class="reviews-header__author">{{ author }}</span>
      <StarRating v-if="rating" :rating="rating" />
    </div>
  </div>
</template>

<script>
import StarRating from "../StarRating.vue";

import Avatar from "./ReviewsAvatar";
export default {
  name: "ReviewsHeader",
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
.reviews-header {
  display: flex;
  align-items: center;
}

.reviews-header__avatar {
  margin-right: 18px;
}
.reviews-header__content {
  display: flex;
  flex-direction: column;
}
</style>
