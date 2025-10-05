import React, { useState } from "react";
import { Download, Trash2, Star, Clock } from "lucide-react";
import { FolderCardGrid, FolderCardList } from "./FolderCard";
export default function FolderGrid() {
  const initialFolders = [
    {
      id: 1,
      name: "Documents",
      description: "Fichiers importants",
      created: "Il y a 2 jours",
    },
    {
      id: 2,
      name: "Images",
      description: "Photos et graphiques",
      created: "Il y a 5 jours",
    },
    {
      id: 3,
      name: "Projets",
      description: "Travaux en cours",
      created: "Il y a 1 semaine",
    },
    {
      id: 4,
      name: "Archives",
      description: "Anciens fichiers",
      created: "Il y a 2 semaines",
    },
    {
      id: 5,
      name: "Vidéos",
      description: "Contenus multimédias",
      created: "Il y a 3 jours",
    },
    {
      id: 6,
      name: "Musique",
      description: "Collection audio",
      created: "Il y a 1 mois",
    },
  ];
  const [viewMode, setViewMode] = useState("grid");
  const [filteredFolders, setFilteredFolders] = useState(initialFolders);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Mes Dossiers
          </h1>
          <p className="text-slate-600">Gérez vos fichiers et dossiers</p>
        </div>

        {/* Basculer le mode d'affichage */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">Dossiers</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              Grille
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              Liste
            </button>
          </div>
        </div>

        {/* Section des dossiers */}
        <div className="mb-8">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFolders.map((folder) => (
                <FolderCardGrid key={folder.id} folder={folder} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              {filteredFolders.map((folder, i) => (
                <FolderCardList
                  key={folder.id}
                  folder={folder}
                  isLast={i === filteredFolders.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
