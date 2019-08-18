<template>
  <div class="section">
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li @click="itemClicked($event)">
          <a v-bind:class="[activeItem === 'Dashboard' ? 'is-active' : null]">Dashboard</a>
        </li>
        <li>
          <a>Maps</a>
        </li>
        <li>
          <ul>
            <li @click="itemClicked($event)">
              <a v-bind:class="[activeItem === 'Beds' ? 'is-active' : null]">Beds</a>
            </li>
            <li @click="itemClicked($event)">
              <a v-bind:class="[activeItem === 'Letter boxes' ? 'is-active' : null]">Letter boxes</a>
            </li>
            <li @click="itemClicked($event)">
              <a v-bind:class="[activeItem === 'Donations' ? 'is-active' : null]">Donations</a>
            </li>
          </ul>
        </li>
      </ul>
      <p class="menu-label">Account</p>
      <ul class="menu-list">
        <li @click="itemClicked($event)">
          <a v-bind:class="[activeItem === 'Your donations' ? 'is-active' : null]">Your donations</a>
        </li>
        <li @click="itemClicked($event)">
          <a v-bind:class="[activeItem === 'Help history' ? 'is-active' : null]">Help history</a>
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
      console.log(this.activeItem);
    }
  }
};
</script>
