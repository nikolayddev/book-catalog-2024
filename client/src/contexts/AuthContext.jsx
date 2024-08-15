import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
    user_id: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authstate = {}) => null,
    removeAuthState: () => null
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const removeAuthState = () => {
        setAuthState(null);
    }

    const contextData = {
        user_id: authState?._id,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        removeAuthState
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}