<template>
  <div class="section">
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li @click="itemClicked($event)">
          <router-link
            to="/"
            v-bind:class="[activeItem === 'Dashboard' ? 'is-active' : null]"
          >Dashboard</router-link>
        </li>
        <li>
          <a>Maps</a>
        </li>
        <li>
          <ul>
            <li @click="itemClicked($event)">
              <router-link
                to="/bed-map"
                v-bind:class="[activeItem === 'Beds' ? 'is-active' : null]"
              >Beds</router-link>
            </li>
            <li @click="itemClicked($event)">
              <router-link
                to="/letter-box-map"
                v-bind:class="[activeItem === 'Letter boxes' ? 'is-active' : null]"
              >Letter boxes</router-link>
            </li>
            <li @click="itemClicked($event)">
              <router-link
                to="/donation-map"
                v-bind:class="[activeItem === 'Donations' ? 'is-active' : null]"
              >Donations</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <p class="menu-label">Account</p>
      <ul class="menu-list">
        <li @click="itemClicked($event)">
          <router-link
            to="/your-donations"
            v-bind:class="[activeItem === 'Your donations' ? 'is-active' : null]"
          >Your donations</router-link>
        </li>
        <li @click="itemClicked($event)">
          <router-link
            to="/history"
            v-bind:class="[activeItem === 'Help history' ? 'is-active' : null]"
          >Help history</router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data: function() {
    return {
      activeItem: "Dashboard"
    };
  },
  methods: {
    itemClicked: function(e) {
      this.activeItem = e.path[1].textContent;
    }
  }
};
</script>
