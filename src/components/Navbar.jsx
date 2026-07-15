import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar({ currentPage, navigate }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-brand" onClick={() => navigate('home')}>
          leoshellyinsightteam
        </div>
        
        <ul className="nav-links">
          <li 
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`} 
            onClick={() => navigate('home')}
          >
            Home
          </li>
          <li 
            className={`nav-item ${currentPage === 'services' ? 'active' : ''}`} 
            onClick={() => navigate('services')}
          >
            Services
          </li>
          <li 
            className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`} 
            onClick={() => navigate('contact')}
          >
            Contact
          </li>
        </ul>

        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            title="Toggle theme mode"
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button 
            className="btn btn-primary" 
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            onClick={() => navigate('admin')}
          >
            Admin Panel
          </button>
        </div>
      </div>
    </nav>
  );
}