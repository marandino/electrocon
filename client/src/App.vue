<template>
  <div id="app">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      />
    </head>
    <navbar class="container" :copy="this.copy" />
    <router-view
      class="container"
      :copy="this.copy"
      :products="this.products"
    />
  </div>
</template>
<script>
// - TAWK
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function() {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/604d606b067c2605c0b81890/1f0n41970";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

console.log(Tawk_LoadStart, "tawk has been loaded");
//- End of TAWK

export default {
  components: {
    Navbar: require("./components/Navbar.vue").default
  },
  data() {
    return {
      products: Array,
      copy: {
        links: {
          about: Array,
          product: Array,
          contact: Array
        },
        cta: Array,
        logo: Object
      }
    };
  },
  created() {
    this.getContent();
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "product")
      );
      this.products = response.results;
    },
    getContent() {
      this.$prismic.client.getSingle("navbar").then(document => {
        let { data } = document;
        this.copy.cta = [data.primary, data.secondary];
        this.copy.logo = data.logo;
        this.copy.links = [data.about, data.product, data.contact];
        this.copy.navbarSections = ["about", "product range", "contact"];
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
