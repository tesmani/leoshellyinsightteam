import React from 'react';

export default function AboutMe({ navigate }) {
  const operationalFlow = [
    { 
      step: "01", 
      title: "Audit & Risk Diagnostics", 
      desc: "We perform a deep dive across 14+ core platform indices, mapping review volatility trends, identifying suspicious activity, and locating conversion leakages." 
    },
    { 
      step: "02", 
      title: "Algorithmic Isolation", 
      desc: "We implement custom insulation systems to shield your business profiles from errant automated backend spam filters and hostile algorithmic flags." 
    },
    { 
      step: "03", 
      title: "Velocity-Controlled Recovery", 
      desc: "Our specialists securely deploy organic distribution nodes, slowly scaling high-authority customer feedback metrics without triggering platform thresholds." 
    },
    { 
      step: "04", 
      title: "Active Guard & Optimization", 
      desc: "We establish continuous profile monitoring, structured metadata schemas, and real-time alerts to secure and hold your five-star positioning." 
    }
  ];

  const corePillars = [
    { 
      title: "Algorithmic Integrity", 
      items: ["Platform Filter Analysis", "Negative Review Suppression", "Spam Policy Adherence", "Compliance Monitoring"] 
    },
    { 
      title: "Profile Defense Systems", 
      items: ["Google Profile Optimization", "Trustpilot Management", "B2B Rating Stabilization", "Review Spike Mitigation"] 
    },
    { 
      title: "Conversion Security", 
      items: ["Merchant Trust Protection", "Authority Index Anchoring", "Audit Blueprint Modeling", "Risk-Control Pipelines"] 
    }
  ];

  return (
    <div className="container page-header-spacing fade-in-up">
      
      {/* 1. HERO ARCHITECTURE */}
      <section className="hero-section" style={{ paddingBottom: '3rem' }}>
        <span className="feature-badge" style={{ display: 'inline-block', margin: '0 auto 1rem auto' }}>Our Identity & Blueprint</span>
        <h1 className="hero-title">
          Inside the Architecture of <br />
          <span className="hero-gradient-text">leoshellyinsightteam</span>
        </h1>
        <p className="hero-subtitle">
          We are dedicated exclusively to modern brand reputation defense, engineering algorithmic guardrails that shield corporate trust metrics and protect transaction revenue.
        </p>
      </section>

      {/* 2. OPERATIONAL PHILOSOPHY */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center',
          textAlign: 'left'
        }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
              Pioneering Enterprise Reputation Defense
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              We do not believe brand reputation is a passive metric. To us, it is your highest-value digital asset. At <strong>leoshellyinsightteam</strong>, we build high-performance systems specifically to defend corporate profiles under hostile algorithmic pressure or competitive smear campaigns.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              By analyzing how major review platforms filter, index, and suppress feedback, our team designs custom organic pipelines that anchor high-trust sentiment and optimize visibility. We restore control back to merchants.
            </p>
            <button className="btn btn-primary" onClick={() => navigate('contact')}>
              Request a Systems Audit
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ 
              background: 'var(--bg-surface)', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              border: '1px solid var(--border-line)',
              boxShadow: '0 10px 30px rgba(157,38,176,0.03)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '1rem' }}>
                Pragmatic Protection
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                We analyze system anomalies and filter triggers across directories like Google, Trustpilot, and Clutch to build continuous protective insulation around your active profiles.
              </p>
            </div>
            
            <div style={{ 
              background: 'var(--bg-surface)', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              border: '1px solid var(--border-line)',
              boxShadow: '0 10px 30px rgba(157,38,176,0.03)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-secondary)', marginBottom: '1rem' }}>
                Stabilized Growth
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                We apply organic velocity systems that ensure feedback flows match expected platform behaviors, safely securing long-term rating stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL STEPS / FLOWS */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="feature-badge">Tactical Steps</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.5rem' }}>How We Operationalize</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {operationalFlow.map((flow, idx) => (
            <div key={idx} className="feature-card" style={{ textAlign: 'left', padding: '2.5rem 2rem' }}>
              <div>
                <span style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  background: 'var(--brand-gradient)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                  marginBottom: '1rem'
                }}>
                  {flow.step}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1rem' }}>
                  {flow.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                  {flow.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE REPUTATION PILLARS */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="feature-badge">Strategic Competencies</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.5rem' }}>Core System Architecture</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {corePillars.map((pillar, idx) => (
            <div key={idx} className="feature-card" style={{ textAlign: 'left' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                  {pillar.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {pillar.items.map((item, keyIdx) => (
                    <li key={keyIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: idx % 2 === 0 ? 'var(--brand-primary)' : 'var(--brand-secondary)', fontWeight: 'bold' }}>✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO CONVERSION BANNER */}
      <section className="cta-banner" style={{ background: 'var(--brand-gradient)', border: 'none', color: '#ffffff' }}>
        <h2 className="cta-title" style={{ color: '#ffffff' }}>Ready to Stabilize Your Profile Metrics?</h2>
        <p className="cta-desc" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Connect with the analysts at leoshellyinsightteam today to protect your storefront conversions from erratic review site algorithms.
        </p>
        <button className="btn btn-primary" style={{ background: 'var(--button-gradient)', border: 'none' }} onClick={() => navigate('contact')}>
          Book System Assessment
        </button>
      </section>

    </div>
  );
}