import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Adjust path if needed
import Footer from './components/Footer'; // Adjust path if needed
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe'; // Our new component

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'services':
        return <Services navigate={navigate} />;
      case 'about':
        return <AboutMe navigate={navigate} />;
      case 'contact':
        return <Contact navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="app-container">
      {/* Premium Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('home')} style={{ cursor: 'pointer' }}>
            leoshelly<span>insightteam</span>
          </div>
          <div className="nav-links">
            <button className={`nav-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => navigate('home')}>Home</button>
            <button className={`nav-item ${currentPage === 'services' ? 'active' : ''}`} onClick={() => navigate('services')}>Services</button>
            <button className={`nav-item ${currentPage === 'about' ? 'active' : ''}`} onClick={() => navigate('about')}>About Me</button>
            <button className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => navigate('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ paddingTop: '80px' }}> {/* Pushes content down so it is not hidden under the fixed navbar */}
        {renderPage()}
      </main>

      {/* Premium Footer */}
      <footer className="footer" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-line)', padding: '3rem 1.5rem', marginTop: '6rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} leoshellyinsightteam. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }} onClick={() => navigate('about')}>About Me</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }} onClick={() => navigate('services')}>Services</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }} onClick={() => navigate('contact')}>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}