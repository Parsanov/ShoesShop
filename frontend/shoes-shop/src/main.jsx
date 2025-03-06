import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './reset.css';
import HomePage from './Pages/HomePage/Homepage.jsx';
import NavBar from './Components/NavBar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import CategoryPage from './Pages/Category/CategoryPage.jsx';
import AboutShoes from './Pages/AboutShoes/AboutShoes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/man" element={<CategoryPage gender="man" />} />
              <Route path="/woman" element={<CategoryPage gender="woman" />} />
              <Route path="/about/:id" element={<AboutShoes/>} />
            </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  </StrictMode>
);