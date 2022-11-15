<template>
  <div>
    <StarIcon
      v-for="idx in starLimit"
      :key="idx"
      :class="{ 'star--fill': idx <= rating ? true : false }"
    />
  </div>
</template>

<script>
import StarIcon from "@/assets/img/star.svg";
export default {
  name: "StarRating",
  components: { StarIcon },
  props: {
    rating: {
      type: Number,
      default: 0,
    },

    starLimit: {
      type: Number,
      default: 5,
    },
  },
};
</script>

<style lang="scss" scoped>
.star {
  width: 16px;
  height: 16px;

  &--fill {
    fill: #ff662d;
  }
}
</style>
