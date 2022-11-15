<template>
  <div class="apartments-item">
    <div class="apartments-item__inner">
      <img :src="imgUrl" alt="" class="apartments-item__photo" />
      <div class="apartments-item__content">
        <p class="apartments-item__description">
          {{ description }}
        </p>
        <div class="apartments-item__rating">
          <StarRating :rating="rating" :starLimit="5" />
        </div>
        <div class="apartments-item__price">UAH {{ price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "../StarRating.vue";

export default {
  name: "ApartmentsItem",
  props: {
    description: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      default: "",
    },
  },
  components: { StarRating },
};
</script>

<style lang="scss">
.apartments-item {
  margin-bottom: 30px;
}

.apartments-item__inner {
  position: relative;
}

.apartments-item__content {
  position: relative;
  z-index: 1;

  padding: 20px;

  text-align: left;
  line-height: 1.4;

  color: #ffffff;
  background-color: rgba(#0f1d2d, 0.7);

  opacity: 0;
  cursor: pointer;

  transition: opacity 500ms var(--transition-cubic);

  &:hover {
    opacity: 1;
  }
}

.apartments-item__description {
  margin-bottom: 20px;
  max-height: calc(1em * 1.4 * 3);
  overflow: hidden;
}

.apartments-item__rating {
  margin-bottom: 20px;
}

.apartments-item__price {
  font-size: 20px;
  font-weight: 600;
}

.apartments-item__photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
