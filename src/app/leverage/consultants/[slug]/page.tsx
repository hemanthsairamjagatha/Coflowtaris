"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

// Example data model that would normally come from a CMS or database.
// The prompt specifies using the project's existing model or a minimal one.
type Consultant = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  primaryCapability: string;
  location: string;
  capabilities: string[];
  expertise: { category: string; items: string[] }[];
  experience: { num: string; title: string; description: string; capability: string }[];
  platforms: { name: string; description: string }[];
  industries: string[];
  goodFit: string[];
  lessSuitable: string[];
  relatedAlliances: { name: string; href: string }[];
  relatedJudgment?: { title: string; desc: string; tags: string; href: string };
};

// Mock data strictly matching the requested examples. No fabrication of unrelated people.
const mockConsultants: Record<string, Consultant> = {
  "arjun-rao": {
    slug: "arjun-rao",
    name: "ARJUN RAO",
    role: "DATA ENGINEERING",
    summary: "Arjun works across enterprise data integration and analytics, with particular depth in complex platform migrations. Their work typically sits between core ERP platforms, custom engineering, and enterprise data architecture.",
    primaryCapability: "DATA ENGINEERING",
    location: "BENGALURU / REMOTE",
    capabilities: ["ENTERPRISE ARCHITECTURE", "ERP INTEGRATION", "PLATFORM MODERNIZATION", "API ARCHITECTURE"],
    expertise: [
      { category: "ARCHITECTURE", items: ["Enterprise Architecture", "Solution Architecture", "Integration Architecture"] },
      { category: "PLATFORMS", items: ["NetSuite", "SAP", "Workday"] },
      { category: "ENGINEERING", items: ["API Architecture", "Integration Engineering", "Platform Modernization"] },
      { category: "OPERATIONS", items: ["Transformation", "Technical Governance", "Program Leadership"] }
    ],
    experience: [
      {
        num: "01",
        title: "ENTERPRISE ERP MODERNIZATION",
        description: "Architecture and integration strategy for a multi-system enterprise environment.",
        capability: "Architecture \u00B7 Integration"
      }
    ],
    platforms: [
      { name: "NETSUITE", description: "ERP \u00B7 Integration \u00B7 Architecture" },
      { name: "SAP", description: "Integration \u00B7 Enterprise Architecture" },
      { name: "WORKDAY", description: "Integration \u00B7 Architecture" },
      { name: "API / SERVICES", description: "Integration Architecture \u00B7 Engineering" }
    ],
    industries: [
      "MANUFACTURING",
      "PROFESSIONAL SERVICES",
      "TECHNOLOGY",
      "ENTERPRISE OPERATIONS"
    ],
    goodFit: [
      "Complex enterprise environments",
      "Multiple-system integration",
      "ERP modernization",
      "Architecture decisions with long-term operational consequences"
    ],
    lessSuitable: [
      "Small standalone implementation work",
      "Projects requiring only commodity development capacity"
    ],
    relatedAlliances: [
      { name: "NETSUITE", href: "/leverage/netsuite" },
      { name: "WORKDAY", href: "/leverage/workday" },
      { name: "COUPA", href: "/leverage/coupa" }
    ],
    relatedJudgment: {
      title: "THE NETSUITE CRISIS",
      desc: "47 clients. Six weeks. One platform change.",
      tags: "CTO \u00B7 TECH \u00B7 CRISIS",
      href: "/judgment/netsuite-crisis"
    }
  }
};

