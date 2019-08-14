import axios from 'axios'

const api = axios.create({
  baseURL: 'https://tindev-backend-app-api.herokuapp.com'
})

export default api
