<template>
  <div id="app">
    <NavBar />
    <div class="columns">
      <div class="column is-one-fifth">
        <SideBar />
      </div>
      <div class="column">
        <MapPage />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar";
import MapPage from "./pages/Map.page";

export default {
  name: "app",
  components: {
    NavBar,
    SideBar,
    MapPage
  }
};
</script>

<style>
</style>
