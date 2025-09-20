// src/components/auth/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {children}
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            {title === "Bienvenue sur HUBFILE" ? (
              <>
                Vous avez déjà un compte ?{" "}
                <a href="/login" className="text-slate-700 hover:text-slate-800 font-medium">
                  Connectez-vous
                </a>
              </>
            ) : (
              <>
                Pas encore de compte ?{" "}
                <a href="/signup" className="text-slate-700 hover:text-slate-800 font-medium">
                  Inscrivez-vous gratuitement
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;