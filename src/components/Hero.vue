<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  props: {
    title: String,
    subtitle: String
  }
};
</script>
