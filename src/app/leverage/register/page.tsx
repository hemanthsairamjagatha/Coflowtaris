"use client";

import Link from "next/link";
import { useState } from "react";

export default function DealRegistrationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reference, setReference] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate backend submission without exposing Hubspot/Slack
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Generate a plausible reference ID
      const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
      setReference(`FL-2026-${randomStr}`);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <section className="section" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="section-heading" style={{ fontSize: '3rem', marginBottom: '24px' }}>OPPORTUNITY REGISTERED.</h1>
          <p className="trust-body" style={{ fontSize: '1.25rem', marginBottom: '32px' }}>
            We&apos;ve received the opportunity details.
          </p>
          <div style={{ display: 'inline-block', border: '1px solid var(--color-structural)', padding: '16px 32px', marginBottom: '48px' }}>
            <span className="section-label" style={{ margin: 0, display: 'block' }}>REFERENCE</span>
            <span className="card-heading" style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}>{reference}</span>
          </div>
          <p className="card-description" style={{ maxWidth: '600px', margin: '0 auto 48px auto' }}>
            We&apos;ll route the opportunity to the appropriate<br />
            Flowtaris team and follow up using the information<br />
            provided.
          </p>
          <Link href="/leverage" className="judgment-cta" style={{ display: 'inline-block' }}>
            &larr; BACK TO LEVERAGE
          </Link>
        </section>
      </div>
    );
  }

  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav" style={{ paddingTop: '24px', paddingBottom: '0' }}>
        <Link href="/leverage" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; LEVERAGE</Link>
        <span className="view-all" style={{ color: "var(--color-text-primary)", marginLeft: '8px' }}>/ DEAL REGISTRATION</span>
      </div>

      {/* Hero */}
      <section className="section ev-hero" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <span className="eyebrow">DEAL REGISTRATION</span>
        <h1 className="section-heading ev-title" style={{ maxWidth: '900px' }}>
          REGISTER THE<br />OPPORTUNITY.
        </h1>
        <p className="card-description ev-subtitle" style={{ maxWidth: '600px', marginTop: '24px' }}>
          Give us enough context to route the opportunity<br />
          to the right Flowtaris team.
        </p>
      </section>

      {/* Main Layout: Form + Sidebar */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)', paddingTop: '64px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px' }}>
          
          {/* Left Column: Form */}
          <div style={{ flex: '1 1 600px', maxWidth: '800px' }}>
            <form className="ev-access-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
              
              {/* 01 - YOUR INFORMATION */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 className="card-heading" style={{ borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px' }}>01 &mdash; YOUR INFORMATION</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="name" className="ev-access-label">NAME *</label>
                  <div className="ev-access-input-group">
                    <input type="text" id="name" className="ev-access-input" required />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="email" className="ev-access-label">WORK EMAIL *</label>
                  <div className="ev-access-input-group">
                    <input type="email" id="email" className="ev-access-input" required />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="company" className="ev-access-label">COMPANY *</label>
                  <div className="ev-access-input-group">
                    <input type="text" id="company" className="ev-access-input" required />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="partner-type" className="ev-access-label">PARTNER TYPE *</label>
                  <div className="ev-access-input-group">
                    <select id="partner-type" className="ev-access-input" required style={{ appearance: 'none', backgroundColor: 'transparent' }}>
                      <option value="">Select partner type...</option>
                      <option value="technology">Technology Partner</option>
                      <option value="consulting">Consulting Partner</option>
                      <option value="referral">Referral Partner</option>
                      <option value="platform">Platform Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 02 - OPPORTUNITY */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 className="card-heading" style={{ borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px' }}>02 &mdash; OPPORTUNITY</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="client-company" className="ev-access-label">CLIENT / COMPANY *</label>
                  <div className="ev-access-input-group">
                    <input type="text" id="client-company" className="ev-access-input" required />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="opportunity-name" className="ev-access-label">OPPORTUNITY NAME *</label>
                  <div className="ev-access-input-group">
                    <input type="text" id="opportunity-name" className="ev-access-input" required />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="platform" className="ev-access-label">PLATFORM *</label>
                  <div className="ev-access-input-group">
                    <input type="text" id="platform" className="ev-access-input" required />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="opportunity-type" className="ev-access-label">OPPORTUNITY TYPE *</label>
                  <div className="ev-access-input-group">
                    <input type="text" id="opportunity-type" className="ev-access-input" required />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="timeline" className="ev-access-label">EXPECTED TIMELINE *</label>
                  <div className="ev-access-input-group">
                    <input type="text" id="timeline" className="ev-access-input" required />
                  </div>
                </div>
              </div>

              {/* 03 - WHAT IS THE OPPORTUNITY? */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 className="card-heading" style={{ borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px' }}>03 &mdash; WHAT IS THE OPPORTUNITY?</h2>
                <p className="trust-body" style={{ color: 'var(--color-text-secondary)', margin: '-8px 0 0 0' }}>
                  Tell us what the client is trying to accomplish.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="ev-access-input-group">
                    <textarea 
                      id="opportunity-summary" 
                      className="ev-access-input" 
                      style={{ minHeight: '200px', resize: 'vertical' }} 
                      required 
                    />
                  </div>
                  <ul className="trust-body" style={{ margin: 0, paddingLeft: '24px', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>What problem are they trying to solve?</li>
                    <li>What platform or systems are involved?</li>
                    <li>Where does Flowtaris potentially fit?</li>
                  </ul>
                </div>
              </div>

              {/* 04 - COMMERCIAL CONTEXT */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 className="card-heading" style={{ borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px' }}>04 &mdash; COMMERCIAL CONTEXT</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="opp-size" className="ev-access-label">ESTIMATED OPPORTUNITY SIZE (OPTIONAL)</label>
                  <div className="ev-access-input-group">
                    <select id="opp-size" className="ev-access-input" style={{ appearance: 'none', backgroundColor: 'transparent' }}>
                      <option value="">Select size...</option>
                      <option value="small">Under $50k</option>
                      <option value="medium">$50k - $150k</option>
                      <option value="large">$150k - $500k</option>
                      <option value="enterprise">$500k+</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="decision-stage" className="ev-access-label">DECISION STAGE *</label>
                  <div className="ev-access-input-group">
                    <select id="decision-stage" className="ev-access-input" required style={{ appearance: 'none', backgroundColor: 'transparent' }}>
                      <option value="">Select stage...</option>
                      <option value="discovery">Discovery</option>
                      <option value="evaluation">Evaluation</option>
                      <option value="proposal">Proposal/Contracting</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="competitive-situation" className="ev-access-label">COMPETITIVE SITUATION *</label>
                  <div className="ev-access-input-group">
                    <select id="competitive-situation" className="ev-access-input" required style={{ appearance: 'none', backgroundColor: 'transparent' }}>
                      <option value="">Select situation...</option>
                      <option value="sole">Sole Source</option>
                      <option value="competitive">Competitive Process</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="decision-date" className="ev-access-label">EXPECTED DECISION DATE *</label>
                  <div className="ev-access-input-group">
                    <input type="date" id="decision-date" className="ev-access-input" required />
                  </div>
                </div>
              </div>

              {/* 05 - WHERE DO YOU NEED FLOWTARIS? */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 className="card-heading" style={{ borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px' }}>05 &mdash; WHERE DO YOU NEED FLOWTARIS?</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    "Architecture",
                    "Platform Engineering",
                    "Integration",
                    "Data Engineering",
                    "AI / Automation",
                    "Application Engineering",
                    "Other"
                  ].map(cap => (
                    <label key={cap} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                      <input type="checkbox" style={{ width: '20px', height: '20px', accentColor: 'var(--color-accent)' }} />
                      <span className="trust-body">{cap}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 06 - ADDITIONAL CONTEXT */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 className="card-heading" style={{ borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px' }}>06 &mdash; ADDITIONAL CONTEXT</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label htmlFor="additional" className="ev-access-label">ANYTHING ELSE WE SHOULD KNOW? (OPTIONAL)</label>
                  <div className="ev-access-input-group">
                    <textarea 
                      id="additional" 
                      className="ev-access-input" 
                      style={{ minHeight: '120px', resize: 'vertical' }} 
                    />
                  </div>
                </div>
              </div>

              {/* Consent & Submit */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', borderTop: '1px solid var(--color-structural)', paddingTop: '48px' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', cursor: 'pointer' }}>
                  <input type="checkbox" required style={{ width: '20px', height: '20px', marginTop: '4px', accentColor: 'var(--color-accent)' }} />
                  <span className="trust-body">
                    I confirm that I am authorized to submit<br />
                    this opportunity on behalf of my organization.
                  </span>
                </label>

                <button 
                  type="submit" 
                  className="judgment-cta" 
                  style={{ alignSelf: 'flex-start', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "REGISTERING..." : "REGISTER OPPORTUNITY \u2192"}
                </button>

                <p className="trust-body" style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                  Your submission is used to evaluate and route<br />
                  the opportunity. <Link href="/evidence/legal" style={{ color: 'var(--color-text-primary)' }}>See our Privacy Policy &rarr;</Link>
                </p>
              </div>

            </form>
          </div>

          {/* Right Column: Before You Start */}
          <div style={{ flex: '0 0 300px', position: 'sticky', top: '120px', height: 'fit-content' }}>
            <div style={{ backgroundColor: 'var(--color-surface)', padding: '32px', border: '1px solid var(--color-structural)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 className="section-label" style={{ margin: 0 }}>BEFORE YOU START</h3>
              <p className="trust-body" style={{ margin: 0 }}>
                Have the following ready:
              </p>
              <ul className="trust-body" style={{ margin: 0, paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Client / company name</li>
                <li>Opportunity summary</li>
                <li>Platform involved</li>
                <li>Your role</li>
                <li>Expected timeline</li>
              </ul>
              
              <div style={{ borderTop: '1px solid var(--color-structural)', paddingTop: '24px', marginTop: '8px' }}>
                <span className="section-label" style={{ display: 'block', marginBottom: '8px' }}>TYPICAL COMPLETION TIME</span>
                <span className="card-heading" style={{ fontSize: '1.25rem' }}>&lt; 5 minutes</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '48px' }}>WHAT HAPPENS NEXT</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '1px solid var(--color-structural)', paddingLeft: '32px', marginLeft: '16px' }}>
          {[
            { num: "01", title: "RECEIVED", desc: "Your opportunity enters the Flowtaris partner queue." },
            { num: "02", title: "REVIEWED", desc: "The relevant team reviews the opportunity and fit." },
            { num: "03", title: "ROUTED", desc: "The opportunity is assigned to the appropriate owner." },
            { num: "04", title: "CONTACT", desc: "We'll follow up using the information provided." }
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

      {/* Related Links */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <span className="section-label" style={{ marginBottom: '32px', display: 'block' }}>NEED MORE INFORMATION?</span>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <Link href="/leverage" className="judgment-cta">EXPLORE LEVERAGE &rarr;</Link>
          <Link href="/evidence" className="judgment-cta">EXPLORE EVIDENCE &rarr;</Link>
          <Link href="/contact" className="judgment-cta">CONTACT FLOWTARIS &rarr;</Link>
        </div>
      </section>
    </>
  );
}
