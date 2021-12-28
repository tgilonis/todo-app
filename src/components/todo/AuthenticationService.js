import axios from 'axios'

class AuthenticationService {
    registerSuccessfulLogin(username,password) {
        //sessionStorage is provided by js
        sessionStorage.setItem('authencticatedUser', username)
        this.setupAxiosInterceptors();
    }

    logout() {
        sessionStorage.removeItem('authencticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authencticatedUser')
        if(user === null) {
            return false
        }
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authencticatedUser')
        if(user === null) {
            return ''
        }
        return user
    }

    setupAxiosInterceptors() {

        let username = "user"
        let password = "password"

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()