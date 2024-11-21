import React from 'react'
import api from '../config/axios';

export const ReviewServices = () =>({
    getReviews: () => api.get('/reviews'),
    getReviewByID: (id) => api.get(`/reviews/${id}`),
    createReview: (review) => api.post('/reviews', review),
    updateReview: (review) => api.put(`/reviews/${review.id}`, review),
    deleteReview: (id) => api.delete(`/reviews/${id}`)
});
