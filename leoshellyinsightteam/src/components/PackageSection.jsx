import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function PackageSection({ service, onSelectPackage }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackageTiers();
  }, [service.id]);

  const fetchPackageTiers = async () => {
    try {
      // Query specific operational rows corresponding to this active service item
      const { data, error } = await supabase
        .from('packages')
        .select('*')
        .eq('service_id', service.id);

      if (error) throw error;

      if (data && data.length > 0) {
        setPackages(data);
      } else {
        // Fallback default mock data structure to populate layout if none exists in DB yet
        const defaultTiers = [
          { id: 'st', name: 'Starter', review_quantity: '5 Reviews', delivery_timeline: '3-5 Days Pacing', price: 99, features: ['Geo-Targeted Accounts', 'Permanent Retention Warranty', 'Standard Support Matrix'] },
          { id: 'gr', name: 'Growth', review_quantity: '15 Reviews', delivery_timeline: '5-7 Days Pacing', price: 249, features: ['Premium Content Optimization', 'Drip-Feed Protection Engine', 'Priority Escalation Matrix'] },
          { id: 'pr', name: 'Premium', review_quantity: '30 Reviews', delivery_timeline: '10-14 Days Pacing', price: 449, features: ['Strategic Keyword Injection', 'Continuous Verification Sweeps', 'Dedicated Representative Access'] },
          { id: 'ent', name: 'Enterprise', review_quantity: 'Custom Volume', delivery_timeline: 'Continuous Campaigning', price: 899, features: ['Full-Scale Reputation Restructuring', 'Deep-Layer Filtering Audits', '24/7 Priority Emergency Hotline'] }
        ];
        setPackages(defaultTiers);
      }
    } catch (err) {
      console.error('Failed processing package profiles:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Synchronizing secure market valuations...</p>;
  }

  return (
    <div className="package-grid">
      {packages.map((pckg) => (
        <div key={pckg.id} className="package-tier-card">
          <span className="package-title">{pckg.name}</span>
          <div className="package-rate">${pckg.price}</div>
          
          <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            {pckg.review_quantity}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            ⏱ {pckg.delivery_timeline}
          </div>

          <ul className="package-features">
            {pckg.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <button 
            type="button" 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '1rem', padding: '0.6rem 0' }}
            onClick={() => onSelectPackage(service, pckg)}
          >
            Buy Package
          </button>
        </div>
      ))}
    </div>
  );
}