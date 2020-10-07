<template>
    <admin-products>
         <v-data-table
          :headers="headers"
          :items="$store.getters.products"
          :search="search"
          sort-by="calories"
          class="elevation-8 rounded"
        >
          <template v-slot:top>
            <v-toolbar flat color="red--text" rounded>
              <v-toolbar-title class="primary--text">Orders</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                color="text-white"
                rounded
                dense
                clearable
                outlined
              ></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-eye</v-icon>
            <v-icon small class="mr-2" @click="editItem(item)"
              >mdi-pencil</v-icon
            >
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" >Refresh the page</v-btn>
          </template>
        </v-data-table>
    </admin-products>
</template>
<script>
import AdminProducts from '../AdminProducts'
export default {
    components:{
        AdminProducts
    },
      data: () => ({
    dialog: false,
    search: "",
    headers: [
      { text: "Order ID", align: "start", value: "name" },
      { text: "Price", value: "price" },
      { text: "Brand (g)", value: "brand" },
      { text: "Stocks (g)", value: "stocks" },
      { text: "Unit", value: "unit" },
      { text: "Actions", align: "center", value: "actions", sortable: false },
    ],
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
  methods: {


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
}
</script>
