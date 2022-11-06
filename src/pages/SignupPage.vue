<template>
  <q-page class="indexPage flex flex-center column text-white">
    <div class="text-h4 q-pb-xl text-weight-light">Registration form</div>
    <q-form @submit="submit" @reset="reset" class="q-gutter-md">
      <q-input
        dark
        color="yellow-3"
        filled
        v-model="loginInput"
        label="Your login"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type your login']"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        dark
        color="yellow-3"
        filled
        v-model="passwordInput"
        label="Your password"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your password',
          (val) =>
            (val && val.length > 5) ||
            'Password should be at least 6 symbols long',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="lock"></q-icon>
        </template>
      </q-input>

      <q-input
        dark
        color="yellow-3"
        filled
        v-model="passwordRetypeInput"
        label="Retype password"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Please retype your password',
          (val) => val === passwordInput || 'Passwords do not match',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="lock"></q-icon>
        </template>
      </q-input>

      <div class="text-center">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import axios from "axios";
// import { Loading } from "quasar";

export default {
  name: "LoginPage",
  data() {
    return {
      loginInput: "",
      passwordInput: "",
      passwordRetypeInput: "",

      login: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.login = this.loginInput;
      this.password = this.passwordInput;

      // const login = this.login;

      const url = "...";
      axios
        .post(url, { login: this.login, password: this.password })
        .then(() => {
          this.$router.push("/login");
        });
    },
    reset() {
      this.loginInput = "";
      this.passwordInput = "";
      this.passwordRetypeInput = "";
    },
  },
};
</script>

<style>
.indexPage {
  background: #780206; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #061161,
    #780206
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #061161,
    #780206
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
