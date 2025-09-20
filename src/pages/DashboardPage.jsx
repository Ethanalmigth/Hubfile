// src/pages/DashboardPage.jsx
import DashboardLayout from '../components/layout/DashboardLayout';
import DashboardHome from '../components/dashboard/DashboardHome';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <DashboardHome />
    </DashboardLayout>
  );
};

export default DashboardPage;