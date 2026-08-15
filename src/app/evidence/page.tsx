"use client";

import { useState } from "react";

const DOCUMENTS = [
  { name: "SOC 2 REPORT", type: "PDF", updated: "MAR 2026", category: "SECURITY" },
  { name: "Information Security Policy", type: "PDF", updated: "FEB 2026", category: "SECURITY" },
  { name: "Incident Response Plan", type: "PDF", updated: "FEB 2026", category: "SECURITY" },
  { name: "Business Continuity Plan", type: "PDF", updated: "JAN 2026", category: "OPERATIONS" },
  { name: "Subprocessor List", type: "PDF", updated: "JAN 2026", category: "LEGAL" },
  { name: "Cyber Insurance Certificate", type: "PDF", updated: "DEC 2025", category: "LEGAL" },
  { name: "Data Processing Agreement", type: "PDF", updated: "DEC 2025", category: "LEGAL" },
];

const QUESTIONNAIRES = [
  { name: "SECURITY QUESTIONNAIRE", type: "XLSX", href: "#" },
  { name: "DATA PRIVACY QUESTIONNAIRE", type: "XLSX", href: "#" },
  { name: "VENDOR QUESTIONNAIRE", type: "XLSX", href: "#" },
  { name: "TECHNICAL QUESTIONNAIRE", type: "XLSX", href: "#" },
];

