// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FoldersPage from './pages/FoldersPage';
import FilePage from './pages/FilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/folders" element={<FoldersPage />} />
        <Route path="/files" element={<FilePage />} />
      </Routes>
    </Router>
  );
}

export default App;