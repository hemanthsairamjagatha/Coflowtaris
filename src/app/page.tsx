export default function Home() {
  return (
    <>
      {/* 5. HERO */}
      <section className="section hero">
        <span className="eyebrow">FLOWTARIS</span>
        <h1 className="hero-headline section-heading">
          WE DON&apos;T JUST<br />
          DELIVER SYSTEMS.<br />
          WE MAKE THE<br />
          DECISIONS BEHIND THEM<br />
          VISIBLE.
        </h1>
        <p className="hero-supporting card-description">
          Engineering complex systems for companies where reliability, judgment, and execution matter.
        </p>
        <a href="#judgment" className="cta-button primary">EXPLORE OUR JUDGMENT &rarr;</a>
      </section>

      {/* 6. THREE SYSTEMS OF TRUST */}
      <section className="section trust-systems" id="trust">
        <h2 className="section-title section-heading">THREE SYSTEMS OF TRUST</h2>
        <div className="trust-grid">
          <div className="trust-card">
            <h3 className="card-heading">JUDGMENT</h3>
            <p className="trust-desc card-description">How we think.</p>
            <ul className="trust-list">
              <li>Decision logs</li>
              <li>Principles</li>
            </ul>
            <a href="#judgment" className="trust-cta">EXPLORE &rarr;</a>
          </div>
          <div className="trust-card">
            <h3 className="card-heading">EVIDENCE</h3>
            <p className="trust-desc card-description">How we operate.</p>
            <ul className="trust-list">
              <li>Governance</li>
              <li>Security</li>
            </ul>
            <a href="#evidence" className="trust-cta">EXPLORE &rarr;</a>
          </div>
          <div className="trust-card">
            <h3 className="card-heading">LEVERAGE</h3>
            <p className="trust-desc card-description">How we scale.</p>
            <ul className="trust-list">
              <li>Partnerships</li>
              <li>Alliances</li>
            </ul>
            <a href="#leverage" className="trust-cta">EXPLORE &rarr;</a>
          </div>
        </div>
      </section>

      {/* 7. LATEST JUDGMENT */}
      <section className="section latest-judgment" id="judgment">
        <div className="section-header">
          <h2 className="section-title section-heading">LATEST JUDGMENT</h2>
          <a href="/judgment" className="view-all">VIEW ALL &rarr;</a>
        </div>
        <hr className="divider" />
        
        <div className="featured-judgment">
          <div className="judgment-meta">
            <span className="judgment-date">MAR 15, 2026</span>
            <span className="judgment-tags">CEO &middot; STRATEGY &middot; PRICING</span>
          </div>
          <h3 className="judgment-title section-heading">
            WHY WE MOVED FROM<br />
            T&M TO OUTCOME-BASED PRICING
          </h3>
          <p className="judgment-desc card-description">
            Clients wanted certainty. We wanted alignment. Here&apos;s the decision we made &mdash; and what happened next.
          </p>
          <div className="judgment-principle">
            &quot;Price for the outcome, not the hour.&quot;
          </div>
          <a href="/judgment/pricing" className="judgment-cta">READ DECISION &rarr;</a>
        </div>
      </section>

      {/* 8. FEATURED DECISION LOGS */}
      <section className="section decision-logs">
        <div className="logs-grid">
          <div className="log-entry">
            <div className="judgment-meta">
              <span className="judgment-date">FEB 03, 2026</span>
              <span className="judgment-tags">CTO &middot; TECH &middot; CRISIS</span>
            </div>
            <h4 className="log-title card-heading">THE NETSUITE API CRISIS</h4>
            <a href="/judgment/netsuite" className="log-cta">READ &rarr;</a>
          </div>
          <div className="log-entry">
            <div className="judgment-meta">
              <span className="judgment-date">JAN 10, 2026</span>
              <span className="judgment-tags">COO &middot; HIRING &middot; CULTURE</span>
            </div>
            <h4 className="log-title card-heading">WHY WE HIRED A PRINCIPAL<br />BEFORE WE NEEDED ONE</h4>
            <a href="/judgment/hiring" className="log-cta">READ &rarr;</a>
          </div>
        </div>
      </section>

      {/* 9. WHAT WE BELIEVE */}
      <section className="section what-we-believe" id="principles">
        <span className="section-label">WHAT WE BELIEVE</span>
        <blockquote className="belief-statement section-heading">
          &quot;Revenue that costs your culture<br />
          is expensive revenue.&quot;
        </blockquote>
        <div className="belief-attribution">&mdash; Decision Log</div>
        <a href="/principles" className="belief-cta">EXPLORE ALL PRINCIPLES &rarr;</a>
      </section>

      {/* 10. TRUST STATEMENT */}
      <section className="section trust-statement">
        <h2 className="trust-headline section-heading">WE WRITE DOWN THE DECISIONS.</h2>
        <p className="trust-subheadline card-description">
          Not because transparency sounds good.<br />
          Because decisions are where the work actually happens.
        </p>
        <p className="trust-body card-description">
          Every Decision Log records the context,<br />
          the choice, the alternatives rejected,<br />
          and the outcome.
        </p>
      </section>

      {/* 11. FINAL CTA */}
      <section className="section final-cta" id="contact">
        <h2 className="cta-headline section-heading">HAVE A COMPLEX PROBLEM?</h2>
        <p className="cta-subheadline card-description">Start with how we think.</p>
        <div className="cta-buttons">
          <a href="#judgment" className="cta-button primary">READ OUR JUDGMENT &rarr;</a>
          <a href="/contact" className="cta-button secondary">TALK TO FLOWTARIS &rarr;</a>
        </div>
      </section>
    </>
  );
}
