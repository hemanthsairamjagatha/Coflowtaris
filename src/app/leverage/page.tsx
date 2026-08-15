"use client";

import Link from "next/link";

export default function LeveragePage() {
  const alliances = [
    {
      num: "01",
      name: "NETSUITE",
      desc: "ERP implementation, integration and platform engineering.",
      status: "[ IN DEVELOPMENT ]",
      href: "/leverage/netsuite"
    },
    {
      num: "02",
      name: "COUPA",
      desc: "Procurement platform engineering, integration and optimization.",
      status: "[ IN DEVELOPMENT ]",
      href: "/leverage/coupa"
    },
    {
      num: "03",
      name: "WORKDAY",
      desc: "Enterprise platform integration, engineering and delivery.",
      status: "[ IN DEVELOPMENT ]",
      href: "/leverage/workday"
    }
  ];

  return (
    <>
      {/* Leverage Hero */}
      <section className="section ev-hero" style={{ paddingTop: '120px' }}>
        <span className="eyebrow">LEVERAGE</span>
        <h1 className="section-heading ev-title" style={{ maxWidth: '900px' }}>HOW WE SCALE<br />WITHOUT SCALING<br />COMPLEXITY.</h1>
        <p className="card-description ev-subtitle">
          The platforms, partnerships and specialist<br />
          relationships that extend what Flowtaris<br />
          can deliver.
        </p>
        <div className="ev-stats" style={{ gap: '64px', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">03 STRATEGIC ALLIANCES</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">ACTIVE NETWORK</span>
          </div>
        </div>
      </section>

      {/* Leverage Model */}
      <section className="section">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>HOW WE CREATE LEVERAGE</h2>
        
        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--color-structural)', paddingTop: '24px' }}>
            <h3 className="card-heading" style={{ textTransform: 'uppercase', marginBottom: '16px' }}>PLATFORMS</h3>
            <p className="trust-body">Technology platforms that allow<br />us to solve complex problems faster.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--color-structural)', paddingTop: '24px' }}>
            <h3 className="card-heading" style={{ textTransform: 'uppercase', marginBottom: '16px' }}>PARTNERS</h3>
            <p className="trust-body">Strategic relationships that expand<br />capability and reach.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--color-structural)', paddingTop: '24px' }}>
            <h3 className="card-heading" style={{ textTransform: 'uppercase', marginBottom: '16px' }}>PEOPLE</h3>
            <p className="trust-body">Specialists who bring depth where<br />general capability isn&apos;t enough.</p>
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px' }}>STRATEGIC ALLIANCES</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {alliances.map((alliance) => (
            <div key={alliance.num} className="ev-panel" style={{ padding: '64px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}>{alliance.num}</span>
              <h3 className="section-heading" style={{ fontSize: '2rem', margin: 0 }}>{alliance.name}</h3>
              <p className="trust-body" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: 0 }}>{alliance.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px' }}>
                <span className="section-label" style={{ margin: 0 }}>PARTNER STATUS</span>
                <span style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '0.05em', color: 'var(--color-accent)' }}>{alliance.status}</span>
              </div>
              <Link href={alliance.href} className="judgment-cta" style={{ marginTop: '16px', alignSelf: 'flex-start' }}>EXPLORE {alliance.name} &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* What Partnerships Actually Change */}
      <section className="section">
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', maxWidth: '800px' }}>
          PARTNERSHIPS SHOULD CHANGE<br />THE OUTCOME.
        </h2>
        <p className="card-description" style={{ maxWidth: '600px', marginBottom: '64px', color: 'var(--color-text-secondary)' }}>
          Not the logo wall.
        </p>

        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
          {/* Without Leverage */}
          <div style={{ padding: '48px', backgroundColor: 'var(--color-surface)' }}>
            <h3 className="section-label" style={{ marginBottom: '32px' }}>WITHOUT LEVERAGE</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
              {["Client problem", "Flowtaris capability", "Limited delivery boundary"].map((step, i, arr) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <span className="card-heading" style={{ textTransform: 'uppercase', fontWeight: 500, letterSpacing: '0.05em' }}>{step}</span>
                  {i < arr.length - 1 && <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem' }}>&darr;</span>}
                </div>
              ))}
            </div>
          </div>

          {/* With Leverage */}
          <div style={{ padding: '48px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-structural)' }}>
            <h3 className="section-label" style={{ marginBottom: '32px', color: 'var(--color-accent)' }}>WITH LEVERAGE</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
              {["Client problem", "Flowtaris", "Strategic platform / partner", "Specialist capability", "Larger solution surface"].map((step, i, arr) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <span className="card-heading" style={{ textTransform: 'uppercase', fontWeight: 500, letterSpacing: '0.05em' }}>{step}</span>
                  {i < arr.length - 1 && <span style={{ color: 'var(--color-accent)', fontSize: '1.25rem' }}>&darr;</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capability Map */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>CAPABILITY MAP</h2>
        <div className="ev-table-container">
          <table className="ev-table" style={{ minWidth: '600px' }}>
            <thead>
              <tr>
                <th className="ev-th">CAPABILITY</th>
                <th className="ev-th" style={{ textAlign: 'center' }}>FLOWTARIS</th>
                <th className="ev-th" style={{ textAlign: 'center' }}>PARTNER</th>
                <th className="ev-th" style={{ textAlign: 'center' }}>SPECIALIST</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Architecture", f: "●", p: "●", s: "○" },
                { name: "Integration", f: "●", p: "●", s: "○" },
                { name: "Platform Engineering", f: "●", p: "●", s: "○" },
                { name: "Data Engineering", f: "●", p: "○", s: "●" },
                { name: "ERP", f: "○", p: "●", s: "●" },
                { name: "Procurement", f: "○", p: "●", s: "●" },
                { name: "AI / Automation", f: "●", p: "○", s: "●" }
              ].map((row, i) => (
                <tr key={i} className="ev-tr">
                  <td className="ev-td ev-td-name" style={{ fontSize: '1.125rem' }}>{row.name}</td>
                  <td className="ev-td" style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--color-text-primary)' }}>{row.f}</td>
                  <td className="ev-td" style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--color-text-primary)' }}>{row.p}</td>
                  <td className="ev-td" style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--color-text-primary)' }}>{row.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Partner Deal Registration */}
      <section className="section ev-access-section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div className="ev-access-inner">
          <span className="section-label" style={{ marginBottom: '16px', display: 'block' }}>PARTNER DEAL REGISTRATION</span>
          <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>HAVE AN OPPORTUNITY?</h2>
          <p className="trust-body ev-access-desc" style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '48px' }}>
            Register it once.<br />
            We&apos;ll route it to the appropriate Flowtaris<br />
            team and partner relationship.
          </p>
          <form className="ev-access-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
            <div className="ev-access-input-group" style={{ flexDirection: 'column', border: 'none', gap: '24px' }}>
              <div style={{ display: 'flex', border: '1px solid var(--color-structural)' }}>
                <input 
                  type="email" 
                  className="ev-access-input" 
                  placeholder="WORK EMAIL" 
                  required 
                />
              </div>
              <button type="submit" className="judgment-cta" style={{ alignSelf: 'flex-start', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                REGISTER AN OPPORTUNITY &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Partner Pipeline */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>PARTNER PIPELINE</h2>
        <div className="ev-panel" style={{ padding: '64px', display: 'inline-block' }}>
          <p className="card-description" style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            PIPELINE DATA<br />COMING ONLINE
          </p>
        </div>
      </section>

      {/* Specialist Network */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '32px' }}>SPECIALIST NETWORK</h2>
        <h3 className="section-heading" style={{ fontSize: '3rem', marginBottom: '24px', maxWidth: '900px' }}>
          WHEN DEPTH MATTERS,<br />BRING IN THE RIGHT PERSON.
        </h3>
        <p className="card-description" style={{ maxWidth: '700px', marginBottom: '48px' }}>
          A curated network of specialists<br />
          across platforms, engineering,<br />
          data and enterprise operations.
        </p>
        <Link href="#" className="judgment-cta" style={{ marginBottom: '64px', display: 'inline-block' }}>EXPLORE SPECIALISTS &rarr;</Link>

        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', borderTop: '1px solid var(--color-structural)', paddingTop: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="section-label">ERP</span>
            <span className="trust-body" style={{ fontWeight: 500 }}>NetSuite</span>
            <span className="trust-body" style={{ fontWeight: 500 }}>SAP</span>
            <span className="trust-body" style={{ fontWeight: 500 }}>Workday</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="section-label">DATA</span>
            <span className="trust-body" style={{ fontWeight: 500 }}>Data Engineering</span>
            <span className="trust-body" style={{ fontWeight: 500 }}>Analytics</span>
            <span className="trust-body" style={{ fontWeight: 500 }}>AI</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="section-label">OPERATIONS</span>
            <span className="trust-body" style={{ fontWeight: 500 }}>Transformation</span>
            <span className="trust-body" style={{ fontWeight: 500 }}>Architecture</span>
            <span className="trust-body" style={{ fontWeight: 500 }}>Program Leadership</span>
          </div>
        </div>
      </section>

      {/* The Flowtaris Network */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>THE FLOWTARIS NETWORK</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="section-heading" style={{ fontSize: '2rem', margin: 0 }}>.CO</span>
            <span className="trust-body">TRUST INFRASTRUCTURE</span>
          </div>
          <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem' }}>&darr;</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="section-heading" style={{ fontSize: '2rem', margin: 0 }}>.COM</span>
            <span className="trust-body">Company / commercial presence</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="section-heading" style={{ fontSize: '2rem', margin: 0 }}>.AI</span>
            <span className="trust-body">AI systems / intelligence</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="section-heading" style={{ fontSize: '2rem', margin: 0 }}>.NET</span>
            <span className="trust-body">Client / operational infrastructure</span>
          </div>
        </div>
      </section>

      {/* Operating Principle */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)', borderBottom: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '3rem', marginBottom: '32px', maxWidth: '1000px' }}>
          LEVERAGE IS NOT ABOUT DOING MORE.<br />
          IT IS ABOUT MAKING THE SAME<br />
          CAPABILITY REACH FURTHER.
        </h2>
      </section>

      {/* Final CTA */}
      <section className="section ev-access-section" style={{ borderTop: 'none' }}>
        <div className="ev-access-inner">
          <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
            HAVE AN OPPORTUNITY<br />THAT NEEDS MORE CAPABILITY?
          </h2>
          <p className="trust-body ev-access-desc" style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '48px' }}>
            Let&apos;s determine whether<br />
            the right leverage already exists.
          </p>
          <Link href="#" className="judgment-cta">REGISTER AN OPPORTUNITY &rarr;</Link>
        </div>
      </section>
    </>
  );
}
