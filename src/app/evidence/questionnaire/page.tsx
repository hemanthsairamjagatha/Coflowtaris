"use client";

import Link from "next/link";

export default function QuestionnaireCenterPage() {
  const questionnaires = [
    {
      num: "01",
      title: "SECURITY",
      desc: "Controls, infrastructure, access, monitoring, incident response and security practices.",
      meta: "XLSX · PRE-FILLED"
    },
    {
      num: "02",
      title: "DATA PRIVACY",
      desc: "Data processing, privacy, subprocessors and related obligations.",
      meta: "XLSX · PRE-FILLED"
    },
    {
      num: "03",
      title: "VENDOR",
      desc: "Company information, commercial structure, insurance, governance and operational details.",
      meta: "XLSX · PRE-FILLED"
    },
    {
      num: "04",
      title: "TECHNICAL",
      desc: "Architecture, integrations, deployment, reliability and technical operations.",
      meta: "XLSX · PRE-FILLED"
    }
  ];

  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav" style={{ paddingTop: '24px', paddingBottom: '0' }}>
        <Link href="/evidence" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; EVIDENCE</Link>
        <span className="view-all" style={{ color: "var(--color-text-primary)", marginLeft: '8px' }}>/ QUESTIONNAIRE</span>
      </div>

      {/* Questionnaire Hero */}
      <section className="section ev-hero">
        <span className="eyebrow">QUESTIONNAIRE CENTER</span>
        <h1 className="section-heading ev-title">START WITH THE<br />ANSWERS.</h1>
        <p className="card-description ev-subtitle">
          Pre-filled information for the teams responsible<br />
          for evaluating Flowtaris.
        </p>
        <p className="trust-body" style={{ marginBottom: '48px', fontWeight: 500 }}>
          Security. Privacy. Technical. Vendor.
        </p>
        <div className="ev-stats" style={{ gap: '64px', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">04 QUESTIONNAIRES</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">XLSX FORMAT</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '24px', maxWidth: '800px' }}>
          YOU SHOULDN&apos;T HAVE TO ASK US<br />THE SAME QUESTIONS WE&apos;VE ALREADY ANSWERED.
        </h2>
        <p className="trust-body" style={{ maxWidth: '600px', marginBottom: '24px' }}>
          We&apos;ve organized the information commonly requested<br />
          during technical, security and procurement review.
        </p>
        <p className="trust-body" style={{ maxWidth: '600px' }}>
          Download the relevant workbook,<br />
          review the answers and send us anything that requires<br />
          additional clarification.
        </p>
      </section>

      {/* Questionnaire Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="trust-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {questionnaires.map((q) => (
            <div key={q.num} className="trust-card" style={{ padding: '64px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: '16px' }}>{q.num}</span>
              <h3 className="card-heading" style={{ textTransform: 'uppercase', marginBottom: '16px', fontSize: '1.5rem' }}>{q.title}</h3>
              <p className="trust-body" style={{ flexGrow: 1, marginBottom: '48px' }}>{q.desc}</p>
              <span className="section-label" style={{ marginBottom: '16px' }}>{q.meta}</span>
              <Link href="#" className="judgment-cta">DOWNLOAD QUESTIONNAIRE &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>HOW IT WORKS</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
          {[
            { num: "01", title: "DOWNLOAD", desc: "Choose the questionnaire relevant to your review." },
            { num: "02", title: "REVIEW", desc: "Use the pre-filled answers as your starting point." },
            { num: "03", title: "CLARIFY", desc: "Send us anything that requires additional information." },
            { num: "04", title: "PROCEED", desc: "Continue the evaluation without repeating the basics." }
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

      {/* Document Control */}
      <section className="section">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>DOCUMENT CONTROL</h2>
        <div className="ev-table-container">
          <table className="ev-table" style={{ marginBottom: '32px' }}>
            <thead>
              <tr>
                <th className="ev-th">QUESTIONNAIRE</th>
                <th className="ev-th">VERSION</th>
                <th className="ev-th" style={{ textAlign: 'right' }}>LAST UPDATED</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Security", version: "v1.0", updated: "MAR 2026" },
                { name: "Data Privacy", version: "v1.0", updated: "MAR 2026" },
                { name: "Vendor", version: "v1.0", updated: "MAR 2026" },
                { name: "Technical", version: "v1.0", updated: "MAR 2026" }
              ].map((doc, i) => (
                <tr key={i} className="ev-tr">
                  <td className="ev-td ev-td-name" style={{ fontSize: '1.125rem' }}>{doc.name}</td>
                  <td className="ev-td">{doc.version}</td>
                  <td className="ev-td" style={{ textAlign: 'right' }}>{doc.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="trust-body" style={{ color: 'var(--color-text-secondary)' }}>
          All questionnaires are maintained from the<br />
          same underlying Flowtaris evidence set.
        </p>
      </section>

      {/* Related Evidence */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px' }}>THE ANSWERS HAVE SOURCES.</h2>
        
        <div className="trust-grid" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="section-label">SECURITY</span>
            <Link href="/evidence/security" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Security Policies</Link>
            <Link href="/evidence/security" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Incident Response</Link>
            <Link href="/evidence/security" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Business Continuity</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="section-label">DATA PRIVACY</span>
            <Link href="/evidence/legal" className="trust-body" style={{ fontWeight: 500 }}>&rarr; DPA</Link>
            <Link href="/evidence/legal" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Privacy Policy</Link>
            <Link href="/evidence/legal" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Subprocessor List</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="section-label">VENDOR</span>
            <Link href="/evidence/legal" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Corporate Information</Link>
            <Link href="/evidence/legal" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Insurance</Link>
            <Link href="/evidence/legal" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Commercial Agreements</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="section-label">TECHNICAL</span>
            <Link href="/evidence/operations" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Architecture</Link>
            <Link href="/evidence/operations" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Operations</Link>
            <Link href="/evidence/operations" className="trust-body" style={{ fontWeight: 500 }}>&rarr; Recovery</Link>
          </div>
        </div>
        
        <Link href="/evidence" className="judgment-cta">EXPLORE EVIDENCE CENTER &rarr;</Link>
      </section>

      {/* Need A Custom Questionnaire? */}
      <section className="section ev-access-section">
        <div className="ev-access-inner">
          <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: '16px' }}>YOUR QUESTIONNAIRE ISN&apos;T HERE?</h2>
          <p className="trust-body ev-access-desc" style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '48px' }}>
            Send it to us.<br />
            We&apos;ll tell you which existing evidence answers the<br />
            questions and identify anything that requires<br />
            additional clarification.
          </p>
          <form className="ev-access-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                SUBMIT QUESTIONNAIRE &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Operating Principle */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)', borderBottom: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '3rem', marginBottom: '32px', maxWidth: '1000px' }}>
          PROCUREMENT SHOULD TEST THE BUSINESS,<br />NOT TEST YOUR PATIENCE.
        </h2>
        <p className="card-description" style={{ maxWidth: '700px' }}>
          The goal of this center is simple:
        </p>
        <p className="card-description" style={{ maxWidth: '700px' }}>
          less repetition,<br />
          faster evaluation,<br />
          better questions.
        </p>
      </section>

      {/* Deep Page Navigation */}
      <section className="section">
        <div className="dl-prev-next-inner">
          <Link href="/evidence/operations" className="dl-nav-link dl-nav-prev">
            <span className="dl-nav-direction">&larr; OPERATIONS</span>
          </Link>
          <Link href="/evidence" className="dl-nav-link dl-nav-next">
            <span className="dl-nav-direction">NEXT</span>
            <span className="dl-nav-title">EVIDENCE CENTER &rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
