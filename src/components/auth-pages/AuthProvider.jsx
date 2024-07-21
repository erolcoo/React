import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const restoreUser = () => {
      const persistedUser = localStorage.getItem('userPersisted');
      if (persistedUser) {
        setUser(JSON.parse(persistedUser));
        setIsAuthenticated(true);
      }
    };

    restoreUser();
  }, []);

  const login = (user) => {
    setUser(user);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('user');
    localStorage.setItem('userPersisted', JSON.stringify(user));
  };

  const register = (user) => {
    const existingUser = JSON.parse(localStorage.getItem('user'));

    if (!existingUser) {
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
    } else {
      console.log('User already exists.');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
