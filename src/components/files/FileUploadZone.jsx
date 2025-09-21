// src/components/files/FileUploadZone.jsx
import React from 'react';

const FileUploadZone = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    onUpload(files);
  };

  return (
    <div className="mb-8">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-slate-400 transition-colors bg-white"
      >
        <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-900">Glissez vos fichiers ici</span>
        <span className="text-xs text-gray-500 mt-1">ou cliquez pour parcourir</span>
        <input
          id="file-upload"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      <p className="text-xs text-gray-400 text-center mt-2">Supporte tous les formats — max 10 Go/fichier</p>
    </div>
  );
};

export default FileUploadZone;