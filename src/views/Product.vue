<template>
  <div>
    <!-- product specific information -->
    <section v-if="productID">
      <div class="columns">
        <div class="column is-one-third block">
          <prismic-image :field="data.image"></prismic-image>
          <a
            class="button is-medium is-info is-outlined"
            href="javascript:void(Tawk_API.toggle())"
          >
            Get a cuotation
          </a>
          <ul>
            <li
              v-for="(feature, i) in data.features"
              :key="i + 'feature'"
              class="column"
            >
              <!-- //TODO: fix this crap pls... how come this data is description1???? -->
              <prismic-rich-text :field="feature.description1">
                {{ feature }}</prismic-rich-text
              >
            </li>
          </ul>
        </div>
        <div class="column mt-5">
          <div class="block">
            <prismic-rich-text
              class="title"
              :field="data.name"
            ></prismic-rich-text>
            <prismic-rich-text
              class="subtitle"
              :field="data.description"
            ></prismic-rich-text>
          </div>
          <ul class="block box">
            <li
              v-for="(detail, i) in data.details"
              :key="i + 'details'"
              class="columns has-text-left is-1"
            >
              <p class="column is-one-third">{{ detail.text }}</p>
              <p class="column is-two-thirds">{{ detail.label }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- other products recommendations -->
    <products-navbar :currentProductCategory="data.category"></products-navbar>
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
