import React from 'react';

export default function Services({ navigate }) {
  const trustpilotPackages = [
    { name: "Starter", price: "$149", features: ["10 verified reviews", "Trustpilot profile optimization", "Review monitoring", "Profile analytics", "Email support"] },
    { name: "Growth", price: "$399", features: ["25 verified reviews", "Complete profile optimization", "Advanced profile analytics", "Reputation growth strategy", "Review monitoring", "Priority support"] },
    { name: "Enterprise", price: "$710", features: ["50 verified reviews", "Complete profile optimization", "Advanced analytics & reporting", "Reputation strategy", "Monthly performance report", "Priority support"] },
    { name: "Premium", price: "$999", features: ["75 verified reviews", "Complete Trustpilot reputation management", "Negative review management assistance", "Profile optimization", "Review monitoring", "Advanced analytics & reporting", "Reputation growth strategy", "Dedicated account manager"] }
  ];

  const googlePackages = [
    { name: "Starter", price: "$149", features: ["5 Google reviews", "Google Business Profile optimization", "Review monitoring", "Basic analytics"] },
    { name: "Growth", price: "$385", features: ["20 Google reviews", "Google Business Profile optimization", "Advanced analytics", "Reputation growth strategy", "Review monitoring", "Priority support"] },
    { name: "Enterprise", price: "$699", features: ["50 Google reviews", "Complete profile optimization", "Analytics dashboard", "Monthly reporting", "Priority support"] },
    { name: "Premium", price: "$999", features: ["75 Google reviews", "Complete Google Business Profile management", "Negative review management assistance", "Review monitoring", "Analytics & reporting", "Dedicated support"] }
  ];

  const consultingPackages = [
    { name: "Discovery Call", price: "Free", period: "15 Mins", features: ["Initial consultation", "Business assessment", "Professional recommendations"] },
    { name: "Strategy Session", price: "$99", period: "60 Mins", features: ["60-minute consultation", "Reputation audit", "Custom action plan", "Growth recommendations"] },
    { name: "Business Reputation Audit", price: "$199", period: "One-time", features: ["Comprehensive reputation analysis", "Competitor comparison", "Reputation score assessment", "Growth roadmap", "Improvement recommendations"] }
  ];

  return (
    <div className="container page-header-spacing fade-in-up">
      
      {/* HEADER SECTION */}
      <section className="hero-section" style={{ paddingBottom: '3rem' }}>
        <span className="feature-badge">Tailored Performance Packages</span>
        <h1 className="hero-title">
          Scale Credibility & <br />
          <span className="hero-gradient-text">Protect Your Conversions</span>
        </h1>
        <p className="hero-subtitle">
          Engineered by leoshellyinsightteam to remain fully compliant with major review platform policies while actively building long-term digital asset trust.
        </p>
      </section>

      {/* TRUSTPILOT PORTFOLIO */}
      <section style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '2rem' }}>⭐</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>Trustpilot Reputation Management</h2>
        </div>
        <div className="features-grid">
          {trustpilotPackages.map((pkg, idx) => (
            <div key={idx} className="feature-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="feature-badge">{pkg.name}</span>
                <div style={{ margin: '1.5rem 0' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{pkg.price}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', textAlign: 'left' }}>
                      <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✔</span> <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }} onClick={() => navigate('contact')}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE PORTFOLIO */}
      <section style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '2rem' }}>📍</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>Google Reputation Management</h2>
        </div>
        <div className="features-grid">
          {googlePackages.map((pkg, idx) => (
            <div key={idx} className="feature-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="feature-badge" style={{ borderColor: 'var(--brand-secondary)', color: 'var(--brand-secondary)', background: 'rgba(224, 36, 132, 0.05)' }}>{pkg.name}</span>
                <div style={{ margin: '1.5rem 0' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{pkg.price}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', textAlign: 'left' }}>
                      <span style={{ color: 'var(--brand-secondary)', fontWeight: 'bold' }}>✔</span> <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto' }} onClick={() => navigate('contact')}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGY & CONSULTING */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '2rem' }}>💼</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>Reputation Consulting & Audits</h2>
        </div>
        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {consultingPackages.map((pkg, idx) => (
            <div key={idx} className="feature-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="feature-badge" style={{ background: 'rgba(30, 27, 75, 0.05)', color: 'var(--text-main)', borderColor: 'var(--border-line)' }}>{pkg.name}</span>
                <div style={{ margin: '1.5rem 0' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{pkg.price}</span>
                  {pkg.period && <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}> / {pkg.period}</span>}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', textAlign: 'left' }}>
                      <span style={{ color: 'var(--text-muted)' }}>✦</span> <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto', background: 'transparent', border: '1px solid var(--border-line)' }} onClick={() => navigate('contact')}>
                Book Session
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOM SOLUTIONS INTAKE */}
      <section className="cta-banner" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-line)' }}>
        <h2 className="cta-title" style={{ color: 'var(--text-main)' }}>Need a Custom Unified Package?</h2>
        <p className="cta-desc" style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
          Every enterprise has unique operating rules, industry standards, and branding demands. leoshellyinsightteam will draft an exclusive cross-platform blueprint perfectly scaled to your commercial metrics.
        </p>
        <button className="btn btn-primary" onClick={() => navigate('contact')}>
          Request a Custom Proposal
        </button>
      </section>

    </div>
  );
}