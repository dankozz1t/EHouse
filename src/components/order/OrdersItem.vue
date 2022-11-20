<template>
  <div class="orders-item">
    <b-row align-v="center" class="g-0 orders-item__border">
      <b-col cols="12" md="3">
        <img
          class="orders-item__photo"
          :src="order.imgUrl"
          alt="photo apartment"
        />
      </b-col>
      <b-col cols="12" md="9" class="text-start">
        <div class="orders-item__info">
          <div class="orders-item__text">
            <h2 class="orders-item__title">{{ order.title }}</h2>
            <p class="orders-item__location">{{ order.location.city }}</p>
          </div>
          <div class="orders-item__cost">
            <span class="orders-item__price">UAH {{ order.price }}</span> per
            night
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "OrdersItem",
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-item:not(:last-child) {
  margin-bottom: 20px;
}
.orders-item__border {
  border: 2px solid var(--main-accent-cl);
}

.orders-item__info {
  margin-left: 20px;
}

.orders-item__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}
.orders-item__photo {
  display: block;
  width: 100%;
  object-fit: cover;
}

.orders-item__price {
  font-size: 20px;
  font-weight: 700;
}
</style>
