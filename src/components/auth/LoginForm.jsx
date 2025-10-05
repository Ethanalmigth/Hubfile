// src/components/auth/LoginForm.jsx
import React, { useState } from "react";
import { login } from "../api/ApiUser"; // ← À adapter selon ton API
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" }); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset précédent message
    setMessage({ type: "", text: "" });

    if (!email || !password) {
      setMessage({ type: "error", text: "Veuillez remplir tous les champs." });
      return;
    }

    setLoading(true);

    try {
      const response = await login({ data: { email, password } });
      console.log("Response loginForm", response); // ← Adapte selon ton API

      if (response.success) {
        setMessage({
          type: "success",
          text: "✅ Connexion réussie ! Bienvenue sur HUBFILE.",
        });
        localStorage.setItem("token", response.token?.token || "");
        const decode = jwtDecode(response.token?.token || "");
        console.log("decode", decode);
        const id = decode.id;
        // Redirection après succès
        setTimeout(() => {
          navigate(`/folders`);
        }, 1500);
      } else {
        setMessage({
          type: "error",
          text:
            response.message ||
            "❌ Identifiants invalides. Veuillez réessayer.",
        });
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setMessage({
        type: "error",
        text: "⚠️ Impossible de se connecter. Vérifiez votre connexion internet.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Style d'input avec couleur de texte explicite
  const inputClassName =
    "w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-transparent outline-none transition text-gray-900 bg-white placeholder-gray-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Message de feedback */}
      {message.text && (
        <div
          className={`p-4 rounded-xl text-sm font-medium text-center transition-all duration-300 ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClassName}
          placeholder="votre@email.com"
          disabled={loading}
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={inputClassName}
          placeholder="••••••••"
          disabled={loading}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="h-4 w-4 text-slate-700 focus:ring-slate-500 border-gray-300 rounded"
            disabled={loading}
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-600"
          >
            Se souvenir de moi
          </label>
        </div>
        <a
          href="#"
          className="text-sm text-slate-700 hover:text-slate-800 font-medium"
          onClick={(e) => {
            e.preventDefault();
            alert("Fonctionnalité à implémenter : réinitialisation par email.");
          }}
        >
          Mot de passe oublié ?
        </a>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform ${
          loading
            ? "bg-gray-400 cursor-not-allowed text-gray-300"
            : "bg-slate-800 hover:bg-slate-900 text-white hover:-translate-y-0.5"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Connexion en cours...
          </span>
        ) : (
          "Se connecter"
        )}
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">ou continuer avec</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
          disabled={loading}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
          disabled={loading}
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.754-1.332-1.754-1.087-.744.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub
        </button>
      </div>

      {/* Bouton flottant (mobile-friendly) */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <button
          onClick={() =>
            document.dispatchEvent(new CustomEvent("open-create-folder"))
          }
          className="w-14 h-14 bg-slate-700 hover:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
          title="Créer un dossier"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
