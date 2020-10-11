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
export function addProduct(product,image) {
    return new Promise((resolve, reject) => {
        var formData = new FormData();
        formData.append('name',product.name)
        formData.append('brand',product.brand)
        formData.append('stocks',product.stocks)
        formData.append('price',product.price)
        formData.append('unit',product.unit)
        formData.append('description',product.description)
        formData.append('categoryId',product.categoryId)
        formData.append('image',image)
        axios.post('/api/products', formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}



