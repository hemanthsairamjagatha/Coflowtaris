"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import LeverageEditor from "./LeverageEditor";
import { 
  LayoutDashboard, 
  Type, 
  ShieldCheck, 
  FileText, 
  Scale, 
  MessageSquare, 
  LogOut,
  ArrowLeft,
  Link as LinkIcon,
  Users,
  Grid,
  FileBox,
  User,
  Briefcase
} from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState("dashboard");

  // Hero Content State
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  
  // PDF Content State
  const [pdfs, setPdfs] = useState<any[]>([]);
  const [newPdfTitle, setNewPdfTitle] = useState("");
  const [newPdfUrl, setNewPdfUrl] = useState("");

  // Workday Specialists State
  const [specialists, setSpecialists] = useState<any[]>([]);
  const [newSpecialist, setNewSpecialist] = useState({ name: "", role: "", specialty: "", certs: "", link: "" });

  // Systems of Trust State
  const [trustTitle, setTrustTitle] = useState("");
  const [trustSystems, setTrustSystems] = useState<any[]>([]);
  const [newSystem, setNewSystem] = useState({ heading: "", description: "", items: "", ctaText: "", ctaLink: "" });
  const [editingSystemId, setEditingSystemId] = useState<string | null>(null);

  // Judgment State
  const [judgmentTitle, setJudgmentTitle] = useState("");
  const [judgmentSubtitle, setJudgmentSubtitle] = useState("");
  const [judgmentDescription, setJudgmentDescription] = useState("");
  const [decisionLogs, setDecisionLogs] = useState<any[]>([]);
  const [newLog, setNewLog] = useState({ date: "", author: "", tags: "", title: "", excerpt: "", principle: "", href: "" });
  const [editingLogId, setEditingLogId] = useState<string | null>(null);
  
  // Judgment Slugs State
  const [selectedSlug, setSelectedSlug] = useState("");
  const [slugData, setSlugData] = useState<any>(null);
  const [isSlugLoading, setIsSlugLoading] = useState(false);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchData();
      } else {
        setLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchData();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoginError(error.message);
    }
    setLoginLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  async function fetchData() {
    setLoading(true);
    
    // Fetch home page content
    const { data: contentData } = await supabase
      .from("page_content")
      .select("content")
      .eq("id", "home")
      .single();
      
    if (contentData?.content) {
      setHeroTitle(contentData.content.heroTitle || "");
      setHeroSubtitle(contentData.content.heroSubtitle || "");
      setHeroImage(contentData.content.heroImage || "");
    } else {
      setHeroTitle("WE DON'T JUST\\nDELIVER SYSTEMS.\\nWE MAKE THE\\nDECISIONS BEHIND THEM\\nVISIBLE.");
      setHeroSubtitle("Engineering complex systems for companies where reliability, judgment, and execution matter.");
      setHeroImage("/hero_image.png");
    }
    
    // Fetch PDFs
    const { data: pdfData } = await supabase
      .from("pdf_documents")
      .select("*")
      .order("created_at", { ascending: false });
      
    if (pdfData) {
      setPdfs(pdfData);
    }

    // Fetch Workday Specialists
    const { data: workdayData } = await supabase
      .from("page_content")
      .select("content")
      .eq("id", "workday_specialists")
      .single();
      
    if (workdayData?.content?.specialists) {
      setSpecialists(workdayData.content.specialists);
    } else {
      setSpecialists([]);
    }

    // Fetch Systems of Trust Content
    const { data: trustData } = await supabase
      .from("page_content")
      .select("content")
      .eq("id", "systems_of_trust")
      .single();
      
    if (trustData?.content) {
      setTrustTitle(trustData.content.title || "");
      setTrustSystems(trustData.content.systems || []);
    } else {
      setTrustTitle("THREE SYSTEMS OF TRUST");
      setTrustSystems([
        { id: "1", heading: "JUDGMENT", description: "How we think.", items: ["Decision logs", "Principles"], ctaText: "EXPLORE \u2192", ctaLink: "#judgment" },
        { id: "2", heading: "EVIDENCE", description: "How we operate.", items: ["Governance", "Security"], ctaText: "EXPLORE \u2192", ctaLink: "#evidence" },
        { id: "3", heading: "LEVERAGE", description: "How we scale.", items: ["Partnerships", "Alliances"], ctaText: "EXPLORE \u2192", ctaLink: "#leverage" }
      ]);
    }

    // Fetch Judgment Content
    const { data: judgmentData } = await supabase
      .from("page_content")
      .select("content")
      .eq("id", "judgment")
      .single();
      
    if (judgmentData?.content) {
      setJudgmentTitle(judgmentData.content.title || "");
      setJudgmentSubtitle(judgmentData.content.subtitle || "");
      setJudgmentDescription(judgmentData.content.description || "");
      setDecisionLogs(judgmentData.content.logs || []);
    } else {
      setJudgmentTitle("HOW WE THINK.");
      setJudgmentSubtitle("Written by the people making the decisions.");
      setJudgmentDescription("Decisions made under pressure.\\nWhat we chose. What we rejected.\\nWhat happened next.");
      setDecisionLogs([]);
    }
    
    setLoading(false);
  }

  async function saveHeroContent() {
    const newContent = {
      heroTitle,
      heroSubtitle,
      heroImage
    };

    const { error } = await supabase
      .from("page_content")
      .upsert({ id: "home", content: newContent });
      
    if (error) {
      alert("Error saving content: " + error.message);
    } else {
      alert("Hero content saved successfully!");
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    setIsUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      
      const data = await res.json();
      if (data.url) {
        setHeroImage(data.url);
      } else {
        alert(data.error || "Failed to upload image");
      }
    } catch (err) {
      alert("Error uploading image");
    } finally {
      setIsUploadingImage(false);
      e.target.value = "";
    }
  }

  async function handleRemoveImage() {
    if (heroImage && heroImage.startsWith("/uploads/")) {
      try {
        await fetch("/api/upload", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: heroImage })
        });
      } catch (err) {
        console.error("Error deleting image file", err);
      }
    }
    setHeroImage("");
  }

  async function addPdf() {
    if (!newPdfTitle || !newPdfUrl) {
      alert("Please enter title and URL for the PDF.");
      return;
    }
    
    const { error } = await supabase
      .from("pdf_documents")
      .insert({ title: newPdfTitle, url: newPdfUrl });
      
    if (error) {
      alert("Error adding PDF: " + error.message);
    } else {
      setNewPdfTitle("");
      setNewPdfUrl("");
      fetchData();
    }
  }

  async function deletePdf(id: string) {
    const { error } = await supabase
      .from("pdf_documents")
      .delete()
      .eq("id", id);
      
    if (error) {
      alert("Error deleting PDF: " + error.message);
    } else {
      fetchData();
    }
  }

  async function saveSpecialists(updatedSpecialists: any[]) {
    const { error } = await supabase
      .from("page_content")
      .upsert({ id: "workday_specialists", content: { specialists: updatedSpecialists } });
      
    if (error) {
      alert("Error saving specialists: " + error.message);
    } else {
      setSpecialists(updatedSpecialists);
    }
  }

  function addSpecialist() {
    if (!newSpecialist.name || !newSpecialist.role || !newSpecialist.specialty) {
      alert("Please enter at least name, role, and specialty.");
      return;
    }
    const updated = [...specialists, { ...newSpecialist, id: Date.now().toString() }];
    saveSpecialists(updated);
    setNewSpecialist({ name: "", role: "", specialty: "", certs: "", link: "" });
  }

  function deleteSpecialist(id: string) {
    const updated = specialists.filter(s => s.id !== id);
    saveSpecialists(updated);
  }

  async function saveTrustContent() {
    const newContent = {
      title: trustTitle,
      systems: trustSystems
    };

    const { error } = await supabase
      .from("page_content")
      .upsert({ id: "systems_of_trust", content: newContent });
      
    if (error) {
      alert("Error saving systems of trust content: " + error.message);
    } else {
      alert("Systems of Trust content saved successfully!");
    }
  }

  async function saveTrustSystems(updatedSystems: any[]) {
    const newContent = {
      title: trustTitle,
      systems: updatedSystems
    };

    const { error } = await supabase
      .from("page_content")
      .upsert({ id: "systems_of_trust", content: newContent });
      
    if (error) {
      alert("Error saving systems: " + error.message);
    } else {
      setTrustSystems(updatedSystems);
    }
  }

  function addTrustSystem() {
    if (!newSystem.heading || !newSystem.description) {
      alert("Please enter at least a heading and description.");
      return;
    }
    const itemsArray = newSystem.items.split(",").map(t => t.trim()).filter(Boolean);
    
    let updated;
    if (editingSystemId) {
      updated = trustSystems.map(s => s.id === editingSystemId ? { ...newSystem, items: itemsArray, id: editingSystemId } : s);
      setEditingSystemId(null);
    } else {
      updated = [...trustSystems, { ...newSystem, items: itemsArray, id: Date.now().toString() }];
    }
    
    saveTrustSystems(updated);
    setNewSystem({ heading: "", description: "", items: "", ctaText: "", ctaLink: "" });
  }

  function editTrustSystem(system: any) {
    setNewSystem({
      heading: system.heading || "",
      description: system.description || "",
      items: Array.isArray(system.items) ? system.items.join(", ") : (system.items || ""),
      ctaText: system.ctaText || "",
      ctaLink: system.ctaLink || ""
    });
    setEditingSystemId(system.id);
  }

  function deleteTrustSystem(id: string) {
    const updated = trustSystems.filter(s => s.id !== id);
    saveTrustSystems(updated);
  }

  async function saveJudgmentContent() {
    const newContent = {
      title: judgmentTitle,
      subtitle: judgmentSubtitle,
      description: judgmentDescription,
      logs: decisionLogs
    };

    const { error } = await supabase
      .from("page_content")
      .upsert({ id: "judgment", content: newContent });
      
    if (error) {
      alert("Error saving judgment content: " + error.message);
    } else {
      alert("Judgment content saved successfully!");
    }
  }

  async function saveDecisionLogs(updatedLogs: any[]) {
    const newContent = {
      title: judgmentTitle,
      subtitle: judgmentSubtitle,
      description: judgmentDescription,
      logs: updatedLogs
    };

    const { error } = await supabase
      .from("page_content")
      .upsert({ id: "judgment", content: newContent });
      
    if (error) {
      alert("Error saving logs: " + error.message);
    } else {
      setDecisionLogs(updatedLogs);
    }
  }

  function addDecisionLog() {
    if (!newLog.title || !newLog.excerpt) {
      alert("Please enter at least a title and an excerpt.");
      return;
    }
    const tagsArray = newLog.tags.split(",").map(t => t.trim()).filter(Boolean);
    
    let updated;
    if (editingLogId) {
      updated = decisionLogs.map(s => s.id === editingLogId ? { ...newLog, tags: tagsArray, id: editingLogId } : s);
      setEditingLogId(null);
    } else {
      updated = [...decisionLogs, { ...newLog, tags: tagsArray, id: Date.now().toString() }];
    }
    saveDecisionLogs(updated);
    setNewLog({ date: "", author: "", tags: "", title: "", excerpt: "", principle: "", href: "" });
  }

  function editDecisionLog(log: any) {
    setNewLog({
      date: log.date || "",
      author: log.author || "",
      tags: Array.isArray(log.tags) ? log.tags.join(", ") : (log.tags || ""),
      title: log.title || "",
      excerpt: log.excerpt || "",
      principle: log.principle || "",
      href: log.href || ""
    });
    setEditingLogId(log.id);
  }

  function deleteDecisionLog(id: string) {
    const updated = decisionLogs.filter(s => s.id !== id);
    saveDecisionLogs(updated);
  }

  async function loadSlugContent(slug: string) {
    if (!slug) {
      setSelectedSlug("");
      setSlugData(null);
      return;
    }
    setSelectedSlug(slug);
    setIsSlugLoading(true);
    const { data } = await supabase.from("page_content").select("content").eq("id", `judgment_slug_${slug}`).single();
    if (data?.content) {
      setSlugData(data.content);
    } else {
      setSlugData({
        category: "DECISION LOG",
        tags: ["TAG1", "TAG2"],
        title: "TITLE",
        excerpt: "EXCERPT",
        author: "AUTHOR",
        authorFull: "Full Name",
        role: "Role",
        date: "DATE",
        readTime: "5 MIN READ",
        context: ["Paragraph 1", "Paragraph 2"],
        decision: { main: "Main decision", supporting: "Supporting details" },
        alternativesRejected: [
          { number: "01", title: "Alt 1", reason: "Reason 1" }
        ],
        outcome: {
          timeframe: "Timeframe:",
          metrics: [{ value: "100", label: "Metric" }],
          caveats: ["Caveat 1"]
        },
        principle: { statement: "PRINCIPLE", category: "Category" },
        authorNote: "Note",
        relatedDecisions: [],
        previousDecision: null,
        nextDecision: null
      });
    }
    setIsSlugLoading(false);
  }

  const updateSlugData = (key: string, value: any) => {
    setSlugData((prev: any) => ({ ...prev, [key]: value }));
  };

  const updateNestedSlugData = (parent: string, key: string, value: any) => {
    setSlugData((prev: any) => ({
      ...prev,
      [parent]: { ...prev[parent], [key]: value }
    }));
  };

  const updateArrayField = (key: string, value: string) => {
    setSlugData((prev: any) => ({ ...prev, [key]: value.split("\n") }));
  };

  const updateAlternative = (index: number, key: string, value: string) => {
    setSlugData((prev: any) => {
      const newAlts = [...(prev.alternativesRejected || [])];
      if (!newAlts[index]) newAlts[index] = { number: "", title: "", reason: "" };
      newAlts[index] = { ...newAlts[index], [key]: value };
      return { ...prev, alternativesRejected: newAlts };
    });
  };

  const updateMetric = (index: number, key: string, value: string) => {
    setSlugData((prev: any) => {
      const newMetrics = [...(prev.outcome?.metrics || [])];
      if (!newMetrics[index]) newMetrics[index] = { value: "", label: "" };
      newMetrics[index] = { ...newMetrics[index], [key]: value };
      return { ...prev, outcome: { ...prev.outcome, metrics: newMetrics } };
    });
  };

  async function saveSlugContent() {
    if (!selectedSlug || !slugData) return;
    try {
      const { error } = await supabase.from("page_content").upsert({ id: `judgment_slug_${selectedSlug}`, content: slugData });
      if (error) throw error;
      alert("Slug content saved successfully!");
    } catch (e: any) {
      alert("Error saving: " + e.message);
    }
  }

  if (loading) {
    return <div style={{ padding: 40, color: "#333", fontFamily: "sans-serif" }}>Loading...</div>;
  }

  if (!session) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F7FA", fontFamily: "sans-serif" }}>
        <div style={{ width: "100%", maxWidth: 400, padding: "40px", background: "#fff", borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#0B1120" }}>Admin Login</h1>
            <p style={{ color: "#666", fontSize: 14, marginTop: 8 }}>Sign in to manage Flowtaris content</p>
          </div>
          
          {loginError && (
            <div style={{ background: "#FEE2E2", color: "#B91C1C", padding: 12, borderRadius: 6, marginBottom: 20, fontSize: 14 }}>
              {loginError}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", marginBottom: 8, fontSize: 14, color: "#374151", fontWeight: 500 }}>Email Address</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", background: "#F9FAFB", color: "#111827", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, outline: "none" }}
                required
              />
            </div>
            
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", marginBottom: 8, fontSize: 14, color: "#374151", fontWeight: 500 }}>Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", background: "#F9FAFB", color: "#111827", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, outline: "none" }}
                required
              />
            </div>
            
            <button 
              type="submit"
              disabled={loginLoading}
              style={{ width: "100%", background: "#0F172A", color: "#fff", padding: "12px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, transition: "background 0.2s" }}
            >
              {loginLoading ? "Authenticating..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const sidebarLinks = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "hero", label: "Homepage & Hero", icon: <Type size={18} /> },
    { id: "trust", label: "Systems of Trust", icon: <ShieldCheck size={18} /> },
    { id: "judgment", label: "Judgment Logs", icon: <Scale size={18} /> },
    { id: "judgment_slugs", label: "Judgment Slugs", icon: <FileText size={18} /> },
    { id: "principles", label: "Principles", icon: <FileText size={18} /> },
    { id: "statement", label: "Trust Statement", icon: <MessageSquare size={18} /> },
    { id: "leverage", label: "Leverage Page", icon: <Grid size={18} /> },
    { id: "resources", label: "PDF Resources", icon: <FileBox size={18} /> },
    { id: "workday", label: "Workday Specialists", icon: <Briefcase size={18} /> },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F4F7F6", fontFamily: "sans-serif", color: "#1F2937" }}>
      {/* Sidebar */}
      <aside style={{ width: 260, background: "#0B1121", color: "#9CA3AF", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "24px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ width: 32, height: 32, background: "#fff", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#0B1121", fontWeight: "bold", fontSize: 18 }}>
            F
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: "bold", fontSize: 16, letterSpacing: 1 }}>FLOWTARIS</div>
            <div style={{ fontSize: 10, letterSpacing: 1, color: "#60A5FA", marginTop: 2 }}>ADMIN PANEL</div>
          </div>
        </div>
        
        <nav style={{ flex: 1, padding: "20px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
          {sidebarLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              style={{
                display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "12px 16px",
                background: activeTab === link.id ? "rgba(255,255,255,0.1)" : "transparent",
                color: activeTab === link.id ? "#fff" : "#9CA3AF",
                border: "none", borderRadius: 8, cursor: "pointer", textAlign: "left",
                fontSize: 14, fontWeight: activeTab === link.id ? 500 : 400,
                transition: "all 0.2s"
              }}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>
        
        <div style={{ padding: "20px 12px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <button
            onClick={handleLogout}
            style={{
              display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "12px 16px",
              background: "transparent", color: "#9CA3AF", border: "none", borderRadius: 8, 
              cursor: "pointer", textAlign: "left", fontSize: 14, transition: "all 0.2s"
            }}
            onMouseOver={(e) => e.currentTarget.style.color = "#fff"}
            onMouseOut={(e) => e.currentTarget.style.color = "#9CA3AF"}
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Topbar */}
        <header style={{ height: 64, background: "#fff", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, color: "#6B7280", textDecoration: "none", fontSize: 14 }}>
            <ArrowLeft size={16} />
            View Public Site
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#111827" }}>{session.user.email}</div>
              <div style={{ fontSize: 12, color: "#6B7280" }}>Super Admin</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0B1121", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <User size={18} />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main style={{ flex: 1, overflowY: "auto", padding: 40 }}>
          {activeTab === "dashboard" && (
            <div>
              <h1 style={{ fontSize: 28, fontWeight: "bold", color: "#111827", marginBottom: 8 }}>Dashboard Overview</h1>
              <p style={{ color: "#6B7280", marginBottom: 40, fontSize: 15 }}>Manage your Flowtaris web presence content from here.</p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
                <DashboardCard 
                  icon={<Type size={20} color="#3B82F6" />} 
                  iconBg="#EFF6FF"
                  title="Homepage & Hero"
                  description="Edit the global hero text, subtitles, and the main messaging of the site."
                  actions={[{ label: "Manage Hero \u2192", onClick: () => setActiveTab("hero") }]}
                />
                <DashboardCard 
                  icon={<FileBox size={20} color="#8B5CF6" />} 
                  iconBg="#F5F3FF"
                  title="PDF Resources"
                  description="Add, update, or remove downloadable PDF documents from the main page."
                  actions={[{ label: "Manage PDFs \u2192", onClick: () => setActiveTab("resources") }]}
                />
                <DashboardCard 
                  icon={<ShieldCheck size={20} color="#10B981" />} 
                  iconBg="#ECFDF5"
                  title="Systems of Trust"
                  description="Manage the three core pillars: Judgment, Evidence, and Leverage."
                  actions={[{ label: "Manage Systems \u2192", onClick: () => setActiveTab("trust") }]}
                />
                <DashboardCard 
                  icon={<Scale size={20} color="#F59E0B" />} 
                  iconBg="#FFFBEB"
                  title="Judgment Logs"
                  description="Update the featured decision logs displayed on the homepage."
                  actions={[{ label: "Manage Logs \u2192", onClick: () => setActiveTab("judgment") }]}
                />
              </div>
            </div>
          )}

          {activeTab === "hero" && (
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
                        <button 
                          onClick={handleRemoveImage}
                          style={{ background: "#FEE2E2", color: "#B91C1C", padding: "8px 16px", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 500 }}
                        >
                          Remove Image
                        </button>
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
                  onClick={saveHeroContent}
                  style={{ background: "#2563EB", color: "#fff", padding: "10px 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14, transition: "background 0.2s" }}
                  onMouseOver={(e) => e.currentTarget.style.background = "#1D4ED8"}
                  onMouseOut={(e) => e.currentTarget.style.background = "#2563EB"}
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "resources" && (
            <div style={{ maxWidth: 900 }}>
              <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24 }}>PDF Resources</h1>
              
              <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB", marginBottom: 32 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Add New PDF</h2>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Document Title</label>
                    <input 
                      type="text"
                      placeholder="e.g. Q3 Architecture Report" 
                      value={newPdfTitle}
                      onChange={(e) => setNewPdfTitle(e.target.value)}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div style={{ flex: 2 }}>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>PDF URL</label>
                    <input 
                      type="url"
                      placeholder="https://..." 
                      value={newPdfUrl}
                      onChange={(e) => setNewPdfUrl(e.target.value)}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <button 
                    onClick={addPdf}
                    style={{ height: 42, background: "#10B981", color: "#fff", padding: "0 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14, whiteSpace: "nowrap" }}
                  >
                    Add Document
                  </button>
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB" }}>
                <div style={{ padding: "16px 24px", borderBottom: "1px solid #E5E7EB", background: "#F9FAFB" }}>
                  <h2 style={{ fontSize: 16, fontWeight: 600 }}>Manage Existing Documents</h2>
                </div>
                
                {pdfs.length === 0 ? (
                  <div style={{ padding: 40, textAlign: "center", color: "#6B7280" }}>
                    No PDF documents have been added yet.
                  </div>
                ) : (
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {pdfs.map((pdf, idx) => (
                      <li key={pdf.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: idx < pdfs.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                        <div>
                          <div style={{ fontWeight: 500, color: "#111827", marginBottom: 4 }}>{pdf.title}</div>
                          <a href={pdf.url} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#2563EB", textDecoration: "none" }}>{pdf.url}</a>
                        </div>
                        <button 
                          onClick={() => deletePdf(pdf.id)}
                          style={{ background: "#FEE2E2", color: "#B91C1C", padding: "6px 12px", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 13, fontWeight: 500 }}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {activeTab === "workday" && (
            <div style={{ maxWidth: 900 }}>
              <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24 }}>Workday Specialists</h1>
              
              <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB", marginBottom: 32 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Add New Specialist</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Name</label>
                    <input 
                      type="text"
                      value={newSpecialist.name}
                      onChange={(e) => setNewSpecialist({...newSpecialist, name: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Role</label>
                    <input 
                      type="text"
                      value={newSpecialist.role}
                      onChange={(e) => setNewSpecialist({...newSpecialist, role: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Specialty (e.g. HCM, FINANCE, INTEGRATION)</label>
                    <input 
                      type="text"
                      value={newSpecialist.specialty}
                      onChange={(e) => setNewSpecialist({...newSpecialist, specialty: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Certifications</label>
                    <input 
                      type="text"
                      value={newSpecialist.certs}
                      onChange={(e) => setNewSpecialist({...newSpecialist, certs: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Profile Link (slug)</label>
                    <input 
                      type="text"
                      value={newSpecialist.link}
                      onChange={(e) => setNewSpecialist({...newSpecialist, link: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                </div>
                <button 
                  onClick={addSpecialist}
                  style={{ background: "#10B981", color: "#fff", padding: "10px 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14 }}
                >
                  Add Specialist
                </button>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB" }}>
                <div style={{ padding: "16px 24px", borderBottom: "1px solid #E5E7EB", background: "#F9FAFB" }}>
                  <h2 style={{ fontSize: 16, fontWeight: 600 }}>Manage Existing Specialists</h2>
                </div>
                
                {specialists.length === 0 ? (
                  <div style={{ padding: 40, textAlign: "center", color: "#6B7280" }}>
                    No specialists have been added yet.
                  </div>
                ) : (
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {specialists.map((specialist, idx) => (
                      <li key={specialist.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: idx < specialists.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                        <div>
                          <div style={{ fontWeight: 500, color: "#111827", marginBottom: 4 }}>{specialist.name} ({specialist.specialty})</div>
                          <div style={{ fontSize: 13, color: "#6B7280" }}>{specialist.role} &middot; {specialist.certs}</div>
                        </div>
                        <button 
                          onClick={() => deleteSpecialist(specialist.id)}
                          style={{ background: "#FEE2E2", color: "#B91C1C", padding: "6px 12px", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 13, fontWeight: 500 }}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {activeTab === "judgment" && (
            <div style={{ maxWidth: 900 }}>
              <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24 }}>Judgment Logs</h1>
              
              <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB", marginBottom: 32 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Judgment Page Hero</h2>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Title</label>
                  <input 
                    type="text"
                    value={judgmentTitle}
                    onChange={(e) => setJudgmentTitle(e.target.value)}
                    style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Subtitle</label>
                  <input 
                    type="text"
                    value={judgmentSubtitle}
                    onChange={(e) => setJudgmentSubtitle(e.target.value)}
                    style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Description (Use \n for new lines)</label>
                  <textarea 
                    value={judgmentDescription}
                    onChange={(e) => setJudgmentDescription(e.target.value)}
                    style={{ width: "100%", height: 80, background: "#F9FAFB", border: "1px solid #D1D5DB", padding: 16, borderRadius: 8, fontSize: 14, fontFamily: "inherit", resize: "vertical" }}
                  />
                </div>
                <button 
                  onClick={saveJudgmentContent}
                  style={{ background: "#2563EB", color: "#fff", padding: "10px 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14 }}
                >
                  Save Hero Content
                </button>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB", marginBottom: 32 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>{editingLogId ? "Edit Decision Log" : "Add New Decision Log"}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Title</label>
                    <input 
                      type="text"
                      value={newLog.title}
                      onChange={(e) => setNewLog({...newLog, title: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Author</label>
                    <input 
                      type="text"
                      value={newLog.author}
                      onChange={(e) => setNewLog({...newLog, author: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Date (e.g. 15 MAR 2026)</label>
                    <input 
                      type="text"
                      value={newLog.date}
                      onChange={(e) => setNewLog({...newLog, date: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Tags (comma separated)</label>
                    <input 
                      type="text"
                      value={newLog.tags}
                      onChange={(e) => setNewLog({...newLog, tags: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Excerpt (Use \n for new lines)</label>
                    <textarea 
                      value={newLog.excerpt}
                      onChange={(e) => setNewLog({...newLog, excerpt: e.target.value})}
                      style={{ width: "100%", height: 80, background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14, resize: "vertical" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Principle</label>
                    <input 
                      type="text"
                      value={newLog.principle}
                      onChange={(e) => setNewLog({...newLog, principle: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Link (href)</label>
                    <input 
                      type="text"
                      value={newLog.href}
                      onChange={(e) => setNewLog({...newLog, href: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <button 
                    onClick={addDecisionLog}
                    style={{ background: "#10B981", color: "#fff", padding: "10px 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14 }}
                  >
                    {editingLogId ? "Update Decision Log" : "Add Decision Log"}
                  </button>
                  {editingLogId && (
                    <button 
                      onClick={() => {
                        setEditingLogId(null);
                        setNewLog({ date: "", author: "", tags: "", title: "", excerpt: "", principle: "", href: "" });
                      }}
                      style={{ background: "#F3F4F6", color: "#374151", padding: "10px 24px", border: "1px solid #D1D5DB", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14 }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB" }}>
                <div style={{ padding: "16px 24px", borderBottom: "1px solid #E5E7EB", background: "#F9FAFB" }}>
                  <h2 style={{ fontSize: 16, fontWeight: 600 }}>Manage Existing Logs</h2>
                </div>
                
                {decisionLogs.length === 0 ? (
                  <div style={{ padding: 40, textAlign: "center", color: "#6B7280" }}>
                    No decision logs have been added yet.
                  </div>
                ) : (
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {decisionLogs.map((log, idx) => (
                      <li key={log.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: idx < decisionLogs.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                        <div>
                          <div style={{ fontWeight: 500, color: "#111827", marginBottom: 4 }}>{log.title}</div>
                          <div style={{ fontSize: 13, color: "#6B7280" }}>{log.author} &middot; {log.date} &middot; {(log.tags || []).join(", ")}</div>
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button 
                            onClick={() => editDecisionLog(log)}
                            style={{ background: "#E0F2FE", color: "#0369A1", padding: "6px 12px", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 13, fontWeight: 500 }}
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => deleteDecisionLog(log.id)}
                            style={{ background: "#FEE2E2", color: "#B91C1C", padding: "6px 12px", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 13, fontWeight: 500 }}
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {activeTab === "judgment_slugs" && (
            <div style={{ maxWidth: 900 }}>
              <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24 }}>Judgment Slugs Content</h1>
              <p style={{ color: "#6B7280", marginBottom: 32, fontSize: 15 }}>
                Edit the detailed content for individual decision logs here. Ensure the JSON format is correct.
              </p>

              <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB", marginBottom: 32 }}>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Select Log to Edit</label>
                  <select 
                    value={selectedSlug} 
                    onChange={(e) => loadSlugContent(e.target.value)}
                    style={{ width: "100%", maxWidth: 400, background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                  >
                    <option value="">-- Select a Log --</option>
                    {decisionLogs.map((log: any) => {
                      const slug = log.href ? log.href.split('/').pop() : log.id;
                      return <option key={slug} value={slug}>{log.title}</option>;
                    })}
                  </select>
                </div>

                {selectedSlug && (
                  <>
                    {isSlugLoading ? (
                      <div style={{ padding: 20, color: "#6B7280" }}>Loading...</div>
                    ) : slugData && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 24 }}>
                        {/* Basic Info */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                          <div>
                            <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>Category</label>
                            <input type="text" value={slugData.category || ""} onChange={(e) => updateSlugData("category", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} />
                          </div>
                          <div>
                            <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>Tags (comma separated)</label>
                            <input type="text" value={(slugData.tags || []).join(", ")} onChange={(e) => updateSlugData("tags", e.target.value.split(",").map((s: string) => s.trim()))} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} />
                          </div>
                          <div style={{ gridColumn: "1 / -1" }}>
                            <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>Title (Use \n for line breaks)</label>
                            <input type="text" value={slugData.title || ""} onChange={(e) => updateSlugData("title", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} />
                          </div>
                          <div style={{ gridColumn: "1 / -1" }}>
                            <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>Excerpt</label>
                            <textarea value={slugData.excerpt || ""} onChange={(e) => updateSlugData("excerpt", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB", height: 80 }} />
                          </div>
                        </div>

                        {/* Author Info */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, background: "#F9FAFB", padding: 16, borderRadius: 8 }}>
                          <h3 style={{ gridColumn: "1 / -1", fontSize: 16, margin: 0, fontWeight: 600 }}>Author Info</h3>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Author (Short)</label><input type="text" value={slugData.author || ""} onChange={(e) => updateSlugData("author", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} /></div>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Author (Full Name)</label><input type="text" value={slugData.authorFull || ""} onChange={(e) => updateSlugData("authorFull", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} /></div>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Role</label><input type="text" value={slugData.role || ""} onChange={(e) => updateSlugData("role", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} /></div>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Date</label><input type="text" value={slugData.date || ""} onChange={(e) => updateSlugData("date", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} /></div>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Read Time</label><input type="text" value={slugData.readTime || ""} onChange={(e) => updateSlugData("readTime", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} /></div>
                        </div>

                        {/* Body */}
                        <div>
                          <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>Context (one paragraph per line)</label>
                          <textarea value={(slugData.context || []).join("\n")} onChange={(e) => updateArrayField("context", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB", height: 120 }} />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, background: "#F9FAFB", padding: 16, borderRadius: 8 }}>
                          <h3 style={{ fontSize: 16, margin: 0, fontWeight: 600 }}>The Decision</h3>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Main</label><input type="text" value={slugData.decision?.main || ""} onChange={(e) => updateNestedSlugData("decision", "main", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} /></div>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Supporting</label><textarea value={slugData.decision?.supporting || ""} onChange={(e) => updateNestedSlugData("decision", "supporting", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB", height: 80 }} /></div>
                        </div>

                        <div style={{ background: "#F9FAFB", padding: 16, borderRadius: 8 }}>
                          <h3 style={{ fontSize: 16, margin: "0 0 16px 0", fontWeight: 600 }}>Alternatives Rejected</h3>
                          {(slugData.alternativesRejected || []).map((alt: any, idx: number) => (
                            <div key={idx} style={{ display: "grid", gridTemplateColumns: "60px 1fr 2fr", gap: 8, marginBottom: 8 }}>
                              <input placeholder="No." value={alt.number || ""} onChange={(e) => updateAlternative(idx, "number", e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: 6, border: "1px solid #D1D5DB" }} />
                              <input placeholder="Title" value={alt.title || ""} onChange={(e) => updateAlternative(idx, "title", e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: 6, border: "1px solid #D1D5DB" }} />
                              <input placeholder="Reason" value={alt.reason || ""} onChange={(e) => updateAlternative(idx, "reason", e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: 6, border: "1px solid #D1D5DB" }} />
                            </div>
                          ))}
                          <button onClick={() => setSlugData((prev: any) => ({ ...prev, alternativesRejected: [...(prev.alternativesRejected || []), { number: "", title: "", reason: "" }] }))} style={{ padding: "6px 12px", background: "#E5E7EB", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 12, marginTop: 8 }}>+ Add Alternative</button>
                        </div>

                        <div style={{ background: "#F9FAFB", padding: 16, borderRadius: 8 }}>
                          <h3 style={{ fontSize: 16, margin: "0 0 16px 0", fontWeight: 600 }}>Outcome</h3>
                          <div style={{ marginBottom: 12 }}><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Timeframe</label><input type="text" value={slugData.outcome?.timeframe || ""} onChange={(e) => updateNestedSlugData("outcome", "timeframe", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} /></div>
                          <div style={{ marginBottom: 12 }}>
                            <label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Metrics</label>
                            {(slugData.outcome?.metrics || []).map((metric: any, idx: number) => (
                              <div key={idx} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 8, marginBottom: 8 }}>
                                <input placeholder="Value" value={metric.value || ""} onChange={(e) => updateMetric(idx, "value", e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: 6, border: "1px solid #D1D5DB" }} />
                                <input placeholder="Label" value={metric.label || ""} onChange={(e) => updateMetric(idx, "label", e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: 6, border: "1px solid #D1D5DB" }} />
                              </div>
                            ))}
                            <button onClick={() => setSlugData((prev: any) => ({ ...prev, outcome: { ...prev.outcome, metrics: [...(prev.outcome?.metrics || []), { value: "", label: "" }] } }))} style={{ padding: "6px 12px", background: "#E5E7EB", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 12, marginTop: 8 }}>+ Add Metric</button>
                          </div>
                          <div>
                            <label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Caveats (one per line)</label>
                            <textarea value={(slugData.outcome?.caveats || []).join("\n")} onChange={(e) => updateNestedSlugData("outcome", "caveats", e.target.value.split("\n"))} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB", height: 80 }} />
                          </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, background: "#F9FAFB", padding: 16, borderRadius: 8 }}>
                          <h3 style={{ fontSize: 16, margin: 0, fontWeight: 600 }}>Principle & Author Note</h3>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Principle Statement (Use \n for line breaks)</label><textarea value={slugData.principle?.statement || ""} onChange={(e) => updateNestedSlugData("principle", "statement", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB", height: 80 }} /></div>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Principle Category</label><input type="text" value={slugData.principle?.category || ""} onChange={(e) => updateNestedSlugData("principle", "category", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB" }} /></div>
                          <div><label style={{ display: "block", marginBottom: 8, fontSize: 14 }}>Author Note</label><textarea value={slugData.authorNote || ""} onChange={(e) => updateSlugData("authorNote", e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: 6, border: "1px solid #D1D5DB", height: 80 }} /></div>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={saveSlugContent}
                      disabled={isSlugLoading}
                      style={{ background: "#2563EB", color: "#fff", padding: "10px 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14 }}
                    >
                      Save Slug Content
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === "trust" && (
            <div style={{ maxWidth: 900 }}>
              <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24 }}>Systems of Trust</h1>
              
              <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB", marginBottom: 32 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Section Title</h2>
                <div style={{ marginBottom: 16 }}>
                  <input 
                    type="text"
                    value={trustTitle}
                    onChange={(e) => setTrustTitle(e.target.value)}
                    style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                  />
                </div>
                <button 
                  onClick={saveTrustContent}
                  style={{ background: "#2563EB", color: "#fff", padding: "10px 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14 }}
                >
                  Save Section Title
                </button>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB", marginBottom: 32 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>{editingSystemId ? "Edit System" : "Add New System"}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Heading</label>
                    <input 
                      type="text"
                      value={newSystem.heading}
                      onChange={(e) => setNewSystem({...newSystem, heading: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Description</label>
                    <input 
                      type="text"
                      value={newSystem.description}
                      onChange={(e) => setNewSystem({...newSystem, description: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>Items (comma separated)</label>
                    <input 
                      type="text"
                      value={newSystem.items}
                      onChange={(e) => setNewSystem({...newSystem, items: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                      placeholder="e.g. Decision logs, Principles"
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>CTA Text</label>
                    <input 
                      type="text"
                      value={newSystem.ctaText}
                      onChange={(e) => setNewSystem({...newSystem, ctaText: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                      placeholder="e.g. EXPLORE &rarr;"
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: 14, fontWeight: 500, color: "#374151" }}>CTA Link</label>
                    <input 
                      type="text"
                      value={newSystem.ctaLink}
                      onChange={(e) => setNewSystem({...newSystem, ctaLink: e.target.value})}
                      style={{ width: "100%", background: "#F9FAFB", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, fontSize: 14 }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <button 
                    onClick={addTrustSystem}
                    style={{ background: "#10B981", color: "#fff", padding: "10px 24px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14 }}
                  >
                    {editingSystemId ? "Update System" : "Add System"}
                  </button>
                  {editingSystemId && (
                    <button 
                      onClick={() => {
                        setEditingSystemId(null);
                        setNewSystem({ heading: "", description: "", items: "", ctaText: "", ctaLink: "" });
                      }}
                      style={{ background: "#F3F4F6", color: "#374151", padding: "10px 24px", border: "1px solid #D1D5DB", borderRadius: 6, cursor: "pointer", fontWeight: 500, fontSize: 14 }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB" }}>
                <div style={{ padding: "16px 24px", borderBottom: "1px solid #E5E7EB", background: "#F9FAFB" }}>
                  <h2 style={{ fontSize: 16, fontWeight: 600 }}>Manage Existing Systems</h2>
                </div>
                
                {trustSystems.length === 0 ? (
                  <div style={{ padding: 40, textAlign: "center", color: "#6B7280" }}>
                    No systems have been added yet.
                  </div>
                ) : (
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {trustSystems.map((system, idx) => (
                      <li key={system.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: idx < trustSystems.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                        <div>
                          <div style={{ fontWeight: 500, color: "#111827", marginBottom: 4 }}>{system.heading}</div>
                          <div style={{ fontSize: 13, color: "#6B7280" }}>{system.description} &middot; {(system.items || []).join(", ")}</div>
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button 
                            onClick={() => editTrustSystem(system)}
                            style={{ background: "#E0F2FE", color: "#0369A1", padding: "6px 12px", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 13, fontWeight: 500 }}
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => deleteTrustSystem(system.id)}
                            style={{ background: "#FEE2E2", color: "#B91C1C", padding: "6px 12px", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 13, fontWeight: 500 }}
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {["principles", "statement"].includes(activeTab) && (
            <div style={{ maxWidth: 800 }}>
              <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24, textTransform: "capitalize" }}>
                {activeTab.replace("-", " ")}
              </h1>
              <div style={{ background: "#fff", borderRadius: 12, padding: 40, textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: "50%", background: "#F3F4F6", marginBottom: 16 }}>
                  <FileBox size={24} color="#9CA3AF" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 500, color: "#111827", marginBottom: 8 }}>Section Under Construction</h3>
                <p style={{ color: "#6B7280", maxWidth: 400, margin: "0 auto" }}>
                  This section is ready to be connected to your Supabase schema when you need dynamic content here.
                </p>
              </div>
            </div>
          )}
          {activeTab === "leverage" && <LeverageEditor />}
        </main>
      </div>
    </div>
  );
}

function DashboardCard({ icon, iconBg, title, description, actions }: { icon: React.ReactNode, iconBg: string, title: string, description: string, actions: {label: string, onClick: () => void}[] }) {
  return (
    <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}>
      <div style={{ width: 40, height: 40, borderRadius: 8, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 600, color: "#111827", marginBottom: 8 }}>{title}</h3>
      <p style={{ color: "#6B7280", fontSize: 14, lineHeight: 1.5, flex: 1, marginBottom: 24 }}>{description}</p>
      <div style={{ display: "flex", gap: 16, marginTop: "auto" }}>
        {actions.map((action, i) => (
          <button 
            key={i} 
            onClick={action.onClick}
            style={{ background: "transparent", border: "none", padding: 0, color: "#2563EB", fontWeight: 500, fontSize: 14, cursor: "pointer", transition: "color 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.color = "#1D4ED8"}
            onMouseOut={(e) => e.currentTarget.style.color = "#2563EB"}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
