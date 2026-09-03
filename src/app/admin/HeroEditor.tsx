"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function HeroEditor() {
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    if (!supabase) { setLoading(false); return; }
    const { data } = await supabase.from("page_content").select("content").eq("id", "home").single();
    if (data?.content) {
      setHeroTitle(data.content.heroTitle || "");
      setHeroSubtitle(data.content.heroSubtitle || "");
      setHeroImage(data.content.heroImage || "");
    } else {
      setHeroTitle("WE DON'T JUST\\nDELIVER SYSTEMS.\\nWE MAKE THE\\nDECISIONS BEHIND THEM\\nVISIBLE.");
      setHeroSubtitle("Engineering complex systems for companies where reliability, judgment, and execution matter.");
      setHeroImage("/hero_image.png");
    }
    setLoading(false);
  }

  async function save() {
    if (!supabase) return;
    const { error } = await supabase.from("page_content").upsert({ id: "home", content: { heroTitle, heroSubtitle, heroImage } });
    if (error) alert("Error saving content: " + error.message);
    else alert("Hero content saved successfully!");
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) setHeroImage(data.url);
      else alert(data.error || "Failed to upload image");
    } catch { alert("Error uploading image"); }
    finally { setIsUploadingImage(false); e.target.value = ""; }
  }

  async function handleRemoveImage() {
    if (heroImage && heroImage.startsWith("/uploads/")) {
      try { await fetch("/api/upload", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url: heroImage }) }); }
      catch (err) { console.error("Error deleting image file", err); }
    }
    setHeroImage("");
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 800 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24 }}>Homepage & Hero</h1>
      
      <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB" }}>
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Hero Title (Use \n for new lines)</label>
          <textarea 
            value={heroTitle}
            onChange={(e) => setHeroTitle(e.target.value)}
            style={{ width: "100%", height: 120, background: "#F9FAFB", border: "1px solid #D1D5DB", padding: 16, borderRadius: 8, fontSize: 14, fontFamily: "inherit", resize: "vertical" }}
          />
          <p style={{ fontSize: 12, color: "#6B7280", marginTop: 6 }}>This appears as the main large headline on the home page.</p>
        </div>
        
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Hero Subtitle</label>
          <textarea 
            value={heroSubtitle}
            onChange={(e) => setHeroSubtitle(e.target.value)}
            style={{ width: "100%", height: 80, background: "#F9FAFB", border: "1px solid #D1D5DB", padding: 16, borderRadius: 8, fontSize: 14, fontFamily: "inherit", resize: "vertical" }}
          />
        </div>
        
        <div style={{ marginBottom: 32 }}>
          <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Hero Image</label>
          
          {heroImage ? (
            <div style={{ marginBottom: 16 }}>
              <img src={heroImage} alt="Hero Preview" style={{ width: "100%", maxHeight: 200, objectFit: "cover", borderRadius: 8, border: "1px solid #E5E7EB", marginBottom: 12 }} />
              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={handleRemoveImage} style={{ background: "#FEE2E2", color: "#B91C1C", padding: "8px 16px", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 500 }}>Remove Image</button>
                <label style={{ background: "#F3F4F6", color: "#374151", padding: "8px 16px", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 500, display: "inline-block" }}>
                  {isUploadingImage ? "Uploading..." : "Change Image"}
                  <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} disabled={isUploadingImage} />
                </label>
              </div>
            </div>
          ) : (
            <div style={{ padding: 24, border: "2px dashed #D1D5DB", borderRadius: 8, textAlign: "center" }}>
              <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 12 }}>No image selected</p>
              <label style={{ background: "#2563EB", color: "#fff", padding: "8px 16px", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 500, display: "inline-block" }}>
                {isUploadingImage ? "Uploading..." : "Upload Image"}
                <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} disabled={isUploadingImage} />
              </label>
            </div>
          )}
        </div>
        
        <button 
          onClick={save}
          style={{ background: "#2563EB", color: "#fff", padding: "10px 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14 }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
