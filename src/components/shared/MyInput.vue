<template>
  <div class="wrapper-input">
    <input
      :value="value"
      @blur="blurHandler"
      v-on="listeners"
      v-bind="$attrs"
      class="input"
      :class="!isValid && 'input--error'"
    />
    <span v-if="!isValid" class="input__error"> {{ error }} </span>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  data() {
    return { isValid: true, error: "", isFirstInput: true };
  },
  inject: {
    form: { default: null },
  },
  inheritAttrs: false,
  props: {
    value: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    rules: {
      type: Array,
      default: () => [],
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
  watch: {
    value() {
      if (this.isFirstInput) return;
      this.validate();
    },
  },
  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeDestroy() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },
  methods: {
    validate() {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(this.value);
        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        return hasPassed;
      });
      return this.isValid;
    },
    blurHandler() {
      if (this.isFirstInput) {
        this.validate();
      }
      this.isFirstInput = false;
    },
    reset() {
      this.isFirstInput = true;
      this.isValid = true;
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-input {
  position: relative;
}

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

  &--error {
    border-color: var(--error-cl);
  }
}

.input__error {
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;

  font-size: 12px;
  line-height: 1.3;

  color: var(--error-cl);
}
</style>
