<template>
  <div class="block">
    <p class="font-bold capitalize" :id="uuids.title" data-testid="m-title">
      {{ title }}
    </p>
    <div class="flex items-center" v-for="(choice, i) in choices" :key="i">
      <input
        :data-testid="`m-input-${i}`"
        :data-title-id="uuids.title"
        type="checkbox"
        :value="choice"
        v-model="checked"
        class="mr-2"
        :id="generateInputMap(i)"
      />
      <label :for="generateInputMap(i)">{{ choice }}</label>
    </div>
  </div>
</template>

<script>
import uuid from '@/utils/uuid';
export default {
  props: {
    choices: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      uuids: {
        title: uuid()
      },
      checked: [],
      inputMap: []
    };
  },
  methods: {
    generateInputMap(i) {
      if (typeof this.inputMap[i] !== 'undefined') {
        console.log('uuid exists');
        console.log({ uuid: this.inputMap[i] });
        return this.inputMap[i];
      }
      this.inputMap[i] = uuid();
      return this.inputMap[i];
    }
  },
  watch: {
    checked(value) {
      this.$emit('changed', value);
    }
  }
};
</script>

<style scoped></style>
