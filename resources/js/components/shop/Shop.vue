<template>
  <v-container class="my-8">
    <v-data-iterator
      loading
      loading-text="Getting data"
      :items="filterProducts"
      :search="search"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar flat rounded>
          <v-toolbar-title class="black--text text-h4">Shop</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            solo
            hide-details
            label="Search products..."
            append-icon="mdi-magnify"
            v-model="search"
            @focus="products = $store.getters.products"
          ></v-text-field>
        </v-toolbar>
        <v-container>
          <h4 class="d-inline mr-8">Categoires</h4>
          <v-chip outlined @click="filter('all')">all</v-chip>
          <v-chip outlined @click="filter('tool')">tools</v-chip>
          <v-chip outlined @click="filter('equipment')">equipment</v-chip>
          <v-chip outlined @click="filter('accessories')">accessories</v-chip>
          <v-chip outlined @click="filter('laptop')">laptops</v-chip>
          <v-chip outlined @click="filter('keyboard')">keyboard</v-chip>
        </v-container>
      </template>
      <template v-slot:default="props">
        <v-row class="mb-16 pb-16">
          <v-col lg="3" v-for="product in props.items" :key="product.id">
            <v-card outlined max-width="400" light>
              <v-img
                class="white--text align-end"
                :src="product.link"
                height="150px"
              >
                <v-card-title class="text-subtitle pa-0 blur">
                  <router-link
                    :to="'/products/' + product.id"
                    class="not-link text-truncate pa-4"
                    >{{ product.name }}</router-link
                  >
                </v-card-title>
              </v-img>
              <v-card-text>
                Price : &#x20B1; {{ product.price }}.00 <br />Stocks : 10 pcs
                <br />
                <b>Free Shipping</b>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      products: [],
    };
  },
  methods: {
    filter(category) {
      this.products = this.$store.getters.products;
      if (!(category == "all")) {
        this.products = this.products.filter(
          (product) => product.category.name == category
        );
      }
    },
  },
  computed: {
    filterProducts() {
      if (!this.products.lenght) {
        this.products = this.$store.getters.products;
      }
      return this.products;
    },
  },

};
</script>
<style >
.not-link {
  font-size: 0.8em !important;
  line-height: 1.2em !important;
  color: white !important;
  text-align: justify !important;
  word-break: keep-all !important;
  text-decoration-line: none !important;
}
.not-link:hover {
  font-weight: bolder;
  text-decoration-line: underline !important;
}
.blur {
  background-color: rgba(48, 46, 46, 0.5) !important;
}
</style>
