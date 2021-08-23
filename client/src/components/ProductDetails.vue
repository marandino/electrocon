<template>
  <div class="container has-text-centered">
    <div class="columns is-centered">
      <div class="column is-5">
        <figure class="image is-4by3">
          <prismic-image :field="product.image"></prismic-image>
        </figure>
      </div>
      <div class="column is-6 is-align-self-center">
        <prismic-rich-text class="title is-2" :field="product.name" />
        <prismic-rich-text class="subtitle is-4" :field="product.description" />
        <a
          v-if="isCarousel"
          class="button is-medium is-info is-outlined"
          :href="'/product/' + id"
        >
          Learn More
        </a>
        <a
          v-else
          class="button is-medium is-info is-outlined"
          href="javascript:void(Tawk_API.toggle())"
        >
          Get a Quotation
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: String,
    isCarousel: Boolean,
    product: Object
  },
  name: "product-details"
};
</script>

<style lang="sass" scoped></style>
