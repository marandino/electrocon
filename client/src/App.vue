<template>
  <div id="app">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <navbar />
    <router-view />
  </div>
</template>

<script>
export default {
  components:{
    Navbar: require('./components/Navbar.vue').default,
  }
}
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
