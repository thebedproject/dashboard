<template>
  <section class="hero is-primary is-fullheight">
    <Logo />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form>
              <p class="title is-4 is-valigned is-spaced has-text-white">
                <span class="icon is-medium has-text-white">
                  <i class="fa fa-user-lock"></i>
                </span>
                <span>&nbsp;Log in</span>
              </p>
              <div class="field">
                <label class="label has-text-white-bis">Email</label>
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
                <label class="label has-text-white-bis">Password</label>
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
              <div>
                <p>
                  <a
                    class="has-text-weight-semibold has-text-white router-link-active"
                  >I'd like to create an account</a>
                </p>
                <p>
                  <a
                    class="has-text-weight-semibold has-text-white router-link-active"
                  >I've forgotten my password</a>
                </p>
              </div>
              <div class="field">
                <div class="field is-grouped is-grouped-right">
                  <button @click="login" class="button is-link is-medium is-outlined">
                    <span class="icon is-small is-left">
                      <i class="fa fa-arrow-right"></i>
                    </span>
                  </button>
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
import axios from "axios";

export default {
  name: "app",
  components: {
    Logo
  },
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: async function() {
      await axios.post(
        "https://hdpkjgu3s9.execute-api.eu-west-2.amazonaws.com/test/auth",
        {
          data: {
            route: "logIn",
            email: this.email,
            password: this.password
          }
        }
      );
    }
  }
};
</script>
