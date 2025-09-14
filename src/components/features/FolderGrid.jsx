import React from 'react'
import { Folder, MoreVertical, Edit, Trash2 } from 'lucide-react'

const FolderCard = ({ folder, onOpen, onRename, onDelete }) => {
  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="card-body p-4">
        <div className="flex items-start justify-between">
          <div 
            className="flex items-center space-x-3 flex-1"
            onClick={() => onOpen(folder)}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Folder size={24} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate">{folder.name}</h3>
              <p className="text-sm text-base-content/70">
                {folder.file_count || 0} fichier(s)
              </p>
            </div>
          </div>
          
          {/* Menu actions */}
          <div className="dropdown dropdown-end opacity-0 group-hover:opacity-100">
            <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
              <MoreVertical size={16} />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
              <li>
                <button onClick={() => onRename(folder)}>
                  <Edit size={16} />
                  Renommer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onDelete(folder)}
                  className="text-error"
                >
                  <Trash2 size={16} />
                  Supprimer
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-xs text-base-content/50 mt-2">
          Créé le {new Date(folder.created_at).toLocaleDateString('fr-FR')}
        </div>
      </div>
    </div>
  )
}

const FolderGrid = ({ folders = [], onFolderOpen, onFolderRename, onFolderDelete }) => {
  if (folders.length === 0) {
    return (
      <div className="text-center py-8">
        <Folder size={48} className="mx-auto text-base-content/30 mb-4" />
        <p className="text-base-content/70">Aucun dossier</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {folders.map((folder) => (
        <FolderCard
          key={folder.id}
          folder={folder}
          onOpen={onFolderOpen}
          onRename={onFolderRename}
          onDelete={onFolderDelete}
        />
      ))}
    </div>
  )
}

export default FolderGrid