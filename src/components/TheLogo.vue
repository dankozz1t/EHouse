<template>
  <div class="logo__box">
    <LogoIcon />
    <span>ЄHouse</span>
  </div>
</template>

<script>
import LogoIcon from "@/assets/img/logo.svg";

export default {
  name: "TheLogo",
  components: {
    LogoIcon,
  },
};
</script>

<style lang="scss" scoped>
.logo__box {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
