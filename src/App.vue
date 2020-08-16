<template>
  <div id="app" class="container min-h-screen px-8 py-4 mx-auto bg-gray-100">
    <img
      alt="prompt logo"
      class="w-56 py-12 mx-auto"
      src="./assets/prompt-logo.png"
    />
    <h1 class="text-2xl text-red-700">survey task</h1>
    <recursive-container
      v-for="(item, i) in surveyData"
      :key="i"
      :item="item"
    ></recursive-container>
  </div>
</template>

<script>
import surveyData from "@/data/SurveyData";
import RecursiveContainer from "@/components/RecursiveContainer";
export default {
  name: "App",
  data() {
    return {
      surveyData,
    };
  },
  components: {
    RecursiveContainer,
  },
};
</script>

<style></style>
