<template>
  <b-tabs type="is-toggle" expanded v-on:input="changeCategory">
    <b-tab-item
      headerClass="is-capitalized"
      v-for="category in categories"
      v-bind:key="category + '-tab'"
      :label="category"
      :value="category"
    ></b-tab-item>
  </b-tabs>

  <!-- // sidebar -->
  <!-- // tabs -->
  <!-- // product details -->
</template>

<script>
export default {
  name: "products",
  components: {},
  data() {
    return {
      selectedTab: "",
      categories: [
        "cable fault locator",
        "high voltage tester",
        "cable route tracer",
        "live cable detector",
        "surge receiver",
        "underground cable fault locator"
      ]
    };
  },
  methods: {
    changeCategory(category) {
      console.log(category);
      this.selectedTab = category;
    }
  }
};
</script>
