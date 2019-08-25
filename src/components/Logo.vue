<template>
  <section class="logo" id="thebedprojectlogo">
    <router-link to="/donation-map" :class="passClass">TheBedProject.</router-link>
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

#thebedprojectlogo {
  padding: 8px 0px 0px 14px;
}
</style>
