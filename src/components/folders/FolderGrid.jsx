// src/components/folders/FolderGrid.jsx
import React, { useState, useEffect } from 'react';
import FolderCard from './FolderCard';
import FolderModal from './FolderModal';

const FolderGrid = () => {
  const [folders, setFolders] = useState([
    {
      id: 1,
      name: "Projets clients",
      description: "Dossier central pour tous les documents clients en cours",
      createdAt: "2025-05-01T10:00:00Z",
    },
    {
      id: 2,
      name: "Documents administratifs",
      description: "Factures, contrats, documents légaux",
      createdAt: "2025-04-15T09:30:00Z",
    },
    {
      id: 3,
      name: "Archives 2024",
      description: "Tous les fichiers de l'année précédente",
      createdAt: "2025-01-10T14:20:00Z",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFolder, setEditingFolder] = useState(null);

  const handleCreateOrUpdate = (folderData) => {
    if (editingFolder) {
      setFolders(folders.map(f => f.id === folderData.id ? folderData : f));
    } else {
      setFolders([...folders, folderData]);
    }
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

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mes dossiers</h1>
          <p className="text-gray-600 mt-1">Organisez vos fichiers en créant et gérant vos dossiers</p>
        </div>
        <button
          onClick={() => {
            setEditingFolder(null);
            setIsModalOpen(true);
          }}
          className="btn bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Nouveau dossier
        </button>
      </div>

      {/* Grid */}
      {folders.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <div className="text-6xl mb-4">📁</div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Aucun dossier</h3>
          <p className="text-gray-500 mb-6">Commencez par créer votre premier dossier</p>
          <button
            onClick={() => {
              setEditingFolder(null);
              setIsModalOpen(true);
            }}
            className="btn bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg font-medium"
          >
            Créer un dossier
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {folders.map((folder) => (
            <FolderCard
              key={folder.id}
              folder={folder}
              onEdit={handleEdit}
              onDelete={handleDelete}
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