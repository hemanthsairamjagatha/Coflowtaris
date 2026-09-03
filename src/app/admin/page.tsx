"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import Link from "next/link";

// ── Editor Components ──────────────────────────────────────────────
import HeroEditor from "./HeroEditor";
import TrustEditor from "./TrustEditor";
import JudgmentEditor from "./JudgmentEditor";
import JudgmentSlugsEditor from "./JudgmentSlugsEditor";
import PrinciplesEditor from "./PrinciplesEditor";
import LeverageEditor from "./LeverageEditor";
import ResourcesEditor from "./ResourcesEditor";
import WorkdayEditor from "./WorkdayEditor";

// ── Icons ──────────────────────────────────────────────────────────
import {
  LayoutDashboard,
  Type,
  ShieldCheck,
  FileText,
  Scale,
  MessageSquare,
  LogOut,
  ArrowLeft,
  Grid,
  FileBox,
  User,
  Briefcase,
  BookOpen,
} from "lucide-react";

// ── Sidebar Configuration ──────────────────────────────────────────
const sidebarLinks = [
  { id: "dashboard",       label: "Dashboard",            icon: <LayoutDashboard size={18} /> },
  { id: "hero",            label: "Homepage & Hero",      icon: <Type size={18} /> },
  { id: "trust",           label: "Systems of Trust",     icon: <ShieldCheck size={18} /> },
  { id: "judgment",        label: "Judgment Logs",        icon: <Scale size={18} /> },
  { id: "judgment_slugs",  label: "Judgment Slugs",       icon: <FileText size={18} /> },
  { id: "principles",      label: "Principles",           icon: <BookOpen size={18} /> },
  { id: "statement",       label: "Trust Statement",      icon: <MessageSquare size={18} /> },
  { id: "leverage",        label: "Leverage Page",        icon: <Grid size={18} /> },
  { id: "resources",       label: "PDF Resources",        icon: <FileBox size={18} /> },
  { id: "workday",         label: "Workday Specialists",  icon: <Briefcase size={18} /> },
];

