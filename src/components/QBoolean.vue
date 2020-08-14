<template>
  <div>
    <p>{{ title }}</p>
    <input type="radio" id="male" :value="true" v-model="selected" />
    <label class="mx-1 capitalize" for="male">{{ label.true }}</label>
    <input type="radio" id="female" :value="false" v-model="selected" />
    <label class="mx-1 capitalize" for="female">{{ label.false }}</label
    ><br />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: "Question title needed"
    }
  },
  data() {
    return {
      selected: null
    };
  },
  computed: {
    label() {
      return {
        false: this.options.labelFalse || "False",
        true: this.options.labelTrue || "True"
      };
    }
  },
  watch: {
    selected(value) {
      this.$emit("changed", value);
    }
  }
};
</script>

<style scoped></style>
