// src/components/folders/FolderCard.jsx
import React from 'react';

const FolderCard = ({ folder, onEdit, onDelete, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-amber-600 text-xl">📁</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
              {folder.name}
            </h3>
            {folder.description && (
              <p className="text-sm text-gray-600 mt-1 max-w-xs">{folder.description}</p>
            )}
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(folder.id);
            }}
            className={`p-2 rounded-lg transition-colors ${
              folder.isFavorite
                ? 'text-red-500 hover:text-red-700 hover:bg-red-50'
                : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
            }`}
            title={folder.isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            <svg className="w-4 h-4" fill={folder.isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(folder);
            }}
            className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50"
            title="Modifier"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(folder.id);
            }}
            className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50"
            title="Supprimer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-400">
        Créé le {folder.createdAt.toLocaleDateString('fr-FR')}
      </div>
    </div>
  );
};

export default FolderCard;