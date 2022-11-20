<template>
  <main class="my-orders">
    <b-container>
      <section>
        <h1>My Orders</h1>
        <OrdersList :items="orders" />
      </section>
    </b-container>
  </main>
</template>

<script>
import OrdersList from "../components/order/OrdersList";
import { getOrders } from "@/services/order.service";

export default {
  name: "MyOrdersView",
  components: {
    OrdersList,
  },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({ type: "error", title: "Error!", text: error.message });
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders {
  margin: 60px 0;
}
</style>
