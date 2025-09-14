import React, { useState } from 'react'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import AuthLayout from '../components/layout/AuthLayout'
import { login } from '../services/UserServices'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // TODO: Intégration Supabase Auth
      console.log('Tentative de connexion avec:', formData)
      const response = await login({ email: formData.email, password: formData.password })
      if(!response.success){
        setError(response.message || "Une erreur est survenue")
        setIsLoading(false)
        return
      }else{
        setError(null)
        console.log('Réponse du serveur:', response)
        localStorage.setItem("token", response.token.token);
        window.location.href = "/dashboard";
      }
      
      // Simulation d'une requête
      
      
      // Redirection vers dashboard (à implémenter)
      window.location.href = '/dashboard'
      
    } catch (err) {
      setError('Email ou mot de passe incorrect')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout 
      title="Connexion" 
      subtitle="Connectez-vous à votre compte HubFile"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="votre@email.com"
              className="input input-bordered w-full pl-10"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40" />
          </div>
        </div>

        {/* Mot de passe */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mot de passe</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full pl-10 pr-10"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40" />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 
                <EyeOff size={20} className="text-base-content/40" /> : 
                <Eye size={20} className="text-base-content/40" />
              }
            </button>
          </div>
          <div className="label">
            <a href="#" className="label-text-alt link link-hover">
              Mot de passe oublié ?
            </a>
          </div>
        </div>

        {/* Message d'erreur */}
        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        )}

        {/* Bouton de connexion */}
        <div className="form-control mt-6">
          <button 
            type="submit" 
            className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </button>
        </div>

        {/* Lien d'inscription */}
        <div className="divider">ou</div>
        <div className="text-center">
          <p className="text-sm">
            Pas encore de compte ?{' '}
            <a href="/register" className="link link-primary">
              Créer un compte
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Login