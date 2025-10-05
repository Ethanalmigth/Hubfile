import React, { useState } from "react";
import {
  File,
  MoreVertical,
  Search,
  Plus,
  Upload,
  Download,
  Trash2,
  Star,
  Clock,
  ChevronRight,
  Home,
} from "lucide-react";
import FolderGrid from "../components/folders/FolderGrid";
import FolderModal from "../components/folders/FolderModal";

export default function FolderPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const folders = [];

  const files = [
    {
      id: 7,
      name: "Rapport_Q3.pdf",
      size: "2.4 MB",
      type: "PDF",
      modified: "30m ago",
      starred: false,
    },
  ];

  const filteredFolders = folders.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFiles = files.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 backdrop-blur-sm ">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Mon Stockage
              </h1>
              <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                <Home className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
                <span>Tous les fichiers</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2">
                <Upload className="w-4 h-4" />
                <span>Importer</span>
              </button>
              <Plus className="w-4 h-4" />
              <label
                htmlFor="create-folder-modal"
                className="btn btn-primary cursor-pointer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Créer un Dossier
              </label>
            </div>
          </div>

          {/* Search and View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher des fichiers et dossiers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Storage Info */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-8 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">Espace de stockage</h3>
              <p className="text-blue-100">34.8 GB utilisés sur 100 GB</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">65.2 GB</p>
              <p className="text-blue-100">disponibles</p>
            </div>
          </div>
          <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-white h-full rounded-full"
              style={{ width: "35%" }}
            ></div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: Star,
              label: "Favoris",
              count: 12,
              color: "text-yellow-500",
            },
            {
              icon: Clock,
              label: "Récents",
              count: 24,
              color: "text-blue-500",
            },
            {
              icon: Trash2,
              label: "Corbeille",
              count: 8,
              color: "text-red-500",
            },
            {
              icon: Download,
              label: "Partagés",
              count: 15,
              color: "text-green-500",
            },
          ].map((action, i) => (
            <button
              key={i}
              className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-slate-200 group"
            >
              <action.icon
                className={`w-6 h-6 ${action.color} mb-2 group-hover:scale-110 transition-transform`}
              />
              <p className="font-semibold text-slate-800">{action.label}</p>
              <p className="text-sm text-slate-500">{action.count} éléments</p>
            </button>
          ))}
        </div>

        {/* Folders Section */}
        <FolderGrid />

        {/* Files Section */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Fichiers récents
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            {filteredFiles.map((file, i) => (
              <div
                key={file.id}
                className={`flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer transition-colors ${
                  i !== filteredFiles.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-2 rounded-lg">
                    <File className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{file.name}</p>
                    <p className="text-sm text-slate-500">
                      {file.type} • {file.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-sm text-slate-400">{file.modified}</p>
                  {file.starred && (
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  )}
                  <button className="p-1 hover:bg-slate-100 rounded">
                    <MoreVertical className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <FolderModal />
    </div>
  );
}
