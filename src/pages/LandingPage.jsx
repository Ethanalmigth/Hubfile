import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg mr-3"></div>
              <span className="text-xl font-bold text-gray-900">HUBFILE</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Fonctionnalités</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Tarifs</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Connexion
              </a>
              <a href="/signup" className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                Inscription gratuite
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-slate-50 pt-16 pb-24">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>
                Nouveau : Version 2.0 disponible
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Votre hub de fichiers{' '}
                <span className="bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
                  intelligent
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Centralisez, organisez et partagez vos fichiers avec une interface moderne et intuitive. 
                Sécurisé par défaut, rapide par nature.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/signup" className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Commencer gratuitement
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200 bg-white hover:bg-gray-50">
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Voir la démo
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">HUBFILE</div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          📁
                        </div>
                        <div className="flex-1">
                          <div className={`h-2 bg-gray-200 rounded mb-1 ${i === 1 ? 'w-3/4' : i === 2 ? 'w-1/2' : 'w-2/3'}`}></div>
                          <div className="h-1.5 bg-gray-100 rounded w-1/3"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500">Interface ultra-moderne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités <span className="text-slate-700">puissantes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour gérer vos fichiers de manière professionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Upload Ultra-rapide",
                desc: "Glissez-déposez vos fichiers avec une vitesse de transfert optimisée. Support de tous formats jusqu'à 10GB.",
                icon: "🚀",
                color: "from-slate-500 to-gray-600"
              },
              {
                title: "Organisation AI",
                desc: "Intelligence artificielle pour classer automatiquement vos fichiers par type, date et contenu.",
                icon: "🧠",
                color: "from-gray-600 to-slate-700"
              },
              {
                title: "Partage Sécurisé",
                desc: "Liens temporaires, QR codes, et contrôle granulaire des permissions avec chiffrement end-to-end.",
                icon: "🔒",
                color: "from-slate-600 to-gray-700"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} rounded-t-2xl`}></div>
                
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="text-slate-700 font-medium hover:text-slate-800 inline-flex items-center">
                    En savoir plus
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/20 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à révolutionner votre workflow ?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez plus de 10,000+ utilisateurs qui font confiance à HUBFILE pour gérer leurs fichiers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="group inline-flex items-center justify-center px-8 py-4 bg-white text-slate-800 font-bold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Créer mon compte gratuit
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
              Parler à un expert
            </a>
          </div>
          
          <div className="mt-8 text-slate-400 text-sm">
            ✓ Gratuit pendant 30 jours ✓ Aucune carte bancaire requise ✓ Support 24/7
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg mr-3"></div>
                <span className="text-xl font-bold text-white">HUBFILE</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                La solution moderne pour centraliser et organiser tous vos fichiers en toute sécurité.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Produit</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sécurité</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Statut</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Communauté</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 HUBFILE. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;