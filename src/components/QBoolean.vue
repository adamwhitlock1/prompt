<template>
  <div>
    <p class="font-bold capitalize" :id="uuids.title" data-testid="b-title">
      {{ title }}
    </p>

    <input
      data-testid="b-input-true"
      :data-title-id="uuids.title"
      type="radio"
      :id="uuids.true"
      :value="true"
      v-model="selected"
    />
    <label
      data-testid="b-label-true"
      class="mx-1 capitalize"
      :for="uuids.true"
      >{{ label.true }}</label
    >

    <input
      data-testid="b-input-false"
      :data-title-id="uuids.title"
      type="radio"
      :id="uuids.false"
      :value="false"
      v-model="selected"
    />
    <label
      data-testid="b-label-false"
      class="mx-1 capitalize"
      :for="uuids.false"
      >{{ label.false }}</label
    >
  </div>
</template>

<script>
import uuid from '@/utils/uuid';
export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: null,
      uuids: {
        title: uuid(),
        true: uuid(),
        false: uuid()
      }
    };
  },
  computed: {
    label() {
      return {
        false: this.options.labelFalse || 'False',
        true: this.options.labelTrue || 'True'
      };
    }
  },
  watch: {
    selected(value) {
      this.$emit('changed', value);
    }
  }
};
</script>

<style scoped></style>
