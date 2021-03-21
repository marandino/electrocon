<template>
  <div class="container has-text-centered">
    <div class="columns is-centered">
      <div class="column is-5">
        <figure class="image is-4by3">
          <!-- TOODO: softcode this to be the product piocture -->
          <img src="https://picsum.photos/800/600/?random" alt="Description" />
        </figure>
      </div>
      <div class="column is-6 is-offset-1">
        <h1 class="title is-2" v-text="summary" />
        <h2 class="subtitle is-4" v-text="summary" />
        <br />
        <p class="has-text-centered">
          <a class="button is-medium is-info is-outlined">
            Learn more
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    summary: String,
    image: String
  },
  name: "Product Details"
};
</script>

<style lang="sass" scoped></style>
