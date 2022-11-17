<template>
  <header class="header">
    <b-container>
      <b-row>
        <b-col>
          <TheLogo />
        </b-col>
        <b-col>
          <span>base navigation (in process)</span>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import TheLogo from "../TheLogo";

export default {
  name: "TheHeader",
  components: {
    TheLogo,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 16px 0;

  color: var(--secondary-text-cl);
  background-color: var(--secondary-bg-cl);
}
</style>
