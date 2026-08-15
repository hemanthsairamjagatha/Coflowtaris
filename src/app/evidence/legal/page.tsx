"use client";

import Link from "next/link";

export default function LegalDossierPage() {
  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav" style={{ paddingTop: '24px', paddingBottom: '0' }}>
        <Link href="/evidence" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; EVIDENCE</Link>
        <span className="view-all" style={{ color: "var(--color-text-primary)", marginLeft: '8px' }}>/ LEGAL</span>
      </div>

      {/* Legal Hero */}
      <section className="section ev-hero">
        <span className="eyebrow">LEGAL</span>
        <h1 className="section-heading ev-title">THE AGREEMENTS<br />BEHIND THE WORK.</h1>
        <p className="card-description ev-subtitle">
          Commercial terms, data protection,<br />
          insurance and governance information<br />
          available for review.
        </p>
        <div className="ev-stats" style={{ gap: '64px', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">06 DOCUMENT TYPES</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">LAST REVIEWED</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>MAR 2026</span>
          </div>
        </div>
      </section>

      {/* Legal Document Index */}
      <section className="section">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>LEGAL DOCUMENTS</h2>
        <div className="ev-table-container">
          <table className="ev-table">
            <thead>
              <tr>
                <th className="ev-th">DOCUMENT</th>
                <th className="ev-th">TYPE</th>
                <th className="ev-th" style={{ textAlign: 'right' }}>ACCESS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Master Services Agreement", type: "PDF" },
                { name: "Data Processing Agreement", type: "PDF" },
                { name: "Subprocessor List", type: "PDF" },
                { name: "Privacy Policy", type: "WEB" },
                { name: "Terms of Service", type: "WEB" },
                { name: "Certificate of Insurance", type: "PDF" }
              ].map((doc, i) => (
                <tr key={i} className="ev-tr">
                  <td className="ev-td ev-td-name" style={{ fontSize: '1.125rem' }}>{doc.name}</td>
                  <td className="ev-td">{doc.type}</td>
                  <td className="ev-td" style={{ textAlign: 'right' }}>
                    <Link href="#" className="judgment-cta ev-dl-link">VIEW &rarr;</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Commercial Framework */}
      <section className="section">
        <div className="ev-panel" style={{ padding: '64px' }}>
          <span className="section-label">COMMERCIAL FRAMEWORK</span>
          <h2 className="ev-panel-title">HOW WE STRUCTURE<br />THE WORK.</h2>
          <p className="ev-panel-desc" style={{ marginBottom: '64px' }}>
            Engagements are governed by clearly defined<br />
            responsibilities, deliverables and commercial terms.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, minWidth: '250px' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase' }}>MASTER AGREEMENT</span>
              <span className="trust-body">Defines the commercial relationship.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, minWidth: '250px' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase' }}>STATEMENT OF WORK</span>
              <span className="trust-body">Defines the specific engagement.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, minWidth: '250px' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase' }}>DATA PROCESSING</span>
              <span className="trust-body">Defines applicable data obligations.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>DATA PROTECTION</h2>
        <span className="section-label">WHAT HAPPENS TO CLIENT DATA?</span>
        <p className="card-description" style={{ maxWidth: '700px', marginBottom: '64px' }}>
          Our data protection documentation defines<br />how data is handled within the relationship.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {[
            { num: "01", title: "DATA PROCESSING AGREEMENT", desc: "Defines processing responsibilities and applicable obligations.", linkText: "VIEW DPA" },
            { num: "02", title: "SUBPROCESSORS", desc: "The external services involved in delivering the work.", linkText: "VIEW SUBPROCESSOR LIST" },
            { num: "03", title: "PRIVACY", desc: "How personal information is handled.", linkText: "VIEW PRIVACY POLICY" }
          ].map((item) => (
            <div key={item.num} style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'baseline', borderBottom: '1px solid var(--color-structural)', paddingBottom: '32px' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text-secondary)', width: '60px' }}>{item.num}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, minWidth: '300px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>{item.title}</span>
                <p className="trust-body" style={{ margin: 0, maxWidth: '600px' }}>{item.desc}</p>
                <Link href="#" className="judgment-cta" style={{ marginTop: '8px' }}>{item.linkText} &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subprocessors Register */}
      <section className="section">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>SUBPROCESSORS</h2>
        <div className="ev-table-container">
          <table className="ev-table" style={{ marginBottom: '24px' }}>
            <thead>
              <tr>
                <th className="ev-th">SERVICE</th>
                <th className="ev-th">PURPOSE</th>
                <th className="ev-th" style={{ textAlign: 'right' }}>LOCATION</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: "Infrastructure", purpose: "Hosting / compute", location: "[LOCATION]" },
                { service: "Storage", purpose: "Document storage", location: "[LOCATION]" },
                { service: "Analytics", purpose: "Product analytics", location: "[LOCATION]" },
              ].map((sub, i) => (
                <tr key={i} className="ev-tr">
                  <td className="ev-td ev-td-name" style={{ fontSize: '1.125rem' }}>{sub.service}</td>
                  <td className="ev-td">{sub.purpose}</td>
                  <td className="ev-td" style={{ textAlign: 'right' }}>{sub.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
            <span className="section-label" style={{ marginBottom: 0 }}>LAST REVIEWED</span>
            <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>MAR 2026</span>
          </div>
        </div>
      </section>

      {/* Insurance & Corporate Documents */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px' }}>CORPORATE &amp; INSURANCE</h2>
        
        <div className="trust-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="trust-card" style={{ padding: '64px' }}>
            <h3 className="card-heading" style={{ textTransform: 'uppercase', marginBottom: '16px' }}>CERTIFICATE OF INSURANCE</h3>
            <p className="trust-body" style={{ marginBottom: '32px' }}>
              Current insurance documentation<br />available for verified business contacts.
            </p>
            <Link href="#" className="judgment-cta">REQUEST DOCUMENT &rarr;</Link>
          </div>
          <div className="trust-card" style={{ padding: '64px' }}>
            <h3 className="card-heading" style={{ textTransform: 'uppercase', marginBottom: '16px' }}>CORPORATE INFORMATION</h3>
            <p className="trust-body" style={{ marginBottom: '32px' }}>
              Registered entity and relevant<br />corporate information.
            </p>
            <Link href="#" className="judgment-cta">VIEW CORPORATE DETAILS &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Contracting Process */}
      <section className="section">
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>FROM FIRST CONVERSATION<br />TO SIGNED AGREEMENT</h2>
        <p className="card-description" style={{ maxWidth: '600px', marginBottom: '64px', color: 'var(--color-text-secondary)' }}>
          The standard contracting process.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
          {[
            { num: "01", title: "SCOPE", desc: "Understand the engagement." },
            { num: "02", title: "COMMERCIALS", desc: "Agree on commercial structure." },
            { num: "03", title: "LEGAL", desc: "Review the applicable agreements." },
            { num: "04", title: "DATA", desc: "Complete applicable data-processing requirements." },
            { num: "05", title: "SIGN", desc: "Execute the final agreement." },
            { num: "06", title: "START", desc: "Move into delivery." }
          ].map((step, i, arr) => (
            <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: i < arr.length - 1 ? '16px' : '0' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase', fontWeight: 500, letterSpacing: '0.05em' }}>
                <span style={{ color: 'var(--color-accent)', marginRight: '16px' }}>{step.num}</span>
                {step.title}
              </span>
              <p className="trust-body">{step.desc}</p>
              {i < arr.length - 1 && <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', marginTop: '8px' }}>&darr;</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Governance Statement */}
      <section className="section">
        <div className="ev-panel" style={{ padding: '84px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="section-heading" style={{ fontSize: '2.5rem', maxWidth: '800px', marginBottom: '24px' }}>
            GOOD GOVERNANCE SHOULD REDUCE<br />FRICTION, NOT CREATE IT.
          </h2>
          <p className="card-description" style={{ maxWidth: '600px' }}>
            The purpose of this library is simple:<br />
            make the information required to work with us<br />
            easier to find.
          </p>
        </div>
      </section>

      {/* Document Request Form */}
      <section className="section ev-access-section" style={{ borderTop: 'none' }}>
        <div className="ev-access-inner">
          <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: '16px' }}>NEED A DOCUMENT THAT ISN&apos;T PUBLIC?</h2>
          <p className="trust-body ev-access-desc" style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '48px' }}>
            Tell us what you need.
          </p>
          <form className="ev-access-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label htmlFor="work-email" className="ev-access-label">WORK EMAIL</label>
              <div className="ev-access-input-group">
                <input 
                  type="email" 
                  id="work-email" 
                  className="ev-access-input" 
                  placeholder="name@company.com" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="requirement" className="ev-access-label">DOCUMENT / REQUIREMENT</label>
              <div className="ev-access-input-group">
                <input 
                  type="text" 
                  id="requirement" 
                  className="ev-access-input" 
                  placeholder="e.g. SOC 2 Type II" 
                  required 
                />
              </div>
            </div>
            <button type="submit" className="judgment-cta" style={{ alignSelf: 'flex-start', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              REQUEST DOCUMENT &rarr;
            </button>
          </form>
        </div>
      </section>

      {/* Judgment Connection */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)', borderBottom: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', maxWidth: '900px' }}>
          LEGAL SHOWS THE AGREEMENT.
        </h2>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px', maxWidth: '900px', color: 'var(--color-text-secondary)' }}>
          JUDGMENT SHOWS THE DECISION<br />BEHIND THE AGREEMENT.
        </h2>
        <Link href="/judgment" className="judgment-cta">READ OUR DECISIONS &rarr;</Link>
      </section>

      {/* Deep Page Navigation */}
      <section className="section">
        <div className="dl-prev-next-inner">
          <Link href="/evidence/security" className="dl-nav-link dl-nav-prev">
            <span className="dl-nav-direction">&larr; SECURITY</span>
          </Link>
          <Link href="/evidence/operations" className="dl-nav-link dl-nav-next">
            <span className="dl-nav-direction">OPERATIONS &rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
