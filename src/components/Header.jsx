import React from 'react'
import UserMenu from './UserMenu'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo minimaliste */}
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 bg-gradient-to-br from-slate-700 to-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
        <h1 className="text-xl font-bold text-gray-900">HUBFILE</h1>
      </div>

      {/* Actions discrètes */}
      <div className="flex items-center space-x-4">
        <UserMenu />
      </div>
    </div>
  </header>
  )
}
