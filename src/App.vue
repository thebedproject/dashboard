<template>
  <div id="app" class="has-background-primary">
    <DonateModal v-if="donateModal" @donateModalVisible="donateModalVisible" />
    <div class="columns">
      <div v-if="sideBar" class="column is-one-fifth">
        <SideBar sideBarVisible="sideBarVisible" @donateModalVisible="donateModalVisible" />
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import DonateModal from "./components/DonateModal";

export default {
  name: "app",
  components: {
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
