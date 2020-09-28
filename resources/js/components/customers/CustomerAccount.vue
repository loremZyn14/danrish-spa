<template>
  <div>
    <v-navigation-drawer app clipped>
      <v-list dense nav>
        <v-list-item two-line class="miniVariant px-0">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Llorem</v-list-item-title>
            <v-list-item-subtitle>Customer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col lg="6">
              <v-subheader v-if="item.heading">{{ item.heading}}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">Test</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.iconR"
            :append-icon="item.model ? item.icon : item['icon-alt']"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child,i) in item.children" :key="i" link :to="{name: child.link}">
              <v-list-item-icon v-if="child.icon">
                <v-icon>{{child.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ child.text}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link :to="{name:item.link}">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      items: [
        {
          iconR: "mdi-account-circle-outline",
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          model: true,
          text: "My Account",
          children: [
            { icon: "mdi-profile", text: "Profile", link: "customerProfile" },
            {
              icon: "mdi-address",
              text: "Addresses",
              link: "customerAddresses",
            },
            {
              icon: "mdi-password",
              text: "Set Password",
              link: "customerSetPassword",
            },
          ],
        },
        {
          icon: "mdi-notebook-check",
          text: "My Purchase",
          link : 'customerPurchase'
        },
      ],
    };
  },
};
</script>
