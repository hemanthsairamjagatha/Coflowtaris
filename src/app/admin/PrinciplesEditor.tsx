"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function PrinciplesEditor() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const { data: res } = await supabase.from("page_content").select("content").eq("id", "principles").single();
    if (res?.content) {
      setData(res.content);
    } else {
      setData({
        hero: { eyebrow: "PRINCIPLES", title: "WHAT WE BELIEVE\\nAFTER MAKING THE\\nDECISION.", subtitle: "Principles extracted from the decisions we've actually made." },
        intro: { title: "THESE AREN'T BRAND VALUES.", subtitle: "They're conclusions.", body: "Each principle came from a decision:\\nsomething we chose,\\nsomething we rejected,\\nand something we learned." },
        relationship: {
          steps: [{ label: "DECISION", color: "default" }, { label: "OUTCOME", color: "default" }, { label: "PRINCIPLE", color: "accent" }, { label: "FUTURE DECISIONS", color: "default" }],
          footer1: "A principle isn't written first.", footer2: "It is earned through a decision."
        },
        evolved: { title: "HOW THE PRINCIPLES EVOLVED" },
        explore: { title: "EXPLORE PRINCIPLES" },
        featured: { label: "FEATURED PRINCIPLE" },
        indexSection: { title: "PRINCIPLES" },
        judgmentConnection: { title: "EVERY PRINCIPLE HAS A HISTORY.", desc: "READ THE DECISIONS\\nTHAT CREATED THEM.", cta: "EXPLORE JUDGMENT →" },
        evidenceConnection: { title: "PRINCIPLES → DECISIONS → EVIDENCE", steps: [{ label: "What we believe", color: "default" }, { label: "What we decided", color: "default" }, { label: "How we operate", color: "accent" }], cta: "EXPLORE EVIDENCE →" },
        closing: { title: "PRINCIPLES AREN'T PROMISES.", desc: "THEY'RE THE PATTERNS WE KEEP\\nAFTER THE DECISION IS MADE." }
      });
    }
    setLoading(false);
  }

  async function save() {
    try {
      const { error } = await supabase.from("page_content").upsert({ id: "principles", content: data });
      if (error) throw error;
      alert("Principles page saved!");
    } catch (e: any) {
      alert("Error: " + e.message);
    }
  }

  const update = (section: string, key: string, value: any) => {
    setData((p: any) => ({ ...p, [section]: { ...p[section], [key]: value } }));
  };
  
  const updateStep = (section: string, idx: number, key: string, value: string) => {
    setData((p: any) => {
      const newSteps = [...p[section].steps];
      newSteps[idx] = { ...newSteps[idx], [key]: value };
      return { ...p, [section]: { ...p[section], steps: newSteps } };
    });
  };

  if (loading || !data) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24 }}>Principles Page Content</h1>
      <button onClick={save} style={{ background: "#2563EB", color: "#fff", padding: "10px 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14, marginBottom: 24 }}>Save All Changes</button>

      {/* Hero */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 32, border: "1px solid #E5E7EB", marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Hero Section</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input value={data.hero.eyebrow} onChange={e => update("hero", "eyebrow", e.target.value)} placeholder="Eyebrow" style={{ padding: 10, border: "1px solid #D1D5DB", borderRadius: 6 }} />
          <textarea value={data.hero.title} onChange={e => update("hero", "title", e.target.value)} placeholder="Title" style={{ padding: 10, border: "1px solid #D1D5DB", borderRadius: 6, height: 80 }} />
          <textarea value={data.hero.subtitle} onChange={e => update("hero", "subtitle", e.target.value)} placeholder="Subtitle" style={{ padding: 10, border: "1px solid #D1D5DB", borderRadius: 6, height: 80 }} />
        </div>
      </div>

      {/* Intro */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 32, border: "1px solid #E5E7EB", marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Introduction</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input value={data.intro.title} onChange={e => update("intro", "title", e.target.value)} placeholder="Title" style={{ padding: 10, border: "1px solid #D1D5DB", borderRadius: 6 }} />
          <input value={data.intro.subtitle} onChange={e => update("intro", "subtitle", e.target.value)} placeholder="Subtitle" style={{ padding: 10, border: "1px solid #D1D5DB", borderRadius: 6 }} />
          <textarea value={data.intro.body} onChange={e => update("intro", "body", e.target.value)} placeholder="Body" style={{ padding: 10, border: "1px solid #D1D5DB", borderRadius: 6, height: 80 }} />
        </div>
      </div>

      {/* Relationship Flow */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 32, border: "1px solid #E5E7EB", marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Principle / Decision Flow</h2>
        {(data.relationship.steps || []).map((step: any, i: number) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: 8, marginBottom: 8 }}>
            <input value={step.label} onChange={e => updateStep("relationship", i, "label", e.target.value)} placeholder="Step Label" style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6 }} />
            <select value={step.color} onChange={e => updateStep("relationship", i, "color", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6 }}>
              <option value="default">Default</option>
              <option value="accent">Accent</option>
            </select>
          </div>
        ))}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
          <input value={data.relationship.footer1} onChange={e => update("relationship", "footer1", e.target.value)} placeholder="Footer Line 1" style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6 }} />
          <input value={data.relationship.footer2} onChange={e => update("relationship", "footer2", e.target.value)} placeholder="Footer Line 2" style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6 }} />
        </div>
      </div>

      {/* Labels */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 32, border: "1px solid #E5E7EB", marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Section Labels & Titles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={{ display: "block", marginBottom: 4, fontSize: 12, color: "#6B7280" }}>Evolved Section Title</label>
            <input value={data.evolved.title} onChange={e => update("evolved", "title", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%" }} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: 4, fontSize: 12, color: "#6B7280" }}>Explore Section Title</label>
            <input value={data.explore.title} onChange={e => update("explore", "title", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%" }} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: 4, fontSize: 12, color: "#6B7280" }}>Featured Principle Label</label>
            <input value={data.featured.label} onChange={e => update("featured", "label", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%" }} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: 4, fontSize: 12, color: "#6B7280" }}>Index Section Title</label>
            <input value={data.indexSection.title} onChange={e => update("indexSection", "title", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%" }} />
          </div>
        </div>
      </div>

      {/* Connections & Closing */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 32, border: "1px solid #E5E7EB", marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Connections & Closing</h2>
        
        <h3 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>Judgment Connection</h3>
        <input value={data.judgmentConnection.title} onChange={e => update("judgmentConnection", "title", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%", marginBottom: 4 }} />
        <textarea value={data.judgmentConnection.desc} onChange={e => update("judgmentConnection", "desc", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%", marginBottom: 4, height: 60 }} />
        <input value={data.judgmentConnection.cta} onChange={e => update("judgmentConnection", "cta", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%", marginBottom: 16 }} />

        <h3 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>Evidence Connection</h3>
        <input value={data.evidenceConnection.title} onChange={e => update("evidenceConnection", "title", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%", marginBottom: 8 }} />
        {(data.evidenceConnection.steps || []).map((step: any, i: number) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: 8, marginBottom: 8 }}>
            <input value={step.label} onChange={e => updateStep("evidenceConnection", i, "label", e.target.value)} placeholder="Step Label" style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6 }} />
            <select value={step.color} onChange={e => updateStep("evidenceConnection", i, "color", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6 }}>
              <option value="default">Default</option>
              <option value="accent">Accent</option>
            </select>
          </div>
        ))}
        <input value={data.evidenceConnection.cta} onChange={e => update("evidenceConnection", "cta", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%", marginTop: 8, marginBottom: 16 }} />

        <h3 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>Closing Statement</h3>
        <input value={data.closing.title} onChange={e => update("closing", "title", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%", marginBottom: 4 }} />
        <textarea value={data.closing.desc} onChange={e => update("closing", "desc", e.target.value)} style={{ padding: 8, border: "1px solid #D1D5DB", borderRadius: 6, width: "100%", height: 60 }} />
      </div>

    </div>
  );
}
