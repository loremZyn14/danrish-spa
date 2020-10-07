<template>
  <admin>
    <v-row >
      <v-col cols="3" class="pl-12 py-16">
          <v-list shaped  tile elevation="8" >
              <v-list-item link to="/admin/products/list">
                  <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title>Products</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>

               <v-list-item link to="/admin/products/orders">
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title>Orders</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
               <v-list-item link >
                   <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title>Request</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
           </v-col>
      <v-col cols="9" class="pr-8 py-16">
          <slot></slot>
      </v-col>
    </v-row>
  </admin>
</template>

<script>
import admin from "./Admin";
export default {
  components: {
    admin,
  },
};
</script>
