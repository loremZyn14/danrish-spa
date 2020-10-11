import Vue from 'vue';
import Vuex from 'vuex';
import { getAllCategory } from './services/categories'
import { all } from './services/Products'
import { getLocalUser } from "./services/auth";

Vue.use(Vuex);
const  user = getLocalUser()

export default new Vuex.Store({
    state : {
        currentUser : user,
        isLoggedIn : !! user,
        loading : false,
        authError : null,
        cartProducts : [],
        purchaseProducts : [],
        products : [],
        selected : [],
        orders : [],
        categories: [],
    },
    getters : {
        user(state){
            return state.currentUser;
        },
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        authError(state) {
            return state.authError;
        },
        products(state){
            return state.products
        },
        categories(state){
            return state.categories
        },
        selected(state){
            return state.selected
        },
        purchaseProducts(state){
            return state.purchaseProducts;
        },
        cartProducts(state) {
            return state.cartProducts;
        },
        orders(state) {
            return state.orders;
        }

    },
    actions :{
        login(context) {
            context.commit("login");
        },

    },
    mutations : {
        login(state){
            state.loading = true;
            state.authError = null;
        },
        logginSuccess(state,payload) {

            state.loading = false
            state.isLoggedIn = true;
            state.authError = null;
            state.currentUser = Object.assign({},payload.user,{token : payload.access_token});
            localStorage.setItem('user',JSON.stringify(state.currentUser));
        },
        logginFailed(state,payload) {
            state.loading = false;
            state.authError = payload.message;
        },
        logout(state) {
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        purchaseProducts(state,products){
            products.forEach(product => {
                var isProduct = false;
                for (let ndx = 0; ndx < state.purchaseProducts.length; ndx++) {
                    isProduct = false;
                    if(product.id == state.purchaseProducts[ndx].id) {
                        state.purchaseProducts[ndx].qty+= product.qty;
                        state.purchaseProducts[ndx].subtotal+= product.subtotal;
                        isProduct = true;
                        break;
                    }
                }
                // console.log(isProduct)
                if(!isProduct){
                    state.purchaseProducts.push(product)
                }
            });


        },
        cartProducts(state,cartProduct) {

            if(state.cartProducts.length){
                var isProduct = false;
                state.cartProducts.find(product =>{
                    isProduct = false;
                    if(cartProduct.id == product.id){
                        product.qty+= cartProduct.qty
                        product.subtotal += cartProduct.subtotal
                        isProduct = true;
                    }
                    return isProduct;
                })

                if(!isProduct){
                    state.cartProducts.push(cartProduct)
                }
            }else{
                state.cartProducts.push(cartProduct)
            }
        },
        removeCartItem(state,product){
           let index =  state.cartProducts.indexOf(product);
           state.cartProducts.splice(index,1);
        },
        getProducts(state){
            all()
            .then((response)=>{
                response.data.forEach(product => {
                    product.qty = 1
                    product.subTotal = product.price
                });
                state.products = response.data
                console.log(response.data);
            })
            .catch((error)=>{
                alert('Something went wrong!')
            })
        },
        getAllCategory(state){
            getAllCategory()
            .then((response)=>{
                state.categories = response.data
            })
            .catch((error)=>{
                alert('Something went wrong!')
            })
        },

    },

});
