<template>
  <div class="flex">
    <div class="w-1/2">
      <h1 class="text-2xl text-red-700 capitalize">Form Name: {{ name }}</h1>
      <form :name="name" @submit.prevent="onSubmit" ref="survey_form">
        <slot />
        <button
          type="submit"
          class="px-3 py-2 mt-4 text-white bg-red-600 rounded"
        >
          submit
        </button>
      </form>
    </div>
    <div v-if="formSubmission">
      <pre>{{ JSON.parse(formSubmission, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      formSubmission: null
    };
  },
  methods: {
    onSubmit(e) {
      console.log('onSubmit');
      console.log({ e });
      const inputs = [...e.target.elements].filter((item) => {
        console.log({ item });
        return (
          (item.type === 'radio' ||
            item.type === 'checkbox' ||
            item.type === 'number') &&
          (item.checked === true || parseInt(item.value) > 0) &&
          item.tagName === 'INPUT'
        );
      });
      this.formSubmission = JSON.stringify(
        inputs.map((item) => {
          return {
            title: document.getElementById(item.dataset.titleId).innerText,
            label: item.labels[0].innerText,
            value: item.value
          };
        })
      );
    }
  }
};
</script>

<style scoped></style>
