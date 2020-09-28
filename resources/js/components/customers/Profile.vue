
<template>
  <customer-account>
    <v-container>
      <v-row>
        <v-col lg="10" offset="1">
          <h4 class="text-h4 mb-4">Profile</h4>
          <v-divider></v-divider>
        </v-col>
        <v-col lg="2" offset-lg="1">
          <v-card flat>
            <v-img src="/assets/img/logo.png"></v-img>
            <v-card-actions>
              <v-btn color="primary" class="mt-4" outlined>Update Photo</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="6" offset="1" class="text-right">
          <v-text-field label="Username" :value="$store.getters.user.name || ''"></v-text-field>
          <v-text-field label="Email" :value="$store.getters.user.email || ''"></v-text-field>
          <v-text-field prefix="Add Number +63: " :value="$store.getters.user.number || ''"></v-text-field>
          <v-btn color="primary" class="mt-4 px-8">Save</v-btn>
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
