class AuthenticationService {
    registerSuccessfulLogin(username,password) {
        //sessionStorage is provided by js
        sessionStorage.setItem('authencticatedUser', username)
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
}

export default new AuthenticationService()