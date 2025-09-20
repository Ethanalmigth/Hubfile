// src/pages/LoginPage.jsx
import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout
      title="Connectez-vous à votre compte"
      subtitle="Accédez à votre espace sécurisé"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;