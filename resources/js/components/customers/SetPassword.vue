<template>
  <customer-account>
    <v-container>
      <v-row>
        <v-col lg="10" offset="1">
          <h5 class="text-h5 font-weight-thin mb-4">Set Password</h5>
          <v-divider></v-divider>
        </v-col>
        <v-col lg="6" offset-lg="3"  class="text-right">
         <v-text-field prefix="Current Password:" type="password" outlined dense></v-text-field>
         <v-text-field prefix="New Password:" type="password" outlined  dense></v-text-field>
         <v-text-field prefix="Repeat New Password:" type="password" outlined dense></v-text-field>
         <v-btn color="primary">Change password</v-btn>
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
