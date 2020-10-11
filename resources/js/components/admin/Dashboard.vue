<template>
  <admin>
    <v-container class="mt-8">
      <h1>Dashboard</h1>
      <v-row>
        <v-col cols="3" v-for="i in 4" :key="i">
          <v-sheet
            elevation="8"
            color="blue darken-4 white--text"
            rounded="lg"
            class="pa-4 "
            height="150px"
          >
          <v-row align="center">
              <v-col cols="7" class="text-center">
                  <h1>9</h1>
                  <h3>Orders</h3>
              </v-col>
              <v-col cols="5" class="pa-2">
                  <v-icon size="96" color="white">
                      mdi-account
                  </v-icon>
              </v-col>
          </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-sheet class="mx-4 pa-2" elevation="4" >
        <h1 class="title mb-2">Top 5 Products of the month</h1>
        <v-simple-table>
            <template v-slot:default>
                <thead class="text-center">
                    <tr >
                        <th>Name</th>
                        <th>Total Orders</th>
                        <th>Stokcs</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 5" :key="i">
                        <td>Test Product</td>
                        <td>9</td>
                        <td>100 pcs</td>
                        <td><v-icon @click="''">mdi-eye</v-icon></td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-sheet>
  </admin>
</template>
<script>
import admin from "./Admin";
export default {
  components: {
    admin,
  },
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),
};
</script>
<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
