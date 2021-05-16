<template>
  <carousel class="my-6" :products="this.products" />
</template>

<script>
export default {
  name: "home",
  props: {
    products: Array
  },
  components: {
    Carousel: require("../components/Carousel.vue").default
  }
};
</script>
