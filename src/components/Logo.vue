<template>
  <section class="logo">
    <router-link to="/donation-map" :class="passClass" id="navbar-logo">TheBedProject.</router-link>
  </section>
</template>

<script>
export default {
  name: "logo",
  props: {
    passClass: String
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

.logo {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
}

#navbar-logo {
  padding: 6px 0 0 10px;
}
</style>
