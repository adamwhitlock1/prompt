<template>
  <div>
    <label :for="uuids.input" :id="uuids.title" class="font-bold capitalize">{{
      title
    }}</label>
    <input
      :data-title-id="uuids.title"
      type="number"
      :id="uuids.input"
      class="w-full px-3 py-1 border rounded"
      placeholder="please enter a number"
      min="0"
      @input="changed"
    />
  </div>
</template>

<script>
import uuid from '@/utils/uuid';
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      uuids: {
        input: uuid(),
        title: uuid()
      }
    };
  },
  methods: {
    changed(e) {
      this.$emit('changed', parseInt(e.target.value));
    }
  }
};
</script>

<style scoped></style>
