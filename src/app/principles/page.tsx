"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { decisionLogs } from "../judgment/data";

export default function PrinciplesPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedYear, setSelectedYear] = useState("ALL");

  // Extract and compute dynamic data
  const principles = useMemo(() => {
    return decisionLogs.map(log => {
      const yearMatch = log.date.match(/\d{4}/);
      const year = yearMatch ? yearMatch[0] : "Unknown";
      
      return {
        id: log.slug,
        statement: log.principle.statement.replace(/\n/g, " "),
        category: log.principle.category.toUpperCase(),
        sourceTitle: log.title.replace(/\n/g, " "),
        sourceSlug: log.slug,
        year: year,
        outcome: log.outcome.metrics.map(m => `${m.value} ${m.label}`).join(" \u00B7 ") || log.outcome.timeframe
      };
    });
  }, []);

  const totalCount = principles.length;
  
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(principles.map(p => p.year))).filter(y => y !== "Unknown").sort();
    return uniqueYears;
  }, [principles]);
  
  const yearSpan = years.length > 1 ? parseInt(years[years.length - 1]) - parseInt(years[0]) : (years.length === 1 ? 1 : 0);

  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(principles.map(p => p.category))).sort();
    return ["ALL", ...uniqueCats];
  }, [principles]);

  const filteredPrinciples = principles.filter(p => {
    const matchCat = selectedCategory === "ALL" || p.category === selectedCategory;
    const matchYear = selectedYear === "ALL" || p.year === selectedYear;
    return matchCat && matchYear;
  });

  const featuredPrinciple = principles[0]; // Just picking the first one as featured

  return (
    <>
      {/* Contextual Navigation */}
      <div className="section dl-back-nav" style={{ paddingTop: '24px', paddingBottom: '0' }}>
        <Link href="/judgment" className="view-all" style={{ color: "var(--color-text-secondary)" }}>&larr; JUDGMENT</Link>
        <span className="view-all" style={{ color: "var(--color-text-primary)", marginLeft: '8px' }}>/ PRINCIPLES</span>
      </div>

      {/* Hero */}
      <section className="section ev-hero" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <span className="eyebrow">PRINCIPLES</span>
        <h1 className="section-heading ev-title" style={{ maxWidth: '900px', fontSize: '4rem', margin: '16px 0 32px 0' }}>
          WHAT WE BELIEVE<br />
          AFTER MAKING THE<br />
          DECISION.
        </h1>
        <p className="card-description ev-subtitle" style={{ maxWidth: '600px', marginBottom: '48px' }}>
          Principles extracted from the decisions we&apos;ve actually made.
        </p>

        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', borderTop: '1px solid var(--color-structural)', paddingTop: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="trust-body" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>
              {String(totalCount).padStart(2, '0')} PRINCIPLES
            </span>
          </div>
          {yearSpan > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="trust-body" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>
                {String(yearSpan).padStart(2, '0')} YEAR{yearSpan > 1 ? 'S' : ''}
              </span>
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="trust-body" style={{ fontWeight: 500, letterSpacing: '0.05em', color: 'var(--color-accent)' }}>
              UPDATED AUTOMATICALLY
            </span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px', borderTop: '1px solid var(--color-structural)', borderBottom: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '32px' }}>THESE AREN&apos;T BRAND VALUES.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p className="trust-body" style={{ fontSize: '1.5rem', margin: 0 }}>They&apos;re conclusions.</p>
          <p className="trust-body" style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: 0 }}>
            Each principle came from a decision:<br />
            something we chose,<br />
            something we rejected,<br />
            and something we learned.
          </p>
        </div>
      </section>

      {/* Principle / Decision Relationship */}
      <section className="section" style={{ paddingBottom: '64px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '64px', backgroundColor: 'var(--color-surface)', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <span className="card-heading" style={{ letterSpacing: '0.1em' }}>DECISION</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>&darr;</span>
          <span className="card-heading" style={{ letterSpacing: '0.1em' }}>OUTCOME</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>&darr;</span>
          <span className="card-heading" style={{ letterSpacing: '0.1em', color: 'var(--color-accent)' }}>PRINCIPLE</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>&darr;</span>
          <span className="card-heading" style={{ letterSpacing: '0.1em' }}>FUTURE DECISIONS</span>

          <div style={{ borderTop: '1px solid var(--color-structural)', width: '100%', marginTop: '32px', paddingTop: '32px' }}>
            <p className="trust-body" style={{ fontSize: '1.25rem', margin: 0 }}>A principle isn&apos;t written first.</p>
            <p className="trust-body" style={{ fontSize: '1.25rem', margin: '8px 0 0 0', color: 'var(--color-text-secondary)' }}>It is earned through a decision.</p>
          </div>
        </div>
      </section>

      {/* How the Principles Evolved (Timeline) */}
      {years.length > 0 && (
        <section className="section" style={{ borderTop: '1px solid var(--color-structural)', paddingBottom: '64px' }}>
          <h2 className="section-label" style={{ marginBottom: '48px' }}>HOW THE PRINCIPLES EVOLVED</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', overflowX: 'auto', paddingBottom: '16px' }}>
            <button 
              onClick={() => setSelectedYear("ALL")}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: selectedYear === "ALL" ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}
              className="card-heading"
            >
              ALL YEARS
            </button>
            <span style={{ color: 'var(--color-structural)' }}>&mdash;</span>
            {years.map((year, idx) => (
              <div key={year} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                <button 
                  onClick={() => setSelectedYear(year)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: selectedYear === year ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}
                  className="card-heading"
                >
                  {year}
                </button>
                {idx < years.length - 1 && <span style={{ color: 'var(--color-structural)' }}>&mdash;</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Explore Principles Filter */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)', paddingBottom: '32px' }}>
        <h2 className="section-label" style={{ marginBottom: '32px' }}>EXPLORE PRINCIPLES</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="card-heading"
              style={{
                background: 'none',
                border: 'none',
                padding: '0 0 4px 0',
                cursor: 'pointer',
                color: selectedCategory === cat ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                borderBottom: selectedCategory === cat ? '1px solid var(--color-text-primary)' : '1px solid transparent'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Principle */}
      {featuredPrinciple && selectedCategory === "ALL" && selectedYear === "ALL" && (
        <section className="section" style={{ paddingBottom: '64px' }}>
          <div className="ev-panel" style={{ padding: '64px', backgroundColor: 'var(--color-surface)' }}>
            <span className="section-label" style={{ marginBottom: '24px', display: 'block' }}>FEATURED PRINCIPLE</span>
            <h3 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '24px', maxWidth: '800px' }}>
              {featuredPrinciple.statement}
            </h3>
            <p className="trust-body" style={{ fontSize: '1.25rem', marginBottom: '48px', maxWidth: '600px' }}>
              A decision driven by the outcome:<br />
              <span style={{ color: 'var(--color-text-secondary)' }}>{featuredPrinciple.outcome}</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>ORIGIN</span>
              <span className="card-heading" style={{ color: 'var(--color-text-secondary)' }}>
                {featuredPrinciple.sourceTitle.toUpperCase()} &middot; {featuredPrinciple.year}
              </span>
              <Link href={`/judgment/${featuredPrinciple.sourceSlug}`} className="judgment-cta" style={{ marginTop: '16px' }}>
                READ THE DECISION &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Principle Index */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '64px' }}>PRINCIPLES</h2>
        
        {filteredPrinciples.length === 0 ? (
          <p className="trust-body" style={{ color: 'var(--color-text-secondary)' }}>No principles match this filter.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {categories.filter(c => c !== "ALL" && (selectedCategory === "ALL" || selectedCategory === c)).map(cat => {
              const catPrinciples = filteredPrinciples.filter(p => p.category === cat);
              if (catPrinciples.length === 0) return null;

              return (
                <div key={cat} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ borderBottom: '1px solid var(--color-structural)', paddingBottom: '16px', marginBottom: '32px' }}>
                    <span className="card-heading" style={{ letterSpacing: '0.1em' }}>
                      {cat} &middot; {String(catPrinciples.length).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {catPrinciples.map((p, idx) => (
                      <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <h3 className="section-heading" style={{ fontSize: '2rem', maxWidth: '800px', margin: 0 }}>
                          {p.statement}
                        </h3>
                        
                        {/* The interactive expansion area */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>ORIGIN DECISION</span>
                            <span className="trust-body" style={{ color: 'var(--color-text-secondary)' }}>{p.sourceTitle}</span>
                          </div>
                          
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span className="section-label" style={{ fontSize: '0.75rem', margin: 0 }}>YEAR</span>
                            <span className="trust-body" style={{ color: 'var(--color-text-secondary)' }}>{p.year}</span>
                          </div>

                          <Link href={`/judgment/${p.sourceSlug}`} className="judgment-cta" style={{ marginLeft: 'auto' }}>
                            READ DECISION &rarr;
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Decision Log Connection */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>EVERY PRINCIPLE HAS A HISTORY.</h2>
        <p className="card-description" style={{ maxWidth: '600px', marginBottom: '48px', color: 'var(--color-text-secondary)' }}>
          READ THE DECISIONS<br />
          THAT CREATED THEM.
        </p>
        <Link href="/judgment" className="judgment-cta">EXPLORE JUDGMENT &rarr;</Link>
      </section>

      {/* Evidence Connection */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <h2 className="section-label" style={{ marginBottom: '48px' }}>PRINCIPLES &rarr; DECISIONS &rarr; EVIDENCE</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '64px' }}>
          <span className="card-heading" style={{ fontSize: '1.25rem' }}>What we believe</span>
          <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.5rem' }}>&darr;</span>
          <span className="card-heading" style={{ fontSize: '1.25rem' }}>What we decided</span>
          <span style={{ color: 'var(--color-text-secondary)', fontSize: '1.5rem' }}>&darr;</span>
          <span className="card-heading" style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>How we operate</span>
        </div>
        
        <Link href="/evidence" className="judgment-cta">EXPLORE EVIDENCE &rarr;</Link>
      </section>

      {/* Closing Statement */}
      <section className="section" style={{ borderTop: '1px solid var(--color-structural)' }}>
        <div className="ev-panel" style={{ padding: '64px' }}>
          <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: '32px' }}>
            PRINCIPLES AREN&apos;T PROMISES.
          </h2>
          <p className="trust-body" style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', margin: 0 }}>
            THEY&apos;RE THE PATTERNS WE KEEP<br />
            AFTER THE DECISION IS MADE.
          </p>
        </div>
      </section>
    </>
  );
}
