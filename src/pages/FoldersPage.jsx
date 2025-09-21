// src/pages/FoldersPage.jsx
import React, { useState, useEffect } from 'react';
import { Search, Plus, Grid, List, Filter, Star, Clock, FolderPlus, Upload, Settings } from 'lucide-react';
import FolderGrid from '../components/folders/FolderGrid';
import UserMenu from '../components/UserMenu';

const FoldersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [filterType, setFilterType] = useState('all');
  const [showQuickActions, setShowQuickActions] = useState(false);

  // Animation d'entrée
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  const quickFilters = [
    { id: 'all', label: 'Tous les dossiers', count: 24 },
    { id: 'recent', label: 'Récents', count: 8, icon: Clock },
    { id: 'favorites', label: 'Favoris', count: 5, icon: Star },
    { id: 'shared', label: 'Partagés', count: 12 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Header Premium */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Premium */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-200">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                  HUBFILE
                </h1>
                <p className="text-sm text-gray-500 font-medium">Centre de gestion</p>
              </div>
            </div>

            {/* Actions et menu */}
            <div className="flex items-center space-x-4">
              {/* Bouton d'actions rapides */}
              <div className="relative">
                <button
                  onClick={() => setShowQuickActions(!showQuickActions)}
                  className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Plus className="w-5 h-5" />
                </button>
                
                {showQuickActions && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                    <div className="p-2">
                      <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50 rounded-xl transition-colors group">
                        <FolderPlus className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-medium text-gray-900">Nouveau dossier</p>
                          <p className="text-sm text-gray-500">Créer un dossier vide</p>
                        </div>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-green-50 rounded-xl transition-colors group">
                        <Upload className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-medium text-gray-900">Importer</p>
                          <p className="text-sm text-gray-500">Téléverser des fichiers</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <UserMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Section de recherche premium */}
      <div className="bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5 py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Barre de recherche moderne */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-1 shadow-lg border border-white/40">
              <div className="flex items-center">
                <div className="flex items-center flex-1">
                  <Search className="w-6 h-6 text-gray-400 ml-4 mr-3" />
                  <input
                    type="text"
                    placeholder="Rechercher des dossiers, fichiers ou contenu..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 py-4 pr-4 bg-transparent outline-none text-gray-900 placeholder-gray-500 text-lg"
                  />
                </div>
                <button className="m-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium">
                  Rechercher
                </button>
              </div>
            </div>
          </div>

          {/* Filtres rapides */}
          <div className="flex flex-wrap gap-3 justify-center">
            {quickFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setFilterType(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 backdrop-blur-sm ${
                  filterType === filter.id
                    ? 'bg-white/90 text-blue-700 shadow-md border border-blue-200'
                    : 'bg-white/60 text-gray-700 hover:bg-white/80 border border-white/40'
                }`}
              >
                {filter.icon && <filter.icon className="w-4 h-4" />}
                <span className="font-medium">{filter.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  filterType === filter.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Barre d'outils */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/40 shadow-sm">
          {/* Informations */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">24 dossiers trouvés</span>
            </div>
            <div className="text-sm text-gray-500">
              Dernière mise à jour: il y a 2 minutes
            </div>
          </div>

          {/* Contrôles d'affichage */}
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <div className="flex bg-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-6 pb-12">
        <div className="animate-fade-in">
          <FolderGrid 
            searchTerm={searchTerm}
            viewMode={viewMode}
            filterType={filterType}
          />
        </div>
      </main>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
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