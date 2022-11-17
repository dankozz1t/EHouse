<template>
  <article class="apartment-info">
    <div class="apartment-info__heading">
      <h1 class="apartment-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartment-info__photo" />
    <p class="apartment-info__description">{{ apartment.description }}</p>
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
.apartment-info__heading {
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
  max-width: 100%;
}

.apartment-info__description {
  line-height: 1.3;
  margin-top: 30px;
}

.apartment-info__btn {
  margin-top: 20px;
  text-align: center;
}
</style>
