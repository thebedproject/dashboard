<template>
  <div>
    <div class="section">
      <div class="buttons">
        <div class="button is-fullwidth is-info">Find a bed</div>
        <div class="button is-fullwidth is-info">Donate</div>
      </div>
    </div>
    <div class="section">
      <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li>
            <router-link
              to="/"
              v-bind:class="[this.$route.path === '/' ? 'is-active' : null]"
            >Dashboard</router-link>
          </li>
          <li>
            <a>Maps</a>
          </li>
          <li>
            <ul>
              <li>
                <router-link
                  to="/bed-map"
                  v-bind:class="[this.$route.path === '/bed-map' ? 'is-active' : null]"
                >Beds</router-link>
              </li>
              <li>
                <router-link
                  to="/letter-box-map"
                  v-bind:class="[this.$route.path === '/letter-box-map' ? 'is-active' : null]"
                >Letter boxes</router-link>
              </li>
              <li>
                <router-link
                  to="/donation-map"
                  v-bind:class="[this.$route.path === '/donation-map' ? 'is-active' : null]"
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
              v-bind:class="[this.$route.path === '/your-donations' ? 'is-active' : null]"
            >Your donations</router-link>
          </li>
          <li @click="itemClicked($event)">
            <router-link
              to="/history"
              v-bind:class="[this.$route.path === '/history' ? 'is-active' : null]"
            >Help history</router-link>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar"
};
</script>
