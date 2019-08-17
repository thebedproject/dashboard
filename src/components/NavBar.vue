<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <logo></logo>
      <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end" @click="showNav = !showNav">
        <router-link class="navbar-item" to="/dashboard">Dashboard</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "NavBar",
  components: {
    Logo
  },
  data: function() {
    return {
      showNav: false
    };
  }
};
</script>
