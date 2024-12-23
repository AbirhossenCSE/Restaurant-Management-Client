import { useContext } from "react";
import AuthContext from "../context/AuthContext/Authcontext";



const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export default useAuth;