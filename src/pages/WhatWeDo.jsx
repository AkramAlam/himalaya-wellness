import { useEffect, useRef, useState } from "react";

/* ── Google Fonts ── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap";
document.head.appendChild(fontLink);

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

/* ── Animated Counter ── */
function AnimatedNumber({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.ceil(target / 55);
    const id = setInterval(() => {
      cur += step;
      if (cur >= target) { setCount(target); clearInterval(id); }
      else setCount(cur);
    }, 22);
    return () => clearInterval(id);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
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

/* ══ DATA ══════════════════════════════════════════ */
const pillars = [
  { num: "01", icon: "🌿", title: "Pharmaceutical-Grade Herbal Care", body: "We develop herbal healthcare and personal care products of the highest quality, rooted in modern scientific research and international quality standards.", accent: "#00645c", light: "#e8f5f4" },
  { num: "02", icon: "🔬", title: "Science-Backed Innovation", body: "Our mission is to contemporarize traditional Ayurvedic medicine — ensuring every product is safe, efficacious, and validated by rigorous clinical research.", accent: "#a35e4e", light: "#fdf0ec" },
  { num: "03", icon: "🌍", title: "Sustainable Herb Farming", body: "We partner with local communities and promote eco-friendly herb farming, because the health of future generations depends on our planet's well-being.", accent: "#4a7c59", light: "#eef5ee" },
  { num: "04", icon: "❤️", title: "Wellness for Everyone", body: "At the heart of our mission is the belief that good health should be accessible to everyone — driven by our commitment to science and humanity.", accent: "#6b4c8a", light: "#f2eef8" },
];

const stats = [
  { target: 90, suffix: "+", label: "Years of Trust" },
  { target: 500, suffix: "+", label: "Herbal Products" },
  { target: 100, suffix: "+", label: "Countries" },
  { target: 1, suffix: "B+", label: "Lives Touched" },
];

const categories = [
  { emoji: "💊", name: "Pharmaceuticals" },
  { emoji: "✨", name: "Personal Care" },
  { emoji: "👶", name: "Baby Care" },
  { emoji: "🧘", name: "Wellness" },
  { emoji: "🐾", name: "Animal Health" },
  { emoji: "🤱", name: "For Moms" },
  { emoji: "💪", name: "Nutrition" },
  { emoji: "🌱", name: "Pure Herbs" },
];

/* ══ MAIN COMPONENT ════════════════════════════════ */
export default function WhatWeDo() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fafaf8", color: "#111827", overflowX: "hidden" }}>

      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <section style={{ paddingTop: 102, minHeight: "92vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

        {/* BG */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#f0f7f5 0%,#fdf8f2 60%,#fdf0ec 100%)" }} />
        <div style={{ position: "absolute", top: "5%", right: "-10%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,100,92,0.08) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-8%", left: "-6%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(163,94,78,0.07) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%) rotate(-90deg)", fontSize: 9, fontWeight: 700, letterSpacing: "0.32em", color: "#d1d5db", textTransform: "uppercase" }}>
          Since 1930 — Himalaya Wellness
        </div>

        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1380, margin: "0 auto", padding: "72px 64px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 72, alignItems: "center" }}>

          {/* LEFT */}
          <div>
            <FadeUp>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.32em", color: "#00645c", textTransform: "uppercase", marginBottom: 18 }}>— What We Do</p>
            </FadeUp>
            <FadeUp delay={80}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.6rem,4.5vw,4rem)", fontWeight: 700, lineHeight: 1.12, margin: "0 0 24px" }}>
                Spreading the{" "}
                <em style={{ color: "#00645c", fontStyle: "italic" }}>Promise</em>
                <br />of Happiness<br />Through Wellness
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p style={{ fontSize: 16, fontWeight: 300, color: "#4b5563", lineHeight: 1.85, maxWidth: 500, margin: "0 0 36px" }}>
                Making herbal wellness a part of every home — trusted, science-driven, and rooted in 90+ years of Ayurvedic wisdom.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#pillars" style={{ background: "#00645c", color: "#fff", padding: "14px 32px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#004d47"}
                  onMouseLeave={e => e.currentTarget.style.background = "#00645c"}>
                  Our Mission
                </a>
                <a href="#categories" style={{ border: "1.5px solid #00645c", color: "#00645c", padding: "14px 32px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#00645c"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#00645c"; }}>
                  Our Products
                </a>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT card */}
          <FadeUp delay={200}>
            <div style={{ position: "relative" }}>
              <div style={{ background: "linear-gradient(145deg,#00645c,#003d38)", borderRadius: 28, padding: "48px 40px", color: "#fff", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -50, right: -50, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
                <p style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 14 }}>Our Commitment</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.85rem", fontStyle: "italic", fontWeight: 600, lineHeight: 1.35, margin: "0 0 20px" }}>
                  "Nature's Wealth,<br />Science's Wisdom"
                </h2>
                <p style={{ fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: "0 0 32px" }}>
                  We believe the best healthcare combines the healing power of plants with the rigour of modern science.
                </p>
                <div style={{ display: "flex", gap: 28, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 28 }}>
                  {[["500+", "Products"], ["90+", "Years"], ["100+", "Countries"]].map(([n, l]) => (
                    <div key={l}>
                      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, margin: 0 }}>{n}</p>
                      <p style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", margin: "3px 0 0", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Float badge bottom-left */}
              <div style={{ position: "absolute", bottom: -20, left: -20, background: "#fff", borderRadius: 18, padding: "14px 20px", boxShadow: "0 12px 36px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 26 }}>🌿</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#111827", margin: 0 }}>100% Ayurvedic</p>
                  <p style={{ fontSize: 11, color: "#9ca3af", margin: "2px 0 0" }}>Herb-to-product care</p>
                </div>
              </div>
              {/* Float badge top-right */}
              <div style={{ position: "absolute", top: -16, right: -16, background: "#a35e4e", color: "#fff", borderRadius: 14, padding: "10px 16px", boxShadow: "0 8px 24px rgba(163,94,78,0.3)" }}>
                <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.75, margin: 0 }}>Head-to-Heel</p>
                <p style={{ fontSize: 13, fontWeight: 700, margin: "2px 0 0" }}>Wellness Solutions</p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35 }}>
          <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#6b7280" }}>Scroll</span>
          <div style={{ width: 1, height: 44, background: "linear-gradient(to bottom,#00645c,transparent)", animation: "wdPulse 2s infinite" }} />
        </div>
      </section>

      {/* ══ 2. STATS ═════════════════════════════════════ */}
      <section style={{ background: "#111827", padding: "60px 64px" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 80}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 700, color: "#fff", margin: 0 }}>
                  <AnimatedNumber target={s.target} suffix={s.suffix} />
                </p>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6b7280", margin: "8px 0 0" }}>{s.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ══ 3. LONG COPY ═════════════════════════════════ */}
      <section style={{ padding: "110px 64px", maxWidth: 1380, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>
        {/* Visual mosaic */}
        <FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ gridColumn: "1/3", background: "linear-gradient(135deg,#e8f5f4,#b2dfdb)", borderRadius: 22, padding: 36, minHeight: 190, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
              <div>
                <div style={{ fontSize: 52, marginBottom: 8 }}>🌱</div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontStyle: "italic", color: "#00453f", margin: 0 }}>Rooted in Ayurveda</p>
              </div>
            </div>
            <div style={{ background: "#00645c", borderRadius: 18, padding: 24, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 130, textAlign: "center", color: "#fff" }}>
              <div>
                <div style={{ fontSize: 32 }}>🔬</div>
                <p style={{ fontSize: 11, fontWeight: 600, marginTop: 8, letterSpacing: "0.05em" }}>Science-Backed</p>
              </div>
            </div>
            <div style={{ background: "#fdf0ec", borderRadius: 18, padding: 24, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 130, textAlign: "center" }}>
              <div>
                <div style={{ fontSize: 32 }}>🤝</div>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#a35e4e", marginTop: 8, letterSpacing: "0.05em" }}>Community First</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Copy */}
        <div>
          <FadeUp>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: "#00645c", textTransform: "uppercase", marginBottom: 14 }}>Our Approach</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2, color: "#111827", margin: "0 0 30px" }}>
              Offering <em style={{ color: "#00645c" }}>Head-to-Heel</em> Wellness Solutions
            </h2>
          </FadeUp>
          {[
            "We develop pharmaceutical-grade herbal healthcare and personal care products of the highest quality for the health-conscious consumer. Our aim is to contemporarize traditional herbal medicine, ensuring our products are based on modern scientific research and international quality standards.",
            "In harnessing Nature's wealth to develop innovative herbal products, we work together with local communities and promote eco-friendly, sustainable methods of herb farming — because we understand that the health of future generations depends on the well-being of our planet.",
            "At the heart of the Himalaya mission is the belief that good health should be accessible to everyone, and we strive to make this possible through our commitment to science-driven herbal healthcare.",
          ].map((para, i) => (
            <FadeUp key={i} delay={i * 90}>
              <p style={{ fontSize: 15, fontWeight: 300, color: "#4b5563", lineHeight: 1.92, marginBottom: 18 }}>{para}</p>
            </FadeUp>
          ))}
          <FadeUp delay={280}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00645c", textDecoration: "none", borderBottom: "2px solid #00645c", paddingBottom: 2, transition: "gap 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.gap = "14px"}
              onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
              Discover Our Research <span>→</span>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ══ 4. PILLARS ═══════════════════════════════════ */}
      <section id="pillars" style={{ background: "#f5f5f1", padding: "100px 64px" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: "#a35e4e", textTransform: "uppercase", marginBottom: 12 }}>Core Pillars</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#111827", margin: 0 }}>What Drives Us</h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {pillars.map((p, i) => (
              <FadeUp key={p.num} delay={i * 75}>
                <div style={{ background: "#fff", borderRadius: 22, padding: 28, border: "1px solid #e5e7eb", height: "100%", boxSizing: "border-box", transition: "transform 0.25s, box-shadow 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                    <span style={{ fontSize: 36 }}>{p.icon}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: p.light, WebkitTextStroke: `1.5px ${p.accent}` }}>{p.num}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: "#111827", margin: "0 0 10px", lineHeight: 1.4 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, fontWeight: 300, color: "#6b7280", lineHeight: 1.82, margin: "0 0 20px" }}>{p.body}</p>
                  <div style={{ height: 3, width: 36, borderRadius: 99, background: p.accent }} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. CATEGORIES ════════════════════════════════ */}
      <section id="categories" style={{ padding: "100px 64px" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 20 }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: "#00645c", textTransform: "uppercase", marginBottom: 12 }}>What We Offer</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.3rem", fontWeight: 700, color: "#111827", margin: 0 }}>Our Product Universe</h2>
              </div>
              <a href="#" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00645c", textDecoration: "none", borderBottom: "2px solid #00645c", paddingBottom: 2 }}>
                View All →
              </a>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {categories.map((cat, i) => (
              <FadeUp key={cat.name} delay={i * 55}>
                <div style={{ background: "#f5f5f1", borderRadius: 18, padding: "24px 20px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", transition: "all 0.22s", border: "1px solid transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#00645c"; e.currentTarget.style.transform = "scale(1.02)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#f5f5f1"; e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.transform = "scale(1)"; }}>
                  <span style={{ fontSize: 30 }}>{cat.emoji}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{cat.name}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. VISION QUOTE ══════════════════════════════ */}
      <section style={{ background: "#111827", padding: "100px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 580, height: 580, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,100,92,0.14) 0%,transparent 70%)", pointerEvents: "none" }} />
        <FadeUp>
          <div style={{ maxWidth: 840, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 44, color: "rgba(0,100,92,0.4)", fontFamily: "'Playfair Display', serif", lineHeight: 1, marginBottom: 4 }}>"</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.7rem,3.2vw,2.6rem)", fontStyle: "italic", fontWeight: 600, color: "#fff", lineHeight: 1.45, margin: "0 0 24px" }}>
              To be the most <span style={{ color: "#4db6ac" }}>trusted</span> company in scientific herbal healthcare and most <span style={{ color: "#4db6ac" }}>admired</span> for our ethics, values, and commitment to sustainability.
            </h2>
            <div style={{ width: 36, height: 2, background: "#00645c", margin: "0 auto 20px" }} />
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", color: "#6b7280", textTransform: "uppercase" }}>— Himalaya Wellness Vision</p>
          </div>
        </FadeUp>
      </section>

      {/* ══ 7. CTA BANNER ════════════════════════════════ */}
      <section style={{ padding: "90px 64px", background: "#fafaf8" }}>
        <FadeUp>
          <div style={{ maxWidth: 1380, margin: "0 auto", background: "linear-gradient(135deg,#e8f5f4 0%,#fdf0ec 100%)", borderRadius: 28, padding: "60px 72px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 28 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: "#00645c", textTransform: "uppercase", marginBottom: 10 }}>90+ Years & Counting</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.1rem", fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1.3 }}>
                Experience the Power<br />of Herbal Wellness
              </h2>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#" style={{ background: "#00645c", color: "#fff", padding: "15px 34px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#004d47"}
                onMouseLeave={e => e.currentTarget.style.background = "#00645c"}>
                Shop Now
              </a>
              <a href="#" style={{ border: "1.5px solid #111827", color: "#111827", padding: "15px 34px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#111827"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#111827"; }}>
                Our Story
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      <style>{`
        @keyframes wdPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
        @media (max-width:1024px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div[style*="repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width:640px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          section > div[style*="repeat(2"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}