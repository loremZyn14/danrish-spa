<template>
  <customer-account>
    <v-container>
      <v-row>
        <v-col lg="10" offset="1">
          <h5 class="text-h5 font-weight-thin mb-4">Purchase Products</h5>
          <v-divider></v-divider>
        </v-col>
        <v-col lg="10" offset-lg="1">
          <v-expansion-panels inset>
            <v-expansion-panel
              v-for="(order, i) in $store.getters.orders"
              :key="i"
            >
              <v-expansion-panel-header v-slot="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"><h4>ID: 2001-44564-899</h4></v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <h4 class="text-right mr-4" v-if="open">Order Details</h4>
                      <v-row v-else no-gutters style="width: 100%">
                        <v-col cols="6">Date Order : {{ order.date }}</v-col>
                        <v-col cols="6">Status : {{ order.status }}</v-col>
                      </v-row>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-row>
                  <v-col lg="6">
                    <v-list>
                      <v-list-item
                        v-for="(product, j) in order.products"
                        :key="j"
                        three-line
                      >
                        <v-list-item-avatar>
                          <v-img
                            src="https://randomuser.me/api/portraits/men/81.jpg"
                          ></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>{{
                            product.name
                          }}</v-list-item-title>
                          <v-list-item-subtitle>
                            Quantity:
                            {{ product.qty + " " + product.unit }} &bull; Price
                            : &#x20B1; {{ product.price }}.00
                          </v-list-item-subtitle>
                          <v-list-item-subtitle>
                            Total : &#x20B1; {{ product.subTotal }}.00
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-col>
                  <v-col lg="6">
                    <v-list>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title>
                            <v-icon size="20" color="blue"
                              >mdi-alert-circle-outline</v-icon
                            >
                            Delivery Info
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            <b>
                              {{ order.user.name }} ({{ order.user.number }})
                            </b>
                            &ensp;
                            {{
                              order.user.address.sitio
                                ? "Sitio. " + order.user.address.sitio + ","
                                : ""
                            }}
                            {{
                              order.user.address.barangay
                                ? "Brgy. " + order.user.address.barangay + ","
                                : ""
                            }}
                            {{ order.user.address.municipality }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>
                            <v-icon size="20" color="blue"
                              >mdi-clock-time-four-outline</v-icon
                            >
                            Schedule
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            {{
                              order.schedule.time + " " + order.schedule.date
                            }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>
                            <v-icon size="20" color="blue"
                              >mdi-currency-usd</v-icon
                            >
                            Payment Method
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            Cash on Delivery (COD)
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <h5 class="ml-5 mb-4">
                      Total : &#x20B1; {{ order.totalAmount }}.00
                    </h5>
                    <v-divider></v-divider>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col lg="10" offset="1">
          <v-banner v-if="!$store.getters.orders.length">
            You no product(s) had been ordered
            <template v-slot:actions>
              <v-btn color="primary" text :to="{path: '/shop'}"> Order now </v-btn>
            </template>
          </v-banner>
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
      name: "",
      location: null,
      start: null,
      end: null,
    },
  }),
};
</script>
