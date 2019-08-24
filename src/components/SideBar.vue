<template>
  <div>
    <Logo />
    <div class="section">
      <aside class="menu">
        <p class="menu-label has-text-white">General</p>
        <ul class="menu-list">
          <li>
            <router-link
              to="/"
              v-bind:class="[this.$route.path === '/' ? 'is-active' : null]"
              class="has-text-white"
            >Dashboard</router-link>
          </li>
          <p class="menu-label has-text-white">General</p>
          <ul>
            <li>
              <router-link
                to="/bed-map"
                v-bind:class="[this.$route.path === '/bed-map' ? 'is-active' : null]"
                class="has-text-white"
              >Beds</router-link>
            </li>
            <li>
              <router-link
                to="/letter-box-map"
                v-bind:class="[this.$route.path === '/letter-box-map' ? 'is-active' : null]"
                class="has-text-white"
              >Letter boxes</router-link>
            </li>
            <li>
              <router-link
                to="/donation-map"
                v-bind:class="[this.$route.path === '/donation-map' ? 'is-active' : null]"
                class="has-text-white"
              >Donations</router-link>
            </li>
          </ul>
        </ul>
        <p class="menu-label has-text-white">Account</p>
        <ul class="menu-list">
          <li>
            <router-link
              to="/your-donations"
              v-bind:class="[this.$route.path === '/your-donations' ? 'is-active' : null]"
              class="has-text-white"
            >Your donations</router-link>
          </li>
          <li>
            <router-link
              to="/history"
              v-bind:class="[this.$route.path === '/history' ? 'is-active' : null]"
              class="has-text-white"
            >Help history</router-link>
          </li>
        </ul>
      </aside>
    </div>
    <div class="section">
      <div class="buttons">
        <div
          class="button is-fullwidth is-inverted is-primary is-outlined"
          @click="findABedModal()"
        >Find a bed</div>
        <div class="button is-fullwidth is-inverted is-primary is-outlined">Get a postcode</div>
        <div
          class="button is-fullwidth is-inverted is-primary is-outlined"
          @click="openDonateModal()"
        >Donate</div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "SideBar",
  components: {
    Logo
  },
  methods: {
    openDonateModal() {
      this.$emit("donateModalVisible");
    },
    findABedModal() {
      this.$emit("findABedModalVisible");
    }
  }
};
</script>
