<template>
  <div id="app">
    <StarRating :rating="3.5" :starLimit="5"></StarRating>

    <MyButton variant="primary">Button</MyButton>
    <MyButton variant="secondary">Button</MyButton>
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import StarRating from "./components/StarRating.vue";

export default {
  name: "App",
  components: { MyButton, StarRating },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
