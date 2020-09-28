<template>
  <v-footer absolute  dark  class="blue darken-4 white--text text-center mt-16" >
    <v-container  >
        <h1 class="display-1 mb-3">Follow Us</h1>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <v-divider width="500px"  class="mx-auto my-3"></v-divider>
        &copy; Copyright Darish IT Solution - All Rights Reserved 2020;
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-discord',
      ],
    }),
  }
</script>
