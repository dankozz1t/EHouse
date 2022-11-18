<template lang="">
  <button
    :type="type"
    :class="[$style.button, $style[variant], $style[size]]"
    v-bind="$attrs"
    v-on="$listeners"
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
    },
    size: {
      type: String,
      validators: (value) => ["medium", "small"].includes(value),
      default: "medium",
    },

    loading: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" module>
.button {
  position: relative;
  display: inline-block;

  font-weight: 500;

  cursor: pointer;
  border: none;
  border-radius: 7px;

  transition: background-color var(--transition-time) var(--transition-cubic);
}

.medium {
  padding: 11px 25px;
}
.small {
  padding: 5px 10px;
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
  color: var(--btn-primary-bg-color);
  border: 2px solid var(--btn-primary-bg-color);
  background-color: transparent;

  &:hover {
    color: var(--btn-primary-text-color);
    background-color: var(--btn-primary-light-bg-color);
  }
  &:active {
    color: var(--btn-primary-text-color);
    background-color: var(--btn-primary-dark-bg-color);
  }
}
</style>
