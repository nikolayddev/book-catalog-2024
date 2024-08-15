import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext.jsx";
import { getUserInfo, login, logout, register } from "../api/auth-api.js";

export function useLogin() {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);

        return authData;
    };

    return loginHandler;
}

export function useRegister() {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password, firstName, lastName, profilePicture) => {
        const { password: _, ...authData } = await register(email, password, firstName, lastName, profilePicture);

        changeAuthState(authData);

        return authData;
    };

    return registerHandler;
}

export function useLogout() {
    const { removeAuthState } = useAuthContext();

    const logoutHandler = async () => {
        await logout();
        removeAuthState();
    };

    return logoutHandler;
}

export function useGetUserInfo() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getUserInfo();
            setUserInfo(result);
        })()
    }, []);

    return [userInfo, setUserInfo];
}