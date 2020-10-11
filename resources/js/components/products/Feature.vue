<template>
  <v-container>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="10" offset-lg="1">
        <h1>
          Feature Products
          <span> <v-btn text color="primary" to="/shop">View All</v-btn></span>
        </h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="10" offset-lg="1">
        <v-row>
          <v-col v-for="(product,i ) in $store.getters.products.slice(0,8)" :key="i" sm="6" lg="3">
            <v-card outlined max-width="400" light>
              <v-img
                class="white--text align-end"
                :src="product.images[0].image_url"
                height="150px"
                lazy-src="/assets/img/default.png"
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
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {

};
</script>
