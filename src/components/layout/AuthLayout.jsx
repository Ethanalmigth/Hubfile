import React from 'react'

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">HubFile</h1>
          {title && <h2 className="text-2xl font-semibold mb-2">{title}</h2>}
          {subtitle && <p className="text-base-content/70">{subtitle}</p>}
        </div>

        {/* Contenu de la page */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {children}
          </div>
        </div>

        {/* Lien de retour */}
        <div className="text-center mt-6">
          <a href="/" className="link link-primary">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout