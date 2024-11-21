import React from 'react'
import api from '../config/axios';

export const ProductServices = () => ({
    getProducts: () => api.get('/products'),
    getProductByID: (id) => api.get(`/products/${id}`),
    createProduct: (product) => api.post('/products', product),
    updateProduct: (product) => api.put(`/products/${product.id}`, product),
    deleteProduct: (id) => api.delete(`/products/${id}`)
});
