<template>
    <v-container class="mb-16 pb-16">
        <v-row>
            <v-col sm="10" offset-sm="1" lg="10" offset-lg="1">
                <h1>Contact Us</h1>
                <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row class="mb-16">
            <v-col sm="10" offset-sm="1" lg="10" offset-lg="1">
                <v-row>
                    <v-col lg="5">
                        <v-list>
                            <v-list-item v-for="item in items" :key="item.text">
                                <v-icon color="primary" left>{{ item.icon}}</v-icon>
                                <v-list-item-title>
                                    {{ item.text}}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col lg="7">
                        <v-card elevation="16">
                            <v-card-title primary-title>
                                Send Us a message
                            </v-card-title>
                            <v-card-text>
                                <form action="" method="post">
                                    <v-text-field
                                        name="name"
                                        label="Fullname"
                                        outlined
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        name="name"
                                        label="Email Address"
                                        outlined
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        name="name"
                                        label="Subject"
                                        outlined
                                        clearable
                                    ></v-text-field>
                                    <v-textarea
                                        name="message"
                                        outlined
                                        rows="4"
                                        label="Message"
                                        auto-grow
                                    >
                                    </v-textarea>
                                    <v-btn color="info" large block><v-icon>mdi-loading</v-icon> Submit</v-btn>
                                </form>
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
    data() {
        return {
            items :[
                {text : '364-365 Triumfo St,Carigara, Leyte', icon : 'mdi-map-marker'},
                {text : 'danrishitsolution@gmail.com', icon : 'mdi-email'},
                {text : ' +639123456789', icon : 'mdi-phone'},
            ]
        }
    },
}
</script>

