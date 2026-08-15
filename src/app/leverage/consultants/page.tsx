"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

// Define the data model for specialists
type Specialist = {
  slug: string;
  name: string;
  role: string;
  capabilities: string[];
  platforms: string[];
  industries: string[];
  location: string;
};

// Start with empty real data as requested.
// Example structure kept for future content.
const specialists: Specialist[] = [
  /*
  {
    slug: "priya-menon",
    name: "PRIYA MENON",
    role: "ENTERPRISE ARCHITECT",
    capabilities: ["Architecture", "ERP"],
    platforms: ["NetSuite"],
    industries: ["Manufacturing", "Professional Services"],
    location: "HYDERABAD / REMOTE"
  },
  {
    slug: "arjun-rao",
    name: "ARJUN RAO",
    role: "DATA ENGINEERING",
    capabilities: ["Data", "Engineering"],
    platforms: ["NetSuite", "SAP"],
    industries: ["Technology"],
    location: "BENGALURU / REMOTE"
  },
  {
    slug: "maya-sharma",
    name: "MAYA SHARMA",
    role: "TRANSFORMATION LEAD",
    capabilities: ["Transformation", "Operations"],
    platforms: ["Workday"],
    industries: ["Financial Services"],
    location: "MUMBAI / REMOTE"
  }
  */
];

