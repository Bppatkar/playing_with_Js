import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { token, loading } = useAuth();

  // console.log('ProtectedRoute - token:', token);
  // console.log('ProtectedRoute - user:', user);
  // console.log('ProtectedRoute - loading:', loading);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div>
          <h2>Loading...</h2>
          <p>Checking authentication status...</p>
        </div>
      </div>
    );
  }

  if (!token) {
    console.log('❌ No token found in context, redirecting to login');
    console.log('🔍 localStorage content:', {
      token: localStorage.getItem('token'),
      length: localStorage.length,
    });
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
