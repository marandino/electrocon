<template>
  <b-carousel :indicator-inside="false">
    <b-carousel-item v-for="(item, i) in 6" :key="i">
      <span class="image">
        <product-details title="title" image="iamge" summary="summary" />
      </span>
    </b-carousel-item>
    <template #indicators="props">
      <span class="al image">
        <img :src="getImgUrl(props.i)" :title="props.i" />
      </span>
    </template>
  </b-carousel>
</template>

<script>
export default {
  components: {
    ProductDetails: require("./ProductDetails.vue").default
  },
  // add a method to retrieve all products
  // set the product image as the thumbnail
  // pass the image towards the product detail component as well
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
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
