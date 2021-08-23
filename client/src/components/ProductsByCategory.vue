<template>
  <div>
    <!-- <p v-for="product in products" :key="product.id ">

    </p> -->
    <product-details
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :product="product.data"
    ></product-details>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    category: String
  },
  components: {
    ProductDetails: require("./ProductDetails.vue").default
  },
  data() {
    return {
      products: []
    };
  },
  name: "products-by-category",
  methods: {
    async getProducts() {
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("my.product.category", this.category)
      );
      this.products = response.results;
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style lang="sass" scoped></style>
