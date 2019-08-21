<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <logo passClass="title is-3 has-text-white-bis"></logo>
      <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end" @click="showNav = !showNav"></div>
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
