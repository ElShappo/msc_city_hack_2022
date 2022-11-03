<template>
  <q-page
    class="index text-weight-light text-white row justify-center text-h4 content-center"
  >
    <div class="col-12 row">
      <div class="col-3"></div>
      <div class="col-6">Аналитический центр</div>
    </div>
    <div class="col-12 row">
      <div class="col-3"></div>
      <div class="col-6">There will be some text</div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {};
  },
};
</script>

<style>
.index {
  border: 1px solid black;
  background: no-repeat url(~assets/cropped_index_1.svg);
  background-size: 100%;
  background-position: center;
  background-size: cover;
}

.index_content {
  width: 80vw;
  border: 10px solid white;
}
</style>
