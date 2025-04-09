import React, { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../../Api/authAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const profile = await authApi.getProfile();
        setUser(profile);
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (credentials) => {
    await authApi.login(credentials);
    const profile = await authApi.getProfile();
    setUser(profile);
  };

  const logout = async () => {
    await authApi.logout();
    setUser(null);
  };

  const register = async (registerData) => {
    await authApi.register(registerData);
    const profile = await authApi.getProfile();
    setUser(profile);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
