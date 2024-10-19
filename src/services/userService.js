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

const deleteUserAPI = (userId) => {
    return axios.delete(`/api/delete-user`, {
        data: {
            id: userId
        }
    })
}

const updateUserAPI = (inputData) => {
    return axios.put(`/api/edit-user`, inputData)
}


export {
    handleLoginAPI, getAllUserAPI,
    createUserAPI, deleteUserAPI, updateUserAPI
}  
