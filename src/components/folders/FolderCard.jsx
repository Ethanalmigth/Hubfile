import React, { useState } from "react";
import { Folder, MoreVertical } from "lucide-react";


// Composant Carte de Dossier (Grille)
export function FolderCardGrid({ folder }) {
  return (
    <div className="bg-white rounded-xl p-5 hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 group">
      <div className="flex items-start justify-between mb-3">
        <div className="bg-blue-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
          <Folder className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-slate-100 rounded">
            <MoreVertical className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-slate-800 mb-1">{folder.name}</h3>
      <p className="text-sm text-slate-500">{folder.description}</p>
      <p className="text-xs text-slate-400 mt-2">Créé {folder.created}</p>
    </div>
  );
}

// Composant Carte de Dossier (Liste)
export function FolderCardList({ folder, isLast }) {
  return (
    <div
      className={`flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer transition-colors ${
        !isLast ? "border-b border-slate-200" : ""
      }`}
    >
      <div className="flex items-center gap-4 flex-1">
        <div className="bg-blue-500 p-2 rounded-lg">
          <Folder className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-semibold text-slate-800">{folder.name}</p>
          <p className="text-sm text-slate-500">{folder.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-sm text-slate-500">{folder.created}</p>
        <button className="p-1 hover:bg-slate-100 rounded">
          <MoreVertical className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
  );
}
