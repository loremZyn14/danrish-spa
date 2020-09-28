<template>
  <customer-account>
    <v-container>
      <v-row>
        <v-col lg="10" offset="1">
          <h4 class="text-h4 font-weight-thin mb-4">Purchase Products</h4>
          <v-divider></v-divider>
        </v-col>
        <v-col lg="10" offset-lg="1">
          <v-expansion-panels inset>
            <v-expansion-panel>
              <v-expansion-panel-header v-slot="{ open }">
                <v-row no-gutters>
                  <v-col cols="4">ID: 2001-44564-899</v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open">Purchase Details</span>
                      <v-row v-else no-gutters style="width: 100%">
                        <v-col cols="6">Date Order : Wed 21, 2020</v-col>
                        <v-col cols="6">Status : Pending ...</v-col>
                      </v-row>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Product Name &bull; &#x20B1; 19.00</v-list-item-title>
                            <v-list-item-subtitle>
                                Total : 19 . 00
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Product Name &bull; &#x20B1; 19.00</v-list-item-title>
                            <v-list-item-subtitle>
                                Total : 19 . 00
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header v-slot="{ open }">
                <v-row no-gutters>
                  <v-col cols="4">ID: 2001-44564-900</v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open">Purchase Details</span>
                      <v-row v-else no-gutters style="width: 100%">
                        <v-col cols="6">Date Order : Sun 25, 2020</v-col>
                        <v-col cols="6">Status : Pending ...</v-col>
                      </v-row>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Product Name &bull; &#x20B1; 19.00</v-list-item-title>
                            <v-list-item-subtitle>
                                Total : 19 . 00
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Product Name &bull; &#x20B1; 19.00</v-list-item-title>
                            <v-list-item-subtitle>
                                Total : 19 . 00
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
  data: () => ({
      date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },

    }),
};
</script>
