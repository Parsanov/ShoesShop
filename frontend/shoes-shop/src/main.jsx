import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './reset.css';
import HomePage from './Pages/HomePage/Homepage.jsx';
import NavBar from './Components/MainElement/NavBar/Navbar.jsx';
import Footer from './Components/MainElement/Footer/Footer.jsx';
import CategoryPage from './Pages/Category/CategoryPage.jsx';
import AboutShoes from './Pages/AboutShoes/AboutShoes.jsx';
import UserProfile from './Pages/UserProfile/UserProfile.jsx';
import LoginPanel from './Components/ProfileOptions/LoginPanel/LoginPanel.jsx';
import RegisterPanel from './Components/ProfileOptions/RegisterPanel/RegisterPanel.jsx';
import { AuthProvider } from './Components/AuthContext/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <div className="app-container">
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/man" element={<CategoryPage gender="man" />} />
              <Route path="/woman" element={<CategoryPage gender="woman" />} />
              <Route path="/about/:id" element={<AboutShoes />} />
              <Route path="*" element={<h1>Page not found</h1>} />
              <Route path="/profileLog" element={<LoginPanel />} />
              <Route path="/profileReg" element={<RegisterPanel />} />
              <Route path="/profileUser" element={<UserProfile />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  </StrictMode>
);
