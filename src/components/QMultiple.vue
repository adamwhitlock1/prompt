<template>
  <div class="block">
    <p class="font-bold capitalize" :id="uuids.title" data-testid="m-title">
      {{ title }}
    </p>
    <p v-if="instructions" class="text-xs italic font-light text-gray-700">
      Please choose {{ instructions.text }} {{ instructions.number }} options
      below
    </p>
    <div
      class="flex items-center"
      v-for="(choice, i) in options.choices"
      :key="i"
    >
      <input
        :data-testid="`m-input-${i}`"
        :data-title-id="uuids.title"
        type="checkbox"
        :value="choice"
        v-model="checked"
        class="mr-2 cursor-pointer"
        :id="generateInputMap(i)"
      />
      <label class="cursor-pointer" :for="generateInputMap(i)">{{
        choice
      }}</label>
    </div>
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
      uuids: {
        title: uuid()
      },
      checked: [],
      inputMap: []
    };
  },
  computed: {
    instructions() {
      if (Object.prototype.hasOwnProperty.call(this.options, 'min')) {
        return { text: 'a minimum of', number: this.options.min };
      }
      if (Object.prototype.hasOwnProperty.call(this.options, 'exact')) {
        return { text: 'exactly', number: this.options.exact };
      }
      return null;
    }
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
