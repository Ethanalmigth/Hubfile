import React, { useState, useEffect } from "react";
import { Plus, Grid, List, FolderPlus, Upload } from "lucide-react";
import Breadcrumb from "../components/features/Breadcrumb";
import FolderGrid from "../components/features/FolderGrid";
import FileGrid from "../components/features/FileGrid";
import CreateFolderModal from "../components/features/CreateFolderModal";

const Dashboard = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [currentFolder, setCurrentFolder] = useState(null);
  const [breadcrumbPath, setBreadcrumbPath] = useState([]);
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Données de test (à remplacer par des appels API)
  useEffect(() => {
    // Simulation de chargement des données
    setTimeout(() => {
      setFolders([
        {
          id: "1",
          name: "Documents",
          created_at: "2024-01-15T10:30:00Z",
          file_count: 5,
        },
        {
          id: "2",
          name: "Images",
          created_at: "2024-01-20T14:15:00Z",
          file_count: 12,
        },
        {
          id: "3",
          name: "Projets",
          created_at: "2024-02-01T09:00:00Z",
          file_count: 3,
        },
      ]);

      setFiles([
        {
          id: "1",
          name: "rapport_2024.pdf",
          type: "document",
          size: 1024000,
          current_version: 1,
          updated_at: "2024-01-25T11:30:00Z",
        },
        {
          id: "2",
          name: "photo_vacances.jpg",
          type: "image",
          size: 2048000,
          current_version: 1,
          updated_at: "2024-02-10T16:45:00Z",
          thumbnail_url: "https://picsum.photos/200/200?random=1",
        },
      ]);

      setIsLoading(false);
    }, 1000);
  }, [currentFolder]);

  const handleFolderOpen = (folder) => {
    setCurrentFolder(folder.id);
    setBreadcrumbPath([...breadcrumbPath, folder]);
  };

  const handleBreadcrumbNavigate = (folderId) => {
    if (folderId === null) {
      // Retour à la racine
      setCurrentFolder(null);
      setBreadcrumbPath([]);
    } else {
      // Navigation vers un dossier parent
      const folderIndex = breadcrumbPath.findIndex((f) => f.id === folderId);
      setCurrentFolder(folderId);
      setBreadcrumbPath(breadcrumbPath.slice(0, folderIndex + 1));
    }
  };

  const handleCreateFolder = async (name) => {
    // TODO: Appel API pour créer le dossier
    console.log("Création du dossier:", name);

    const newFolder = {
      id: Date.now().toString(),
      name,
      created_at: new Date().toISOString(),
      file_count: 0,
    };

    setFolders([...folders, newFolder]);
  };

  // Actions sur les dossiers
  const handleFolderRename = (folder) => {
    console.log("Renommer dossier:", folder);
  };

  const handleFolderDelete = (folder) => {
    console.log("Supprimer dossier:", folder);
  };

  // Actions sur les fichiers
  const handleFilePreview = (file) => {
    console.log("Aperçu fichier:", file);
  };

  const handleFileDownload = (file) => {
    console.log("Télécharger fichier:", file);
  };

  const handleFileShare = (file) => {
    console.log("Partager fichier:", file);
  };

  const handleFileRename = (file) => {
    console.log("Renommer fichier:", file);
  };

  const handleFileDelete = (file) => {
    console.log("Supprimer fichier:", file);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* En-tête avec navigation */}
      <div className="flex flex-col space-y-4">
        <Breadcrumb
          path={breadcrumbPath}
          onNavigate={handleBreadcrumbNavigate}
        />

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              {currentFolder
                ? breadcrumbPath[breadcrumbPath.length - 1]?.name
                : "Mes fichiers"}
            </h1>
            <p className="text-base-content/70">
              {folders.length} dossier(s) • {files.length} fichier(s)
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {/* Sélecteur de vue */}
            <div className="join">
              <button
                className={`btn join-item btn-sm ${
                  viewMode === "grid" ? "btn-active" : ""
                }`}
                onClick={() => setViewMode("grid")}
              >
                <Grid size={16} />
              </button>
              <button
                className={`btn join-item btn-sm ${
                  viewMode === "list" ? "btn-active" : ""
                }`}
                onClick={() => setViewMode("list")}
              >
                <List size={16} />
              </button>
            </div>

            {/* Actions */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-primary">
                <Plus size={20} />
                Nouveau
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
              >
                <li>
                  <button onClick={() => setIsCreateFolderModalOpen(true)}>
                    <FolderPlus size={16} />
                    Nouveau dossier
                  </button>
                </li>
                <li>
                  <button>
                    <Upload size={16} />
                    Télécharger fichier
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="space-y-8">
        {/* Section des dossiers */}
        {folders.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Dossiers</h2>
            <FolderGrid
              folders={folders}
              onFolderOpen={handleFolderOpen}
              onFolderRename={handleFolderRename}
              onFolderDelete={handleFolderDelete}
            />
          </div>
        )}

        {/* Section des fichiers */}
        {files.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Fichiers</h2>
            <FileGrid
              files={files}
              onFilePreview={handleFilePreview}
              onFileDownload={handleFileDownload}
              onFileShare={handleFileShare}
              onFileRename={handleFileRename}
              onFileDelete={handleFileDelete}
            />
          </div>
        )}

        {/* État vide */}
        {folders.length === 0 && files.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <FolderPlus size={32} className="text-base-content/50" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Dossier vide</h3>
            <p className="text-base-content/70 mb-4">
              Commencez par créer un dossier ou télécharger des fichiers
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setIsCreateFolderModalOpen(true)}
            >
              <FolderPlus size={20} />
              Créer un dossier
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      <CreateFolderModal
        isOpen={isCreateFolderModalOpen}
        onClose={() => setIsCreateFolderModalOpen(false)}
        onCreateFolder={handleCreateFolder}
      />
    </div>
  );
};

export default Dashboard;
