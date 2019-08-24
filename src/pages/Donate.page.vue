<template>
  <section class="hero is-light is-fullheight">
    <Logo />
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
                <label class="label has-text-primary">Email</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="email"
                    placeholder="timhawkins@gmail.com"
                    v-model="email"
                    required
                  />
                  <span class="icon is-small is-left has-text-gray">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-primary">Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="********"
                    v-model="password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="field is-grouped">
                  <button @click="login" class="button is-primary is-medium is-fullwidth">Donate</button>
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
  name: "DonatePage",
  data: function() {
    return {
      postcode: "",
      amount: null,
      email: "",
      radius: null
    };
  },
  components: {
    Logo
  },
  methods: {
    donate: async function() {
      const requestName =
        "DonateExecution" + moment().format("DDMMMMYYYYhmmss") + "-donate";
      await api.post(
        "https://hdpkjgu3s9.execute-api.eu-west-2.amazonaws.com/test/donations",
        {
          input: `{ "data": { "postcode": "${this.postcode}", "amount": ${this.amount}, "radius": ${this.radius} }}`,
          name: requestName,
          stateMachineArn:
            "arn:aws:states:eu-west-2:624659335526:stateMachine:Donate"
        }
      );
    }
  }
};
</script>
