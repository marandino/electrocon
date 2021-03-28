<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img :src="copy.logo.url" alt="Electrocon Systems Logo" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-dropdown class="is-capitalized" v-for="( section, index ) in copy.navbarSections" :key="section" :label="section">
        <!-- TODO: add every product here dynamically -->
        <b-navbar-item href="#" v-for="(link, itemIndex) in copy.links[index]" :key="itemIndex">
          {{ link.name }}
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons is-capitalized">
          <a class="button is-primary">
            <strong>{{ copy.cta[0] }}</strong>
          </a>
          <a class="button is-light">
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
  data() {
    return {
      copy: {
        links: {
          about: Array,
          product: Array,
          contact: Array,
        },
        cta: Array,
        logo: Object
      }
    };
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle("navbar").then(document => {
        let { data } = document;
        this.copy.cta = [data.primary, data.secondary];
        this.copy.logo = data.logo;
        this.copy.links = [ data.about, data.product, data.contact];
        this.copy.navbarSections = ['about', 'product range', 'contact'];
      });
    }
  }
};
</script>

<style></style>
