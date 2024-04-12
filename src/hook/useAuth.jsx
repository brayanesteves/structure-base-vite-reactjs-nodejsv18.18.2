import { createContext, useContext, useState, } from 'react';

const AuthContext = createContext();

export const useAuth = () => {

    const auth = useContext(AuthContext);
    return auth;

};

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const isLogin = () => {
        setIsAuthenticated(true);
    };

    const isLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLogin, isLogout, }}>
            {children}
        </AuthContext.Provider>
    );

};