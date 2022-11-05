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

    <div class="col-9 q-pr-md q-pl-md row content-center">
      <q-table
        class="col"
        title="Квартиры"
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
import readXlsxFile from "read-excel-file";

export default {
  name: "UserPageMain",
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

  computed: {
    formattedSelected() {
      let result = {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
      };
      for (let row of this.selected) {
        let obj = {
          location: "",
          rooms: "",
          category: "",
          floors: "",
          walls_material: "",
          floor: "",
          total_area: "",
          kitchen_area: "",
          is_balcony: "",
          metro_distance: "",
          condition: "",
          price: "",
        };
        let i = 0;
        for (let key in obj) {
          let elem = row[i];
          obj[key] = elem;
          ++i;
        }
      }
      return 0;
    },
  },

  watch: {
    selected() {
      for (let row of this.selected) {
        for (let elem of row) {
          console.log(elem);
        }
      }
      // console.log(this.selected);
    },
  },
  methods: {
    onFileChangeQuasar(event) {
      // console.log(event);
      let xlsxfile = event ? event[0] : null;
      readXlsxFile(xlsxfile).then((rows) => {
        rows.shift();
        console.log(rows);
        this.rows = rows;
        for (let i = 0; i < this.rows.length; ++i) {
          // this.rows[i] = Object.assign(this.rows[i]);
          console.log(this.rows[i]);
        }
      });
    },

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

    calculatePriceOfSelected() {
      let occurrencesForEachNumberOfRooms = new Array(6).fill(0);
      // each index corresponds to amount of parsed flats with such rooms number
      // we imply that the max number of rooms is 5. So we need to store 6 elements
      // 0 index corresponds to amount of flats with zero rooms, etc

      if (this.selected.length === 0) {
        this.$q.notify({
          type: "warning",
          message: "Ни одна квартира не выбрана",
        });
        return;
      }

      for (let row of this.selected) {
        let rooms = row[1]; // get number of rooms
        occurrencesForEachNumberOfRooms[rooms] += 1;
      }

      for (let num of occurrencesForEachNumberOfRooms) {
        if (num > 1) {
          this.$q.notify({
            type: "negative",
            message: "Количество комнат должно быть уникально",
          });
          return;
        }
      }

      // const article = { title: "Vue POST Request Example" };
      // const url = "...";
      // axios
      //   .post("https://reqres.in/api/articles", article)
      //   .then((response) => (this.articleId = response.data.id));

      this.$q.notify({
        type: "positive",
        message: "Success!",
      });

      this.$router.push("analogues");
    },
  },
};
</script>
