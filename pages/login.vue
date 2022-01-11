<template>
  <div class="login-box card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Login</p>

      <div class="input-group mb-3">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="email"
        />
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-envelope"></span>
          </div>
        </div>
      </div>
      <div class="alert alert-danger" v-if="erros.email.length > 0">
        <i class="icon fas fa-exclamation-triangle"></i>
        {{ erros.email[0] }}
      </div>
      <div class="input-group mb-3">
        <input
          type="password"
          v-model="password"
          class="form-control"
          placeholder="Password"
        />
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-lock"></span>
          </div>
        </div>
      </div>
      <div class="alert alert-danger" v-if="erros.password.length > 0">
        <i class="icon fas fa-exclamation-triangle"></i>
        {{ erros.password[0] }}
      </div>
      <div class="row">
        <div class="col">
          <button @click="login" class="btn btn-primary btn-block">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  layout: "login-layout",

  auth: "guest",
  data() {
    return {
      input: {
        email: null,
        password: null,
      },
      erros: { email: [], password: [] },
    };
  },
  methods: {
    login() {
      this.$auth
        .loginWith("laravelSanctum", {
          data: this.input,
        })
        .then((responnse) => {
          let user = responnse.data.data;
          this.$router.push("/home");
        })
        .catch((err) => {
          this.erros = err.response.data.data;
        });
    },
    ...mapActions({
      getUsers: "users/getUsers",
    }),
  },
  computed: {
    email: {
      get: function () {
        return this.input.email;
      },
      // setter
      set: function (newValue) {
        this.erros.email = [];
        this.input.email = newValue;
      },
    },
    password: {
      get: function () {
        return this.input.password;
      },
      // setter
      set: function (newValue) {
        this.erros.password = [];
        this.input.password = newValue;
      },
    },
  },
};
</script>
