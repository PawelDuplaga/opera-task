import axios from 'axios';

// baseURL: 'http://localhost:8080'

const axiosClient = axios.create({
    baseURL: process.env.SERVER_URL
})

export default axiosClient;