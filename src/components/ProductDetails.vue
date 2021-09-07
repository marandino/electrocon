<template>
  <div class="container has-text-centered">
    <div class="columns is-centered">
      <div class="column is-5">
        <figure class="image is-4by3">
          <prismic-image :field="product.image"></prismic-image>
        </figure>
      </div>
      <div class="column is-6 is-align-self-center">
        <prismic-rich-text class="title" :field="product.name" />
        <prismic-rich-text class="subtitle" :field="product.description" />
        <a
          class="button is-medium is-info is-outlined"
          :href="'/product/' + id"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: String,
    product: Object
  },
  name: "product-details"
};
</script>

<style lang="sass" scoped></style>
