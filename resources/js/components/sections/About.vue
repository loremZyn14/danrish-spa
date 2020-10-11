<template>
    <v-container>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="10" offset-lg="1">
                <h1>Few words about Us.</h1>
                <v-divider></v-divider>
                <v-row class="pt-16">
                    <v-col lg="6">
                        <v-sheet class="pa-3">

                            <h3 class="font-weight-medium text-justify mb-3">
                                &emsp; We, at Danrish IT Solution, aim to deliver IT excellence at its finest; may it be Hardware, Sofware and Network services.
                                Quality assurance is our focus, Customer satisfaction is our priority, Employment opportunity is our goal.
                            </h3>
                            <v-row>
                                <v-col lg="3" v-for="item in about" :key="item.text"  class="text-center">
                                    <v-btn class="mx-2 white-border" fab dark  large color="primary">
                                        {{ item.count}}
                                    </v-btn>
                                    <h3 class="subtitle-1 mt-3">{{ item.text}}</h3>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-col>
                    <v-col lg="6">
                        <v-sheet elevation="16">
                            <v-img height="300px" src="/assets/img/about-us.png" aspect-ratio="3/4"></v-img>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-col>
            <v-col sm="10" offset-sm="1" lg="10" offset-lg="1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62599.682213602595!2d124.651988!3d11.2995743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33080f5fea834f87%3A0x50dee86f15c5c13!2s365-355%20Triumfo%20St%2C%20Carigara%2C%20Leyte!5e0!3m2!1sen!2sph!4v1595673546918!5m2!1sen!2sph"
                    width="100%" height="380" frameborder="0" style="border:0" allowfullscreen >
                </iframe>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
export default {
    data: ()=>({
        about : [
            { count : 231, text : 'Client'},
            { count : 300, text : 'Projects'},
            { count : 30, text : 'Services'},
            { count : 30, text : 'Member'}
        ]
    })
}
</script>

<style lang="css">
    .white-border {
        border: 5px solid  !important;
        border-color: white !important;
    }
</style>
