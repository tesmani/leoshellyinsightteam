import React from 'react';

export default function Footer({ navigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <h3 style={{ marginBottom: '1rem', fontWeight: 800 }}>leoshellyinsightteam</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '320px' }}>
              Premium reputation architecture and enterprise review stabilization systems designed to scale digital brand trust.
            </p>
          </div>
          
          <div className="footer-links-column">
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--text-main)' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => navigate('home')}>Home Base</li>
              <li style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => navigate('services')}>Our Services</li>
              <li style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => navigate('contact')}>Contact Agency</li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--text-main)' }}>Management</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => navigate('admin')}>Secure Command Terminal</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-line)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <p>&copy; {currentYear} leoshellyinsightteam. All rights reserved.</p>
          <p style={{ fontSize: '0.75rem' }}>Secure Reputation Engineering</p>
        </div>
      </div>
    </footer>
  );
}