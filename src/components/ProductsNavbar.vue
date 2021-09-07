<template>
  <section>
    <b-tabs
      size="medium"
      horizontal
      type="is-toggle"
      :expanded="true"
      v-model="activeCategory"
    >
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
  name: "products-navbar",
  components: {
    ProductsByCategory: require("./ProductsByCategory.vue").default
  },
  created() {
    let uri = window.location.href.split("?");
    this.activeCategory = decodeURI(uri[1] || this.currentProductCategory);
  },
  props: {
    currentProductCategory: String
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
