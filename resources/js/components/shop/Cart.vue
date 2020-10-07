<template>
  <v-container class="mt-8">
    <v-row>
      <v-col lg="9">
        <v-card flat>
          <v-card-title>
            <v-btn :to="{name : 'shop'}" link text color="primary">
              <v-icon>mdi-arrow-left</v-icon>continue shopping
            </v-btn>
          </v-card-title>
          <v-card-title>
            <v-icon left>mdi-cart</v-icon>My Cart
          </v-card-title>
          <v-card-text>
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="cart"
              :single-select="singleSelect"
              item-key="name"
              show-select
              class="elevation-1"
            >
              <template
                v-slot:[`item.total`]="{item}"
              >&#x20B1; {{ item.qty * item.price}} .00</template>
              <template v-slot:[`item.actions`]="{item}">
                <v-btn icon @click="deleteItem(item)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <template v-slot:[`item.qty`]="{item}">
                <v-text-field
                  v-model="item.qty"
                  min="0"
                  type="number"
                  hide-details
                  prepend-icon="mdi-minus"
                  append-outer-icon="mdi-plus"
                  @click:append-outer="addQuantity(item)"
                  @click:prepend="decreaseQuantity(item)"
                ></v-text-field>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3">
        <v-sheet class="px-4 py-8">
          <h2>Product Summary</h2>
          <h4 class="mt-2 font-weight-thin">
            Selected Items(
            <strong>{{totalSelected}}</strong>)
          </h4>
          <h4>Merchandise Subtotal &#x20B1; {{ subTotal}}.00</h4>
          <v-btn
            :disabled="!selected.length"
            color="primary"
            :outlined="!selected.length"
            class="px-8 py-4 mt-4"
            tile
            :block="$vuetify.breakpoint.smAndDown"
            @click="checkOut()"
          >Check Out</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      confirm: false,
      singleSelect: false,
      headers: [
        { text: "Product", align: "start", sortable: false, value: "name" },
        { text: "Unit Price", value: "price" },
        { text: "Quantity", value: "qty" },
        { text: "Total Price", value: "total" },
        { text: "Actions", align: "center", value: "actions", sortable: false },
      ],
      selected:[]
    };
  },
  methods: {
    deleteItem(item) {
      const cartIndex = this.cart.indexOf(item);
      const selectedIndex = this.selected.indexOf(item);
      confirm("Are you sure you want to delete this item?")
      && this.cart.splice(cartIndex, 1)
      && this.selected.splice(selectedIndex, 1)

    },

    checkOut() {
      this.$router.push({ name: "purchase" });
      this.$store.commit("purchaseProducts", this.selected);
      for(let i = 0 ; i < this.selected.length;i++){
          for(let j = 0;j < this.cart.length;j++){
              if(this.selected[i].id == this.cart[j].id){
                  const cartIndex = this.cart.indexOf(this.cart[j]);
                  this.cart.splice(cartIndex, 1)
              }
          }
      }
      this.$store.state.selected  = []
    },

    addQuantity(product) {
      product.qty++;
    },
    decreaseQuantity(product) {
      if (product.qty > 1) {
        product.qty--;
      }
    },
    removeCartItem(product) {
      this.$store.commit("removeCartItem", product);
    },
  },
  computed: {
    cart() {
      return this.$store.getters.cartProducts;
    },
    total() {
      var total = 0;
      this.cartProducts.forEach((product) => {
            total += product.qty * product.price;
      });
      return total;
    },
    totalSelected() {
      let total = 0;
      if (this.selected.length) {
            this.selected.forEach((product) => {
            total += product.qty;
        });
      }
      return total;
    },
    subTotal() {
      let total = 0;
      if (this.selected.length) {
        this.selected.forEach((product) => {
          total += product.qty * product.price;
        });
      }
      return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  watch: {
    cart: {
      handler(newval) {
        newval.forEach((product) => {
          if (product.price < 1) {
            product.price = 1;
          }
        });
      },
      deep: true,
    },
    selected : {
        handler(newValue){
            this.$store.state.selected = newValue
        }, deep:true
    }
  },
  created() {
    this.selected = this.$store.getters.selected
  },
};
</script>
