<template>
  <section>
    <b-tabs size="medium" vertical v-model="activeCategory">
      <b-tab-item
        v-for="category in categories"
        :label="category"
        :value="category"
        :key="category"
      >
        <products-by-category :category="category"> </products-by-category>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
export default {
  name: "products",
  components: {
    ProductsByCategory: require("../components/ProductsByCategory.vue").default
  },
  created() {
    let uri = window.location.href.split("?");
    this.activeCategory = decodeURI(
      uri[1] || "Underground Cable Fault Locators"
    );
  },
  data() {
    return {
      activeCategory: "",
      categories: [
        "Underground Cable Fault Locators",
        "Cable Fault Prelocators",
        "Hi Pot Testers",
        "Cable Route Tracers",
        "Relay Testers"
      ]
    };
  }
};
</script>
