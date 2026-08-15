import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav" style={{ paddingTop: '24px', paddingBottom: '0' }}>
        <Link href="/" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; HOME</Link>
        <span className="view-all" style={{ color: "var(--color-text-primary)", marginLeft: '8px' }}>/ CONTACT</span>
      </div>

      {/* Minimal Hero */}
      <section className="section ev-hero" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <span className="eyebrow">CONTACT</span>
        <h1 className="section-heading ev-title" style={{ maxWidth: '900px', fontSize: '3.5rem', margin: '16px 0' }}>
          THE RIGHT DOOR.<br />
          THE RIGHT PERSON.<br />
          FAST RESPONSE.
        </h1>
        <p className="card-description ev-subtitle" style={{ maxWidth: '600px', marginTop: '32px' }}>
          Tell us what you&apos;re trying to accomplish.<br />
          We&apos;ll route it to the person who owns it.
        </p>
      </section>

      {/* Routing Principle */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '64px' }}>
        <div style={{ borderTop: '1px solid var(--color-structural)', borderBottom: '1px solid var(--color-structural)', padding: '32px 0' }}>
          <h2 className="card-heading" style={{ margin: 0, letterSpacing: '0.05em', color: 'var(--color-text-primary)' }}>
            DON&apos;T SEND A MESSAGE INTO A SHARED INBOX.<br />
            CHOOSE THE DOOR THAT MATCHES WHAT YOU NEED.
          </h2>
        </div>
      </section>

      {/* Contact Routing Blocks */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '64px' }}>
        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* 01 NEW BUSINESS & PARTNERSHIPS */}
          <div className="ev-panel" style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
            <span className="section-label" style={{ marginBottom: '16px' }}>01</span>
            <h3 className="section-heading" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>NEW BUSINESS & PARTNERSHIPS</h3>
            <p className="trust-body" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', minHeight: '48px' }}>
              Sales conversations, partnerships,<br />
              strategic inquiries.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
              <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>EMAIL</span>
              <a href="mailto:partners@flowtaris.com" className="card-heading" style={{ textDecoration: 'none' }}>partners@flowtaris.com</a>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="trust-body" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>24-hour SLA</span>
              <Link href="/contact" className="judgment-cta">BOOK 30-MIN &rarr;</Link>
            </div>
          </div>

          {/* 02 SECURITY & COMPLIANCE */}
          <div className="ev-panel" style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
            <span className="section-label" style={{ marginBottom: '16px' }}>02</span>
            <h3 className="section-heading" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>SECURITY & COMPLIANCE</h3>
            <p className="trust-body" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', minHeight: '48px' }}>
              Questionnaires, audits, incident<br />
              reporting and certifications.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
              <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>EMAIL</span>
              <a href="mailto:security@flowtaris.com" className="card-heading" style={{ textDecoration: 'none' }}>security@flowtaris.com</a>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <span className="trust-body" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>4-hour SLA &middot; business days</span>
              <Link href="/evidence/questionnaire" className="judgment-cta">UPLOAD QUESTIONNAIRE &rarr;</Link>
            </div>
          </div>

          {/* 03 ALLIANCE & CHANNEL */}
          <div className="ev-panel" style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
            <span className="section-label" style={{ marginBottom: '16px' }}>03</span>
            <h3 className="section-heading" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>ALLIANCE & CHANNEL</h3>
            <p className="trust-body" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', minHeight: '48px' }}>
              NetSuite / Coupa / Workday AEs,<br />
              deal registration and MDF.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
              <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>EMAIL</span>
              <a href="mailto:alliances@flowtaris.com" className="card-heading" style={{ textDecoration: 'none' }}>alliances@flowtaris.com</a>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="trust-body" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>&nbsp;</span>
              <Link href="/leverage/register" className="judgment-cta">REGISTER DEAL &rarr;</Link>
            </div>
          </div>

          {/* 04 MEDIA & ANALYST RELATIONS */}
          <div className="ev-panel" style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
            <span className="section-label" style={{ marginBottom: '16px' }}>04</span>
            <h3 className="section-heading" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>MEDIA & ANALYST RELATIONS</h3>
            <p className="trust-body" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', minHeight: '48px' }}>
              Press, speaking, analyst briefings<br />
              and data requests.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
              <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>EMAIL</span>
              <a href="mailto:media@flowtaris.com" className="card-heading" style={{ textDecoration: 'none' }}>media@flowtaris.com</a>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="trust-body" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>&nbsp;</span>
              <a href="mailto:media@flowtaris.com" className="judgment-cta">MEDIA INQUIRY &rarr;</a>
            </div>
          </div>

          {/* 05 TALENT & REFERRALS */}
          <div className="ev-panel" style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
            <span className="section-label" style={{ marginBottom: '16px' }}>05</span>
            <h3 className="section-heading" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>TALENT & REFERRALS</h3>
            <p className="trust-body" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', minHeight: '48px' }}>
              We hire from our network.<br />
              Looking to work with Flowtaris?<br />
              Start by understanding how we think.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
              <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>EMAIL</span>
              <a href="mailto:talent@flowtaris.com" className="card-heading" style={{ textDecoration: 'none' }}>talent@flowtaris.com</a>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <span className="trust-body" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>REFERRALS: $10K referral bonus</span>
              <Link href="/principles" className="judgment-cta">READ OUR PRINCIPLES &rarr;</Link>
            </div>
          </div>

          {/* 06 CORPORATE & INVESTOR */}
          <div className="ev-panel" style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
            <span className="section-label" style={{ marginBottom: '16px' }}>06</span>
            <h3 className="section-heading" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>CORPORATE & INVESTOR</h3>
            <p className="trust-body" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', minHeight: '48px' }}>
              Strategic conversations, M&amp;A<br />
              and investment inquiries.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
              <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>EMAIL</span>
              <a href="mailto:strategic@flowtaris.com" className="card-heading" style={{ textDecoration: 'none' }}>strategic@flowtaris.com</a>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="trust-body" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>&nbsp;</span>
              <Link href="/evidence" className="judgment-cta">VIEW EVIDENCE &rarr;</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Information & Verified Channels */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'space-between' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="section-heading" style={{ fontSize: '1.125rem' }}>FLOWTARIS TECHNOLOGIES PVT LTD</span>
            <div className="trust-body" style={{ color: 'var(--color-text-secondary)' }}>
              [ADDRESS]<br />
              [CITY, STATE, PIN]<br />
              INDIA
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="section-label">VERIFIED CHANNELS</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="card-heading" style={{ textDecoration: 'none' }}>LinkedIn</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="card-heading" style={{ textDecoration: 'none' }}>X / @flowtaris</a>
            </div>
          </div>

        </div>
      </section>

      {/* Why This Works (Micro Editorial) */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
          EVERY QUESTION HAS AN OWNER.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
          <p className="trust-body" style={{ fontSize: '1.25rem', margin: 0 }}>Every document has a source.</p>
          <p className="trust-body" style={{ fontSize: '1.25rem', margin: 0 }}>Every decision has a record.</p>
          <p className="trust-body" style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-accent)' }}>Every inquiry has a route.</p>
        </div>
      </section>
    </>
  );
}
