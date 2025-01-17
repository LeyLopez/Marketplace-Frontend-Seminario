import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout:5000, 
    headers:{
        'Content-Type':'application/json'
    }
});

api.interceptors.response.use(
    response=>response, 
    error=>{
        if(error.response){
            console.log(error.response.data);
        }
        return Promise.reject(error);
    }
)

export default api;