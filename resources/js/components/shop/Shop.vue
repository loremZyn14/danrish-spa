<template>
  <div>
    <v-parallax dark height="500" src="/assets/img/shop-bg.jpg">
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <h3 class="text-h1 font-weight-bold">D-Shop</h3>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container class="my-8">
      <v-data-iterator
        no-data-text="No products available."
        no-results-text="Products are not available."
        :loading="$store.getters.products.length == 0 ? true : false"
        loading-text="Getting all products. please wait a moment..."
        :items="filterProducts"
        :search="search"
        :items-per-page="$store.getters.products.length"
        hide-default-footer
      >
        <template v-slot:header>
          <v-container class="position-fixed">
            <v-row>
              <v-col cols="7" class="pl-0">
                <v-tabs background-color="transparent">
                  <v-tab>
                    <v-chip outlined @click="currentCategory = 'all'"
                      >all</v-chip
                    >
                  </v-tab>
                  <v-tab
                    v-for="(category, i) in $store.getters.categories"
                    :key="i"
                  >
                    <v-chip
                      outlined
                      @click="currentCategory = category.name"
                      v-text="category.name"
                    ></v-chip>
                  </v-tab>
                </v-tabs>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  rounded
                  solo
                  hide-details
                  label="Search products..."
                  append-icon="mdi-magnify"
                  v-model="search"
                  clearable
                  @focus="products = $store.getters.products"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template v-slot:default="props">
          <v-row class="pb-8">
            <v-col lg="2" v-for="product in props.items" :key="product.id">
              <v-card outlined max-width="400" light>
                <v-img
                  class="white--text align-end"
                  :src="product.images.length ? product.images[0].image_url: '/assets/img/default.png'"
                  height="150px"
                  lazy-src="/assets/img/default.png"
                >
                  <v-card-title class="text-subtitle pa-0 blur">
                    <router-link

                      :to="'/products/' + product.id"
                      class="not-link text-truncate pa-4"
                      :title="product.name"
                      >{{ product.name }}
                     </router-link
                    >
                  </v-card-title>
                </v-img>
                <v-card-text>
                  Price : &#x20B1; {{ price(product.price) }}.00 <br />
                  {{ product.status ? 'Stocks :' + product.stocks + " " + product.unit : 'Out of Stocks' }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      products: [],
      currentCategory: "all",
    };
  },
  methods: {
    price(amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },

  computed: {
    filterProducts() {
      if (this.currentCategory == "all") {
        return this.$store.getters.products;
      }
      return this.$store.getters.products.filter(
        (product) => product.category.name === this.currentCategory
      );
    },
  },
  mounted() {
    this.$store.commit("getAllCategory");
    this.$store.commit("getProducts");
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
