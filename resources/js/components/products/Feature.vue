<template>
    <v-container >
        <v-row>
            <v-col  sm="10" offset-sm="1" lg="10" offset-lg="1" >
                <h1>Feature Products <span> <v-btn text color="primary" to="/shop" >View All</v-btn></span></h1>
                <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col  sm="10" offset-sm="1" lg="10" offset-lg="1">
                <v-row>
                    <v-col v-for="item in items" :key="item" sm="6" lg="3">
                        <v-card outlined max-width="400">
                            <v-img class="white--text align-end" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="150px">
                                <v-card-title>Product Name</v-card-title>
                            </v-img>
                            <v-card-text >

                                    Price : &#x20B1; 18,000.00 <br>
                                Stocks : 10 pcs

                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" outlined>
                                    <v-icon left>mdi-plus</v-icon>
                                    Add to Cart
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

</template>
<script>
export default {
    name : 'product-feature',
    data() {
        return {
            items : 8
        }
    },
}
</script>
