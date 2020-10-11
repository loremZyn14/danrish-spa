<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row style="height:700px" justify="center" align="center">
          <v-card>
            <v-card-title class="text-h4 px-8 pt-8 pb-8 blue darken-4 white--text">
              <v-avatar size="64" left class="mr-4">
                <img src="/assets/img/logo.png" alt="alt" />
              </v-avatar>
Danrish IT Solution
            </v-card-title>
            <v-divider class="mb-8"></v-divider>
            <v-card-text>
              <v-form ref="loginForm" @submit.prevent="login()">
                <v-text-field
                  rounded
                  outlined
                  name="email"
                  lazy-validation
                  label="Email Addres"
                  v-model="form.email"
                  type="email"
                  :error-messages="emailError"
                />
                <v-text-field
                  rounded
                  outlined
                  name="password"
                  label="Password"
                  v-model="form.password"
                  type="password"
                  :error-messages="passwordError"
                />
                <v-alert type="error" v-show="authError" dismissible>{{ authError}}</v-alert>

                <v-card-actions>
                  <v-btn
                    x-large
                    rounded
                    color="primary"
                    :loading="loading"
                    type="submit"
                    block
                  >Sign In</v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-card-title>Not yet a member?</v-card-title>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                x-large
                text
                class="mr-4"
                @click="registerFormDialog= true"
              >Sign Up</v-btn>
            </v-card-actions>
          </v-card>

        </v-row>
        <v-dialog v-model="registerFormDialog" max-width="500px">
          <v-card>
            <v-card-text>
              <h3 class="text-h3 font-weight-bold pt-12">DITS - Register</h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pt-4">
              <v-form ref="registerForm" @submit.prevent="register">
                <v-text-field
                  rounded
                  outlined
                  name="name"
                  label="Username"
                  v-model="newCustomer.name"
                  :rules="[rules.max]"
                  max="10"
                  :error-messages="registerError.name"
                />
                <v-text-field
                  rounded
                  outlined
                  name="email"
                  label="Email Addres"
                  v-model="newCustomer.email"
                  :error-messages="registerError.email"
                />
                <v-text-field
                  rounded
                  outlined
                  name="password"
                  label="Password"
                  type="password"
                  v-model="newCustomer.password"
                  :error-messages="registerError.password"
                />
                <v-card-actions>
                  <v-btn x-large rounded color="primary" type="submit" block>Register</v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { login, register } from "../../services/auth";
export default {
  data() {
    return {
      registerFormDialog: false,
      form: {
        email: "",
        password: "",
      },
      error: null,
      emailError: "",
      passwordError: "",
      newCustomer: {
        name: "",
        email: "",
        password: "",
      },
      registerError: {
        name: "",
        email: "",
        password: "",
      },
      rules: {
        max: (v) => v.length <= 10 || "Max 10 characters",
      },
    };
  },

  methods: {
    login() {
      this.$store.dispatch("login");
      // this.loading = true;
      login(this.$data.form)
        .then((res) => {
          if (res.errors) {
            res.errors.email
              ? (this.emailError = res.errors.email[0])
              : (this.passwordError = "");
            res.errors.password
              ? (this.passwordError = res.errors.password[0])
              : (this.passwordError = "");
            this.$store.state.loading = false;
          } else {
            this.$store.commit("logginSuccess", res);
            this.$router.push({ path: "/" });
          }
        })
        .catch((err) => {
          this.emailError = "";
          this.passwordError = "";
          this.$store.commit("logginFailed", err);
        });
    },
    register() {
      register(this.newCustomer)
        .then((res) => {
          this.registerFormDialog = false;
          this.form.email = res.email;
          this.newCustomer.name = "";
          this.newCustomer.email = "";
          this.newCustomer.password = "";
        })
        .catch((err) => {
          err.name
            ? (this.registerError.name = err.name[0])
            : (this.registerError.name = "");
          err.email
            ? (this.registerError.email = err.email[0])
            : (this.registerError.email = "");
          err.password
            ? (this.registerError.password = err.password[0])
            : (this.registerError.password = "");
          console.log(err.response);
        });
    },
  },
  computed: {
    authError() {
      return this.$store.getters.authError;
    },
    loading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>
