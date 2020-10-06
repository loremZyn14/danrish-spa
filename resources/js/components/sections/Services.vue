<template>
    <v-container>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="10" offset-lg="1">
                <h1>Services</h1>
                <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row >
            <v-col lg="10" offset-lg="1" >
                <v-row>
                    <v-col >
                        <v-sheet elevation="10" >
                            <!-- <v-card>
                                <v-card-title class="subtitle-1 ">
                                    <v-icon left >{{ item.icon }}</v-icon>
                                    <span class="text-truncate">{{ item.text}}</span>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ratione iure aliquam nulla est corporis omnis sed debitis saepe id, sequi assumenda dolore, fugit iusto numquam culpa doloremque expedita cum.
                                </v-card-text>
                                <v-card-actions>
                                    <v-badge   class="mr-3" overlap  color="primary" transition="slide-y-transition" :content="item.heart">
                                        <v-icon large color="red" @click="toggleHeart(item)" > mdi-heart{{  item.hearted ? '': '-outline' }}</v-icon>
                                    </v-badge>
                                    <v-badge  overlap  color="primary" transition="slide-y-transition" :content="item.like">
                                        <v-icon color="blue" large  @click="toggleLike(item)">mdi-thumb-up{{  item.liked ? '': '-outline' }}</v-icon>
                                    </v-badge>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text>View Details</v-btn>
                                </v-card-actions>
                            </v-card> -->
                            <h1 class="ma-16 pa-16 text-center">Comming Soon :)</h1>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            items : [
                { id : 1, icon : 'mdi-book-open-variant', text :'TUTORIALS AND TRAININGS', hearted :false,  heart : 30,liked:false, like:100},
                { id : 2, icon : 'mdi-tools', text :'SOFTWARE AND HARDWARE', hearted :false,  heart : 23,liked:false, like:14},
                { id : 3, icon : 'mdi-cctv', text :'CCTV INSTALLATION', hearted :false,  heart : 200,liked:false, like:45},
                { id : 4, icon : 'mdi-lan-connect', text :'NETWORK INSTALLATION', hearted :false,  heart : 13,liked:false, like:67},
                { id : 5, icon : 'mdi-solar-panel-large', text :'SOLAR INSTALLATION', hearted :false,  heart : 48,liked:false, like:89},
                { id : 6, icon : 'mdi-cellphone-link', text :'WEB DEVELOPMENT', hearted :false,  heart : 50,liked:false, like:17},
            ],
        }
    },
    methods :{
        toggleHeart(item){
            if(item.hearted){
                item.heart--;
            }else{
                item.heart++;
            }
            item.hearted = !item.hearted
        },
        toggleLike(item){
            if(item.liked){
                item.like--;
            }else{
                item.like++;
            }
            item.liked = !item.liked
        }
    }
}
</script>
