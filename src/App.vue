<template>
  <div id="app">
    <MyButton :type="type" variant="primary">Button</MyButton>
    <MyButton :type="type" variant="secondary">Button</MyButton>
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";

export default {
  name: "App",
  components: { MyButton },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
