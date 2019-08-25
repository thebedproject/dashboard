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
                  <i class="fa fa-user-lock"></i>
                </span>
                <span>&nbsp;Sign up!</span>
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
              <div>
                <p>
                  <a
                    class="has-text-weight-semibold has-text-primary router-link-active"
                  >I already have an account</a>
                </p>
              </div>
              <div class="field">
                <div class="field is-grouped is-grouped-right">
                  <button @click="login" class="button is-primary is-medium">
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
import { loginRequest } from "../services/user.service";

export default {
  name: "LogIn",
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
      console.log("hit");
    }
  }
};
</script>
