<template>
  <section class="hero is-light is-fullheight">
    <Logo passClass="title is-3 has-text-primary" />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form class="box">
              <p class="title is-4 is-valigned is-spaced has-text-primary">
                <span class="icon is-medium has-text-primary">
                  <i class="fa fa-donate"></i>
                </span>
                <span>&nbsp;Donate</span>
              </p>
              <div class="field">
                <label class="label has-text-primary">Location</label>
                <div class="control has-icons-left">
                  <input class="input" placeholder="E14 7DX" v-model="postcode" required />
                  <span class="icon is-small is-left has-text-gray">
                    <i class="fa fa-thumbtack"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-primary">Code</label>
                <div class="control has-icons-left">
                  <input class="input" placeholder="your-bed-code" v-model="code" required />
                  <span class="icon is-small is-left">
                    <i class="fa fa-bed"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="field is-grouped">
                  <button
                    @click="donate"
                    class="button is-primary is-medium is-fullwidth"
                  >Find a bed</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "../components/Logo";
const api = require("../utils/plugins/axios");
const moment = require("moment");

export default {
  name: "FindABedPage",
  data: function() {
    return {
      postcode: ""
    };
  },
  components: {
    Logo
  },
  methods: {
    donate: async function() {
      const requestName =
        "FindBedExecution" + moment().format("DDMMMMYYYYhmmss") + "-findabed";
      await api.post(
        "https://hdpkjgu3s9.execute-api.eu-west-2.amazonaws.com/test/beds",
        {
          input: `{ "data": { "postcode": "${this.postcode}", "amountRequired": 8 }}`,
          name: requestName,
          stateMachineArn:
            "arn:aws:states:eu-west-2:624659335526:stateMachine:FindABed"
        }
      );
    }
  }
};
</script>
