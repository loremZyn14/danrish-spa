<template>
  <v-container>
    <v-sheet class="my-4 pa-4 text-h5" elevation="2">
      <v-icon left color="primary" size="32">mdi-clipboard-text-outline</v-icon
      >Create Order
    </v-sheet>
    <v-sheet class="pb-4 px-4 mb-4" elevation="2">
      <v-banner v-if="isDeliveryInfoOK" transition="slide-y-transition">
        <v-subheader class="pl-2">
          <v-icon color="blue" left>mdi-alert-circle-outline</v-icon>
          Delivery Info
        </v-subheader>
        <v-container class="ma-0 py-0">
          <b> {{ order.user.name }} ({{ order.user.number }}) </b> &ensp;
          {{ order.user.address.sitio ? "Sitio. " + order.user.address.sitio + "," : "" }}
          {{
            order.user.address.barangay ? "Brgy. " + order.user.address.barangay + "," : ""
          }}
          {{ order.user.address.municipality }}
          <br /><br />
          <h4>Schedule : {{ order.schedule.time + " " + order.schedule.date }}</h4>
        </v-container>
        <template v-slot:actions>
          <v-btn color="primary" text @click="isDeliveryInfoOK = false">
            Change
          </v-btn>
        </template>
      </v-banner>
      <v-banner v-else transition="slide-y-transition">
        <v-subheader class="pl-2">
          <v-icon color="blue" left>mdi-alert-circle-outline</v-icon>
          Delivery Info
        </v-subheader>
        <v-container grid-list-xs>
          <v-row>
            <v-col cols="6">
              <v-text-field label="Name" v-model="order.user.name"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Number" v-model="order.user.number"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Sitio"
                v-model="order.user.address.sitio"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Barangay"
                v-model="order.user.address.barangay"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Municipality"
                v-model="order.user.address.municipality"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-menu
                ref="schedule"
                v-model="clock"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="clock"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="order.schedule.time"
                    label="Picker in menu"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="clock"
                  v-model="order.schedule.time"
                  full-width
                  @click:minute="$refs.schedule.save(clock)"
                ></v-time-picker>
              </v-menu>
            </v-col>
            <v-col cols="6">
              <v-menu
                v-model="calendar"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="calendar"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="order.schedule.date"
                    label="Picker in menu"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="order.schedule.date"></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
        <v-btn color="info" @click="isDeliveryInfoOK = true"
          >Update Delivery Info</v-btn
        >
      </v-banner>
    </v-sheet>
    <v-sheet class="mb-4 pa-4" elevation="2">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Products Ordered</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th class="text-right">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, i) in purchaseProducts" :key="i">
              <td>
                <v-avatar size="32" color="transparent" tile left>
                  <img src="/assets/img/logo.png" alt="alt" />
                </v-avatar>
                {{ product.name }}
              </td>
              <td>&#x20B1;{{ product.price }}</td>
              <td>{{ product.qty }} pcs</td>
              <td class="text-right">
                &#x20B1; {{ product.qty * product.price }}.00
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-right font-weight-bold">
                Total: &#x20B1; {{ total }}.00
              </td>
            </tr>
          </tfoot>
        </template>
      </v-simple-table>
    </v-sheet>
    <v-sheet class="d-inline-flex align-center" elevation="2" width="100%">
      <h3 class="ma-5">Payment Method</h3>
      <v-radio-group v-model="order.payment" row>
        <v-radio label="Cash on Delivery" value="cod"></v-radio>
        <v-radio
          label="Paypal (not yet available)"
          value="paypal"
          disabled
        ></v-radio>
      </v-radio-group>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        tile
        class="px-12 py-6 mr-5"
        :loading="loading"
        :disabled="!isDeliveryInfoOK"
        @click="submitOrder"
        >Submit Order</v-btn
      >
    </v-sheet>
  </v-container>
</template>
<script>
import { now } from "../../services/date";
export default {
  data() {
    return {
      isDeliveryInfoOK: true,
      loading: false,
      clock: false,
      calendar: false,
      order: {
        user: {
          name: this.$store.getters.user.name,
          number: "09466640372",
          address: {
            sitio: "Nasunugan",
            barangay: "Tutug-an",
            municipality: "Barugo",
          },
        },
        products: this.$store.getters.purchaseProducts,
        payment: "cod",
        schedule: {
          date: new Date().toISOString().substr(0, 10),
          time: now().getTime,
        },
        totalAmount :this.total,
        status : 'pending...',
        date: new Date().toISOString().substr(0, 10),
      },
    };
  },
  methods: {
    submitOrder() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        alert("order successfully added");
        this.$store.getters.orders.push(Object.assign({},this.order))
        this.$store.state.purchaseProducts = []
        this.$router.push({
          path: `/customers/${this.$store.getters.user.id}/purchase`,
        });
      }, 3000);
    },
  },
  computed: {
    purchaseProducts() {
      return this.$store.getters.purchaseProducts;
    },
    total() {
      var total = 0;
      this.purchaseProducts.forEach((product) => {
        total += product.qty * product.price;
      });
      return total;
    },
  },
  mounted() {
      this.order.totalAmount = this.total
  },
};
</script>
