<template lang="">
  <button
    :type="type"
    :class="[$style.button, $style[variant]]"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: {
      type: String,
      default: "button",
      required: true,
    },
    variant: {
      type: String,
      validators: (value) => ["primary", "secondary"].includes(value),

      default: "primary",
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
.button {
  display: inline-block;

  padding: 11px 25px;

  font-weight: 500;

  cursor: pointer;
  border: none;
  border-radius: 7px;

  transition: background-color var(--transition-time) var(--transition-cubic);
}

.primary {
  color: var(--btn-primary-text-color);
  background-color: var(--btn-primary-bg-color);

  &:hover {
    background-color: var(--btn-primary-light-bg-color);
  }
  &:active {
    background-color: var(--btn-primary-dark-bg-color);
  }
}

.secondary {
  color: var(--btn-secondary-text-color);
  background-color: var(--btn-secondary-bg-color);

  &:hover {
    background-color: var(--btn-secondary-dark-bg-color);
  }
  &:active {
    background-color: var(--btn-secondary-light-bg-color);
  }
}
</style>
