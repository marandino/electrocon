<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-dropdown label="About Us">
        <!-- TODO: add every product here dynamically -->
        <b-navbar-item href="#">
          Corporate Presentation
        </b-navbar-item>
        <b-navbar-item href="#">
          Corporate Brochure
        </b-navbar-item>
        <b-navbar-item href="#">
          Corporate Video
        </b-navbar-item>
        <b-navbar-item href="#">
          Distributor Inquiry Form
        </b-navbar-item>
      </b-navbar-dropdown>      <b-navbar-dropdown label="Product Range">
        <!-- TODO: add every product here dynamically -->
        <b-navbar-item href="#">
          product 1
        </b-navbar-item>
        <b-navbar-item href="#">
          product 2
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item href="#">
        Contact
      </b-navbar-item>

    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Call Us</strong>
          </a>
          <a class="button is-light">
            Email Us
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style></style>
