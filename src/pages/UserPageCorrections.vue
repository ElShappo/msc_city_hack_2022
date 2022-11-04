<template>
  <q-page>
    <q-btn @click="goBackInHistory" color="teal" flat>
      <q-icon left size="3em" name="keyboard_backspace" />
      <div>К предыдущей странице</div>
    </q-btn>
  </q-page>
</template>

<script>
export default {
  name: "UserPageCorrections",
  data() {
    return {};
  },
  methods: {
    goBackInHistory() {
      this.$router.go(-1);
    },
  },
};
</script>
