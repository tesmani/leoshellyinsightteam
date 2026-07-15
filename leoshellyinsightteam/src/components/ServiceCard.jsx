import React, { useState } from 'react';
import PackageSection from './PackageSection';

export default function ServiceCard({ service, onSelectPackage }) {
  const [showPackages, setShowPackages] = useState(false);

  // Check if this specific service belongs to the premium stabilization category
  const isStabilityCategory = service.category === 'Profile Retention Stability';

  return (
    <div className={`service-ui-card ${isStabilityCategory ? 'stability-tier' : ''}`}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {service.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
          {service.description}
        </p>
      </div>

      {/* Accordion Trigger to view associated operational package options */}
      <button 
        className="btn btn-secondary" 
        style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}
        onClick={() => setShowPackages(!showPackages)}
      >
        {showPackages ? 'Hide Available Options ▲' : 'View Pricing & Packages ▼'}
      </button>

      {showPackages && (
        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-line)', paddingTop: '1.5rem' }}>
          <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', tracking: '0.05em', marginBottom: '1rem', color: 'var(--brand-primary)' }}>
            Select Campaign Configuration:
          </h4>
          <PackageSection service={service} onSelectPackage={onSelectPackage} />
        </div>
      )}
    </div>
  );
}