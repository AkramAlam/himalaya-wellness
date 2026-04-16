import { useEffect, useRef, useState } from "react";

/* ── useInView hook ── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ── FadeUp wrapper ── */
function FadeUp({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ══ ACTUAL DATA FROM HIMALAYA WEBSITE ══════════════════════════ */
const principles = [
  { 
    num: "01", icon: "🐰", title: "Cruelty-Free & Proven", 
    body: "Himalaya opposes animal testing for cosmetics. We believe inflicting pain for profit is unjustifiable. Our personal care products are never tested on animals.", 
    accent: "#a35e4e", light: "#fdf0ec" 
  },
  { 
    num: "02", icon: "🌱", title: "Good-for-Earth Practices", 
    body: "We source herbs cultivated in line with international Good Agriculture Practices (GAP). We avoid chemical fertilizers and use natural repellents like Neem oil.", 
    accent: "#00645c", light: "#e8f5f4" 
  },
  { 
    num: "03", icon: "👩‍🌾", title: "Empowering Women", 
    body: "Through contract farming, we empower local communities. These programs offer small-scale farmers, especially women, access to global markets and fair prices.", 
    accent: "#6b4c8a", light: "#f2eef8" 
  },
  { 
    num: "04", icon: "🌍", title: "Sustainability at Heart", 
    body: "We champion planetary well-being. We ensure sustainable herb sourcing through traceability and actively invest in cultivating endangered herbs.", 
    accent: "#4a7c59", light: "#eef5ee" 
  },
];

const highlights = [
  { emoji: "🤝", name: "Community Support", desc: "Prioritizing investments in local communities." },
  { emoji: "👨‍🌾", name: "Farmer Training", desc: "Soil solarization & Earth-friendly fertilizers." },
  { emoji: "🍃", name: "Residue-Free", desc: "Chemical-free approach for pure herbs." },
  { emoji: "🦋", name: "Biodiversity", desc: "Preserving nature for future generations." },
];

/* ══ MAIN COMPONENT ════════════════════════════════ */
export default function WhatWeStandFor() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fafaf8", color: "#111827", overflowX: "hidden" }}>

      {/* ══ 1. HERO SECTION ══════════════════════════════════════ */}
      <section style={{ paddingTop: 102, minHeight: "85vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

        {/* Abstract Backgrounds */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#fdf8f2 0%,#f0f7f5 60%,#eef5ee 100%)" }} />
        <div style={{ position: "absolute", top: "-10%", left: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(163,94,78,0.06) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,100,92,0.08) 0%,transparent 70%)" }} />
        
        <div style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%) rotate(-90deg)", fontSize: 9, fontWeight: 700, letterSpacing: "0.32em", color: "#d1d5db", textTransform: "uppercase" }}>
          Himalaya Values
        </div>

        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1380, margin: "0 auto", padding: "40px 64px", display: "grid", gridTemplateColumns: "1fr 0.85fr", gap: 80, alignItems: "center" }}>

          {/* LEFT: Text */}
          <div>
            <FadeUp>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.32em", color: "#a35e4e", textTransform: "uppercase", marginBottom: 18 }}>— What We Stand For</p>
            </FadeUp>
            <FadeUp delay={80}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem,4vw,3.8rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 24px" }}>
                Rooted in values that define the <br />
                <em style={{ color: "#00645c", fontStyle: "italic" }}>Himalaya Way</em>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p style={{ fontSize: 16, fontWeight: 300, color: "#4b5563", lineHeight: 1.85, maxWidth: 540, margin: "0 0 36px" }}>
                There is a story behind every Himalaya product. The story is about the people we work with, the way we do our business, how we grow our herbs, the ethics behind our research, and our respect for the Earth.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#ethics" style={{ background: "#00645c", color: "#fff", padding: "14px 32px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#004d47"}
                  onMouseLeave={e => e.currentTarget.style.background = "#00645c"}>
                  Explore Our Ethics
                </a>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: Visual Card */}
          <FadeUp delay={200}>
            <div style={{ position: "relative" }}>
              <div style={{ background: "linear-gradient(145deg,#a35e4e,#824738)", borderRadius: 28, padding: "48px 40px", color: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 24px 48px rgba(163,94,78,0.2)" }}>
                <div style={{ position: "absolute", top: -50, right: -50, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                <p style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>Our Belief</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.85rem", fontStyle: "italic", fontWeight: 600, lineHeight: 1.35, margin: "0 0 20px" }}>
                  "Healthier Lives,<br />Sustainable Planet"
                </h2>
                <p style={{ fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, margin: "0" }}>
                  We believe that well-researched and proven products that are good for our customers must be good for the planet too!
                </p>
              </div>
              {/* Badge 1 */}
              <div style={{ position: "absolute", bottom: -20, left: -20, background: "#fff", borderRadius: 18, padding: "14px 20px", boxShadow: "0 12px 36px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 26 }}>🐰</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#111827", margin: 0 }}>Never Tested on Animals</p>
                  <p style={{ fontSize: 11, color: "#9ca3af", margin: "2px 0 0" }}>Cruelty-Free Cosmetics</p>
                </div>
              </div>
              {/* Badge 2 */}
              <div style={{ position: "absolute", top: -16, right: -16, background: "#00645c", color: "#fff", borderRadius: 14, padding: "10px 16px", boxShadow: "0 8px 24px rgba(0,100,92,0.3)" }}>
                <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.75, margin: 0 }}>Global Standard</p>
                <p style={{ fontSize: 13, fontWeight: 700, margin: "2px 0 0" }}>G.A.P Certified</p>
              </div>
            </div>
          </FadeUp>
        </div>

      </section>

      {/* ══ 2. PRINCIPLES GRID ═══════════════════════════════════ */}
      <section id="ethics" style={{ background: "#fff", padding: "110px 64px" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 70 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: "#00645c", textTransform: "uppercase", marginBottom: 12 }}>Our Ethics</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 700, color: "#111827", margin: 0 }}>Business with a Conscience</h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {principles.map((p, i) => (
              <FadeUp key={p.num} delay={i * 80}>
                <div style={{ background: p.light, borderRadius: 24, padding: "32px 28px", height: "100%", boxSizing: "border-box", transition: "transform 0.3s, box-shadow 0.3s", position: "relative", overflow: "hidden" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${p.light}`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  
                  {/* Decorative Number Background */}
                  <div style={{ position: "absolute", top: -10, right: -10, fontSize: "6rem", fontFamily: "'Playfair Display', serif", fontWeight: 900, color: p.accent, opacity: 0.05, lineHeight: 1 }}>
                    {p.num}
                  </div>

                  <div style={{ fontSize: 36, marginBottom: 20 }}>{p.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#111827", margin: "0 0 12px", lineHeight: 1.4 }}>{p.title}</h3>
                  <p style={{ fontSize: 13.5, fontWeight: 400, color: "#4b5563", lineHeight: 1.8, margin: 0 }}>{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. DEEP DIVE SECTION (Farming & Farmers) ════════════ */}
      <section style={{ padding: "100px 64px", background: "#f5f5f1" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}>
          
          {/* Image/Visual Representation */}
          <FadeUp>
            <div style={{ position: "relative", padding: "20px 0" }}>
              <div style={{ background: "linear-gradient(135deg,#00645c,#4a7c59)", borderRadius: "30px", height: 420, display: "flex", flexDirection: "column", justifyContent: "center", padding: 50, color: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,100,92,0.15)" }}>
                <div style={{ position: "absolute", bottom: -60, right: -20, fontSize: "14rem", opacity: 0.1, transform: "rotate(-15deg)" }}>🌿</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 600, margin: "0 0 16px", lineHeight: 1.2 }}>Respecting the Soil</h3>
                <p style={{ fontSize: 15, fontWeight: 300, opacity: 0.9, lineHeight: 1.8, maxWidth: "90%" }}>
                  Daily monitoring ensures peak potency when harvesting the herbs. Earth-friendly fertilizers and soil solarization techniques nourish the soil, boosting fertility and water retention.
                </p>
                <div style={{ marginTop: 40, display: "flex", gap: 20 }}>
                  <div>
                    <p style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>100%</p>
                    <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7, margin: "4px 0 0" }}>Chemical-Free</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Traceable</p>
                    <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7, margin: "4px 0 0" }}>Sourcing</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Highlights Grid */}
          <div>
            <FadeUp>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: "#a35e4e", textTransform: "uppercase", marginBottom: 14 }}>Beyond Business</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, lineHeight: 1.2, color: "#111827", margin: "0 0 40px" }}>
                Empowering Lives,<br />Protecting Nature
              </h2>
            </FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {highlights.map((item, i) => (
                <FadeUp key={item.name} delay={i * 70}>
                  <div style={{ background: "#fff", padding: "24px", borderRadius: 16, border: "1px solid #e5e7eb", display: "flex", gap: 16, alignItems: "flex-start", transition: "border-color 0.3s" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "#00645c"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e7eb"}>
                    <div style={{ fontSize: 28, background: "#f9fafb", width: 52, height: 52, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {item.emoji}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>{item.name}</h4>
                      <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══ 4. CLOSING QUOTE / BANNER ════════════════════════════ */}
      <section style={{ padding: "90px 64px", background: "#fff" }}>
        <FadeUp>
          <div style={{ maxWidth: 1380, margin: "0 auto", background: "linear-gradient(135deg,#1a4f47 0%,#00645c 100%)", borderRadius: 28, padding: "70px", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
            
            <div style={{ position: "absolute", top: "10%", left: "5%", fontSize: "8rem", opacity: 0.05, transform: "rotate(-10deg)" }}>✨</div>
            <div style={{ position: "absolute", bottom: "5%", right: "5%", fontSize: "10rem", opacity: 0.05 }}>🌍</div>

            <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
              <div style={{ fontSize: 36, color: "#4db6ac", fontFamily: "'Playfair Display', serif", lineHeight: 1, marginBottom: 16 }}>"</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontStyle: "italic", fontWeight: 600, lineHeight: 1.4, margin: "0 0 30px" }}>
                Himalaya's vision of development is holistic. We prioritize investing in the communities where we operate, by making meaningful contributions.
              </h2>
              <a href="#about" style={{ display: "inline-block", background: "#fff", color: "#00645c", padding: "14px 36px", borderRadius: 50, fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                Back to Our Story
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Global CSS for Fonts & Utilities */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,600;1,700&family=DM+Sans:wght@300;400;600;700&display=swap');
        
        @media (max-width:1024px) {
          section > div[style*="grid-template-columns: 1fr 0.85fr"],
          section > div[style*="grid-template-columns: 1fr 1.1fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          section > div > div[style*="repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width:640px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          section > div > div[style*="repeat(2"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}