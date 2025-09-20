// src/components/layout/DashboardLayout.jsx
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:block">
        <div className="p-6">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg mr-3"></div>
            <span className="text-xl font-bold text-gray-900">HUBFILE</span>
          </div>

          <nav className="space-y-2">
            {[
              { name: "Tableau de bord", icon: "📊", active: true },
              { name: "Mes fichiers", icon: "📁", active: false },
              { name: "Partagés", icon: "🔗", active: false },
              { name: "Favoris", icon: "⭐", active: false },
              { name: "Corbeille", icon: "🗑️", active: false },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center px-4 py-3 rounded-xl w-full transition-colors ${
                  item.active
                    ? "bg-slate-100 text-slate-800 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-medium">JD</span>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">Jean Dupont</div>
                <div className="text-xs text-gray-500">jean@exemple.com</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button className="lg:hidden mr-4 p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Tableau de bord</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7H4l5-5v5z" />
              </svg>
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7H4l5-5v5z" transform="rotate(180 12 12)" />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
              <span className="text-slate-700 font-medium">JD</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;