import axios from '../axios'

const handleLoginAPI = (email, password) => {
    console.log(email)
    console.log(password)
    return axios.post('/api/login',{email,password})
}
export default handleLoginAPI 
