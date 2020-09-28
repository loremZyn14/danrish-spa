<template>
  <v-card flat class="pa-8">
      <v-sheet class="mb-3">
          <v-row align="end">
              <v-col>
                  <h2>Products</h2>
              </v-col>
              <v-col>
                  <v-tabs right>
            <v-tab v-for="(tab,i) in tabs" :key="i" v-text="tab"></v-tab>
        </v-tabs>
              </v-col>
          </v-row>
      </v-sheet>
    <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color=" text--white" >
            <v-btn color="text--white" text outlined  class="my-2"  :to="{path:'/admin/products/addproduct'}" link>
                Add Product
                <v-icon>mdi-plus</v-icon>
              </v-btn>

          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            color="text-white"
        ></v-text-field>

        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-eye</v-icon>
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search:'',
    tabs : [ "List","Orders","Request"],
    breadcrumbs :[
        { text: 'Products',disabled: false,href:'products'},
        { text: 'List',disabled: true},

    ],
    headers: [
      { text: "Name", align: "start", sortable: false, value: "name" },
      { text: "Price", value: "calories" },
      { text: "Brand (g)", value: "fat" },
      { text: "Stocks (g)", value: "carbs" },
      { text: "Unit", value: "unit" },
      { text: "Actions", align:'center', value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      unit: "",
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      unit: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          unit: "pcs",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          unit: "pcs",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          unit: "dozen",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          unit: "pack",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          unit: "pcs",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          unit: "pkg",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          unit: "pkg",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          unit: "pcs",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          unit: "pcs",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          unit: "pkg",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
