// src/components/dashboard/UploadZone.jsx
import React from 'react';

const UploadZone = () => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-slate-400 transition-colors bg-white">
      <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Glissez vos fichiers ici</h3>
      <p className="text-gray-500 mb-4">ou cliquez pour sélectionner</p>
      <button className="btn bg-slate-700 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
        Choisir des fichiers
      </button>
      <p className="text-xs text-gray-400 mt-4">Supporte tous les formats — jusqu’à 10 Go par fichier</p>
    </div>
  );
};

export default UploadZone;