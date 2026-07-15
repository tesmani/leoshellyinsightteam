import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: '', category: 'Standard', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardState();
  }, []);

  const loadDashboardState = async () => {
    try {
      const { data: orderData } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
      const { data: serviceData } = await supabase.from('services').select('*');
      setOrders(orderData || []);
      setServices(serviceData || []);
    } catch (err) {
      console.error('State link error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePushService = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('services').insert([newService]).select();
      if (error) throw error;
      alert('New service path successfully pushed live!');
      setNewService({ title: '', category: 'Standard', description: '' });
      loadDashboardState();
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="container page-header-spacing"><p>Authorizing secure connection path...</p></div>;

  return (
    <div className="container page-header-spacing">
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Command Center</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }}>
        {/* Control Box: Add Services */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-line)', padding: '2rem', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Deploy New Service</h2>
          <form onSubmit={handlePushService}>
            <div className="form-group">
              <label>Service / Platform Name</label>
              <input 
                type="text" 
                required 
                value={newService.title}
                onChange={e => setNewService({...newService, title: e.target.value})}
                placeholder="E.g., Reviews.io Reviews" 
              />
            </div>
            <div className="form-group">
              <label>Category Assignment</label>
              <select value={newService.category} onChange={e => setNewService({...newService, category: e.target.value})}>
                <option value="Standard">Standard Platforms</option>
                <option value="Profile Retention Stability">Profile Retention Stability (Premium)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Service Description</label>
              <textarea 
                rows="3" 
                required 
                value={newService.description}
                onChange={e => setNewService({...newService, description: e.target.value})}
                placeholder="Describe pacing and optimization parameters..." 
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Publish Live
            </button>
          </form>
        </div>

        {/* Pipeline Monitor: Incoming Submissions */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-line)', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Active Order Ingestion Pipeline</h2>
          {orders.length === 0 ? <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No orders currently logged in pipeline.</p> : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-line)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem' }}>Service Profile</th>
                  <th style={{ padding: '0.75rem' }}>Asset Target</th>
                  <th style={{ padding: '0.75rem' }}>Actions Required</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o.id} style={{ borderBottom: '1px solid var(--border-line)' }}>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <strong>{o.service_title}</strong><br />
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{o.package_name} — ${o.price}</span>
                    </td>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <a href={o.business_link} target="_blank" rel="noreferrer" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', wordBreak: 'break-all' }}>
                        View Target Asset
                      </a>
                    </td>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <a 
                        href={`mailto:?subject=Invoice Payment Link for Order: ${o.service_title}&body=Hello, thank you for choosing leoshellyinsightteam. Your order configuration is processed. Please securely submit payment through this generated invoice link: `}
                        style={{ background: '#10b981', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}
                      >
                        📬 Send Invoice Link
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}