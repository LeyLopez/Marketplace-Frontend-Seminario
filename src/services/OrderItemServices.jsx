import api from '../config/axios';

export const OrderItemServices = () => ({
    getOrderItems: () => api.get('/orderItems'),
    getOrderItemByID: (id) => api.get(`/orderItems/${id}`),
    createOrderItem: (orderItem) => api.post('/orderItems', orderItem),
    updateOrderItem: (orderItem) => api.put(`/orderItems/${orderItem.id}`, orderItem),
    deleteOrderItem: (id) => api.delete(`/orderItems/${id}`)
    
});