export default function EvidencePage() {
  const [activeTab, setActiveTab] = useState("SECURITY");

  const scrollTo = (id: string) => {
    setActiveTab(id.toUpperCase());
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Hero */}
      <section className="section ev-hero">
        <span className="eyebrow">EVIDENCE</span>
        <h1 className="section-heading ev-title">HOW WE OPERATE.</h1>
        <p className="card-description ev-subtitle">
          The documents behind the claims.<br />
          Security. Governance. Operations.
        </p>
        <p className="trust-body ev-body" style={{ maxWidth: '600px' }}>
          Everything procurement needs to understand before the conversation starts.
        </p>
        <div className="ev-stats">
          <span className="ev-stat">10+ DOCUMENTS</span>
          <span className="ev-stat">03 CATEGORIES</span>
        </div>
      </section>

      {/* 2. Category Navigation */}
      <section className="section ev-nav-section" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <nav className="p-nav">
          {["SECURITY", "LEGAL", "OPERATIONS", "QUESTIONNAIRE"].map(cat => (
            <button 
              key={cat}
              className={`p-nav-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => scrollTo(cat.toLowerCase())}
            >
              {cat}
            </button>
          ))}
        </nav>
      </section>

      {/* 3. Editorial Panels */}
      <section className="section ev-panels-section">
        <div className="ev-panel" id="security">
          <span className="ev-panel-num">01</span>
          <h2 className="ev-panel-title">SECURITY</h2>
          <p className="ev-panel-desc">
            The controls, policies and practices that protect<br />
            client systems and information.
          </p>
          <div className="ev-panel-docs">
            <span>SOC 2</span>
            <span>INFORMATION SECURITY POLICY</span>
            <span>INCIDENT RESPONSE</span>
            <span>BUSINESS CONTINUITY</span>
          </div>
          <button onClick={() => scrollTo("library")} className="judgment-cta" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            EXPLORE SECURITY &rarr;
          </button>
        </div>

        <div className="ev-panel" id="legal">
          <span className="ev-panel-num">02</span>
          <h2 className="ev-panel-title">LEGAL</h2>
          <p className="ev-panel-desc">
            The agreements, policies and governance material<br />
            behind our commercial relationships.
          </p>
          <div className="ev-panel-docs">
            <span>MSA</span>
            <span>DPA</span>
            <span>SUBPROCESSORS</span>
            <span>INSURANCE</span>
          </div>
          <button onClick={() => scrollTo("library")} className="judgment-cta" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            EXPLORE LEGAL &rarr;
          </button>
        </div>

        <div className="ev-panel" id="operations">
          <span className="ev-panel-num">03</span>
          <h2 className="ev-panel-title">OPERATIONS</h2>
          <p className="ev-panel-desc">
            How we deliver, support and recover<br />
            when things don&apos;t go according to plan.
          </p>
          <div className="ev-panel-docs">
            <span>SLA</span>
            <span>RTO / RPO</span>
            <span>CHANGE MANAGEMENT</span>
            <span>ESCALATION</span>
          </div>
          <button onClick={() => scrollTo("library")} className="judgment-cta" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            EXPLORE OPERATIONS &rarr;
          </button>
        </div>
      </section>

      {/* 4. Document Library */}
      <section className="section ev-library-section" id="library">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>DOCUMENT LIBRARY</h2>
        <div className="ev-table-container">
          <table className="ev-table">
            <thead>
              <tr>
                <th className="ev-th">DOCUMENT</th>
                <th className="ev-th">TYPE</th>
                <th className="ev-th">UPDATED</th>
                <th className="ev-th" style={{ textAlign: 'right' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {DOCUMENTS.map((doc, i) => (
                <tr key={i} className="ev-tr">
                  <td className="ev-td ev-td-name">{doc.name.toUpperCase()}</td>
                  <td className="ev-td">{doc.type}</td>
                  <td className="ev-td">{doc.updated}</td>
                  <td className="ev-td" style={{ textAlign: 'right' }}>
                    <a href="#" className="judgment-cta ev-dl-link">DOWNLOAD &rarr;</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Questionnaire Center */}
      <section className="section ev-questionnaire-section" id="questionnaire">
        <div className="ev-q-inner">
          <h2 className="section-label">PROCUREMENT QUESTIONNAIRE</h2>
          <h3 className="section-heading ev-q-title" style={{ maxWidth: '900px', marginBottom: '24px' }}>
            DON&apos;T SEND US YOUR QUESTIONNAIRE FIRST.<br />START WITH OURS.
          </h3>
          <p className="card-description ev-q-desc" style={{ maxWidth: '700px', marginBottom: '64px' }}>
            We&apos;ve pre-filled the information procurement teams<br />
            usually need before a technical conversation.
          </p>
          
          <div className="ev-q-grid">
            {QUESTIONNAIRES.map((q, i) => (
              <div key={i} className="ev-q-card">
                <span className="ev-q-name">{q.name}</span>
                <span className="ev-q-type">{q.type}</span>
                <a href={q.href} className="judgment-cta ev-dl-link">DOWNLOAD &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Protected Document Access */}
      <section className="section ev-access-section">
        <div className="ev-access-inner">
          <h2 className="section-label">REQUEST DOCUMENT</h2>
          <p className="trust-body ev-access-desc" style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '48px' }}>
            Some documents contain information intended<br />
            for verified business contacts.
          </p>
          <form className="ev-access-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="work-email" className="ev-access-label">WORK EMAIL</label>
            <div className="ev-access-input-group">
              <input 
                type="email" 
                id="work-email" 
                className="ev-access-input" 
                placeholder="procurement@company.com" 
                required 
              />
              <button type="submit" className="judgment-cta ev-access-btn">SEND ACCESS LINK &rarr;</button>
            </div>
          </form>
        </div>
      </section>

      {/* 7. Transparency Statement */}
      <section className="section ev-transparency-section">
        <div className="ev-transparency-inner">
          <h2 className="section-label">CLAIMS SHOULD HAVE DOCUMENTS BEHIND THEM.</h2>
          <div className="ev-transparency-content">
            <p className="trust-body">
              If we say we have a control,<br />
              there should be evidence of the control.
            </p>
            <p className="trust-body">
              If we say we have a process,<br />
              there should be a process you can inspect.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Judgment -> Evidence Bridge */}
      <section className="section ev-bridge-section">
        <div className="ev-bridge-inner">
          <p className="section-heading ev-bridge-text" style={{ fontSize: '2rem', marginBottom: '16px' }}>
            JUDGMENT TELLS YOU WHAT WE BELIEVE.
          </p>
          <p className="section-heading ev-bridge-text" style={{ fontSize: '2rem', marginBottom: '48px', color: 'var(--color-text-secondary)' }}>
            EVIDENCE SHOWS YOU HOW WE OPERATE.
          </p>
          <a href="/judgment/" className="judgment-cta">&larr; READ OUR DECISIONS</a>
          
          <div className="ev-architecture-diagram">
            <div className="ev-arch-step">
              <span className="ev-arch-title">JUDGMENT</span>
              <span className="ev-arch-desc">How we think</span>
            </div>
            <div className="ev-arch-arrow">&darr;</div>
            <div className="ev-arch-step">
              <span className="ev-arch-title">EVIDENCE</span>
              <span className="ev-arch-desc">How we operate</span>
            </div>
            <div className="ev-arch-arrow">&darr;</div>
            <div className="ev-arch-step">
              <span className="ev-arch-title">LEVERAGE</span>
              <span className="ev-arch-desc">How we scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="section final-cta" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", borderTop: "1px solid var(--color-structural)" }}>
        <h2 className="cta-headline section-heading">NEED SOMETHING THAT ISN&apos;T HERE?</h2>
        <p className="cta-subheadline card-description">Ask us directly.</p>
        <a href="/contact" className="judgment-cta">CONTACT FLOWTARIS &rarr;</a>
      </section>
    </>
  );
}
