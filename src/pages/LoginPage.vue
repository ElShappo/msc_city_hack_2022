<template>
  <q-page class="indexPage flex flex-center column text-white">
    <div class="text-h4 q-pb-xl text-weight-light">Login form</div>
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

    <!-- <input type="file" @change="onFileChange" /> -->
  </q-page>
</template>

<script>
// import { Loading } from "quasar";
// import readXlsxFile from "read-excel-file";
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      loginInput: "",
      passwordInput: "",

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
        .then((response) => response.data)
        .then((status) => {
          if (status === "Ok") {
            this.$router.push({ name: "user", params: { login: this.login } });
          } else {
            this.login = "";
            this.password = "";
            this.loginInput = "";
            this.passwordInput = "";

            this.$q.notify({
              type: "negative",
              message: "Пароль или логин введен(-ы) некорректно",
            });
          }
        });

      // Loading.show();
      // setTimeout(() => Loading.hide(), 2000);
    },
    reset() {
      this.loginInput = "";
      this.passwordInput = "";
    },
    // onFileChange(event) {
    //   let xlsxfile = event.target.files ? event.target.files[0] : null;
    //   readXlsxFile(xlsxfile).then((rows) => {
    //     console.log("rows:", rows);
    //   });
    // },
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
