import React from 'react'
import { ArrowRight, Upload, Shield, Share, Zap, Star, Check } from 'lucide-react'

const LandingPage = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload simplifié",
      description: "Glissez-déposez vos fichiers en quelques secondes"
    },
    {
      icon: Shield,
      title: "Stockage sécurisé", 
      description: "Vos données sont protégées avec un chiffrement avancé"
    },
    {
      icon: Share,
      title: "Partage intelligent",
      description: "Partagez vos fichiers via liens ou QR codes temporaires"
    },
    {
      icon: Zap,
      title: "Versioning avancé",
      description: "Gérez facilement les versions de vos documents"
    }
  ]

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Designer",
      content: "HubFile m'a révolutionné ma façon d'organiser mes projets créatifs !",
      rating: 5
    },
    {
      name: "Thomas Martin", 
      role: "Développeur",
      content: "Le système de versioning est exactement ce dont j'avais besoin.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <header className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold text-primary">HubFile</h1>
        </div>
        <div className="navbar-end space-x-4">
          <a href="/login" className="btn btn-ghost">Connexion</a>
          <a href="/register" className="btn btn-primary">S'inscrire</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-[80vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center max-w-4xl">
          <div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Votre espace de stockage
              <br />
              <span className="text-4xl">intelligent et sécurisé</span>
            </h1>
            <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
              Organisez, versionnez et partagez vos fichiers comme jamais auparavant. 
              HubFile révolutionne votre façon de gérer vos documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="btn btn-primary btn-lg">
                Commencer gratuitement
                <ArrowRight size={20} />
              </a>
              <button className="btn btn-outline btn-lg">
                Voir la démo
              </button>
            </div>
            
            {/* Stats */}
            <div className="stats stats-vertical lg:stats-horizontal shadow mt-8">
              <div className="stat">
                <div className="stat-value text-primary">1K+</div>
                <div className="stat-desc">Utilisateurs actifs</div>
              </div>
              <div className="stat">
                <div className="stat-value text-secondary">50TB</div>
                <div className="stat-desc">Données stockées</div>
              </div>
              <div className="stat">
                <div className="stat-value text-accent">99.9%</div>
                <div className="stat-desc">Temps de disponibilité</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pourquoi choisir HubFile ?</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Des fonctionnalités pensées pour simplifier votre quotidien numérique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="card-title justify-center text-lg">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tarifs simples et transparents</h2>
            <p className="text-xl text-base-content/70">Choisissez l'offre qui vous convient</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Plan Gratuit */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="text-2xl font-bold text-center">Gratuit</h3>
                <div className="text-center py-4">
                  <span className="text-4xl font-bold">0€</span>
                  <span className="text-base-content/70">/mois</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><Check size={16} className="text-success mr-2" /> 5 GB de stockage</li>
                  <li className="flex items-center"><Check size={16} className="text-success mr-2" /> Versioning basique</li>
                  <li className="flex items-center"><Check size={16} className="text-success mr-2" /> Partage par lien</li>
                </ul>
                <button className="btn btn-outline w-full">Commencer</button>
              </div>
            </div>

            {/* Plan Pro */}
            <div className="card bg-primary text-primary-content shadow-xl transform scale-105">
              <div className="card-body">
                <div className="badge badge-secondary absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Populaire
                </div>
                <h3 className="text-2xl font-bold text-center">Pro</h3>
                <div className="text-center py-4">
                  <span className="text-4xl font-bold">9€</span>
                  <span className="opacity-70">/mois</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><Check size={16} className="mr-2" /> 100 GB de stockage</li>
                  <li className="flex items-center"><Check size={16} className="mr-2" /> Versioning avancé</li>
                  <li className="flex items-center"><Check size={16} className="mr-2" /> QR codes</li>
                  <li className="flex items-center"><Check size={16} className="mr-2" /> Support prioritaire</li>
                </ul>
                <button className="btn btn-secondary w-full">Choisir Pro</button>
              </div>
            </div>

            {/* Plan Enterprise */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                <div className="text-center py-4">
                  <span className="text-4xl font-bold">29€</span>
                  <span className="text-base-content/70">/mois</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><Check size={16} className="text-success mr-2" /> Stockage illimité</li>
                  <li className="flex items-center"><Check size={16} className="text-success mr-2" /> Toutes les fonctionnalités</li>
                  <li className="flex items-center"><Check size={16} className="text-success mr-2" /> API personnalisée</li>
                  <li className="flex items-center"><Check size={16} className="text-success mr-2" /> Support 24/7</li>
                </ul>
                <button className="btn btn-outline w-full">Nous contacter</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ce que disent nos utilisateurs</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-base-content/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">HubFile</span>
          <p className="max-w-xs">
            La solution de stockage intelligente qui simplifie votre vie numérique.
          </p>
        </div>
        <div>
          <span className="footer-title">Produit</span>
          <a className="link link-hover">Fonctionnalités</a>
          <a className="link link-hover">Tarifs</a>
          <a className="link link-hover">Sécurité</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Centre d'aide</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Statut</a>
        </div>
        <div>
          <span className="footer-title">Légal</span>
          <a className="link link-hover">Conditions</a>
          <a className="link link-hover">Confidentialité</a>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage