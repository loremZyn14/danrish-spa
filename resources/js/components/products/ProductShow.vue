<template>
  <v-container class="mt-8">
    <v-row>
      <v-col lg="5">
        <v-carousel hide-delimiter-background cycle height="400px">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col lg="7">
        <h2 class="mb-3 font-weight-thin">{{ product.name}}</h2>
        <div class="d-flex align-center py-3">
          <h4 class="d-inline text--secondary">Rating :</h4>
          <v-rating v-model="rating" half-increments class="d-inline"></v-rating>
          <h4 class="d-inline text--secondary">| 455 sold</h4>
        </div>
        <v-sheet color="blue-grey lighten-5 text--secondary" class="pa-4 mb-8" light>
          <h3 class="d-inline">
            <strike>&#x20B1; {{ product.price }}</strike>

            <span class="primary--text ml-3">-- &#x20B1;{{ discounted }}</span>
          </h3>
          <v-chip class="ml-3 my-0" color="red white--text">20% OFF</v-chip>
        </v-sheet>
        <v-row align="end">
          <v-col lg="2">
            <h3 class="text--secondary">Quantity</h3>
          </v-col>
          <v-col lg="4">
            <v-text-field
              id="qty"
              v-model="product.qty"
              type="number"
              hide-details
              prepend-icon="mdi-minus"
              append-outer-icon="mdi-plus"
              @click:append-outer="addQuantity(product)"
              @click:prepend="decreaseQuantity(product)"
            ></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
        <h5 class="blue--text">{{ product.stocks + ' ' + product.unit }} available</h5>
        <div class="mt-4 w-100">
          <v-spacer></v-spacer>
          <v-btn color="primary" tile text outlined x-large @click="addToCart()">
            <v-icon left>mdi-cart-arrow-down</v-icon>Add to cart
          </v-btn>
          <v-btn color="primary" tile x-large @click="buyNow()">Buy Now</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row fluid>
      <v-col lg="6">
        <v-sheet color="blue-grey lighten-5 text--secondary" class="pa-4" light>
          <h3>Product Specification</h3>
        </v-sheet>
        <v-list>
          <v-list-item v-for="i in 5" :key="i">
            <v-list-item-title class="font-weight-thin">
              Model :
              <strong> Ram 16 GB</strong>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col lg="6">
        <v-sheet color="blue-grey lighten-5 text--secondary" class="pa-4" light>
          <h3>Product Description</h3>
        </v-sheet>
        <v-list>
          <v-list-item v-for="i in 5" :key="i">
            <v-list-item-title>
              Waranty :
              <strong>7 Months</strong>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      rating: 0,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      items2: [
        { header: "Specifications", content: "lorem ipsiun" },
        { header: "Description", content: "lorem inpum" },
      ],
    };
  },
  methods: {
    addQuantity(product) {
      product.qty++;
      product.subtotal = product.qty * product.price;
    },
    decreaseQuantity(product) {
      if (product.qty > 1) {
        product.qty--;
        product.subtotal = product.qty * product.price;
      }
    },
    addToCart() {
      this.$store.commit("cartProducts", this.product);
      this.$router.push({ name: "cart" });
    },
    buyNow(){
        this.$store.getters.selected.push(this.product)
        this.$store.commit("cartProducts", this.product);
        this.$router.push({name:'cart'})
    }
  },
  computed: {
    product() {
      return this.$store.getters.products.find(
        (product) => product.id == this.$route.params.id
      );
    },
    discounted() {
      return this.product.price - Math.round(this.product.price * 0.2 * 100) / 100;
    },
  },
};
</script>
