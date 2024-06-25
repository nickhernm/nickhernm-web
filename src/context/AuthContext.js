import React, { createContext, useState, useEffect } from 'react';
import api from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        api.defaults.headers.common['x-auth-token'] = token;
        try {
          const res = await api.get('/auth');
          setUser(res.data);
        } catch (err) {
          console.error('Error loading user', err);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      api.defaults.headers.common['x-auth-token'] = res.data.token;
      const userRes = await api.get('/auth');
      setUser(userRes.data);
      return true;
    } catch (err) {
      console.error('Login error', err);
      return false;
    }
  };

  const register = async (formData) => {
    try {
      const res = await api.post('/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      localStorage.setItem('token', res.data.token);
      api.defaults.headers.common['x-auth-token'] = res.data.token;
      const userRes = await api.get('/auth');
      setUser(userRes.data);
      return true;
    } catch (err) {
      console.error('Registration error', err);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['x-auth-token'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};