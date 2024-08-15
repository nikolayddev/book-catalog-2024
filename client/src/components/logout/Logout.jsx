import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";

export default function Logout() {

    const navigate = useNavigate();
    const logout = useLogout();

    try {
        logout;
        navigate('/');
    } catch (err) {
        alert(err.message);
    }

    return (
        <>
        </>
    );
}