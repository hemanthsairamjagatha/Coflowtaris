"use client";

import Link from "next/link";

export default function OperationsDossierPage() {
  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav" style={{ paddingTop: '24px', paddingBottom: '0' }}>
        <Link href="/evidence" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; EVIDENCE</Link>
        <span className="view-all" style={{ color: "var(--color-text-primary)", marginLeft: '8px' }}>/ OPERATIONS</span>
      </div>

      {/* Operations Hero */}
      <section className="section ev-hero">
        <span className="eyebrow">OPERATIONS</span>
        <h1 className="section-heading ev-title">HOW THE WORK<br />ACTUALLY RUNS.</h1>
        <p className="card-description ev-subtitle">
          Delivery, support, escalation, change management<br />
          and recovery &mdash; documented before they&apos;re needed.
        </p>
        <div className="ev-stats" style={{ gap: '64px', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">05 OPERATING AREAS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">LAST REVIEWED</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>MAR 2026</span>
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="section">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>THE OPERATING MODEL</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
          {[
            { num: "01", title: "DISCOVER", desc: "Understand the problem, constraints and desired outcome." },
            { num: "02", title: "DESIGN", desc: "Define the architecture, delivery approach and responsibilities." },
            { num: "03", title: "DELIVER", desc: "Build, test and release against the agreed scope." },
            { num: "04", title: "OPERATE", desc: "Monitor, support and continuously improve." },
            { num: "05", title: "REVIEW", desc: "Measure outcomes, risks and required changes." }
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

      {/* Service Operations */}
      <section className="section">
        <div className="ev-panel" style={{ padding: '64px' }}>
          <span className="ev-panel-num">01</span>
          <h2 className="ev-panel-title">SERVICE OPERATIONS</h2>
          <p className="ev-panel-desc" style={{ marginBottom: '64px' }}>
            What happens when the system<br />is already in production?
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, minWidth: '250px' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase' }}>SUPPORT</span>
              <span className="trust-body">Defined support channels and escalation paths.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, minWidth: '250px' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase' }}>MONITORING</span>
              <span className="trust-body">Operational health and relevant system signals.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, minWidth: '250px' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase' }}>ESCALATION</span>
              <span className="trust-body">Defined path from operational issue to leadership when required.</span>
            </div>
          </div>
          <Link href="#" className="judgment-cta">VIEW OPERATIONS RUNBOOK &rarr;</Link>
        </div>
      </section>

      {/* SLA & Service Commitments */}
      <section className="section">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>SERVICE COMMITMENTS</h2>
        <div className="ev-table-container">
          <table className="ev-table" style={{ marginBottom: '32px' }}>
            <thead>
              <tr>
                <th className="ev-th">SERVICE TIER</th>
                <th className="ev-th">RESPONSE</th>
                <th className="ev-th" style={{ textAlign: 'right' }}>AVAILABILITY</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tier: "STANDARD", response: "[DEFINED]", availability: "[DEFINED]" },
                { tier: "PRIORITY", response: "[DEFINED]", availability: "[DEFINED]" },
                { tier: "CRITICAL", response: "[DEFINED]", availability: "[DEFINED]" }
              ].map((row, i) => (
                <tr key={i} className="ev-tr">
                  <td className="ev-td ev-td-name" style={{ fontSize: '1.125rem' }}>{row.tier}</td>
                  <td className="ev-td">{row.response}</td>
                  <td className="ev-td" style={{ textAlign: 'right' }}>{row.availability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline', marginTop: '16px' }}>
          <span className="section-label" style={{ marginBottom: 0 }}>SERVICE LEVEL AGREEMENT</span>
          <Link href="#" className="judgment-cta" style={{ marginLeft: '16px' }}>VIEW SLA &rarr;</Link>
        </div>
      </section>

      {/* Incident Escalation */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>WHEN SOMETHING BREAKS</h2>
        <p className="card-description" style={{ maxWidth: '600px', marginBottom: '64px', color: 'var(--color-text-secondary)' }}>
          The escalation path should not depend on<br />finding the right person at the right moment.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
          {["DETECT", "TRIAGE", "INCIDENT OWNER", "TECHNICAL ESCALATION", "LEADERSHIP", "CLIENT COMMUNICATION"].map((step, i, arr) => (
            <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase', fontWeight: 500, letterSpacing: '0.05em' }}>{step}</span>
              {i < arr.length - 1 && <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem' }}>&darr;</span>}
            </div>
          ))}
        </div>
      </section>

      {/* RTO / RPO */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px' }}>RECOVERY</h2>
        
        <div className="trust-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
          <div className="trust-card" style={{ padding: '48px' }}>
            <h3 className="card-heading" style={{ marginBottom: '8px', fontSize: '2rem' }}>RTO</h3>
            <span className="section-label">RECOVERY TIME OBJECTIVE</span>
            <p className="trust-body" style={{ marginBottom: '32px', marginTop: '16px' }}>
              How quickly the service is expected<br />to be restored.
            </p>
            <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-accent)' }}>[ VALUE ]</span>
          </div>
          <div className="trust-card" style={{ padding: '48px' }}>
            <h3 className="card-heading" style={{ marginBottom: '8px', fontSize: '2rem' }}>RPO</h3>
            <span className="section-label">RECOVERY POINT OBJECTIVE</span>
            <p className="trust-body" style={{ marginBottom: '32px', marginTop: '16px' }}>
              How much data loss is acceptable<br />within the defined recovery model.
            </p>
            <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-accent)' }}>[ VALUE ]</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <Link href="#" className="judgment-cta">RECOVERY RUNBOOK &rarr;</Link>
          <Link href="#" className="judgment-cta">BUSINESS CONTINUITY PLAN &rarr;</Link>
        </div>
      </section>

      {/* Change Management */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '32px' }}>CHANGE MANAGEMENT</h2>
        <h3 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
          NOT EVERY CHANGE IS A<br />TECHNICAL DECISION.
        </h3>
        <p className="trust-body" style={{ marginBottom: '16px', maxWidth: '600px' }}>
          Some changes affect:
        </p>
        <ul className="trust-body" style={{ margin: '0 0 32px 0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>cost</li>
          <li>risk</li>
          <li>reliability</li>
          <li>delivery timelines</li>
          <li>client commitments</li>
        </ul>
        <p className="card-description" style={{ maxWidth: '600px', marginBottom: '64px', color: 'var(--color-text-secondary)' }}>
          So changes are evaluated as business decisions,<br />not simply implementation tasks.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
          {["REQUEST", "ASSESS", "IMPACT", "APPROVE", "IMPLEMENT", "VERIFY", "DOCUMENT"].map((step, i, arr) => (
            <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase', fontWeight: 500, letterSpacing: '0.05em' }}>{step}</span>
              {i < arr.length - 1 && <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem' }}>&darr;</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Runbook Library */}
      <section className="section">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>RUNBOOK LIBRARY</h2>
        <div className="ev-table-container">
          <table className="ev-table">
            <thead>
              <tr>
                <th className="ev-th">RUNBOOK</th>
                <th className="ev-th">TYPE</th>
                <th className="ev-th" style={{ textAlign: 'right' }}>ACCESS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Incident Response", type: "PDF" },
                { name: "Business Continuity", type: "PDF" },
                { name: "Service Escalation", type: "PDF" },
                { name: "Change Management", type: "PDF" },
                { name: "Release Management", type: "PDF" },
                { name: "Operational Recovery", type: "PDF" }
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

      {/* Health Monitoring */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '32px' }}>HEALTH MONITORING</h2>
        <h3 className="section-heading" style={{ fontSize: '3rem', marginBottom: '24px', maxWidth: '900px' }}>
          WE WATCH THE SYSTEMS<br />THAT MATTER.
        </h3>
        <p className="card-description" style={{ maxWidth: '700px', marginBottom: '64px' }}>
          Operational monitoring provides visibility<br />
          into system health, service degradation<br />
          and incidents.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '64px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>&mdash;</span>
            <span className="card-heading" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>APPLICATION HEALTH</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>&mdash;</span>
            <span className="card-heading" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>INFRASTRUCTURE</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>&mdash;</span>
            <span className="card-heading" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>DEPENDENCIES</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>&mdash;</span>
            <span className="card-heading" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>CRITICAL SERVICES</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>&mdash;</span>
            <span className="card-heading" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>INCIDENT STATE</span>
          </div>
        </div>

        <Link href="#" className="judgment-cta">INCIDENT RESPONSE POLICY &rarr;</Link>
      </section>

      {/* Operational Documents */}
      <section className="section">
        <h2 className="section-label" style={{ marginBottom: '48px' }}>OPERATIONAL DOCUMENTS</h2>
        <div className="ev-table-container">
          <table className="ev-table">
            <thead>
              <tr>
                <th className="ev-th">DOCUMENT</th>
                <th className="ev-th">UPDATED</th>
                <th className="ev-th" style={{ textAlign: 'right' }}>ACCESS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Service Level Agreement", updated: "MAR 2026" },
                { name: "Business Continuity Plan", updated: "MAR 2026" },
                { name: "Incident Response Plan", updated: "MAR 2026" },
                { name: "Change Management Policy", updated: "FEB 2026" },
                { name: "Escalation Runbook", updated: "FEB 2026" },
                { name: "Recovery Runbook", updated: "JAN 2026" }
              ].map((doc, i) => (
                <tr key={i} className="ev-tr">
                  <td className="ev-td ev-td-name" style={{ fontSize: '1.125rem' }}>{doc.name}</td>
                  <td className="ev-td">{doc.updated}</td>
                  <td className="ev-td" style={{ textAlign: 'right' }}>
                    <Link href="#" className="judgment-cta ev-dl-link">VIEW &rarr;</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Operating Principle */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)', borderBottom: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '3rem', marginBottom: '32px', maxWidth: '900px' }}>
          OPERATIONS SHOULD NOT DEPEND<br />ON HEROICS.
        </h2>
        <p className="card-description" style={{ maxWidth: '700px' }}>
          If the process only works when the right person<br />
          happens to be online, the process isn&apos;t finished.
        </p>
      </section>

      {/* Deep Page Navigation */}
      <section className="section">
        <div className="dl-prev-next-inner">
          <Link href="/evidence/legal" className="dl-nav-link dl-nav-prev">
            <span className="dl-nav-direction">&larr; LEGAL</span>
          </Link>
          <Link href="/evidence/#questionnaire" className="dl-nav-link dl-nav-next">
            <span className="dl-nav-direction">NEXT</span>
            <span className="dl-nav-title">QUESTIONNAIRE &rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
