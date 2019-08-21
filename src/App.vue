<template>
  <div id="app" class="has-background-primary">
    <DonateModal v-if="donateModal" @donateModalVisible="donateModalVisible" />
    <FindABedModal v-if="findABedModal" @findABedModalVisible="findABedModalVisible" />
    <div class="columns">
      <div v-if="sideBar" class="column is-one-fifth">
        <SideBar
          @sideBarVisible="sideBarVisible"
          @findABedModalVisible="findABedModalVisible"
          @donateModalVisible="donateModalVisible"
        />
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import DonateModal from "./modals/DonateModal";
import FindABedModal from "./modals/FindABedModal";

export default {
  name: "app",
  components: {
    SideBar,
    DonateModal,
    FindABedModal
  },
  data: function() {
    return {
      sideBar: true,
      donateModal: false,
      findABedModal: false
    };
  },
  methods: {
    sideBarVisible() {
      this.sideBar = !this.sideBar;
    },
    donateModalVisible() {
      this.donateModal = !this.donateModal;
    },
    findABedModalVisible() {
      this.findABedModal = !this.findABedModal;
    }
  }
};
</script>

<style>
</style>
