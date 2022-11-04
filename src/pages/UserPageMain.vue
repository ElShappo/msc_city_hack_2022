<template>
  <q-page class="row">
    <!-- <input type="file" @change="onFileChange" /> -->

    <div class="col-3 row justify-center content-center">
      <div class="col-12 row justify-center q-pb-lg">
        <q-uploader
          @added="onFileChangeQuasar"
          label="Upload a file"
          color="primary"
          style="max-width: 200px; max-height: 120px"
        />
      </div>
      <div class="col-12 row justify-center">
        <q-btn
          @click="calculatePriceOfSelected"
          flat
          bordered
          color="teal col-12 text-weight-light"
        >
          <q-icon left size="3em" name="calculate" />
          <span>Рассчитать стоимость</span>
        </q-btn>
      </div>
    </div>

    <div class="col-9 q-pr-md q-pt-md q-pl-md row content-center">
      <q-table
        class="col"
        title="Imported table"
        :rows="rows"
        :columns="columns"
        row-key="0"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      />
    </div>

    <!-- <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div> -->
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

    checkSelection() {},

    calculatePriceOfSelected() {},

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
