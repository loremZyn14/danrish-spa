<template>
  <v-app-bar
    app
    color="blue darken-4"
    dark
    :clipped-left="$vuetify.breakpoint.lgAndUp"

  >
    <v-avatar size="32" class="mr-3">
      <img src="/assets/img/logo.png" alt="alt" />
    </v-avatar>
    <v-toolbar-title>
      <router-link v-if="$vuetify.breakpoint.xs" class="v-toolbar__title" to="/"
        >DITS</router-link
      >
      <router-link
        v-show="!$vuetify.breakpoint.xs"
        class="v-toolbar__title"
        to="/"
        >Danrish IT Solution</router-link
      >
    </v-toolbar-title>
    <v-toolbar-title v-show="!$vuetify.breakpoint.xs">
      <router-link class="v-toolbar__title sm-and-up ml-8" to="/shop"
        >Shop</router-link
      >
    </v-toolbar-title>
    <v-toolbar-title v-show="!$vuetify.breakpoint.xs">
      <router-link class="v-toolbar__title sm-and-up ml-8" to="/services"
        >Services</router-link
      >
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="!user">
      <v-btn text to="/auth">
        Login
        <v-icon small>mdi-login</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-badge
        color="error"
        :content="totalCartItem"
        overlap
        offset-x="20"
        offset-y="20"
        :value="totalCartItem"
      >
        <v-btn class="white--text" icon @click="gotoCart()">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>
      <v-menu offset-y offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            {{ user.name }}
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list class="mt-3" style="min-width: 200px">
          <v-subheader>Manage Account</v-subheader>
          <v-list-item @click="gotoProfile()">
            <v-list-item-title>My Account</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout()">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: "/auth" });
    },
    gotoCart() {
      this.$router.push({ name: "cart" });
    },
    gotoProfile() {
      this.$router.push({
        name: "customerProfile",
        params: { id: this.$store.getters.user.id },
      });
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    totalCartItem() {
      var total = 0;
      this.$store.getters.cartProducts.forEach((cart) => {
        total += cart.qty;
      });

      return total;
    },
  },
};
</script>

<style lang="css">
.v-toolbar__title {
  color: white !important;
  text-decoration: none !important;
}
</style>
