import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// components

import Auth from './components/auth/Auth';

import Purchase from './components/shop/Purchase';
import Cart from './components/shop/Cart';



import Admin from './components/admin/Admin'
import AdminProducts from './components/admin/AdminProducts'
import AdminProductsShow from './components/admin/products/Show'
import AdminServices from './components/admin/AdminServices'

import Welcome from './components/Welcome';
import Shop from './components/shop/Shop';

import ProductShow from "./components/products/ProductShow";

import Profile from './components/customers/Profile'
import Addresses from './components/customers/Addresses'
import SetPassword from './components/customers/SetPassword'
import PurchaseProducts from './components/customers/PurchaseProducts'

export default new VueRouter({
    routes: [
        { path: '/auth', name: 'auth', component: Auth },
        { path : '/customers/:id/profile',name :'customerProfile', component : Profile},
        { path : '/customers/:id/addresses',name :'customerAddresses', component : Addresses},
        { path : '/customers/:id/password',name :'customerSetPassword', component : SetPassword},
        { path : '/customers/:id/purchase',name :'customerPurchase', component : PurchaseProducts},

        { path: '/', component: Welcome },
        { path: '/shop', name: 'shop', component: Shop },
        { path: '/shop/purchase/continue', name: 'purchase', component: Purchase, meta: { requiresAuth: true } },
        { path: '/shop/cart', name: 'cart', component: Cart, meta: { requiresAuth: true } },
        { path: '/products/:id', name : 'product.show', component : ProductShow },

        {
            path: '/admin', name: 'admin', component: Admin, children: [
                { path: 'products', name: 'adminProducts', component: AdminProducts },
                { path: 'services', name: 'adminServices', component: AdminServices }
            ]
        },
        {path:'/admin/products/:id', name:'adminProductsShow', component:AdminProductsShow },

    ],
    mode: 'history'
})
