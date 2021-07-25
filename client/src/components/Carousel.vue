<template>
  <b-carousel :indicator-inside="false">
    <b-carousel-item v-for="(product, i) in products" :key="i">
      <span class="image">
        <product-details
          :title="getTitle(i)"
          :summary="product.data.description[0].text"
          :image="product.data.image.url"
        />
      </span>
    </b-carousel-item>
    <template #indicators="props">
      <span class="al image">
        <img :src="getThumbUrl(props.i)" :alt="getTitle(props.i)" />
      </span>
    </template>
  </b-carousel>
</template>

<script>
export default {
  components: {
    ProductDetails: require("./ProductDetails.vue").default
  },
  props: {
    products: Array
  },
  methods: {
    getThumbUrl(value) {
      return null || this.products[value].data.thumbnail.url;
    },
    getTitle(value) {
      return null || this.products[value].data.name[0].text;
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
