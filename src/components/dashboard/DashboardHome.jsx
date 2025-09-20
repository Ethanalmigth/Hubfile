// src/components/dashboard/DashboardHome.jsx
import React from 'react';
import UploadZone from './UploadZone';
import StatsCard from './StatsCard';
import FileCard from '../layout/FileCard';

const DashboardHome = () => {
  const files = [
    { name: "Rapport Q1 2025.pdf", type: "pdf", size: "2.4 Mo", date: "12 mai 2025", isFolder: false },
    { name: "Photos vacances", type: "folder", size: "1.2 Go", date: "10 mai 2025", isFolder: true },
    { name: "Présentation client.pptx", type: "ppt", size: "8.7 Mo", date: "8 mai 2025", isFolder: false },
    { name: "Contrat signé.pdf", type: "pdf", size: "1.1 Mo", date: "5 mai 2025", isFolder: false },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Espace utilisé"
          value="12.4 Go"
          subtitle="sur 50 Go"
          icon="💾"
        />
        <StatsCard
          title="Fichiers stockés"
          value="247"
          subtitle="au total"
          icon="📄"
        />
        <StatsCard
          title="Partagés"
          value="18"
          subtitle="liens actifs"
          icon="🔗"
        />
      </div>

      {/* Upload Zone */}
      <UploadZone />

      {/* Recent Files */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Fichiers récents</h2>
          <a href="#" className="text-slate-700 hover:text-slate-800 font-medium text-sm">
            Voir tout →
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {files.map((file, index) => (
            <FileCard
              key={index}
              name={file.name}
              type={file.type}
              size={file.size}
              date={file.date}
              isFolder={file.isFolder}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;