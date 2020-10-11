
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueSweetalert2 from 'vue-sweetalert2';

import store from './store';
import router from './router';
import AppComponent from './components/App';


// If you don't need the styles, do not connect
// import 'sweetalert2/dist/sweetalert2.min.css';




require('./bootstrap');
Vue.use(VueSweetalert2);
Vue.use(Vuetify)

router.beforeEach((to,from,next)=>{

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const user = store.state.currentUser;

    if (requiresAuth && !user) {
        next('/auth');
    } else if (to.path == '/auth' && user) {
        next('/');
    }else{
        next();
    }
});


const app = new Vue({
    el: '#app',
    router,
    store : store,
    vuetify: new Vuetify(),
    components :{
        AppComponent
    },
});
