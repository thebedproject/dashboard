<template>
  <div class="Map"></div>
</template>

<script>
import * as axios from "axios";
import gmapsInit from "../utils/gmaps";

export default {
  name: "Map",
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el, {
        disableDefaultUI: true
      });

      geocoder.geocode({ address: "London" }, (results, status) => {
        if (status !== "OK" || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });

      const locations = await this.getDonations();
      locations.map(location => {
        const position = {
          lat: location.lat,
          lng: location.lon
        };
        const title = location.amount.toString();

        const marker = new google.maps.Marker({ position, map, title });
        const radius = new google.maps.Circle({
          map,
          radius: location.radius * 1000,
          strokeWeight: 0,
          fillColor: "#1D737A",
          fillOpacity: 0.35
        });
        radius.bindTo("center", marker, "position");
        marker.setVisible(false);
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
  methods: {
    getDonations: async function() {
      const result = await axios.get(
        "https://hdpkjgu3s9.execute-api.eu-west-2.amazonaws.com/test/donations"
      );
      return result.data.donationsResult;
    }
  }
};
</script>

<style>
.Map {
  width: 100vw;
  height: 96vh;
}
</style>
