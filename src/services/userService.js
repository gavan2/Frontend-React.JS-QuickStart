import axios from '../axios'

const handleLoginAPI = (email, password) => {
    console.log(email)
    console.log(password)
    return axios.post('/api/login', { email, password })
}

const getAllUserAPI = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createUserAPI = (data) => {
    return axios.post(`/api/create-new-user`, data)
}

export { handleLoginAPI, getAllUserAPI, createUserAPI }  
