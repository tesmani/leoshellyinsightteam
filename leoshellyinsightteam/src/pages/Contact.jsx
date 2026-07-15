import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    platform: 'Google Reviews',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Real submission action hook can go here
  };

  return (
    <div className="container page-header-spacing fade-in-up" style={{ maxWidth: '800px', marginBottom: '6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="feature-badge">Encrypted Intake Gateway</span>
        <h1 className="hero-title" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Initiate Platform Auditing</h1>
        <p className="hero-subtitle" style={{ fontSize: '1rem' }}>
          Leave your project parameters below and one of our dedicated reputation specialist agents will assemble your profile recommendations within 12 hours.
        </p>
      </div>

      {submitted ? (
        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '4rem 2rem', 
          borderRadius: '16px', 
          border: '1px solid var(--brand-primary)', 
          textAlign: 'center' 
        }}>
          <span style={{ fontSize: '3rem' }}>🚀</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '1rem' }}>Intake Transmission Received</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Thank you. Your dossier has been logged. Our consulting team is running an initial reputation sweep.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ 
          background: 'var(--bg-card)', 
          padding: '3rem', 
          borderRadius: '16px', 
          border: '1px solid var(--border-line)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          textAlign: 'left'
        }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Full Name</label>
            <input 
              type="text" 
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ width: '100%', padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-line)', borderRadius: '8px', color: '#fff', fontSize: '0.95rem' }} 
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Corporate Email</label>
              <input 
                type="email" 
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ width: '100%', padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-line)', borderRadius: '8px', color: '#fff', fontSize: '0.95rem' }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Company / Organization Name</label>
              <input 
                type="text" 
                placeholder="Enterprise Inc."
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                style={{ width: '100%', padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-line)', borderRadius: '8px', color: '#fff', fontSize: '0.95rem' }} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Primary Target Platform</label>
            <select 
              value={formData.platform}
              onChange={(e) => setFormData({...formData, platform: e.target.value})}
              style={{ width: '100%', padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-line)', borderRadius: '8px', color: '#fff', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              <option>Google Reviews</option>
              <option>Trustpilot Reviews</option>
              <option>Clutch (B2B)</option>
              <option>App Store / Play Store</option>
              <option>Custom Multi-Platform System</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Context / Current Operational Targets</label>
            <textarea 
              rows="5"
              placeholder="Describe any current reputation indicators or optimization targets..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              style={{ width: '100%', padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-line)', borderRadius: '8px', color: '#fff', fontSize: '0.95rem', resize: 'vertical' }}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.1rem' }}>
            Submit Dossier & Request Call
          </button>
        </form>
      )}

    </div>
  );
}