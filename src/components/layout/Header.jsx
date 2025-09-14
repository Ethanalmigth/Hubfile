import React from 'react';
import { Menu, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="navbar bg-base-100 shadow-sm border-b">
      {/* Menu mobile */}
      <div className="navbar-start">
        <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost lg:hidden">
          <Menu size={20} />
        </label>

        {/* Logo */}
        <div className="hidden lg:flex items-center">
          <h1 className="text-xl font-bold text-primary">HubFile</h1>
        </div>
      </div>

      {/* Barre de recherche (centrée, input + bouton alignés */}
      <div className="navbar-center flex-grow px-4">
        <div className="form-control w-full max-w-md">
          <div className="input-group flex">
            <input
              type="text"
              placeholder="Rechercher des fichiers..."
              className="input input-bordered w-full"
              aria-label="Rechercher des fichiers"
            />
            <button type="submit" className="btn btn-square btn-primary">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu utilisateur */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <User size={20} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profil</a>
            </li>
            <li>
              <a>Paramètres</a>
            </li>
            <li>
              <a>Déconnexion</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;