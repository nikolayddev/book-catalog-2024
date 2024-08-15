import { createContext } from "react";

const AuthContext = createContext({
    user_id: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authstate = {}) => null,
    removeAuthState: (authstate = {}) => null
});

export default AuthContext;