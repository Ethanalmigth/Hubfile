// src/pages/FilePage.jsx
import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/files/Breadcrumb";
import FileUploadZone from "../components/files/FileUploadZone";
import FileCard from "../components/files/FileCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { Filter, Star, Clock, Grid, List } from 'lucide-react';


const FilePage = ({ folderName = "Projets clients" }) => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "Rapport financier Q1 2025.pdf",
      type: "pdf",
      size: "2.4 Mo",
      updatedAt: new Date(2025, 4, 12),
      isFavorite: true,
    },
    {
      id: 2,
      name: "photo_vacances.jpg",
      type: "img",
      size: "5.1 Mo",
      updatedAt: new Date(2025, 4, 10),
      isFavorite: false,
    },
    {
      id: 3,
      name: "presentation_finale.pptx",
      type: "ppt",
      size: "8.7 Mo",
      updatedAt: new Date(2025, 4, 8),
      isFavorite: false,
    },
    {
      id: 4,
      name: "archive_projet.zip",
      type: "zip",
      size: "42.3 Mo",
      updatedAt: new Date(2025, 4, 5),
      isFavorite: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const handleUpload = (newFiles) => {
    const mappedFiles = newFiles.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      type: getFileType(file.name),
      size: formatFileSize(file.size),
      updatedAt: new Date(),
      isFavorite: false,
    }));
    setFiles((prev) => [...prev, ...mappedFiles]);
  };

  const getFileType = (filename) => {
    const ext = filename.split(".").pop().toLowerCase();
    if (["jpg", "png", "gif", "webp", "jpeg"].includes(ext)) return "img";
    if (["mp4", "mov", "avi"].includes(ext)) return "video";
    if (["mp3", "wav"].includes(ext)) return "audio";
    if (["zip", "rar", "7z"].includes(ext)) return "zip";
    if (["pdf"].includes(ext)) return "pdf";
    return "file";
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Octets";
    const k = 1024;
    const sizes = ["Octets", "Ko", "Mo", "Go"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleRename = (file) => {
    const newName = prompt("Renommer le fichier :", file.name);
    if (newName && newName.trim() !== file.name) {
      setFiles(
        files.map((f) =>
          f.id === file.id ? { ...f, name: newName.trim() } : f
        )
      );
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce fichier ?")) {
      setFiles(files.filter((f) => f.id !== id));
    }
  };

  const handleDownload = (file) => {
    alert(`Téléchargement de : ${file.name}`);
  };

  const handleShare = (file) => {
    alert(`Partage de : ${file.name}\nLien copié dans le presse-papier !`);
  };

  const toggleFavorite = (id) => {
    setFiles(files.map(f =>
      f.id === id ? { ...f, isFavorite: !f.isFavorite } : f
    ));
  };

  // Filtres
  const filters = [
    { id: 'all', label: 'Tous', icon: null },
    { id: 'favorites', label: 'Favoris', icon: Star },
    { id: 'recent', label: 'Récents', icon: Clock },
    { id: 'pdf', label: 'PDF', icon: null },
    { id: 'img', label: 'Images', icon: null },
    { id: 'zip', label: 'Archives', icon: null },
  ];

  // Fichiers filtrés
  const filteredFiles = files
    .filter(file => {
      const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());

      if (activeFilter === 'favorites') return file.isFavorite && matchesSearch;
      if (activeFilter === 'recent') {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return file.updatedAt > oneMonthAgo && matchesSearch;
      }
      if (['pdf', 'img', 'zip'].includes(activeFilter)) {
        return file.type === activeFilter && matchesSearch;
      }
      return matchesSearch;
    })
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  // Écoute les changements de recherche depuis SearchBar (si tu veux le lier plus tard)
  useEffect(() => {
    const handleSearch = (e) => {
      setSearchTerm(e.detail || '');
    };
    window.addEventListener('search', handleSearch);
    return () => window.removeEventListener('search', handleSearch);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Barre de recherche */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <SearchBar onSearch={setSearchTerm} value={searchTerm} />
        </div>
      </div>

      {/* Filtres & Vue */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Filtres */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
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

          {/* Vue grille/liste */}
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
      </div>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        {/* Breadcrumb */}
        <Breadcrumb
          currentFolderName={folderName}
          onBack={() => window.history.back()}
        />

        {/* Zone d’upload */}
        <FileUploadZone onUpload={handleUpload} />

        {/* Empty State magnifique */}
        {filteredFiles.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 mx-auto max-w-3xl">
            <div className="text-8xl mb-6 opacity-60">📄</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Aucun fichier trouvé</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
              {searchTerm || activeFilter !== 'all'
                ? "Essayez d’élargir votre recherche ou changer de filtre."
                : "Glissez des fichiers ici ou cliquez ci-dessus pour en ajouter."}
            </p>
          </div>
        )}

        {/* Grille ou Liste de fichiers */}
        {filteredFiles.length > 0 && (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredFiles.map((file) => (
              <FileCard
                key={file.id}
                file={file}
                onRename={handleRename}
                onDelete={handleDelete}
                onDownload={handleDownload}
                onShare={handleShare}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default FilePage;

