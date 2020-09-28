const { defaults, reject } = require("lodash");

import axios from 'axios'

// Get all products from the database

export function all() {
    return new Promise((resolve, reject) => {
        axios.get('/api/products')
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    });
}
// Get a one product from database by id

export function getProductById(id) {
    return new Promise((resolve, reject) => {
        axios.get(`/api/products/${id}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
    })
}
// Add one product to the database
export function addProduct(product) {
    return new Promise((resolve, reject) => {
        axios.post('/api/products', {
            name: product.name,
            brand: product.brand,
            stocks: product.stocks,
            price: product.price,
            unit: product.unit,
            categoryId: product.categoryId
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}



