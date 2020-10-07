<template>
  <v-container class="my-8">
    <v-data-iterator
      no-data-text="No products available."
      no-results-text="Products are not available."
      :loading="$store.getters.products.length == 0 ? true : false"
      loading-text="Getting all products. please wait a moment..."
      :items="filterProducts"
      :search="search"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar flat rounded color="transparent">
          <v-toolbar-title class="black--text text-h4">Shop</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            solo
            hide-details
            label="Search products..."
            append-icon="mdi-magnify"
            v-model="search"
            clearable
            @focus="products = $store.getters.products"
          ></v-text-field>
        </v-toolbar>
        <v-container>
          <h4 class="d-inline mr-8">Categoires</h4>
          <v-chip outlined @click="currentCategory = 'all'">all</v-chip>
          <v-chip
            outlined
            @click="currentCategory = category.name"
            v-for="(category, i) in $store.getters.categories"
            :key="i"
            v-text="category.name"
          ></v-chip>
        </v-container>
      </template>
      <template v-slot:default="props">
        <v-row class="mb-16 pb-16">
          <v-col lg="3" v-for="product in props.items" :key="product.id">
            <v-card outlined max-width="400" light>
              <v-img
                class="white--text align-end"
                src="/assets/img/default.png"
                height="150px"
              >
                <v-card-title class="text-subtitle pa-0 blur">
                  <router-link
                    :to="'/products/' + product.id"
                    class="not-link text-truncate pa-4"
                    >{{ product.name }} {{ product.category.name }}</router-link
                  >
                </v-card-title>
              </v-img>
              <v-card-text>
                Price : &#x20B1; {{ product.price }}.00 <br />Stocks :
                {{ product.stocks + " " + product.unit }}
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
      currentCategory: "all",
    };
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
