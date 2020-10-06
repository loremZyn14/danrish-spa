

import axios from 'axios'

// Get all products from the database

export function getAllCategory() {
    return new Promise((resolve, reject) => {
        axios.get('/api/categories')
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    });
}
// Get a one product from database by id

export function getCategoryById(id) {
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
export function addCategory(category) {
    return new Promise((resolve, reject) => {
        axios.post('/api/products', {
            name: category.name,
            description: category.description,
            alt_img : category.alt_img
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}



