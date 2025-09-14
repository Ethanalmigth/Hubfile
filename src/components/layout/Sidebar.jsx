import React from 'react'
import { Home, FolderOpen, Upload, Share, Settings, Trash2 } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Accueil', path: '/', active: true },
    { icon: FolderOpen, label: 'Mes fichiers', path: '/files' },
    { icon: Upload, label: 'Téléchargements', path: '/uploads' },
    { icon: Share, label: 'Partagés', path: '/shared' },
    { icon: Trash2, label: 'Corbeille', path: '/trash' },
  ]

  return (
    <aside className="min-h-full w-64 bg-base-200">
      {/* Logo mobile */}
      <div className="p-4 lg:hidden">
        <h1 className="text-xl font-bold text-primary">HubFile</h1>
      </div>

      {/* Navigation */}
      <ul className="menu p-4 space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a 
              href={item.path}
              className={`flex items-center space-x-3 ${
                item.active ? 'active' : ''
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Espace de stockage */}
      <div className="p-4 mt-auto">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body p-4">
            <h3 className="font-semibold text-sm">Stockage</h3>
            <div className="progress progress-primary w-full mt-2">
              <div className="progress-bar" style={{ width: '45%' }}></div>
            </div>
            <p className="text-xs text-base-content/70 mt-1">
              4.5 GB / 10 GB utilisés
            </p>
          </div>
        </div>
      </div>

      {/* Bouton upgrade */}
      <div className="p-4">
        <button className="btn btn-primary btn-sm w-full">
          Mettre à niveau
        </button>
      </div>
    </aside>
  )
}

export default Sidebar