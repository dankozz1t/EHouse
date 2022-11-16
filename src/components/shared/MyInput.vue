<template>
  <input :value="value" v-on="listeners" class="input" />
</template>

<script>
export default {
  name: "MyInput",
  data() {
    return {};
  },

  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 8px 15px;

  outline: none;
  border-radius: 5px;
  border: 2px solid var(--main-accent-cl);

  color: var(--main-text-cl);
  background-color: transparent;

  &::placeholder {
    color: var(--main-light-accent-cl);
  }
}
</style>
