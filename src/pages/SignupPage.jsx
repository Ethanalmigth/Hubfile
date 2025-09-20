// src/pages/SignupPage.jsx
import AuthLayout from '../components/auth/AuthLayout';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
  return (
    <AuthLayout
      title="Créez votre compte gratuit"
      subtitle="Commencez à organiser vos fichiers en quelques secondes"
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;