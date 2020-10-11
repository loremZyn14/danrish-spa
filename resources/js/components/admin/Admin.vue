<template>
  <v-app id="inspire" >
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      permanent
      dark
      app
      mini-variant
      clipped
      expand-on-hover
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line class="miniVariant px-0">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Llorem</v-list-item-title>
            <v-list-item-subtitle>Admin</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"

            :to="{ path: item.link }"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <slot></slot>
  </v-app>
</template>
<script>
export default {
  data: () => {
    return {
      drawer: true,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          link: "/admin/dashboard",
          name: "admin",
        },
        {
          title: "Products",
          icon: "mdi-food",
          link: "/admin/products/list",
          name: "products",
        },
        {
          title: "Services",
          icon: "mdi-hammer-wrench",
          link: "/admin/services",
          name: "services",
        },
      ],
    };
  },
};
</script>
