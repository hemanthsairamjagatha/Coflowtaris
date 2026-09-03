"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function ResourcesEditor() {
  const [pdfs, setPdfs] = useState<any[]>([]);
  const [newPdfTitle, setNewPdfTitle] = useState("");
  const [newPdfUrl, setNewPdfUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    if (!supabase) { setLoading(false); return; }
    const { data } = await supabase.from("pdf_documents").select("*").order("created_at", { ascending: false });
    if (data) setPdfs(data);
    setLoading(false);
  }

  async function addPdf() {
    if (!supabase) return;
    if (!newPdfTitle || !newPdfUrl) { alert("Please enter title and URL for the PDF."); return; }
    const { error } = await supabase.from("pdf_documents").insert({ title: newPdfTitle, url: newPdfUrl });
    if (error) alert("Error adding PDF: " + error.message);
    else { setNewPdfTitle(""); setNewPdfUrl(""); fetchData(); }
  }

  async function deletePdf(id: string) {
    if (!supabase) return;
    const { error } = await supabase.from("pdf_documents").delete().eq("id", id);
    if (error) alert("Error deleting PDF: " + error.message);
    else fetchData();
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24 }}>PDF Resources</h1>
      
      <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB", marginBottom: 32 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Add New PDF</h2>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Document Title</label>
            <input type="text" placeholder="e.g. Q3 Architecture Report" value={newPdfTitle} onChange={(e) => setNewPdfTitle(e.target.value)} style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }} />
          </div>
          <div style={{ flex: 2 }}>
            <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>PDF URL</label>
            <input type="url" placeholder="https://..." value={newPdfUrl} onChange={(e) => setNewPdfUrl(e.target.value)} style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }} />
          </div>
          <button onClick={addPdf} style={{ height: 42, background: "#10B981", color: "#fff", padding: "0 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14, whiteSpace: "nowrap" }}>Add Document</button>
        </div>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB" }}>
        <div style={{ padding: "16px 24px", borderBottom: "1px solid #E5E7EB", background: "#F9FAFB" }}>
          <h2 style={{ fontSize: 16, fontWeight: 600 }}>Manage Existing Documents</h2>
        </div>
        
        {pdfs.length === 0 ? (
          <div style={{ padding: 40, textAlign: "center", color: "#6B7280" }}>No PDF documents have been added yet.</div>
        ) : (
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {pdfs.map((pdf, idx) => (
              <li key={pdf.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: idx < pdfs.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                <div>
                  <div style={{ fontWeight: 500, color: "#111827", marginBottom: 4 }}>{pdf.title}</div>
                  <a href={pdf.url} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#2563EB", textDecoration: "none" }}>{pdf.url}</a>
                </div>
                <button onClick={() => deletePdf(pdf.id)} style={{ background: "#FEE2E2", color: "#B91C1C", padding: "6px 12px", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 13, fontWeight: 500 }}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
