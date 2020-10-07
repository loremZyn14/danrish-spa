<template>
  <v-app  >
    <app-bar></app-bar>

    <v-main class="grey lighten-3" >
        <!-- <v-progress-linear v-if="isLoading" indeterminate color="primary"  ></v-progress-linear> -->
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import AppBar from "./Bar/AppBar";
export default {
    components:{
        AppBar
    },
  data: () => ({
    dialog: false,
    isLoading:true
  }),
  created(){
      this.$store.commit('getAllCategory')
      this.$store.commit('getProducts')
  }

};
</script>


