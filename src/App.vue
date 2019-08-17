<template>
  <div id="app">
    <NavBar />
    <Map />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Map from "./components/Map.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Map
  }
};
</script>

<style>
</style>
