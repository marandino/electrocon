<template>
  <b-tabs type="is-toggle" expanded>
    <b-tab-item
      headerClass="is-capitalized"
      v-for="category in categories"
      v-bind:key="category + '-tab'"
      :label="category"
      :value="category"
    ></b-tab-item>
  </b-tabs>
</template>

<script lang="ts">
export default {
  data() {
    return {
      categories: [
        "cable fault locator",
        "high voltage tester",
        "cable route tracer",
        "live cable detector",
        "surge receiver",
        "underground cable fault locator"
      ]
    };
  }
};
</script>
