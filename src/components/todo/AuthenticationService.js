class AuthenticationService {
    registerSuccessfulLogin(username,password) {
        //sessionStorage is provided by js
        sessionStorage.setItem('authencticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authencticatedUser');
    }
}

export default new AuthenticationService();