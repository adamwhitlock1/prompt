<template>
  <div class="block">
    <div class="flex items-center" v-for="(choice, i) in choices" :key="i">
      <input type="checkbox" :value="choice" v-model="checked" class="mr-2" />
      <label>{{ choice }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    choices: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      checked: []
    };
  },
  watch: {
    checked(value) {
      console.log("CHECKED CHANGED");
      console.log({ value });
      this.$emit("changed", value);
    }
  }
};
</script>

<style scoped></style>
