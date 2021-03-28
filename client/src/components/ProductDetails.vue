<template>
  <div class="container has-text-centered">
    <div class="columns is-centered">
      <div class="column is-5">
        <figure class="image is-4by3">
          <img :src="image" :alt="title" />
        </figure>
      </div>
      <div class="column is-6 is-align-self-center">
        <h1 class="title is-2" v-text="title" />
        <h2 class="subtitle is-4" v-text="summary" />
        <a class="button is-medium is-info is-outlined">
          Learn more
        </a>
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
