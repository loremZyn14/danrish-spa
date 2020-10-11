import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// components

import Auth from './components/auth/Auth';

import Purchase from './components/shop/Purchase';
import Cart from './components/shop/Cart';



import Admin from './components/admin/Admin'
import AdminServices from './components/admin/AdminServices'

import Welcome from './components/Welcome';
import Shop from './components/shop/Shop';

import ProductShow from "./components/products/ProductShow";

import Profile from './components/customers/Profile'
import Addresses from './components/customers/Addresses'
import SetPassword from './components/customers/SetPassword'
import PurchaseProducts from './components/customers/PurchaseProducts'

import Services from './components/services/Services'

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
        { path: '/services', name: 'services',component : Services},
        {
             path: '/admin/dashboard',
             name: 'admin',
             component: ()=>import('./components/admin/Dashboard')
        },
        {
            path: '/admin/products/list',
            name: 'adminProducts',
            component:()=>import('./components/admin/products/Products')
        },
        {
            path: '/admin/products/orders',
            name: 'adminProductOrders',
            component:()=>import('./components/admin/products/Orders')
        },
        {
            path:'/admin/products/addproduct',
            name:'adminAddProduct',
            component:()=>import('./components/admin/products/Show')
        },
        {
            path:'/admin/products/:id/view',
            name:'adminViewProduct',
            component:()=>import('./components/admin/products/View')
        },
        {
            path:'/admin/products/:id/edit',
            name:'adminEditProduct',
            component:()=>import('./components/admin/products/Edit')
        },
        {
            path: '/admin/services',
            name: 'adminServices',
            component: AdminServices
        },

    ],
    mode: 'history'
})
