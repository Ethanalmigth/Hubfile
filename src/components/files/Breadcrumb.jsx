// src/components/files/Breadcrumb.jsx
import React from 'react';

const Breadcrumb = ({ currentFolderName = "Mes dossiers", onBack }) => {
  return (
    <div className="flex items-center text-sm text-gray-600 mb-6">
      <button
        onClick={onBack}
        className="flex items-center hover:text-gray-900 transition-colors mr-1"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Mes dossiers
      </button>
      <span className="mx-2">/</span>
      <span className="font-medium text-gray-900">{currentFolderName}</span>
    </div>
  );
};

export default Breadcrumb;