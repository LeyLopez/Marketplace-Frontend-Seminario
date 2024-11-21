import React from 'react'
import api from '../config/axios';

export const ResponseServices = () => ({
    getResponses: () => api.get('/responses'),
    getResponseByID: (id) => api.get(`/responses/${id}`),
    createResponse: (response) => api.post('/responses', response),
    updateResponse: (response) => api.put(`/responses/${response.id}`, response),
    deleteResponse: (id) => api.delete(`/responses/${id}`)
});
