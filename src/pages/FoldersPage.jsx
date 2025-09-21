// src/pages/FoldersPage.jsx
import React, { useState, useEffect } from 'react';
import {Grid, List, Star, Clock } from 'lucide-react';
import FolderGrid from '../components/folders/FolderGrid';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
const FoldersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  const filters = [
    { id: 'all', label: 'Tous', icon: null },
    { id: 'recent', label: 'Récents', icon: Clock },
    { id: 'favorites', label: 'Favoris', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header épuré */}
      <Header/>
      {/* Barre de recherche centrée — sobre et élégante */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <SearchBar/>

          {/* Filtres ultra-simples */}
          <div className="flex justify-center mt-6 space-x-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-1.5 px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-slate-100 text-slate-800 font-medium shadow-sm'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                {filter.icon && <filter.icon className="w-4 h-4" />}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contrôles d'affichage — discret en haut à droite */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-end">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'grid'
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            title="Vue grille"
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'list'
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            title="Vue liste"
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Contenu principal — focus total sur les dossiers */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <FolderGrid
          searchTerm={searchTerm}
          viewMode={viewMode}
          filterType={activeFilter}
        />
      </main>

      {/* Animation subtile d'entrée */}
      <style jsx>{`
        .folder-grid-container {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s ease-out forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FoldersPage;