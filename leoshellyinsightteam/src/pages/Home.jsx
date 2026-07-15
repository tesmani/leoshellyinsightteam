import React from 'react';

export default function Home({ navigate }) {
  
  // Categorized operational target nodes requested
  const reviewPlatforms = [
    { name: "Trustpilot Reviews", type: "Enterprise Tech & Consumer", icon: "⭐" },
    { name: "Google Reviews", type: "Local Business Listings", icon: "📍" },
    { name: "Clutch Reviews", type: "B2B Agencies & Dev Firms", icon: "💼" },
    { name: "Reviews.io Reviews", type: "E-Commerce Merchants", icon: "🛒" },
    { name: "BBB Reviews", type: "Accredited Institutions", icon: "🛡️" },
    { name: "Sitejabber Reviews", type: "Web & Retail Brands", icon: "🌐" },
    { name: "Glassdoor Reviews", type: "Corporate HR & Hiring", icon: "👥" },
    { name: "App Store Reviews", type: "iOS Mobile Applications", icon: "🍎" },
    { name: "Play Store Reviews", type: "Android Mobile Software", icon: "🤖" },
    { name: "Facebook Reviews", type: "Social Commerce Pages", icon: "📱" },
    { name: "Yelp Reviews", type: "Hospitality & Service Pros", icon: "🍽️" }
  ];

  const operationalPillars = [
    { title: "Reputation Management", desc: "Holistic observation, deployment, and expansion maps designed to elevate corporate trust metrics safely.", badge: "Core Engine" },
    { title: "Review Retention & Stabilization", desc: "Proactive counter-measures tracking defensive marketplace patches to isolate real score metrics.", badge: "Security System" },
    { title: "Profile Optimization", desc: "Rebuilding layout visibility, tagging schemas, and metadata across channels for maximum conversions.", badge: "Conversion Focus" },
    { title: "SEO Reputation Services", desc: "Suppression mechanics to dilute negative engine indexing while anchoring authoritative five-star results.", badge: "Search Visibility" }
  ];

  const realFeedback = [
    { quote: "Coordinated negative updates dropped our conversion parameters. Their mitigation system stabilized the index within 72 hours.", company: "Logistics Conglomerate", field: "B2B Fleet Operations" },
    { quote: "The strategic deployment optimization framework saved our core tracking links before an acquisition. Brilliant delivery.", company: "FinTech Infrastructure", field: "SaaS Ecosystems" },
    { quote: "Critical warning flags cleared out following their metadata audit. Our trust baseline has hit an all-time maximum.", company: "E-Commerce Group", field: "D2C Retail Network" }
  ];

  // Double the feedback list to guarantee an infinite uninterrupted carousel loop
  const infiniteFeedbackLoop = [...realFeedback, ...realFeedback];

  return (
    <div className="container page-header-spacing fade-in-up">
      
      {/* 1. HERO ARCHITECTURE ENGINE */}
      <section className="hero-section">
        <h1 className="hero-title">
          We institutionalize Unbreakable <br />
          <span className="hero-gradient-text">Digital Brand Reputation</span>
        </h1>
        <p className="hero-subtitle">
          We provide comprehensive reputation management solutions designed to help businesses maintain a professional, trustworthy online presence.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => navigate('services')}>
            Explore Services
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('contact')}>
            Consult an Expert
          </button>
        </div>
      </section>

      {/* 2. LIVE TRUST ANALYTICS INTERACTIVE GRID */}
      <section className="metrics-dashboard">
        <h2 className="section-title" style={{ color: '#ffffff' }}>Why Top Brands Trust leoshellyinsightteam</h2>
        <div className="metrics-grid">
          <div className="metric-node">
            <div className="metric-value">99.4%</div>
            <p className="metric-label">Retention Stability Rating</p>
          </div>
          <div className="metric-node">
            <div className="metric-value">14+</div>
            <p className="metric-label">Supported Core Platforms</p>
          </div>
          <div className="metric-node">
            <div className="metric-value">4.2M+</div>
            <p className="metric-label">Consumer Impressions Guarded</p>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIZED SERVICE LAYOUT CHANNELS */}
      <section style={{ marginBottom: '6rem' }}>
        <h2 className="section-title">Institutional Integration Matrix</h2>
        <p className="hero-subtitle" style={{ marginTop: '-2.5rem', marginBottom: '3.5rem' }}>
          We actively maintain dedicated algorithmic protection pipelines for all premium international review databases.
        </p>
        <div className="platform-grid">
          {reviewPlatforms.map((platform, idx) => (
            <div key={idx} className="platform-node" onClick={() => navigate('services')}>
              <div className="platform-icon-frame">{platform.icon}</div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>{platform.name}</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{platform.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. REPUTATION PROTECTION SUBSYSTEM PILLARS */}
      <section style={{ marginBottom: '6rem' }}>
        <h2 className="section-title">Corporate Protection Frameworks</h2>
        <div className="features-grid">
          {operationalPillars.map((pillar, idx) => (
            <div key={idx} className="feature-card">
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="feature-badge">{pillar.badge}</div>
                <h3 className="feature-heading">{pillar.title}</h3>
                <p className="feature-desc">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BRAND PROFILE / ABOUT METHODOLOGY SECTION */}
      <section 
        className="metrics-dashboard" 
        style={{ 
          background: 'var(--bg-surface)', 
          border: '1px solid var(--border-line)',
          color: 'inherit',
          padding: '4rem 3rem' 
        }}
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '3rem', 
          alignItems: 'center', 
          textAlign: 'left' 
        }}>
          <div>
            <span className="feature-badge">Operational Blueprint</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0', color: 'var(--text-main)', lineHeight: 1.3 }}>
              We don't manage reviews. We secure corporate conversions.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              At leoshellyinsightteam, we engineer proprietary defensive strategies for businesses under hostile algorithmic pressure. Raw marketplace platforms frequently implement automated suppression loops that damage authentic merchant transactions.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Our dedicated staff builds continuous optimization systems to preserve conversion funnels, suppress targeted smear campaigns, and ensure tracking assets display a pristine reputation across corporate search engine profiles.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-base)', borderRadius: '8px', borderLeft: '4px solid var(--brand-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Algorithmic Insulation</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Protecting listings from erratic backend system filters.</span>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--bg-base)', borderRadius: '8px', borderLeft: '4px solid var(--brand-secondary)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Velocity Control Architecture</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Deploying natural organic distribution nodes safely.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MOTION SECTORS: INFINITE ANIMATED TESTIMONIAL MARQUEE */}
      <section style={{ marginBottom: '6rem', overflow: 'hidden' }}>
        <h2 className="section-title">Real-Time Operational Field Data</h2>
        <div className="marquee-container">
          <div className="marquee-track">
            {infiniteFeedbackLoop.map((item, idx) => (
              <div key={idx} className="testimonial-card" style={{ width: '340px', flexShrink: 0, margin: '0 0.5rem' }}>
                <p className="testimonial-quote" style={{ fontSize: '0.95rem' }}>"{item.quote}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-line)', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--brand-primary)' }}>{item.company}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.field}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONVERSION CALL TO ACTION CLOSURE */}
      <section className="cta-banner">
        <h2 className="cta-title">Ready to Fortify Your Digital Standing?</h2>
        <p className="cta-desc">
          Do not leave corporate revenue targets vulnerable to volatile modern marketplace filters. Secure your institutional footprint with our dedicated infrastructure.
        </p>
        <button className="btn btn-primary" onClick={() => navigate('contact')}>
          Initialize Secure Onboarding
        </button>
      </section>

      {/* 8. PROFESSIONAL BRAND SIGNOFF LINK */}
      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6rem' }}>
        All pipelines active under secure protocol. Designed by{' '}
        <span 
          style={{ 
            color: 'var(--brand-primary)', 
            cursor: 'pointer', 
            fontWeight: '600',
            textDecoration: 'underline'
          }} 
          onClick={() => navigate('about')}
        >
          Teslim Fakayode
        </span>
      </p>

    </div>
  );
}