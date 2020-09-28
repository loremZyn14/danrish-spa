<template>
  <v-app id="app">
    <app-bar></app-bar>

    <v-main>
        <v-progress-linear v-if="isLoading" indeterminate color="primary"  ></v-progress-linear>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { all } from '../services/Products'
import AppBar from "./Bar/AppBar";
export default {
    components:{
        AppBar
    },
  data: () => ({
    dialog: false,
    isLoading:true
  }),
  methods: {
      initialize(){
        all()
        .then((response)=>{
            console.log(response)
            response.data.forEach(product => {
                product.qty = 1
                product.subTotal = product.price
                this.$store.state.products.push(product)
            });
            this.isLoading = false
        })
        .catch((error)=>{
            alert('Something went wrong!')
        })
    },
  },
  beforeCreate(){

  },
  created(){
      this.initialize()
  },
  mounted(){
      console.log(this.$store.getters.products);
  }
};
</script>


