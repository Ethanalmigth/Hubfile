import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/layout/Layout";
import "./App.css";
import AuthProtected from "./components/layout/AuthProtected";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Pages privées (avec Layout) */}
        <Route
          path="/dashboard"
          element={
            <AuthProtected>
              <Layout>
                <Dashboard />
              </Layout>
            </AuthProtected>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
