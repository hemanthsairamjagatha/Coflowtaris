import { notFound } from "next/navigation";
import { getDecisionBySlug, getAllSlugs } from "../data";
import { supabase } from "@/lib/supabase";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function DecisionLogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let decision: any;
  try {
    const { data } = await supabase.from("page_content").select("content").eq("id", `judgment_slug_${slug}`).single();
    if (data?.content) {
      decision = data.content;
    } else {
      decision = getDecisionBySlug(slug);
    }
  } catch (e) {
    decision = getDecisionBySlug(slug);
  }

  if (!decision) {
    notFound();
  }

  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav">
        <a href="/judgment/" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; ALL DECISIONS</a>
      </div>

      {/* Decision Header */}
      <article>
        <header className="section dl-header">
          <span className="eyebrow">{decision.category}</span>
          <div className="judgment-meta">
            <span className="judgment-tags">{decision.tags.join(" \u00B7 ")}</span>
          </div>
          <h1 className="judgment-title section-heading" style={{ maxWidth: '900px', whiteSpace: 'pre-line' }}>{decision.title}</h1>
          <p className="judgment-desc card-description">{decision.excerpt}</p>
        </header>

        {/* Metadata Rail + Article Body */}
        <div className="section dl-body-section">
          <div className="dl-body-grid">

            {/* Metadata Rail */}
            <aside className="dl-meta-rail">
              <div className="dl-meta-block">
                <span className="dl-meta-label">DATE</span>
                <span className="dl-meta-value">{decision.date}</span>
              </div>
              <div className="dl-meta-block">
                <span className="dl-meta-label">AUTHOR</span>
                <span className="dl-meta-value">{decision.authorFull}</span>
              </div>
              <div className="dl-meta-block">
                <span className="dl-meta-label">ROLE</span>
                <span className="dl-meta-value">{decision.role}</span>
              </div>
              <div className="dl-meta-block">
                <span className="dl-meta-label">READ</span>
                <span className="dl-meta-value">{decision.readTime}</span>
              </div>
            </aside>

            {/* Article Content */}
            <div className="dl-article">

              {/* Context */}
              <section className="dl-section">
                <h2 className="section-label">CONTEXT</h2>
                {decision.context.map((paragraph: string, i: number) => (
                  <p key={i} className="trust-body card-description" style={{ lineHeight: 1.6, marginBottom: '16px', maxWidth: '640px' }}>{paragraph}</p>
                ))}
              </section>

              {/* The Decision */}
              <section className="dl-decision-block">
                <h2 className="section-label" style={{ color: "var(--color-text-secondary)" }}>THE DECISION</h2>
                <p className="dl-decision-main">{decision.decision.main}</p>
                <p className="dl-decision-supporting">{decision.decision.supporting}</p>
              </section>

              {/* Alternatives Rejected */}
              <section className="dl-section">
                <h2 className="section-label">ALTERNATIVES REJECTED</h2>
                <div className="dl-alternatives">
                  {decision.alternativesRejected.map((alt: any) => (
                    <div key={alt.number} className="dl-alternative">
                      <span className="dl-alt-number">{alt.number}</span>
                      <h3 className="dl-alt-title">{alt.title}</h3>
                      <p className="dl-alt-reason">{alt.reason}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Outcome */}
              <section className="dl-section">
                <h2 className="section-label">OUTCOME</h2>
                <p className="trust-body card-description" style={{ marginBottom: "32px", lineHeight: 1.6, maxWidth: '640px' }}>{decision.outcome.timeframe}</p>
                <div className="dl-metrics">
                  {decision.outcome.metrics.map((metric: any, i: number) => (
                    <div key={i} className="dl-metric">
                      <span className="dl-metric-value">{metric.value}</span>
                      <span className="dl-metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
                {decision.outcome.caveats.map((caveat: string, i: number) => (
                  <p key={i} className="trust-body card-description" style={{ lineHeight: 1.6, marginBottom: '16px', maxWidth: '640px' }}>{caveat}</p>
                ))}
              </section>
            </div>
          </div>
        </div>

        {/* Principle */}
        <section className="dl-principle-section">
          <div className="dl-principle-inner">
            <h2 className="section-label" style={{ color: "var(--color-bg)", opacity: 0.6 }}>PRINCIPLE</h2>
            <p className="dl-principle-statement">{decision.principle.statement}</p>
            <span className="dl-principle-category">{decision.principle.category}</span>
            <a href="/principles" className="dl-principle-link">&larr; EXPLORE RELATED PRINCIPLES</a>
          </div>
        </section>

        {/* Author Note */}
        <section className="section dl-section">
          <div className="dl-author-note">
            <span className="section-label">WRITTEN BY</span>
            <h3 className="dl-author-name">{decision.author}</h3>
            <span className="dl-author-role">{decision.role}</span>
            <blockquote className="judgment-principle">{decision.authorNote}</blockquote>
            <a href={`/judgment/?author=${decision.author}`} className="judgment-cta">VIEW AUTHOR&apos;S DECISIONS &rarr;</a>
          </div>
        </section>
      </article>

      {/* Related Decisions */}
      <section className="section dl-section">
        <h2 className="section-label">RELATED DECISIONS</h2>
        <div className="trust-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {decision.relatedDecisions.map((related: any, i: number) => (
            <div key={i} className="trust-card" style={{ padding: '32px', gap: '12px' }}>
              <h3 className="card-heading" style={{ textTransform: 'uppercase', marginBottom: 0 }}>{related.title}</h3>
              <span className="judgment-tags" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>{related.tags}</span>
              <a href={related.href} className="judgment-cta" style={{ alignSelf: 'flex-start' }}>READ &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      {/* Previous / Next */}
      <section className="section dl-prev-next">
        <div className="dl-prev-next-inner">
          {decision.previousDecision ? (
            <a href={decision.previousDecision.href} className="dl-nav-link dl-nav-prev">
              <span className="dl-nav-direction">&larr; PREVIOUS DECISION</span>
              <span className="dl-nav-title">{decision.previousDecision.title}</span>
            </a>
          ) : <div />}
          {decision.nextDecision ? (
            <a href={decision.nextDecision.href} className="dl-nav-link dl-nav-next">
              <span className="dl-nav-direction">NEXT DECISION &rarr;</span>
              <span className="dl-nav-title">{decision.nextDecision.title}</span>
            </a>
          ) : <div />}
        </div>
      </section>

      {/* Contact Bridge */}
      <section className="section final-cta" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 className="cta-headline section-heading">HAVE A SIMILAR DECISION IN FRONT OF YOU?</h2>
        <p className="cta-subheadline card-description">Talk to Flowtaris.</p>
        <a href="/contact" className="judgment-cta">CONTACT &rarr;</a>
      </section>
    </>
  );
}
