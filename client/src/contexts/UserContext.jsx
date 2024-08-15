import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
    user_id: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authstate = {}) => null,
    removeAuthState: (authstate = {}) => null
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);
        setAuthState(state);
    };

    const contextData = {
        user_id: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
        removeAuthState
    };

    const removeAuthState = () => {
        localStorage.clear();
        setAuthState({});
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}