export default function ConsultantProfilePage({ params }: { params: { slug: string } }) {
  const consultant = mockConsultants[params.slug];

  if (!consultant) {
    notFound();
  }

  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav" style={{ paddingTop: '24px', paddingBottom: '0' }}>
        <Link href="/leverage/consultants" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; CONSULTANTS</Link>
        <span className="view-all" style={{ color: "var(--color-text-primary)", marginLeft: '8px' }}>/ LEVERAGE / CONSULTANTS / {consultant.slug.toUpperCase()}</span>
      </div>

      {/* Profile Hero */}
      <section className="section ev-hero" style={{ paddingTop: '64px', paddingBottom: '48px' }}>
        <span className="eyebrow">SPECIALIST</span>
        <h1 className="section-heading ev-title" style={{ maxWidth: '900px', margin: '16px 0 8px 0', fontSize: '4rem' }}>
          {consultant.name}
        </h1>
        <h2 className="card-heading" style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)', marginBottom: '48px' }}>
          {consultant.role}
        </h2>
        
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap', borderTop: '1px solid var(--color-structural)', paddingTop: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="section-label">PRIMARY CAPABILITY</span>
            <span className="trust-body" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>{consultant.primaryCapability}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="section-label">LOCATION</span>
            <span className="trust-body" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>{consultant.location}</span>
          </div>
        </div>
      </section>

      {/* Capability Strip */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '64px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
          {consultant.capabilities.map((cap, idx, arr) => (
            <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span className="trust-body" style={{ fontSize: '0.875rem', letterSpacing: '0.1em' }}>{cap}</span>
              {idx < arr.length - 1 && <span style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-structural)' }}></span>}
            </div>
          ))}
        </div>
      </section>

      {/* Profile Summary */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <span className="section-label" style={{ marginBottom: '32px', display: 'block' }}>PROFILE</span>
        <p className="trust-body" style={{ fontSize: '1.5rem', maxWidth: '800px', lineHeight: '1.5' }}>
          {consultant.summary}
        </p>
      </section>

      {/* Expertise Grid */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>EXPERTISE</h2>
        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px' }}>
          {consultant.expertise.map((group) => (
            <div key={group.category} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="card-heading" style={{ textTransform: 'uppercase' }}>{group.category}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-secondary)' }}>
                {group.items.map(item => (
                  <span key={item} className="trust-body">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Experience */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>SELECTED EXPERIENCE</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '800px' }}>
          {consultant.experience.map((exp) => (
            <div key={exp.num} style={{ display: 'flex', flexDirection: 'column', paddingBottom: '32px', borderBottom: '1px solid var(--color-structural)' }}>
              <span className="section-label" style={{ marginBottom: '16px' }}>{exp.num}</span>
              <h3 className="section-heading" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{exp.title}</h3>
              <p className="trust-body" style={{ fontSize: '1.125rem', marginBottom: '24px' }}>{exp.description}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>CAPABILITY</span>
                <span className="trust-body" style={{ color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                  {exp.capability}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform & Industry Experience */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className="section-label" style={{ marginBottom: '32px' }}>PLATFORM EXPERIENCE</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {consultant.platforms.map((plat) => (
                <div key={plat.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span className="card-heading">{plat.name}</span>
                  <span className="trust-body" style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{plat.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className="section-label" style={{ marginBottom: '32px' }}>INDUSTRY EXPERIENCE</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {consultant.industries.map((ind) => (
                <span key={ind} className="card-heading" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>{ind}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Where This Specialist Fits */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>WHERE THIS SPECIALIST FITS</h2>
        
        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
          <div className="ev-panel" style={{ padding: '48px', backgroundColor: 'var(--color-surface)' }}>
            <h3 className="section-heading" style={{ fontSize: '1.5rem', marginBottom: '32px', color: 'var(--color-text-primary)' }}>GOOD FIT</h3>
            <ul className="trust-body" style={{ margin: 0, paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {consultant.goodFit.map((item, idx) => (
                <li key={idx} style={{ paddingLeft: '8px' }}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="ev-panel" style={{ padding: '48px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-structural)' }}>
            <h3 className="section-heading" style={{ fontSize: '1.5rem', marginBottom: '32px', color: 'var(--color-text-secondary)' }}>LESS SUITABLE</h3>
            <ul className="trust-body" style={{ margin: 0, paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--color-text-secondary)' }}>
              {consultant.lessSuitable.map((item, idx) => (
                <li key={idx} style={{ paddingLeft: '8px' }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Flowtaris Leverage Model */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', padding: '64px', border: '1px solid var(--color-structural)', backgroundColor: 'var(--color-surface)', maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center' }}>
            <span className="section-label" style={{ display: 'block', marginBottom: '8px' }}>SPECIALIST DEPTH</span>
            <span className="card-heading" style={{ fontSize: '1.25rem', letterSpacing: '0.1em' }}>{consultant.name}</span>
          </div>
          
          <span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>&darr;</span>
          
          <div style={{ width: '100%', padding: '24px', border: '1px solid var(--color-structural)', textAlign: 'center', backgroundColor: 'var(--color-bg)' }}>
            <span className="card-heading" style={{ letterSpacing: '0.1em' }}>FLOWTARIS ENGINEERING</span>
          </div>

          <span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>&darr;</span>

          <div style={{ width: '100%', padding: '24px', border: '1px solid var(--color-structural)', textAlign: 'center', backgroundColor: 'var(--color-bg)' }}>
            <span className="card-heading" style={{ letterSpacing: '0.1em' }}>PLATFORM / PARTNER</span>
          </div>

          <span style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)' }}>&darr;</span>

          <div style={{ textAlign: 'center' }}>
            <span className="card-heading" style={{ fontSize: '1.25rem', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>CLIENT OUTCOME</span>
          </div>

        </div>
      </section>

      {/* Related Alliances & Judgment */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
          
          {consultant.relatedAlliances.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="section-label" style={{ marginBottom: '32px' }}>RELATED ALLIANCES</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {consultant.relatedAlliances.map((alliance) => (
                  <Link key={alliance.name} href={alliance.href} className="card-heading" style={{ textDecoration: 'none', borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px' }}>
                    {alliance.name} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          )}

          {consultant.relatedJudgment && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="section-label" style={{ marginBottom: '32px' }}>RELATED JUDGMENT</h2>
              <div className="ev-panel" style={{ padding: '32px', backgroundColor: 'var(--color-surface)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 className="section-heading" style={{ fontSize: '1.25rem', margin: 0 }}>{consultant.relatedJudgment.title}</h3>
                <p className="trust-body" style={{ margin: 0 }}>{consultant.relatedJudgment.desc}</p>
                <span className="section-label" style={{ margin: 0, marginTop: '8px' }}>{consultant.relatedJudgment.tags}</span>
                <Link href={consultant.relatedJudgment.href} className="judgment-cta" style={{ marginTop: '16px' }}>READ DECISION &rarr;</Link>
              </div>
              <Link href="/judgment" className="card-heading" style={{ marginTop: '32px', textDecoration: 'none', color: 'var(--color-text-secondary)' }}>MORE DECISIONS &rarr;</Link>
            </div>
          )}

        </div>
      </section>

      {/* Evidence Connection */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>WORKING WITH FLOWTARIS?</h2>
        <p className="card-description" style={{ maxWidth: '600px', marginBottom: '48px', color: 'var(--color-text-secondary)' }}>
          THE PEOPLE ARE ONLY ONE PART<br />
          OF THE DELIVERY SYSTEM.<br />
          SEE HOW WE OPERATE.
        </p>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <Link href="/evidence/security" className="card-heading" style={{ textDecoration: 'none', borderBottom: '1px solid var(--color-text-primary)', paddingBottom: '4px' }}>SECURITY &rarr;</Link>
          <Link href="/evidence/legal" className="card-heading" style={{ textDecoration: 'none', borderBottom: '1px solid var(--color-text-primary)', paddingBottom: '4px' }}>LEGAL &rarr;</Link>
          <Link href="/evidence/operations" className="card-heading" style={{ textDecoration: 'none', borderBottom: '1px solid var(--color-text-primary)', paddingBottom: '4px' }}>OPERATIONS &rarr;</Link>
        </div>
      </section>

      {/* Request Specialist CTA */}
      <section className="section ev-access-section">
        <div className="ev-access-inner">
          <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
            NEED THIS CAPABILITY?
          </h2>
          <p className="trust-body ev-access-desc" style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '48px' }}>
            Tell us what you&apos;re trying to solve.<br />
            Flowtaris will determine whether this specialist<br />
            or another capability in the network is the right fit.
          </p>
          <Link href="/leverage/register" className="judgment-cta">REQUEST SPECIALIST &rarr;</Link>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section className="section">
        <div className="dl-prev-next-inner">
          <div className="dl-nav-link dl-nav-prev" style={{ flex: 1 }}>
            <Link href="/leverage/consultants" className="dl-nav-direction" style={{ textDecoration: 'none' }}>&larr; ALL SPECIALISTS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
