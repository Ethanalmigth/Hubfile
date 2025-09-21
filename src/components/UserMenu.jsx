// src/components/UserMenu.jsx
import React, { useState } from 'react';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Menu utilisateur"
      >
        <span className="text-slate-700 font-medium text-sm">JD</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mon profil</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Paramètres</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Aide</a>
          <div className="border-t border-gray-100 my-1"></div>
          <a href="/login" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Déconnexion</a>
        </div>
      )}

      {/* Fermer le menu si on clique ailleurs */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default UserMenu;