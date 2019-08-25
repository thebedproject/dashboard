<template>
  <div>
    <Logo passClass="title is-3 has-text-white-bis" />
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
        <router-link
          to="/find-a-bed"
          class="button is-fullwidth is-inverted is-primary is-outlined"
          @click="findABedModal()"
        >Find a bed</router-link>
        <div class="button is-fullwidth is-inverted is-primary is-outlined">Get a letter box</div>
        <router-link
          to="donate"
          class="button is-fullwidth is-inverted is-primary is-outlined"
          @click="openDonateModal()"
        >Donate</router-link>
        <button @click="logout" class="button is-link is-medium is-outlined">
          <span class="icon is-small is-left">
            <i class="fa fa-sign-out-alt"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
import { logout } from "../services/user.service";

export default {
  name: "SideBar",
  components: {
    Logo
  },
  methods: {
    logout: async function() {
      logout();
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>
