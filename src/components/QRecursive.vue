<template>
  <div class="mt-2">
    <q-boolean
      v-if="item.type === 'boolean'"
      :title="title"
      :options="options"
      @changed="checkValidation"
    />
    <q-numeric
      v-if="item.type === 'numeric'"
      :title="title"
      @changed="checkValidation"
    />
    <q-multiple
      v-if="item.type === 'multiple'"
      :title="title"
      :choices="item.options.choices"
      @changed="checkValidation"
    />
    <div v-if="hasNested && hasAnswer === true">
      <recursive-container
        v-for="(nestedItem, i) in item.nested"
        :key="i"
        :item="nestedItem"
      ></recursive-container>
    </div>
  </div>
</template>

<script>
import QBoolean from '@/components/QBoolean';
import QNumeric from '@/components/QNumeric';
import QMultiple from '@/components/QMultiple';
import validate from '../validation';
export default {
  name: 'RecursiveContainer',
  components: {
    QBoolean,
    QNumeric,
    QMultiple
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      answer: null
    };
  },
  computed: {
    hasNested() {
      return this.item.nested ? this.item.nested.length > 0 : false;
    },
    hasAnswer() {
      return this.answer;
    },
    title() {
      return this.item.title || 'No title given';
    },
    options() {
      return this.item.options || undefined;
    }
  },
  methods: {
    checkValidation(payload) {
      this.answer = validate(this.item, payload);
    }
  }
};
</script>

<style scoped></style>
