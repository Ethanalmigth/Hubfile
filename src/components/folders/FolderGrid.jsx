// src/components/folders/FolderGrid.jsx
import React, { useState, useEffect } from 'react';
import FolderCard from './FolderCard';
import FolderModal from './FolderModal';

const FolderGrid = ({ searchTerm = '', filterType = 'all', viewMode = 'grid' }) => {
  // Données initiales avec favoris et dates
  const [folders, setFolders] = useState([
    {
      id: 1,
      name: "Projets clients",
      description: "Dossier central pour tous les documents clients en cours",
      createdAt: new Date(2025, 4, 1), // mai 2025
      isFavorite: true,
    },
    {
      id: 2,
      name: "Documents administratifs",
      description: "Factures, contrats, documents légaux",
      createdAt: new Date(2025, 3, 15), // avril 2025
      isFavorite: false,
    },
    {
      id: 3,
      name: "Archives 2024",
      description: "Tous les fichiers de l'année précédente",
      createdAt: new Date(2025, 0, 10), // janvier 2025
      isFavorite: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFolder, setEditingFolder] = useState(null);

  // Filtre & tri
  const filteredFolders = folders
    .filter(folder => {
      // Filtre par recherche
      const matchesSearch = folder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           folder.description?.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtre par type
      if (filterType === 'favorites') return folder.isFavorite && matchesSearch;
      if (filterType === 'recent') {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return folder.createdAt > oneMonthAgo && matchesSearch;
      }
      return matchesSearch; // 'all'
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // tri par date (plus récent en premier)

  const handleCreateOrUpdate = (folderData) => {
    if (editingFolder) {
      setFolders(folders.map(f => f.id === folderData.id ? folderData : f));
    } else {
      setFolders([...folders, { ...folderData, createdAt: new Date() }]);
    }
    setIsModalOpen(false);
    setEditingFolder(null);
  };

  const handleEdit = (folder) => {
    setEditingFolder(folder);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce dossier ?")) {
      setFolders(folders.filter(f => f.id !== id));
    }
  };

  const toggleFavorite = (id) => {
    setFolders(folders.map(f =>
      f.id === id ? { ...f, isFavorite: !f.isFavorite } : f
    ));
  };

  // Écoute l'événement global pour ouvrir le modal
  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
      setEditingFolder(null);
    };
    window.addEventListener('open-create-folder', handleOpenModal);
    return () => window.removeEventListener('open-create-folder', handleOpenModal);
  }, []);

  return (
    <div>
      {/* Empty State */}
      {filteredFolders.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 mx-auto max-w-3xl">
          <div className="text-8xl mb-6 opacity-60">📁</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Aucun dossier trouvé</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
            {searchTerm || filterType !== 'all'
              ? "Essayez d’élargir votre recherche ou changer de filtre."
              : "Commencez par créer votre premier dossier pour organiser vos fichiers."}
          </p>
          {!searchTerm && filterType === 'all' && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white font-medium rounded-xl shadow-sm hover:shadow transition-all duration-200 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Créer un nouveau dossier
            </button>
          )}
        </div>
      )}

      {/* Grille ou Liste */}
      {filteredFolders.length > 0 && (
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredFolders.map((folder) => (
            <FolderCard
              key={folder.id}
              folder={folder}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      <FolderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingFolder(null);
        }}
        onSubmit={handleCreateOrUpdate}
        initialData={editingFolder}
      />
    </div>
  );
};

export default FolderGrid;