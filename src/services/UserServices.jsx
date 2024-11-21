import api from "../config/api";

const UserServices = () => ({
    getUsers: () => api.get('/users'),
    getUserByID: (id) => api.get(`/users/${id}`),
    getUserByEmail: (email) => api.get(`/users/email/${email}`),
    createUser: (user) => api.post('/users', user),
    updateUser: (user) => api.put(`/users/${user.id}`, user),
    deleteUser: (id) => api.delete(`/users/${id}`)
});

export default UserServices;