import React from 'react';
import axios from 'axios';


const getProducts = (callback) => {
    axios.get('https://fakestoreapi.com/products')
    .then((res) => {
        callback( res.data )
    })
    .catch((err) => {
        console.log(err)
    })
}

export default getProducts;

export const getDetailProduct = (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
        callback( res.data )
    })
    .catch((err) => {
        console.log(err)
    })
}

;