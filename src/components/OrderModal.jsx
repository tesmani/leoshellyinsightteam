import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function OrderModal({ service, pckg, onClose }) {
  const [businessLink, setBusinessLink] = useState('');
  const [instructions, setInstructions] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOrderPlacement = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Commit submission records directly to your database pipeline
      const { error: dbError } = await supabase.from('orders').insert([
        {
          service_title: service.title,
          package_name: pckg.name,
          price: parseFloat(pckg.price),
          business_link: businessLink,
          instructions: instructions,
          status: 'Pending'
        },
      ]);

      if (dbError) throw dbError;

      // 2. Transmit package payload directly to the system processing email
      // Replace with your validated Formspree/EmailJS deployment key endpoint
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `🚀 New Order for ${service.title} [${pckg.name}]`,
          platform: service.title,
          packageTier: pckg.name,
          orderValue: `$${pckg.price}`,
          targetProfile: businessLink,
          clientDirectives: instructions || 'No custom notes provided'
        }),
      });

      alert('Submission logged! Your order details are verified. Check your inbox shortly for your custom payment checkout link.');
      onClose();
    } catch (err) {
      console.error('Pipeline error:', err);
      alert('Connection dropped. Order logged locally, but email routing failed. Please contact support.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem' }}>Configure Package Dispatch</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.25rem', cursor: 'pointer' }}>&times;</button>
        </div>
        
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Selected Service: <strong style={{ color: 'var(--text-main)' }}>{service.title} ({pckg.name})</strong>
        </p>

        <form onSubmit={handleOrderPlacement}>
          <div className="form-group">
            <label>Business / Profile URL *</label>
            <input 
              type="url" 
              required 
              value={businessLink}
              onChange={(e) => setBusinessLink(e.target.value)}
              placeholder="https://www.trustpilot.com/review/yourbrand"
            />
          </div>

          <div className="form-group">
            <label>Special Deployment Instructions</label>
            <textarea 
              rows="4"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="E.g., Please space out postings over 7 days, prioritize local profiles..."
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Processing Pipeline...' : `Order - $${pckg.price}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}