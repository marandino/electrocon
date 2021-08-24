<template>
  <div>
    <products-navbar></products-navbar>
    <prismic-image :field="data.image"></prismic-image>
    <prismic-rich-text :field="data.detail"></prismic-rich-text>
    <prismic-rich-text :field="data.description"></prismic-rich-text>
    <!-- <prismic-rich-text :field="data.details"></prismic-rich-text> -->
    <ul>
      <li
        v-for="(detail, i) in data.details"
        :key="i + 'details'"
        class="columns has-text-left is-1"
      >
        <p class="column is-one-third">{{ detail.text }}</p>
        <p class="column is-two-thirds">{{ detail.label }}</p>
      </li>
    </ul>
    <ul>
      <li
        v-for="(feature, i) in data.features"
        :key="i + 'feature'"
        class="columns"
      >
        <!-- //TODO: fix this crap pls... how come this data is description1???? -->
        <prismic-rich-text :field="feature.description1">
          {{ feature }}</prismic-rich-text
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "product",
  components: {
    ProductsNavbar: require("../components/ProductsNavbar.vue").default
  },
  created() {
    this.getData();
  },
  data() {
    return {
      data: {},
      productID: this.$route.params.id
    };
  },
  methods: {
    async getData() {
      const response = await this.$prismic.client.getByID(this.productID);
      this.data = response.data;
    }
  }
};
</script>
