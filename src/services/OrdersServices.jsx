import api from "../config/axios"

export const OrdersServices = () => ({
  getOrders:()=>api.get('/orders'),
  getOrderByID: (id)=>api.get(`/orders/${id}`),
  createOrder: (order)=>api.post('/orders', order),
  updateOrder: (order)=>api.put(`/orders/${order.id}`, order),
  deleteOrder: (id)=>api.delete(`/orders/${id}`)
});
