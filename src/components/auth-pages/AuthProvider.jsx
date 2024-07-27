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

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('userPersisted'));
    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      setIsAuthenticated(true);
    } else {
      console.log('Invalid credentials');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    // setUser(null);
    // localStorage.removeItem('userPersisted');
  };

  const register = (user) => {
    const existingUser = JSON.parse(localStorage.getItem('userPersisted'));

    if (!existingUser) {
      localStorage.setItem('userPersisted', JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
    } else {
      console.log('User already exists.');
    }
  };

  const updateUser = (updatedUser) => {
    localStorage.setItem('userPersisted', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const deleteAccount = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('userPersisted');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register, updateUser, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