export default function ConsultantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCapability, setSelectedCapability] = useState("ALL");
  const [selectedPlatform, setSelectedPlatform] = useState("ALL");

  // Derive available filter options from actual data
  const availableCapabilities = useMemo(() => {
    const caps = new Set<string>();
    specialists.forEach(s => s.capabilities.forEach(c => caps.add(c.toUpperCase())));
    return ["ALL", ...Array.from(caps).sort()];
  }, []);

  const availablePlatforms = useMemo(() => {
    const plats = new Set<string>();
    specialists.forEach(s => s.platforms.forEach(p => plats.add(p.toUpperCase())));
    return ["ALL", ...Array.from(plats).sort()];
  }, []);

  // Filter specialists based on search and selects
  const filteredSpecialists = useMemo(() => {
    return specialists.filter(s => {
      const matchSearch = searchTerm === "" || 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.capabilities.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
        s.platforms.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchCapability = selectedCapability === "ALL" || 
        s.capabilities.map(c => c.toUpperCase()).includes(selectedCapability);
      
      const matchPlatform = selectedPlatform === "ALL" || 
        s.platforms.map(p => p.toUpperCase()).includes(selectedPlatform);

      return matchSearch && matchCapability && matchPlatform;
    });
  }, [searchTerm, selectedCapability, selectedPlatform]);

  // Derive counts for discovery sections
  const platformCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    specialists.forEach(s => {
      s.platforms.forEach(p => {
        counts[p] = (counts[p] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const capabilityCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    specialists.forEach(s => {
      s.capabilities.forEach(c => {
        counts[c] = (counts[c] || 0) + 1;
      });
    });
    return counts;
  }, []);

  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav" style={{ paddingTop: '24px', paddingBottom: '0' }}>
        <Link href="/leverage" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; LEVERAGE</Link>
        <span className="view-all" style={{ color: "var(--color-text-primary)", marginLeft: '8px' }}>/ CONSULTANTS</span>
      </div>

      {/* Hero */}
      <section className="section ev-hero" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <span className="eyebrow">SPECIALIST NETWORK</span>
        <h1 className="section-heading ev-title" style={{ maxWidth: '900px' }}>
          FIND THE DEPTH<br />THE PROBLEM REQUIRES.
        </h1>
        <p className="card-description ev-subtitle" style={{ maxWidth: '600px', marginTop: '24px' }}>
          A curated network of specialists<br />
          across enterprise platforms, engineering,<br />
          data and operations.
        </p>
        <div className="ev-stats" style={{ gap: '64px', justifyContent: 'flex-start', marginTop: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="ev-stat">
              {specialists.length > 0 ? `${specialists.length} SPECIALISTS` : "CURATED NETWORK"}
            </span>
          </div>
          {availableCapabilities.length > 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="ev-stat">
                {String(availableCapabilities.length - 1).padStart(2, '0')} CAPABILITIES
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Introduction */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>NOT EVERY PROBLEM NEEDS<br />A LARGER TEAM.</h2>
          <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px', color: 'var(--color-text-secondary)' }}>SOME NEEDS REQUIRE<br />A VERY SPECIFIC PERSON.</h2>
          <p className="trust-body" style={{ fontSize: '1.25rem' }}>
            The network exists to bring specialist depth<br />
            into engagements where general capability<br />
            isn&apos;t enough.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)', backgroundColor: 'var(--color-surface)' }}>
        <span className="section-label" style={{ marginBottom: '32px', display: 'block' }}>SEARCH SPECIALISTS</span>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
          <div className="ev-access-input-group" style={{ backgroundColor: 'var(--color-bg)' }}>
            <input 
              type="text" 
              className="ev-access-input" 
              placeholder="Search by capability, platform, industry or expertise..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '1 1 250px' }}>
              <label htmlFor="capability-filter" className="ev-access-label">CAPABILITY</label>
              <div className="ev-access-input-group" style={{ backgroundColor: 'var(--color-bg)' }}>
                <select 
                  id="capability-filter" 
                  className="ev-access-input" 
                  style={{ appearance: 'none', backgroundColor: 'transparent' }}
                  value={selectedCapability}
                  onChange={(e) => setSelectedCapability(e.target.value)}
                >
                  {availableCapabilities.map(cap => (
                    <option key={cap} value={cap}>{cap}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '1 1 250px' }}>
              <label htmlFor="platform-filter" className="ev-access-label">PLATFORM</label>
              <div className="ev-access-input-group" style={{ backgroundColor: 'var(--color-bg)' }}>
                <select 
                  id="platform-filter" 
                  className="ev-access-input" 
                  style={{ appearance: 'none', backgroundColor: 'transparent' }}
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                >
                  {availablePlatforms.map(plat => (
                    <option key={plat} value={plat}>{plat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Results */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '48px' }}>
          <h2 className="section-heading" style={{ fontSize: '2.5rem', margin: 0 }}>SPECIALISTS</h2>
          <span className="section-label" style={{ margin: 0 }}>
            {String(filteredSpecialists.length).padStart(2, '0')} RESULTS
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredSpecialists.length > 0 ? (
            filteredSpecialists.map((specialist, idx) => (
              <div key={specialist.slug} style={{ display: 'flex', flexDirection: 'column', padding: '32px 0', borderBottom: '1px solid var(--color-structural)' }}>
                <span className="section-label" style={{ marginBottom: '16px' }}>{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="section-heading" style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{specialist.name}</h3>
                <span className="card-heading" style={{ fontSize: '1.125rem', marginBottom: '16px' }}>{specialist.role}</span>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', color: 'var(--color-text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <span>{specialist.capabilities.join(' \u00B7 ')}</span>
                  {specialist.platforms.length > 0 && <span>|</span>}
                  <span>{specialist.platforms.join(' \u00B7 ')}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <span className="trust-body" style={{ color: 'var(--color-text-secondary)' }}>{specialist.location}</span>
                  <Link href={`/leverage/consultants/${specialist.slug}`} className="judgment-cta">VIEW PROFILE &rarr;</Link>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '64px 0' }}>
              <span className="card-heading" style={{ display: 'block', marginBottom: '16px' }}>NO SPECIALISTS MATCHED.</span>
              <span className="trust-body" style={{ color: 'var(--color-text-secondary)' }}>
                Try another capability, platform, or search term.
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Capability Map */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>CAPABILITY MAP</h2>
        
        <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="card-heading">ARCHITECTURE</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-secondary)' }}>
              <span className="trust-body">Enterprise Architecture</span>
              <span className="trust-body">Solution Architecture</span>
              <span className="trust-body">Integration Architecture</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="card-heading">ENGINEERING</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-secondary)' }}>
              <span className="trust-body">Platform Engineering</span>
              <span className="trust-body">Application Engineering</span>
              <span className="trust-body">API Engineering</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="card-heading">DATA</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-secondary)' }}>
              <span className="trust-body">Data Engineering</span>
              <span className="trust-body">Data Architecture</span>
              <span className="trust-body">Analytics</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="card-heading">ENTERPRISE PLATFORMS</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-secondary)' }}>
              <span className="trust-body">NetSuite</span>
              <span className="trust-body">Coupa</span>
              <span className="trust-body">Workday</span>
              <span className="trust-body">SAP</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="card-heading">OPERATIONS</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-secondary)' }}>
              <span className="trust-body">Transformation</span>
              <span className="trust-body">Program Leadership</span>
              <span className="trust-body">Service Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Sections */}
      {Object.entries(platformCounts).map(([platform, count]) => {
        if (count > 0) {
          return (
            <section key={platform} className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
              <div className="ev-panel" style={{ padding: '64px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <span className="section-label">LOOKING FOR {platform.toUpperCase()} DEPTH?</span>
                <h3 className="section-heading" style={{ fontSize: '2rem', margin: 0 }}>{platform}</h3>
                <span className="card-heading" style={{ color: 'var(--color-text-secondary)' }}>
                  {String(count).padStart(2, '0')} specialists
                </span>
                <Link href="#" className="judgment-cta" style={{ marginTop: '16px', alignSelf: 'flex-start' }} onClick={(e) => {
                  e.preventDefault();
                  setSelectedPlatform(platform.toUpperCase());
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}>
                  VIEW {platform.toUpperCase()} SPECIALISTS &rarr;
                </Link>
              </div>
            </section>
          );
        }
        return null;
      })}

      {Object.entries(capabilityCounts).map(([cap, count]) => {
        if (count > 0) {
          return (
            <section key={cap} className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
              <div className="ev-panel" style={{ padding: '64px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <span className="section-label">LOOKING FOR {cap.toUpperCase()}?</span>
                <h3 className="section-heading" style={{ fontSize: '2rem', margin: 0 }}>{cap}</h3>
                <span className="card-heading" style={{ color: 'var(--color-text-secondary)' }}>
                  {String(count).padStart(2, '0')} specialists
                </span>
                <Link href="#" className="judgment-cta" style={{ marginTop: '16px', alignSelf: 'flex-start' }} onClick={(e) => {
                  e.preventDefault();
                  setSelectedCapability(cap.toUpperCase());
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}>
                  VIEW {cap.toUpperCase()} SPECIALISTS &rarr;
                </Link>
              </div>
            </section>
          );
        }
        return null;
      })}

      {/* How It Works */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>HOW IT WORKS</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
          {[
            { num: "01", title: "IDENTIFY", desc: "Define the capability the engagement requires." },
            { num: "02", title: "MATCH", desc: "Find the appropriate specialist." },
            { num: "03", title: "INTRODUCE", desc: "Bring the specialist into the engagement." },
            { num: "04", title: "DELIVER", desc: "Specialist depth becomes part of the broader solution." }
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

      {/* Request a Specialist */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div className="ev-panel" style={{ padding: '64px' }}>
          <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
            CAN&apos;T FIND THE DEPTH YOU NEED?
          </h2>
          <p className="trust-body" style={{ maxWidth: '600px', fontSize: '1.125rem', marginBottom: '32px' }}>
            Tell us what capability is missing.<br />
            We&apos;ll determine whether someone in the broader<br />
            network can fill the gap.
          </p>
          <Link href="/contact" className="judgment-cta">REQUEST A SPECIALIST &rarr;</Link>
        </div>
      </section>

      {/* Leverage Connection */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '32px' }}>
          PEOPLE ARE PART OF THE<br />LEVERAGE SYSTEM.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '48px' }}>
          <p className="trust-body" style={{ fontSize: '1.25rem', margin: 0 }}>Platforms provide capability.</p>
          <p className="trust-body" style={{ fontSize: '1.25rem', margin: 0 }}>Partners provide reach.</p>
          <p className="trust-body" style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-accent)' }}>Specialists provide depth.</p>
        </div>
        <Link href="/leverage" className="judgment-cta">EXPLORE LEVERAGE &rarr;</Link>
      </section>
    </>
  );
}
