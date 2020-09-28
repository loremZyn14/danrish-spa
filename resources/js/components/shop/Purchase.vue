<template>
  <v-container>
    <v-sheet class="my-4 pa-4 text-h5" elevation="2">
      <v-icon left color="primary" size="32">mdi-cart</v-icon>Checkout
    </v-sheet>
    <v-sheet class="pa-4 mb-4" elevation="2">
      <v-icon>mdi-map-marker</v-icon> Delivery Address
      <v-banner single-line>
        <b> {{ $store.getters.user.name }} (+63) 4666 40372 </b> &ensp; Nasipit,
        Talamban, Cebu City, Visayas, Cebu 6000
        <template v-slot:actions>
          <v-btn color="primary" text> Change </v-btn>
        </template>
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
              <td>{{ product.name }}</td>
              <td>&#x20B1;{{ product.price }}</td>
              <td>{{ product.qty }} pcs</td>
              <td class="text-right">&#x20B1; {{ product.subtotal }}.00</td>
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


    <v-sheet class="d-inline-flex" elevation="2" width="100%">
      <h3 class="ma-5">Payment Method</h3>
      <v-radio-group v-model="row" row>
        <v-radio label="Cash on Delivery" value="cod"></v-radio>
        <v-radio label="Paypal" value="paypal" disabled></v-radio>
      </v-radio-group>
    </v-sheet>
    <v-container fluid class="text-right">
      <v-btn
        color="primary"
        tile
        class="px-12 py-6"

        >Place Order</v-btn
      >
    </v-container>
  </v-container>
</template>
<script>

export default {

  data() {
    return {
      sa: true,
      codConfirm: false,
      paypalConfirm: false,
      banner: false,
      row: "cod",
    };
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
};
</script>

<style lang="css">
.paypal {
  width: 400px !important;
}
</style>
