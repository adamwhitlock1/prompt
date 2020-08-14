<template>
  <div>
    <label for="numeric">Numeric</label>
    <input
      type="number"
      id="numeric"
      class="w-full px-3 py-1 border rounded"
      placeholder="please enter a number"
      min="0"
      @input="changed"
    />
  </div>
</template>

<script>
export default {
  methods: {
    changed(e) {
      this.$emit("changed", parseInt(e.target.value));
    }
  }
};
</script>

<style scoped></style>
