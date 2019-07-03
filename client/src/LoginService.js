import axios from 'axios'

const baseUrl = 'http://localhost:7000/user/'

const loginUrl = 'http://localhost:7000/login'

class LoginService {
    // Get User
    static async getAllUser() {
        try {
            const result = await axios.get(baseUrl)
            const data = result.data
            // console.log(data)
            return data.map(user => ({...user}))
        } catch(err) {
            // console.error(err)
        }
    }

    static insertUser (newUser) {
        return axios.post(baseUrl, newUser)
    }

    static login (user) {
        return axios.post(loginUrl, user)
    }
}

export default LoginService
