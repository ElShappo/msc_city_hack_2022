<template>
  <q-page>
    <!-- <input type="file" @change="onFileChange" /> -->

    <div class="col-12 row justify-center">
      <q-uploader
        class="col-12"
        @added="onFileChangeQuasar"
        label="Upload files"
        color="primary"
        square
        flat
        bordered
        style="max-width: 300px"
      />
    </div>

    <div class="col-12">
      <q-table
        title="Imported table"
        :rows="rows"
        :columns="columns"
        row-key="0"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      />
    </div>
  </q-page>
</template>

<script>
import readXlsxFile from "read-excel-file";

export default {
  name: "UserPageMain",
  data() {
    return {
      rows: [],
      columns: [
        {
          name: "desc",
          align: "center",
          label: "Index",
          field: "0",
          sortable: true,
        },
        {
          name: "value",
          align: "center",
          label: "Value",
          field: "1",
          sortable: true,
        },
      ],
      selected: [],
    };
  },
  methods: {
    onFileChangeQuasar(event) {
      // console.log(event);
      let xlsxfile = event ? event[0] : null;
      readXlsxFile(xlsxfile).then((rows) => {
        this.rows = rows;
        for (let i = 0; i < this.rows.length; ++i) {
          // this.rows[i] = Object.assign(this.rows[i]);
          console.log(this.rows[i]);
        }
      });
    },

    getSelectedString() {
      return this.selected.length === 0
        ? ""
        : `${this.selected.length} record${
            this.selected.length > 1 ? "s" : ""
          } selected of ${this.rows.length}`;
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
};
</script>
