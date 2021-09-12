<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img :src="copy.logo.url" alt="Electrocon Systems Logo" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-dropdown
        class="is-capitalized"
        v-for="(section, index) in copy.navbarSections"
        :key="section"
        :label="section"
      >
        <!-- TODO: add link.href and link.name as a proper link thing @ prismic -->
        <b-navbar-item
          v-for="(link, itemIndex) in copy.links[index]"
          :href="
            section === 'product range' ? '/product?' + link.name : link.url
          "
          :key="itemIndex"
        >
          {{ link.name }}
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons is-capitalized">
          <a class="button is-primary" href="tel:+918048601954">
            <strong>{{ copy.cta[0] }}</strong>
          </a>
          <a
            class="button is-light"
            href="mailto:electrocon2004@gmail.com?Subject=Product%20Enquiry"
          >
            {{ copy.cta[1] }}
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  props: ["copy"]
};
</script>

<style scoped>
.navbar-item img {
  max-height: 5rem;
}
</style>