// ── Dashboard Quick-Links ──────────────────────────────────────────
function DashboardCard({
  icon,
  iconBg,
  title,
  description,
  actions,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  actions: { label: string; onClick: () => void }[];
}) {
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
            style={{ background: "transparent", border: "none", padding: 0, color: "#2563EB", fontWeight: 500, fontSize: 14, cursor: "pointer" }}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Main Admin Page ────────────────────────────────────────────────
export default function AdminPage() {
  // ── Auth State ─────────────────────────────
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(true);

  // ── Navigation State ───────────────────────
  const [activeTab, setActiveTab] = useState("dashboard");

  // ── Auth Effects ───────────────────────────
  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    if (!supabase) { setLoginError("Supabase not configured"); setLoginLoading(false); return; }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setLoginError(error.message);
    setLoginLoading(false);
  }

  async function handleLogout() {
    if (!supabase) return;
    await supabase.auth.signOut();
  }

  // ── Loading State ──────────────────────────
  if (loading) {
    return <div style={{ padding: 40, color: "#333", fontFamily: "sans-serif" }}>Loading...</div>;
  }

  // ── Login Screen ───────────────────────────
  if (!session) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F7FA", fontFamily: "sans-serif" }}>
        <div style={{ width: "100%", maxWidth: 400, padding: "40px", background: "#fff", borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#0B1120" }}>Admin Login</h1>
            <p style={{ color: "#666", fontSize: 14, marginTop: 8 }}>Sign in to manage Flowtaris content</p>
          </div>

          {loginError && (
            <div style={{ background: "#FEE2E2", color: "#B91C1C", padding: 12, borderRadius: 6, marginBottom: 20, fontSize: 14 }}>{loginError}</div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", marginBottom: 8, fontSize: 14, color: "#374151", fontWeight: 500 }}>Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", background: "#F9FAFB", color: "#111827", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, outline: "none" }} required />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", marginBottom: 8, fontSize: 14, color: "#374151", fontWeight: 500 }}>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", background: "#F9FAFB", color: "#111827", border: "1px solid #D1D5DB", padding: "10px 12px", borderRadius: 6, outline: "none" }} required />
            </div>
            <button type="submit" disabled={loginLoading} style={{ width: "100%", background: "#0F172A", color: "#fff", padding: "12px", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 500 }}>
              {loginLoading ? "Authenticating..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Authenticated Shell ────────────────────
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F4F7F6", fontFamily: "sans-serif", color: "#1F2937" }}>

      {/* ── Sidebar ── */}
      <aside style={{ width: 260, background: "#0B1121", color: "#9CA3AF", display: "flex", flexDirection: "column" }}>
        {/* Brand */}
        <div style={{ padding: "24px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ width: 32, height: 32, background: "#fff", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#0B1121", fontWeight: "bold", fontSize: 18 }}>F</div>
          <div>
            <div style={{ color: "#fff", fontWeight: "bold", fontSize: 16, letterSpacing: 1 }}>FLOWTARIS</div>
            <div style={{ fontSize: 10, letterSpacing: 1, color: "#60A5FA", marginTop: 2 }}>ADMIN PANEL</div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: "20px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              style={{
                display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "12px 16px",
                background: activeTab === link.id ? "rgba(255,255,255,0.1)" : "transparent",
                color: activeTab === link.id ? "#fff" : "#9CA3AF",
                border: "none", borderRadius: 8, cursor: "pointer", textAlign: "left",
                fontSize: 14, fontWeight: activeTab === link.id ? 500 : 400, transition: "all 0.2s",
              }}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>

        {/* Sign Out */}
        <div style={{ padding: "20px 12px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <button
            onClick={handleLogout}
            style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "12px 16px", background: "transparent", color: "#9CA3AF", border: "none", borderRadius: 8, cursor: "pointer", textAlign: "left", fontSize: 14 }}
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main Content ── */}
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

          {/* ── Dashboard Tab ── */}
          {activeTab === "dashboard" && (
            <div>
              <h1 style={{ fontSize: 28, fontWeight: "bold", color: "#111827", marginBottom: 8 }}>Dashboard Overview</h1>
              <p style={{ color: "#6B7280", marginBottom: 40, fontSize: 15 }}>Manage your Flowtaris web presence content from here.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
                <DashboardCard icon={<Type size={20} color="#3B82F6" />} iconBg="#EFF6FF" title="Homepage & Hero" description="Edit the global hero text, subtitles, and the main messaging of the site." actions={[{ label: "Manage Hero →", onClick: () => setActiveTab("hero") }]} />
                <DashboardCard icon={<FileBox size={20} color="#8B5CF6" />} iconBg="#F5F3FF" title="PDF Resources" description="Add, update, or remove downloadable PDF documents from the main page." actions={[{ label: "Manage PDFs →", onClick: () => setActiveTab("resources") }]} />
                <DashboardCard icon={<ShieldCheck size={20} color="#10B981" />} iconBg="#ECFDF5" title="Systems of Trust" description="Manage the three core pillars: Judgment, Evidence, and Leverage." actions={[{ label: "Manage Systems →", onClick: () => setActiveTab("trust") }]} />
                <DashboardCard icon={<Scale size={20} color="#F59E0B" />} iconBg="#FFFBEB" title="Judgment Logs" description="Update the featured decision logs displayed on the homepage." actions={[{ label: "Manage Logs →", onClick: () => setActiveTab("judgment") }]} />
                <DashboardCard icon={<BookOpen size={20} color="#EC4899" />} iconBg="#FDF2F8" title="Principles" description="Manage the principles derived from decision logs and page content." actions={[{ label: "Manage Principles →", onClick: () => setActiveTab("principles") }]} />
                <DashboardCard icon={<Grid size={20} color="#6366F1" />} iconBg="#EEF2FF" title="Leverage Page" description="Manage alliances, partnerships, and the specialist network." actions={[{ label: "Manage Leverage →", onClick: () => setActiveTab("leverage") }]} />
              </div>
            </div>
          )}

          {/* ── Section Editors ── */}
          {activeTab === "hero"            && <HeroEditor />}
          {activeTab === "trust"           && <TrustEditor />}
          {activeTab === "judgment"        && <JudgmentEditor />}
          {activeTab === "judgment_slugs"  && <JudgmentSlugsEditor />}
          {activeTab === "principles"      && <PrinciplesEditor />}
          {activeTab === "leverage"        && <LeverageEditor />}
          {activeTab === "resources"       && <ResourcesEditor />}
          {activeTab === "workday"         && <WorkdayEditor />}

          {/* ── Placeholder Tabs ── */}
          {activeTab === "statement" && (
            <div style={{ maxWidth: 800 }}>
              <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 24, textTransform: "capitalize" }}>{activeTab.replace("-", " ")}</h1>
              <div style={{ background: "#fff", borderRadius: 12, padding: 40, textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #E5E7EB" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: "50%", background: "#F3F4F6", marginBottom: 16 }}>
                  <FileBox size={24} color="#9CA3AF" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 500, color: "#111827", marginBottom: 8 }}>Section Under Construction</h3>
                <p style={{ color: "#6B7280", maxWidth: 400, margin: "0 auto" }}>This section is ready to be connected to your Supabase schema when you need dynamic content here.</p>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
