<template>
  <div>
    <p data-testid="b-title">{{ title }}</p>

    <input
      data-testid="b-input-true"
      type="radio"
      id="male"
      :value="true"
      v-model="selected"
    />
    <label data-testid="b-label-true" class="mx-1 capitalize" for="male">{{
      label.true
    }}</label>

    <input
      data-testid="b-input-false"
      type="radio"
      id="female"
      :value="false"
      v-model="selected"
    />
    <label data-testid="b-label-false" class="mx-1 capitalize" for="female">{{
      label.false
    }}</label>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    label() {
      return {
        false: this.options.labelFalse || "False",
        true: this.options.labelTrue || "True",
      };
    },
  },
  watch: {
    selected(value) {
      this.$emit("changed", value);
    },
  },
};
</script>

<style scoped></style>
