<template lang="">
  <button
    :type="type"
    :class="[$style.button, $style[variant]]"
    v-bind="$attrs"
  >
    <MyLoader v-if="loading" width="35" height="35" :class="[$style.loader]" />
    <span :class="{ [$style.hidden]: this.loading }">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import MyLoader from "@/components/shared/MyLoader";

export default {
  name: "MyButton",
  components: { MyLoader },

  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      validators: (value) => ["primary", "secondary"].includes(value),

      default: "primary",
      required: true,
    },
    loading: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" module>
.button {
  position: relative;
  display: inline-block;

  padding: 11px 25px;

  font-weight: 500;

  cursor: pointer;
  border: none;
  border-radius: 7px;

  transition: background-color var(--transition-time) var(--transition-cubic);
}

.hidden {
  opacity: 0;
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
