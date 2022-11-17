<template>
  <b-row>
    <slot name="title"></slot>
    <b-col
      cols="12"
      md="6"
      lg="4"
      v-for="{ id, descr, rating, price, imgUrl } in items"
      :key="id"
    >
      <ApartmentsItem
        :descr="descr"
        :rating="rating"
        :price="price"
        :imgUrl="imgUrl"
        :id="id"
      />
    </b-col>
  </b-row>
</template>

<script>
import ApartmentsItem from "./ApartmentsItem.vue";

export default {
  name: "ApartmentsList",
  props: {
    items: Array,
    default: () => [],
  },
  components: { ApartmentsItem },
};
</script>

<style lang="scss">
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
