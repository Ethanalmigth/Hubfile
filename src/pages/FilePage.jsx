// src/pages/FolderContentPage.jsx
import React, { useState } from "react";
import Breadcrumb from "../components/files/Breadcrumb";
import FileUploadZone from "../components/files/FileUploadZone";
import FileCard from "../components/files/FileCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
const FilePage = ({ folderName = "Projets clients" }) => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "Rapport financier Q1 2025.pdf",
      type: "pdf",
      size: "2.4 Mo",
      updatedAt: "2025-05-12T10:30:00Z",
    },
    {
      id: 2,
      name: "photo_vacances.jpg",
      type: "img",
      size: "5.1 Mo",
      updatedAt: "2025-05-10T14:22:00Z",
    },
    {
      id: 3,
      name: "presentation_finale.pptx",
      type: "ppt",
      size: "8.7 Mo",
      updatedAt: "2025-05-08T09:15:00Z",
    },
    {
      id: 4,
      name: "archive_projet.zip",
      type: "zip",
      size: "42.3 Mo",
      updatedAt: "2025-05-05T16:45:00Z",
    },
  ]);

  const handleUpload = (newFiles) => {
    const mappedFiles = newFiles.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      type: getFileType(file.name),
      size: formatFileSize(file.size),
      updatedAt: new Date().toISOString(),
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
    // Ici tu déclencherais le téléchargement réel
  };

  const handleShare = (file) => {
    alert(`Partage de : ${file.name}\nLien copié dans le presse-papier !`);
    // Ici tu générerais un lien de partage
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Barre de recherche */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <SearchBar />
        </div>
      </div>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-6 pb-12">
        {/* Breadcrumb */}
        <Breadcrumb
          currentFolderName={folderName}
          onBack={() => window.history.back()}
        />

        {/* Zone d’upload */}
        <FileUploadZone onUpload={handleUpload} />

        {/* Liste des fichiers */}
        {files.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              Aucun fichier
            </h3>
            <p className="text-gray-500 mb-6">
              Glissez des fichiers ici ou cliquez ci-dessus pour en ajouter
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file) => (
              <FileCard
                key={file.id}
                file={file}
                onRename={handleRename}
                onDelete={handleDelete}
                onDownload={handleDownload}
                onShare={handleShare}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default FilePage;
