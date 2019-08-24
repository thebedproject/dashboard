<template>
  <section class="columns">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column">
      <Map />
    </div>
  </section>
</template>

<script>
import SideBar from "../components/SideBar";
import Map from "../components/TransactionsMap";

export default {
  name: "TransactionsMapPage",
  components: {
    Map,
    SideBar
  }
};
</script>
