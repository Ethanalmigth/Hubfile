import React from 'react'
import { 
  FileText, 
  Image, 
  MoreVertical, 
  Download, 
  Share, 
  Edit, 
  Trash2,
  Eye
} from 'lucide-react'

const getFileIcon = (type) => {
  switch (type) {
    case 'image':
      return Image
    case 'document':
      return FileText
    default:
      return FileText
  }
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const FileCard = ({ file, onPreview, onDownload, onShare, onRename, onDelete }) => {
  const FileIcon = getFileIcon(file.type)

  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition-shadow group">
      <div className="card-body p-4">
        <div className="flex items-start justify-between">
          <div 
            className="flex items-center space-x-3 flex-1 cursor-pointer"
            onClick={() => onPreview(file)}
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
              {file.type === 'image' && file.thumbnail_url ? (
                <img 
                  src={file.thumbnail_url} 
                  alt={file.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
              ) : (
                <FileIcon size={24} className="text-secondary" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate" title={file.name}>
                {file.name}
              </h3>
              <p className="text-sm text-base-content/70">
                {formatFileSize(file.size)} • v{file.current_version}
              </p>
            </div>
          </div>
          
          {/* Menu actions */}
          <div className="dropdown dropdown-end opacity-0 group-hover:opacity-100">
            <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
              <MoreVertical size={16} />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
              <li>
                <button onClick={() => onPreview(file)}>
                  <Eye size={16} />
                  Aperçu
                </button>
              </li>
              <li>
                <button onClick={() => onDownload(file)}>
                  <Download size={16} />
                  Télécharger
                </button>
              </li>
              <li>
                <button onClick={() => onShare(file)}>
                  <Share size={16} />
                  Partager
                </button>
              </li>
              <li>
                <button onClick={() => onRename(file)}>
                  <Edit size={16} />
                  Renommer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onDelete(file)}
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
          Modifié le {new Date(file.updated_at).toLocaleDateString('fr-FR')}
        </div>
      </div>
    </div>
  )
}

const FileGrid = ({ 
  files = [], 
  onFilePreview, 
  onFileDownload, 
  onFileShare, 
  onFileRename, 
  onFileDelete 
}) => {
  if (files.length === 0) {
    return (
      <div className="text-center py-8">
        <FileText size={48} className="mx-auto text-base-content/30 mb-4" />
        <p className="text-base-content/70">Aucun fichier</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {files.map((file) => (
        <FileCard
          key={file.id}
          file={file}
          onPreview={onFilePreview}
          onDownload={onFileDownload}
          onShare={onFileShare}
          onRename={onFileRename}
          onDelete={onFileDelete}
        />
      ))}
    </div>
  )
}

export default FileGrid