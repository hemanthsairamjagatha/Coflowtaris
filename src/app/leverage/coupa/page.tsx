"use client";

import Link from "next/link";

export default function CoupaAlliancePage() {
  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav" style={{ paddingTop: '24px', paddingBottom: '0' }}>
        <Link href="/leverage" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; LEVERAGE</Link>
        <span className="view-all" style={{ color: "var(--color-text-primary)", marginLeft: '8px' }}>/ STRATEGIC ALLIANCES / COUPA</span>
      </div>

      {/* Alliance Hero */}
      <section className="section ev-hero" style={{ paddingTop: '120px' }}>
        <span className="eyebrow">STRATEGIC ALLIANCE</span>
        <h1 className="section-heading ev-title" style={{ maxWidth: '900px' }}>
          FLOWTARIS &times; COUPA
        </h1>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginTop: '24px', marginBottom: '24px', maxWidth: '800px', color: 'var(--color-text-secondary)' }}>
          PROCUREMENT SYSTEMS<br />
          THAT CONNECT<br />
          BEYOND PROCUREMENT.
        </h2>
        <p className="card-description ev-subtitle">
          Engineering, integration and data capability<br />
          around enterprise procurement environments.
        </p>
        <div className="ev-stats" style={{ gap: '64px', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">PARTNERSHIP STATUS</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-accent)', letterSpacing: '0.05em' }}>[ CAPABILITY ]</span>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <span className="section-label" style={{ marginBottom: '48px', display: 'block' }}>THE PROBLEM</span>
        <h2 className="section-heading" style={{ fontSize: '3rem', marginBottom: '24px' }}>PROCUREMENT DOESN&apos;T EXIST<br />IN ISOLATION.</h2>
        <p className="card-description" style={{ maxWidth: '600px', marginBottom: '48px', color: 'var(--color-text-secondary)' }}>
          The difficult engineering work often sits between them.
        </p>

        <ul className="trust-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0, listStyle: 'none' }}>
          <li style={{ paddingBottom: '16px', borderBottom: '1px solid var(--color-structural)', maxWidth: '600px' }}>Supplier data.</li>
          <li style={{ paddingBottom: '16px', borderBottom: '1px solid var(--color-structural)', maxWidth: '600px' }}>Finance.</li>
          <li style={{ paddingBottom: '16px', borderBottom: '1px solid var(--color-structural)', maxWidth: '600px' }}>ERP.</li>
          <li style={{ paddingBottom: '16px', borderBottom: '1px solid var(--color-structural)', maxWidth: '600px' }}>Contracts.</li>
          <li style={{ paddingBottom: '16px', borderBottom: '1px solid var(--color-structural)', maxWidth: '600px' }}>Approvals.</li>
          <li style={{ paddingBottom: '16px', borderBottom: '1px solid var(--color-structural)', maxWidth: '600px' }}>Spend intelligence.</li>
        </ul>
      </section>

      {/* Where Flowtaris Fits */}
      <section className="section">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>WHERE FLOWTARIS FITS</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px', marginBottom: '64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="card-heading" style={{ textTransform: 'uppercase', fontSize: '1.25rem' }}>COUPA</span>
            <span className="trust-body">Procurement &middot; Spend &middot; Supplier workflows</span>
          </div>
          <span style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>+</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="card-heading" style={{ textTransform: 'uppercase', fontSize: '1.25rem' }}>FLOWTARIS</span>
            <span className="trust-body">Architecture &middot; Integration &middot; Data &middot; Engineering</span>
          </div>
          <span style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>&darr;</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="card-heading" style={{ textTransform: 'uppercase', fontSize: '1.25rem' }}>CONNECTED</span>
            <span className="trust-body">PROCUREMENT SYSTEM</span>
          </div>
        </div>

        <p className="card-description" style={{ maxWidth: '700px' }}>
          Flowtaris engineers the systems around the procurement<br />
          platform so data, workflows and enterprise applications<br />
          operate as one environment.
        </p>
      </section>

      {/* Capability Areas */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px' }}>CAPABILITY AREAS</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {[
            { num: "01", title: "PROCUREMENT INTEGRATION", desc: "Connect Coupa with ERP, finance, supplier and surrounding enterprise systems." },
            { num: "02", title: "PROCUREMENT DATA", desc: "Create reliable movement, transformation and governance across procurement data." },
            { num: "03", title: "WORKFLOW ENGINEERING", desc: "Build the services and workflows required around the procurement platform." },
            { num: "04", title: "ENTERPRISE ARCHITECTURE", desc: "Define the boundaries between procurement, finance, ERP, data and business systems." }
          ].map((cap) => (
            <div key={cap.num} style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '32px', borderBottom: '1px solid var(--color-structural)', maxWidth: '800px' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}>{cap.num}</span>
              <h3 className="section-heading" style={{ fontSize: '2rem', margin: 0 }}>{cap.title}</h3>
              <p className="trust-body" style={{ fontSize: '1.25rem', margin: '8px 0 16px 0' }}>{cap.desc}</p>
              <Link href="#" className="judgment-cta" style={{ alignSelf: 'flex-start' }}>EXPLORE &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* The Architecture */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '64px' }}>THE ARCHITECTURE</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', padding: '64px', border: '1px solid var(--color-structural)', backgroundColor: 'var(--color-surface)', maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', width: '100%' }}>
            <span className="card-heading" style={{ display: 'block', marginBottom: '24px', letterSpacing: '0.1em' }}>ENTERPRISE SYSTEMS</span>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              {["ERP", "FINANCE", "CONTRACTS", "HR"].map(sys => (
                <span key={sys} className="trust-body" style={{ padding: '8px 24px', border: '1px solid var(--color-structural)', backgroundColor: 'var(--color-bg)' }}>{sys}</span>
              ))}
            </div>
          </div>
          
          <span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>&darr;</span>
          
          <div style={{ width: '100%', padding: '24px', border: '1px solid var(--color-structural)', textAlign: 'center', backgroundColor: 'var(--color-bg)' }}>
            <span className="card-heading" style={{ letterSpacing: '0.1em' }}>INTEGRATION LAYER</span>
          </div>

          <span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>&darr;</span>

          <div style={{ width: '100%', padding: '32px', border: '2px solid var(--color-accent)', textAlign: 'center', backgroundColor: 'var(--color-bg)' }}>
            <span className="section-heading" style={{ margin: 0, letterSpacing: '0.1em' }}>COUPA</span>
          </div>

          <span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>&darr;</span>

          <div style={{ width: '100%', padding: '24px', border: '1px solid var(--color-structural)', textAlign: 'center', backgroundColor: 'var(--color-bg)' }}>
            <span className="card-heading" style={{ letterSpacing: '0.1em' }}>PROCUREMENT DATA</span>
          </div>

          <span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>&darr;</span>

          <div style={{ width: '100%', padding: '24px', border: '1px solid var(--color-structural)', textAlign: 'center', backgroundColor: 'var(--color-bg)' }}>
            <span className="card-heading" style={{ letterSpacing: '0.1em' }}>ANALYTICS / AI</span>
          </div>

        </div>
      </section>

      {/* Procurement Data Flow */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '64px' }}>PROCUREMENT DATA FLOW</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px', margin: '0 auto', paddingBottom: '64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            <span className="card-heading">SUPPLIER</span>
            <span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>&darr;</span>
            <span className="card-heading">PROCUREMENT</span>
            <span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>&darr;</span>
            <span className="section-heading" style={{ fontSize: '2rem' }}>COUPA</span>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <span style={{ borderLeft: '1px solid var(--color-structural)', margin: '8px 16px' }}></span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="card-heading">&rarr; ERP</span>
              <span className="card-heading">&rarr; FINANCE</span>
              <span className="card-heading">&rarr; DATA PLATFORM</span>
              <span className="card-heading">&rarr; ANALYTICS</span>
            </div>
          </div>
        </div>

        <div className="ev-panel" style={{ padding: '64px' }}>
          <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: '16px', maxWidth: '800px' }}>
            THE VALUE ISN&apos;T THE PIPELINE.
          </h2>
          <h2 className="section-heading" style={{ fontSize: '2rem', color: 'var(--color-text-secondary)' }}>
            IT&apos;S THE RELIABILITY OF THE<br />DECISIONS THAT DEPEND ON IT.
          </h2>
        </div>
      </section>

      {/* Common Engagements */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px' }}>COMMON ENGAGEMENTS</h2>
        
        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {[
            { num: "01", title: "COUPA INTEGRATION", desc: "Connect procurement workflows to surrounding enterprise systems." },
            { num: "02", title: "PROCUREMENT DATA", desc: "Build reliable data pipelines for spend and supplier intelligence." },
            { num: "03", title: "ERP / PROCUREMENT ALIGNMENT", desc: "Connect procurement workflows with the financial operating model." },
            { num: "04", title: "PLATFORM MODERNIZATION", desc: "Replace brittle integrations with maintainable architecture." }
          ].map((uc) => (
            <div key={uc.num} className="trust-card" style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
              <span className="section-label" style={{ marginBottom: '16px' }}>{uc.num}</span>
              <h3 className="card-heading" style={{ marginBottom: '16px' }}>{uc.title}</h3>
              <p className="trust-body" style={{ flexGrow: 1, marginBottom: '32px' }}>{uc.desc}</p>
              <span style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)' }}>&rarr;</span>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Model */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>HOW WE WORK</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
          {[
            { num: "01", title: "ASSESS", desc: "Understand procurement, enterprise systems and constraints." },
            { num: "02", title: "ARCHITECT", desc: "Define the target architecture and integration boundaries." },
            { num: "03", title: "CONNECT", desc: "Build the required integrations and data flows." },
            { num: "04", title: "ENGINEER", desc: "Build the missing technical capabilities around the platform." },
            { num: "05", title: "OPERATE", desc: "Monitor, improve and maintain." }
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

      {/* Why The Combination Matters */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div className="ev-panel" style={{ padding: '84px' }}>
          <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', maxWidth: '800px' }}>
            COUPA PROVIDES THE PROCUREMENT PLATFORM.
          </h2>
          <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px', maxWidth: '800px', color: 'var(--color-text-secondary)' }}>
            FLOWTARIS ENGINEERS THE SYSTEM AROUND IT.
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px' }}>
            <p className="trust-body" style={{ fontSize: '1.25rem' }}>
              The result should not be another isolated enterprise application.
            </p>
            <p className="trust-body" style={{ fontSize: '1.25rem' }}>
              It should become part of the operating architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence Connection */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>THE PLATFORM IS ONLY<br />ONE PART OF THE SYSTEM.</h2>
        <p className="card-description" style={{ maxWidth: '600px', marginBottom: '48px', color: 'var(--color-text-secondary)' }}>
          SEE HOW FLOWTARIS OPERATES<br />THE SYSTEM AROUND IT.
        </p>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <Link href="/evidence/security" className="card-heading" style={{ textDecoration: 'none', borderBottom: '1px solid var(--color-text-primary)', paddingBottom: '4px' }}>SECURITY &rarr;</Link>
          <Link href="/evidence/legal" className="card-heading" style={{ textDecoration: 'none', borderBottom: '1px solid var(--color-text-primary)', paddingBottom: '4px' }}>LEGAL &rarr;</Link>
          <Link href="/evidence/operations" className="card-heading" style={{ textDecoration: 'none', borderBottom: '1px solid var(--color-text-primary)', paddingBottom: '4px' }}>OPERATIONS &rarr;</Link>
        </div>
      </section>

      {/* Related Judgment */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <span className="section-label" style={{ marginBottom: '32px', display: 'block' }}>RELATED JUDGMENT</span>
        
        <div className="ev-panel" style={{ padding: '64px', backgroundColor: 'var(--color-surface)', maxWidth: '800px' }}>
          <p className="trust-body" style={{ fontSize: '1.125rem', marginBottom: '32px', maxWidth: '600px' }}>
            Explore decisions about architecture,<br />
            integration and platform risk.
          </p>
          <Link href="/judgment" className="judgment-cta">READ JUDGMENT &rarr;</Link>
        </div>
      </section>

      {/* Partner Verification */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h3 className="section-label" style={{ marginBottom: '32px' }}>PARTNERSHIP</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px' }}>
            <span className="trust-body" style={{ fontWeight: 500 }}>RELATIONSHIP</span>
            <span style={{ fontWeight: 500, letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>[ CAPABILITY ]</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px' }}>
            <span className="trust-body" style={{ fontWeight: 500 }}>LAST REVIEWED</span>
            <span style={{ fontWeight: 500, letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>[ DATE ]</span>
          </div>
          <Link href="#" className="judgment-cta" style={{ alignSelf: 'flex-start' }}>PARTNER INFORMATION &rarr;</Link>
        </div>
      </section>

      {/* Opportunity CTA */}
      <section className="section ev-access-section" style={{ borderTop: 'none' }}>
        <div className="ev-access-inner">
          <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
            WORKING AROUND COUPA?
          </h2>
          <p className="trust-body ev-access-desc" style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '48px' }}>
            Tell us where procurement ends<br />
            and the engineering problem begins.
          </p>
          <Link href="/contact" className="judgment-cta">START A CONVERSATION &rarr;</Link>
        </div>
      </section>

      {/* Related Alliances */}
      <section className="section">
        <div className="dl-prev-next-inner">
          <div className="dl-nav-link dl-nav-prev" style={{ flex: 1 }}>
            <span className="dl-nav-direction">OTHER STRATEGIC ALLIANCES</span>
            <div style={{ display: 'flex', gap: '32px', marginTop: '16px' }}>
              <Link href="/leverage/netsuite" className="card-heading" style={{ textDecoration: 'none' }}>NETSUITE &rarr;</Link>
              <Link href="/leverage/workday" className="card-heading" style={{ textDecoration: 'none' }}>WORKDAY &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
