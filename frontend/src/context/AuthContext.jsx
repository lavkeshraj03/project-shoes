import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const userInfo = localStorage.getItem('userInfo');
                if (userInfo) {
                    setUser(JSON.parse(userInfo));
                }
            } catch (error) {
                console.error("Failed to parse user info:", error);
                localStorage.removeItem('userInfo');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/users/login`,
            { email, password }
        );
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    };

    const register = async (name, email, password) => {
        const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/users`,
            { name, email, password }
        );
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    // 🔴 CRITICAL: block render until auth check finishes
    if (loading) {
        return null; // or a spinner if you want
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;