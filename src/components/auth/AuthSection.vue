<template>
  <section class="auth-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AuthSection",
};
</script>

<style lang="scss" scoped>
.auth-section {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 123px);

  background: url("../../assets/img/auth-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 29, 45, 0.5);
    z-index: -1;
  }
}
</style>
