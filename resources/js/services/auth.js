import axios from "axios"

export function login(credentials){
    return new Promise((resolve,reject) =>{

        axios.post('/api/login',credentials)
        .then((response)=> {
            resolve(response.data)
        }).catch((err)=> {
            reject(err)
        });
    });
}

export function logout(user){
    return new Promise((resolve,reject) =>{
        axios.post('/api/logout/'+ user.id)
             .then((response)=> {
                 resolve(response.data)
            }).catch((err)=> {
                 reject(err)
            });
    });
}

export function register(customer){
    return new Promise((resolve,reject) =>{
        axios.post('/api/register',customer)
             .then((response)=> {
                 resolve(response.data)
            }).catch((err) => {
                 reject(err.response.data.errors)
            });
    });
}

export function getLocalUser(){
    const userStr = localStorage.getItem('user');

    if(!userStr){
        return null;
    }
    return JSON.parse(userStr);
}
