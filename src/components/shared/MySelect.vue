<template>
  <select v-on="listeners" class="select">
    <option
      v-for="item in formattedItems"
      :key="item.value"
      :value="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: { items: { type: Array, required: true } },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
    formattedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  padding: 8px 15px;

  outline: none;
  border-radius: 5px;
  border: 2px solid var(--main-accent-cl);
  cursor: pointer;

  color: var(--main-text-cl);
  background-color: transparent;
}
</style>
