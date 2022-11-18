<template>
  <notifications classes="vue-notification" />
</template>

<script>
export default {
  name: "MyNotification",
};
</script>

<style lang="scss" scoped>
::v-deep .vue-notification {
  padding: 10px;
  margin: 0 5px 5px;

  color: #ffffff;

  background-color: #44a4fc;
  border-left: 5px solid #187fe7;

  .notification-title {
    font-size: 16px;
    line-height: 1.3;
  }
  .notification-content {
    font-size: 14px;
    margin-top: 5px;
  }
  &.warn {
    background-color: var(--warning-cl);
    border-left-color: #c08e44;
  }
  &.error {
    background-color: var(--error-cl);
    border-left-color: #a14039;
  }
  &.success {
    background-color: var(--success-cl);
    border-left-color: #61a152;
  }
}
</style>
