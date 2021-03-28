<template>
  <b-carousel :indicator-inside="false">
    <b-carousel-item v-for="(product, i) in products" :key="i">
      <span class="image">
        <product-details
          :title="product.name"
          :image="product.images[0]"
          :summary="product.description"
        />
      </span>
    </b-carousel-item>
    <template #indicators="props" repeat>
      <span class="al image">
        <img :src="getImgUrl(props.i)" :title="props.i" />
      </span>
    </template>
  </b-carousel>
</template>

<script>
const products = require("../data/products.json");

export default {
  components: {
    ProductDetails: require("./ProductDetails.vue").default
  },
  // add a method to retrieve all products
  // set the product image as the thumbnail
  // pass the image towards the product detail component as well
  data() {
    return {
      products: products
    };
  },
  methods: {
    getImgUrl(value) {
      return products[value].images[0];
    }
  }
};
</script>

<style>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
</style>
