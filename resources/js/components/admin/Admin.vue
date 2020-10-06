<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      permanent
      dark
      app
    >
      <v-list dense nav class="py-0">
        <v-subheader>Danrish IT Solution Corp.</v-subheader>
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
            link
            :to="{ name: item.link }"
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

    <router-view></router-view>
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
          link: "admin",
          name: "admin",
        },
        {
          title: "Products",
          icon: "mdi-food",
          link: "adminProducts",
          name: "products",
        },
        {
          title: "Services",
          icon: "mdi-hammer-wrench",
          link: "adminServices",
          name: "services",
        },
      ],
    };
  },
};
</script>
