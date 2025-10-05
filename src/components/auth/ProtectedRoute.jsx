// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Authenticated } from '../../utils/utils';

const ProtectedRoute = ({ children }) => {
  if (!Authenticated()) {
    // Redirige vers login si non authentifié
    return <Navigate to="/login" replace />;
  }

  // Sinon, affiche la page protégée
  return children;
};

export default ProtectedRoute;