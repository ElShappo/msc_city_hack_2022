<template>
  <q-page class="row">
    <!-- <input type="file" @change="onFileChange" /> -->

    <div class="col-3 row justify-center content-center">
      <div class="col-12 row justify-center">
        <q-btn
          @click="calculatePriceOfSelected"
          flat
          bordered
          color="teal col-12 text-weight-light"
        >
          <q-icon left size="3em" name="calculate" />
          <span>Рассчитать пул</span>
        </q-btn>
      </div>
    </div>

    <div class="col-9 q-pr-md q-pl-md row content-center">
      <q-table
        class="col"
        title="Квартиры-аналоги"
        :rows="rows"
        :columns="columns"
        :row-key="createId"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      />
    </div>

    <!-- <div class="q-mt-md col-12">Selected: {{ selected }}</div> -->
  </q-page>
</template>

<script>
export default {
  name: "AnaloguesPage",
  data() {
    return {
      rows: [],
      columns: [
        {
          name: "location",
          align: "center",
          label: "Местоположение",
          field: "0",
          sortable: true,
        },
        {
          name: "rooms",
          align: "center",
          label: "Количество комнат",
          field: "1",
          sortable: true,
        },
        {
          name: "category",
          align: "center",
          label: "Сегмент",
          field: "2",
          sortable: true,
        },
        {
          name: "floors",
          align: "center",
          label: "Этажность дома",
          field: "3",
          sortable: true,
        },
        {
          name: "walls_material",
          align: "center",
          label: "Материал стен",
          field: "4",
          sortable: true,
        },
        {
          name: "floor",
          align: "center",
          label: "Этаж расположения",
          field: "5",
          sortable: true,
        },
        {
          name: "total_area",
          align: "center",
          label: "Площадь квартиры, кв.м",
          field: "6",
          sortable: true,
        },
        {
          name: "kitchen_area",
          align: "center",
          label: "Площадь кухни, кв.м",
          field: "7",
          sortable: true,
        },
        {
          name: "is_balcony",
          align: "center",
          label: "Наличие балкона/лоджии",
          field: "8",
          sortable: true,
        },
        {
          name: "metro_distance",
          align: "center",
          label: "Удаленность от станции метро, мин. пешком",
          field: "9",
          sortable: true,
        },
        {
          name: "condition",
          align: "center",
          label: "Состояние",
          field: "10",
          sortable: true,
        },
      ],
      selected: [],
    };
  },
  methods: {
    createId(row) {
      return row.reduce((partialSum, a) => partialSum + a, 0);
    },

    getSelectedString() {
      return this.selected.length === 0
        ? ""
        : `${this.selected.length} record${
            this.selected.length > 1 ? "s" : ""
          } selected of ${this.rows.length}`;
    },
  },
  mounted() {
    // there will be rest api request
  },
};
</script>
