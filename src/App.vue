<template>
  <div id="app">
    <NavBar />
    <div class="columns">
      <div class="column is-one-fifth">
        <SideBar />
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar";

export default {
  name: "app",
  components: {
    NavBar,
    SideBar
  }
};
</script>

<style>
</style>
