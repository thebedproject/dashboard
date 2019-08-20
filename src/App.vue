<template>
  <div id="app">
    <NavBar />
    <DonateModal v-if="donateModal" @openDonateModal="donateModalVisible" />
    <div class="columns">
      <div v-if="sideBar" class="column is-one-fifth">
        <SideBar sideBarVisible="sideBarVisible" @openDonateModal="donateModalVisible" />
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
import DonateModal from "./components/DonateModal";

export default {
  name: "app",
  components: {
    NavBar,
    SideBar,
    DonateModal
  },
  data: function() {
    return {
      sideBar: true,
      donateModal: true
    };
  },
  methods: {
    sideBarVisible() {
      this.sideBar = !this.sideBar;
    },
    donateModalVisible() {
      this.donateModal = !this.donateModal;
    }
  }
};
</script>

<style>
</style>
