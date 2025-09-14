import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import AuthLayout from "../components/layout/AuthLayout";
import { register } from "../services/UserServices";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Intégration Supabase Auth
      const { name, email, password } = formData;
      console.log("Tentative d'inscription avec:", formData);
      const response = await register({ name, email, password });
      console.log("Réponse du serveur:", response);
      if (!response.success) {
        setError(response.message || "Une erreur est survenue");
      } else {
        setError(null);
        console.log("Inscription réussie:", response);
        localStorage.setItem("token", response.token.token);
        window.location.href = "/dashboard";
        return response;
      }
    } catch (err) {
      console.error("Erreur lors de l'inscription:", err);
      setError(err.response?.data?.message || "Erreur serveur");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Inscription"
      subtitle="Créez votre compte HubFile gratuit"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Prénom et Nom */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Prénom</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Jean"
              className="input input-bordered w-full pl-10"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <User
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40"
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="jean.dupont@email.com"
              className="input input-bordered w-full pl-10"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Mail
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40"
            />
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
            <Lock
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} className="text-base-content/40" />
              ) : (
                <Eye size={20} className="text-base-content/40" />
              )}
            </button>
          </div>
        </div>

        {/* Confirmation mot de passe */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirmer le mot de passe</span>
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="••••••••"
              className="input input-bordered w-full pl-10 pr-10"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <Lock
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff size={20} className="text-base-content/40" />
              ) : (
                <Eye size={20} className="text-base-content/40" />
              )}
            </button>
          </div>
        </div>

        {/* Conditions d'utilisation */}
        <div className="form-control">
          <label className="cursor-pointer flex items-start gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-primary mt-1"
              required
            />
            <div className="text-sm leading-snug">
              J'accepte les{" "}
              <a href="#" className="link link-primary">
                conditions d'utilisation
              </a>{" "}
              et la{" "}
              <a href="#" className="link link-primary">
                politique de confidentialité
              </a>
            </div>
          </label>
        </div>

        {/* Message d'erreur */}
        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        )}

        {/* Bouton d'inscription */}
        <div className="form-control mt-6 flex justify-center">
          <button
            type="submit"
            className={`btn btn-primary ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Création du compte..." : "Créer mon compte"}
          </button>
        </div>

        {/* Lien de connexion */}
        <div className="divider">ou</div>
        <div className="text-center">
          <p className="text-sm">
            Déjà un compte ?{" "}
            <a href="/login" className="link link-primary">
              Se connecter
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
