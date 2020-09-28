<template>
    <div>
        <v-parallax dark src="assets/img/hero-bg.jpg" height="800" >
            <v-container>
                <v-row  align="center">
                    <v-col lg="7">
                        <h3 class="text-h4  font-weight-bold "> Be confident in every purchase. </h3>
                        <v-divider color="white" class="my-5"></v-divider>

                        <v-subheader>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet reprehenderit sunt quidem numquam neque fugit omnis aliquam, beatae reiciendis voluptatibus ipsam vitae cumque maxime dignissimos excepturi nemo dicta dolorum!</v-subheader>
                        <br>
                        <v-btn x-large color="blue darken-3 white--text" class="mt-3">Get Started</v-btn>


                    </v-col>
                    <v-col lg="5" align="center" >
                        <v-img src="assets/img/logo.png" class="rounded-circle" width="400px"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-parallax>
        <product-feature></product-feature>
        <s-services></s-services>
        <s-about></s-about>
        <s-contact></s-contact>

    </div>
</template>
<script>
import ProductFeature from './products/Feature';

import sServices from './sections/Services';
import sAbout from './sections/About';
import sContact from './sections/Contact';



export default {
    components :{
        ProductFeature,sServices,sAbout,sContact
    },
}
</script>
