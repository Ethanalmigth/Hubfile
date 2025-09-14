import React from "react";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumb = ({ path = [], onNavigate }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {/* Dossier racine */}
        <li>
          <button
            onClick={() => onNavigate(null)}
            className="btn btn-ghost btn-sm"
          >
            <Home size={16} />
            Accueil
          </button>
        </li>

        {/* Dossiers intermédiaires */}
        {path.map((folder, index) => (
          <li key={folder.id}>
            <button
              onClick={() => onNavigate(folder.id)}
              className="btn btn-ghost btn-sm"
            >
              {folder.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
