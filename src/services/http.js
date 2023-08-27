import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8000/api',
  baseURL: 'https://reqres.in/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
