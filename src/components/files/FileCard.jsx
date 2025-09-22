// src/components/files/FileCard.jsx
import React, { useState } from 'react';

const FileCard = ({ file, onRename, onDelete, onDownload, onShare, onToggleFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'img': return '🖼️';
      case 'video': return '🎥';
      case 'audio': return '🎵';
      case 'zip': return '📦';
      default: return '📄';
    }
  };

  return (
    <div
      className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-lg">{getIcon(file.type)}</span>
          </div>
          <div className="min-w-0">
            <h4 className="font-medium text-gray-900 group-hover:text-slate-700 transition-colors break-all">
              {file.name}
            </h4>
            <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
              <span>{file.size}</span>
              <span>•</span>
              <span>Modifié le {file.updatedAt.toLocaleDateString('fr-FR')}</span>
            </div>
          </div>
        </div>

        {/* Actions au hover */}
        {isHovered && (
          <div className="flex space-x-1 opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(file.id);
              }}
              className={`p-2 rounded-lg transition-colors ${
                file.isFavorite
                  ? 'text-red-500 hover:text-red-700 hover:bg-red-50'
                  : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
              }`}
              title={file.isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            >
              <svg className="w-4 h-4" fill={file.isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRename(file);
              }}
              className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50"
              title="Renommer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDownload(file);
              }}
              className="p-2 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50"
              title="Télécharger"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onShare(file);
              }}
              className="p-2 text-gray-400 hover:text-amber-600 rounded-lg hover:bg-amber-50"
              title="Partager"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(file.id);
              }}
              className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50"
              title="Supprimer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileCard;