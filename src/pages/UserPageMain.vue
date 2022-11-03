<template>
  <q-page>
    <!-- <input type="file" @change="onFileChange" /> -->

    <q-uploader
      @added="onFileChangeQuasar"
      label="Upload files"
      color="primary"
      square
      flat
      bordered
      style="max-width: 300px"
    />
  </q-page>
</template>

<script>
import readXlsxFile from "read-excel-file";
export default {
  name: "UserPageMain",
  data() {
    return {
      rows: [],
    };
  },
  methods: {
    onFileChangeQuasar(event) {
      console.log(event);
      let xlsxfile = event ? event[0] : null;
      readXlsxFile(xlsxfile).then((rows) => {
        this.rows = rows;
        console.log("rows:", this.rows);
      });
    },

    // onFileChange(event) {
    //   console.log(event);
    //   let xlsxfile = event.target.files ? event.target.files[0] : null;
    //   readXlsxFile(xlsxfile).then((rows) => {
    //     this.rows = rows;
    //     console.log("rows:", this.rows);
    //   });
    // },
  },

  computed: {
    parsedRows() {
      console.log("hi");
      return 5;
    },
  },
};
</script>
