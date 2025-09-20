// src/components/layout/FileCard.jsx
import React from 'react';

const FileCard = ({ name, type, size, date, isFolder = false }) => {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-lg">
              {isFolder ? "📁" : type === "pdf" ? "📄" : type === "img" ? "🖼️" : "📄"}
            </span>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 group-hover:text-slate-700 transition-colors">
              {name}
            </h4>
            <p className="text-sm text-gray-500">
              {size} • Modifié le {date}
            </p>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
          <button className="p-2 text-gray-400 hover:text-slate-600 rounded-lg hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button className="p-2 text-gray-400 hover:text-slate-600 rounded-lg hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileCard;