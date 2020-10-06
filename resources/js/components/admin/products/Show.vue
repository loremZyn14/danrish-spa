<template>
  <admin>
    <v-container>
      <v-breadcrumbs :items="items" large></v-breadcrumbs>
      <v-divider></v-divider>
      <v-row>
        <v-col lg="5">
          <v-sheet class="pa-8 pt-0 pb-4">
            <v-row>
              <v-col>
                <v-img src="/assets/img/default.png" width="100%"></v-img>
              </v-col>
            </v-row>
          </v-sheet>
          <v-btn color="primary" class="mt-4 py-6" block>Add Image</v-btn>
        </v-col>
        <v-col lg="7" class="text-right px-8 pt-16">
          <v-text-field prefix="Name : " v-model="product.name" solo></v-text-field>
          <v-row>
            <v-col lg="6">
              <v-text-field
                prefix="Brand: "
                v-model="product.brand"
                solo
              ></v-text-field>
            </v-col>
            <v-col lg="6">
              <v-text-field
                prefix="Price:"
                suffix=".00"
                v-model="product.price"
                solo
              ></v-text-field>
            </v-col>
            <v-col lg="6">
              <v-text-field
                prefix="Unit: "
                v-model="product.unit"
                solo
              ></v-text-field>
            </v-col>
            <v-col lg="6">
              <v-text-field
                prefix="Stocks: "
                v-model="product.stocks"
                solo
              ></v-text-field>
            </v-col>
            <v-select v-model="selected" :items="categories" prefix="Category: " item-text="name" item-value="id"  return-object  solo></v-select>
          </v-row>
          <v-btn color="primary" @click="addProduct()">Add Product</v-btn>
        </v-col>
      </v-row>
    </v-container>

  </admin>
</template>
<script>

import Admin from "../Admin";
import {addProduct} from '../../../services/Products'
export default {
  components: {
    Admin,
  },
  data: () => ({
    product: {
      name: "",
      brand: "",
      price: 0,
      stocks: 1,
      unit: "",
      categoryId: null
    },
    message :'',
    items: [
      {
        text: "Products",
        disabled: false,
        href: "/admin/products",
      },
      {
        text: "add product",
        disabled: true,
        href: "products",
      },
    ],
    img: "logo.png",
    selected : {id:1,name:'computer'},
    categories: [
        {id: 1, name:'computer'},
        {id: 2, name: 'tools'},
        {id: 3 ,name:'equipment'}
    ],
  }),
  methods: {
      addProduct(){
          addProduct(this.product)
          .then((res)=>{
              this.message = res.data
              this.$swal.fire(res.data,'','success')
          })
          .catch((err)=>{
              console.log(err);
          })
      }
  },
  watch: {
      selected:{
          handler(newVal) {
              this.product.categoryId = newVal.id
          },deep: true
      }
  }
};
</script>
