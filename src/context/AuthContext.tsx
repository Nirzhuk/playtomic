import { useContext, createContext } from "react";
import useFakeAuth from "../hooks/useFakeAuth";

const authContext = createContext({});

export const AuthProvider = ({ children }:any) => {
    const auth = useFakeAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authContext);
}


export default AuthProvider;