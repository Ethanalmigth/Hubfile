import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Folder, 
  MoreVertical, 
  Edit, 
  Share, 
  Trash2,
  FileText,
  Calendar
} from 'lucide-react'

const FolderCard = ({ folder, viewMode = 'grid', onDelete, onRename }) => {
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getColorClass = (color) => {
    const colors = {
      primary: 'bg-primary/10 text-primary',
      secondary: 'bg-secondary/10 text-secondary',
      accent: 'bg-accent/10 text-accent',
      neutral: 'bg-neutral/10 text-neutral'
    }
    return colors[color] || colors.primary
  }

  if (viewMode === 'list') {
    return (
      <div className="card bg-base-100 shadow hover:shadow-lg transition-shadow">
        <div className="card-body p-4">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClass(folder.color)}`}>
              <Folder size={24} />
            </div>
            
            <div className="flex-1 min-w-0">
              <Link 
                to={`/folder/${folder.id}`}
                className="font-medium hover:text-primary transition-colors truncate block"
              >
                {folder.name}
              </Link>
              <p className="text-sm text-base-content/70 truncate">
                {folder.description}
              </p>
            </div>

            <div className="hidden sm:flex items-center space-x-6 text-sm text-base-content/70">
              <div className="flex items-center space-x-1">
                <FileText size={14} />
                <span>{folder.file_count}</span>
              </div>
              <div>{formatFileSize(folder.total_size)}</div>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{new Date(folder.last_modified).toLocaleDateString('fr-FR')}</span>
              </div>
            </div>

            {/* Menu actions */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
                <MoreVertical size={16} />
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
                <li>
                  <button onClick={() => onRename(folder.id, folder.name)}>
                    <Edit size={16} />
                    Renommer
                  </button>
                </li>
                <li>
                  <button>
                    <Share size={16} />
                    Partager
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onDelete(folder.id)}
                    className="text-error"
                  >
                    <Trash2 size={16} />
                    Supprimer
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition-shadow group">
      <div className="card-body p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClass(folder.color)}`}>
            <Folder size={32} />
          </div>
          
          {/* Menu actions */}
          <div className="dropdown dropdown-end opacity-0 group-hover:opacity-100 transition-opacity">
            <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
              <MoreVertical size={16} />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
              <li>
                <button onClick={() => onRename(folder.id, folder.name)}>
                  <Edit size={16} />
                  Renommer
                </button>
              </li>
              <li>
                <button>
                  <Share size={16} />
                  Partager
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onDelete(folder.id)}
                  className="text-error"
                >
                  <Trash2 size={16} />
                  Supprimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <Link 
            to={`/folder/${folder.id}`}
            className="block"
          >
            <h3 className="font-semibold text-lg hover:text-primary transition-colors truncate">
              {folder.name}
            </h3>
            <p className="text-sm text-base-content/70 line-clamp-2">
              {folder.description}
            </p>
          </Link>

          <div className="flex items-center justify-between text-xs text-base-content/60">
            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-1">
                <FileText size={12} />
                <span>{folder.file_count}</span>
              </span>
              <span>{formatFileSize(folder.total_size)}</span>
            </div>
            <span>{new Date(folder.last_modified).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FolderCard