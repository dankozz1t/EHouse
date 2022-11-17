<template>
  <article class="apartment-info">
    <div class="apartment-info__header">
      <h1 class="apartment-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>
    <img
      :src="apartment.imgUrl"
      :alt="apartment.title"
      class="apartment-info__photo"
    />
    <p class="apartment-info__descr">{{ apartment.descr }}</p>
    <div class="apartment-info__btn">
      <MyButton variant="primary"> Забронировать </MyButton>
    </div>
  </article>
</template>

<script>
import Rating from "../StarRating";
import MyButton from "../shared/MyButton";

export default {
  name: "ApartmentsInfo",
  components: {
    Rating,
    MyButton,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-info__header {
  display: flex;
}

.apartment-info__title {
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 20px;
  margin-right: 20px;
}

.apartment-info__photo {
  width: 100%;
  max-width: 710px;
}

.apartment-info__descr {
  line-height: 1.3;
  margin-top: 30px;
}

.apartment-info__btn {
  margin-top: 20px;
  text-align: center;
}
</style>
