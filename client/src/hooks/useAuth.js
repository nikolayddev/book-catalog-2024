import { useContext, useEffect } from "react";
import { login, logout, register } from "../api/auth-api"
import AuthContext from "../contexts/UserContext";

export function useLogin() {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);

        return authData;
    };

    return loginHandler;
}

export function useRegister() {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);

        changeAuthState(authData);

        return authData;
    };

    return registerHandler;
}

export function useLogout() {
    const { removeAuthState } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            await logout();
            removeAuthState();
        })();
    }, [removeAuthState])

    return;
}