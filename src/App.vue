<template>
  <div id="app" class="container min-h-screen px-8 py-4 mx-auto bg-gray-100">
    <img
      alt="prompt logo"
      class="w-56 py-12 mx-auto"
      src="./assets/prompt-logo.png"
    />
    <survey-form name="survey">
      <q-recursive
        v-for="(item, i) in surveyData"
        :key="i"
        :item="item"
      ></q-recursive>
    </survey-form>
  </div>
</template>

<script>
import surveyData from '@/data/SurveyData';
import QRecursive from '@/components/QRecursive';
import SurveyForm from '@/components/SurveyForm';
export default {
  name: 'App',
  data() {
    return {
      surveyData
    };
  },
  components: {
    SurveyForm,
    QRecursive
  }
};
</script>

<style></style>
