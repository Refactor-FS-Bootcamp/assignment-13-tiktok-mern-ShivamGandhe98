import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktokbackend-shivamgandhe2.b4a.run"
})

export default instance