<template>
  <q-header>
    <div
      class="col-2 row justify-start items-center text-h3 text-weight-light text-white text-center"
    >
      <q-btn
        class="col-grow row justify-start items-center q-pl-xl text-h3 text-weight-light"
        flat
        no-caps
        to="/"
      >
        <span><q-icon size="2em" name="person" /></span>
        <span> {{ $route.params.login }}</span>
      </q-btn>

      <q-btn to="/" flat>
        <q-icon left size="3em" name="logout" />
        <div>log out</div>
      </q-btn>

      <q-btn class="q-mr-md" flat>
        <q-icon left size="3em" name="help" />
        <div>Help</div>
      </q-btn>
    </div>
  </q-header>
</template>

<script>
export default {
  name: "UserPage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
