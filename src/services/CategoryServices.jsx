import React from 'react'
import api from '../config/axios'

export const CategoryServices = () => ({
  getCategories: () => api.get('/categories'),
  getCategoryByID: (id) => api.get(`/categories/${id}`),
  createCategory: (category) => api.post('/categories', category),
  updateCategory: (category) => api.put(`/categories/${category.id}`, category),
  deleteCategory: (id) => api.delete(`/categories/${id}`)
});
