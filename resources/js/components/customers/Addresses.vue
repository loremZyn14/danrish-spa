<template>
  <customer-account>
    <v-container>
      <v-row>
        <v-col lg="10" offset="1">
          <h5 class="text-h5 mb-4">Addresses</h5>
          <v-divider></v-divider>
        </v-col>
        <v-col lg="10" offset="1">
          <v-btn color="primary">
            Add Addreses
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
        <v-col lg="10" offset="1">
          <v-subheader>No Addresses Added</v-subheader>
        </v-col>
        <v-col lg="10" offset="1">
          <v-list>
            <v-list-item>
              <v-list-item-avatar color="primary white--text" size="24">
                1
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Talamban Cebu</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>

                <v-btn outlined color="primary">
                 Update
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col lg="10" offset="1">
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </customer-account>
</template>
<script>
import CustomerAccount from "./CustomerAccount";
export default {
  components: {
    CustomerAccount,
  },
};
</script>
