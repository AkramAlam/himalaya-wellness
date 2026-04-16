import React, { useState } from 'react';

const cardsData = [
  {
    title: "Liver & Kidney",
    subtitle: "Wellness",
    description: "Clinically proven formulas to detox, protect, and restore your vital organs naturally.",
    tag: "Ayurvedic",
    bgColor: "#00645c",
    accentColor: "#a3f0e8",
    textColor: "#ffffff",
    subtitleColor: "rgba(255,255,255,0.65)",
    tagBg: "rgba(255,255,255,0.15)",
    tagText: "#ffffff",
    href: "#liver-kidney",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        {/* Kidney shape left */}
        <path d="M14 10c-4 0-7 3.5-7 8 0 5.5 4 9 7 11 1.5 1 2.5 2.5 2.5 4.5 0 1.5.5 3 2 3s2.5-1.5 2.5-3.5c0-2 1-3.5 2.5-4.5 3-2 5-5 5-9.5 0-5-2.5-9-7-9H14z"
          fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinejoin="round" />
        {/* Kidney shape right (smaller) */}
        <path d="M32 14c-2.5 0-4.5 2.2-4.5 5.5 0 3.5 2 5.8 4.5 7 1 .6 1.5 1.5 1.5 3 0 1.2.5 2 1.5 2s1.8-1 1.8-2.5c0-1.2.5-2 1.5-2.5 2-1.2 3.2-3.2 3.2-7 0-3-1.5-5.5-4.5-5.5H32z"
          fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinejoin="round" />
        {/* Inner detail lines */}
        <path d="M14 18c0 2.5 1 4.5 2.5 6" stroke="rgba(255,255,255,0.45)" strokeWidth="1" strokeLinecap="round" />
        <path d="M32 20c0 1.5.5 3 1.5 3.8" stroke="rgba(255,255,255,0.35)" strokeWidth="0.9" strokeLinecap="round" />
        {/* Drop icon */}
        <path d="M24 4l-2.5 4.5c-.8 1.5-.8 3.5 0 5 .8 1.5 2.5 2.5 2.5 2.5s1.7-1 2.5-2.5c.8-1.5.8-3.5 0-5L24 4z"
          fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Sleep & Stress",
    subtitle: "Wellness",
    description: "Harness the calming power of Ashwagandha & Brahmi for restful nights and peaceful days.",
    tag: "Best Seller",
    bgColor: "#ffffff",
    accentColor: "#00645c",
    textColor: "#111827",
    subtitleColor: "#6b7280",
    tagBg: "rgba(0,100,92,0.08)",
    tagText: "#00645c",
    href: "#sleep-stress",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        {/* Moon */}
        <path d="M30 10a14 14 0 0 1-14 20 14 14 0 1 0 14-20z"
          fill="rgba(0,100,92,0.12)" stroke="#00645c" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Stars */}
        <circle cx="34" cy="10" r="1.2" fill="#00645c" opacity="0.7" />
        <circle cx="38" cy="16" r="0.9" fill="#00645c" opacity="0.5" />
        <circle cx="32" cy="6" r="0.7" fill="#00645c" opacity="0.6" />
        {/* Z letters */}
        <text x="36" y="28" fontSize="5.5" fill="#e87454" fontWeight="800" fontFamily="serif" opacity="0.9">Z</text>
        <text x="39" y="23" fontSize="4" fill="#e87454" fontWeight="800" fontFamily="serif" opacity="0.6">z</text>
        <text x="41.5" y="19.5" fontSize="2.8" fill="#e87454" fontWeight="800" fontFamily="serif" opacity="0.4">z</text>
        {/* Wavy line (calm) */}
        <path d="M8 36 Q11 33 14 36 Q17 39 20 36 Q23 33 26 36"
          stroke="#00645c" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Men & Women's",
    subtitle: "Wellness",
    description: "Science-backed, gender-specific solutions rooted in centuries of Ayurvedic wisdom.",
    tag: "Trending",
    bgColor: "#1a1a2e",
    accentColor: "#e87454",
    textColor: "#ffffff",
    subtitleColor: "rgba(255,255,255,0.55)",
    tagBg: "rgba(232,116,84,0.2)",
    tagText: "#e87454",
    href: "#men-women",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
        {/* Female symbol */}
        <circle cx="16" cy="16" r="7" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="rgba(232,116,84,0.12)" />
        <path d="M16 23v8M12 28h8" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Male symbol */}
        <circle cx="31" cy="22" r="6" stroke="#e87454" strokeWidth="1.5" fill="rgba(232,116,84,0.1)" />
        <path d="M35 18l4-4M36 14h3v3" stroke="#e87454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Connection dot */}
        <circle cx="23.5" cy="19" r="1.5" fill="rgba(255,255,255,0.4)" />
      </svg>
    ),
  },
];

const WellnessCards = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .wc-root { font-family: 'DM Sans', sans-serif; }
        .wc-display { font-family: 'Playfair Display', serif; }

        @keyframes wc-fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wc-fade { animation: wc-fadeUp 0.65s cubic-bezier(.22,1,.36,1) both; }
        .wc-fade-0 { animation-delay: 0.05s; }
        .wc-fade-1 { animation-delay: 0.18s; }
        .wc-fade-2 { animation-delay: 0.31s; }

        .wc-card {
          border-radius: 22px;
          padding: 32px 28px;
          cursor: pointer;
          transition: transform 0.32s cubic-bezier(.22,1,.36,1), box-shadow 0.32s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid transparent;
        }
        .wc-card:hover { transform: translateY(-6px); }
        .wc-card-light { border-color: #e5e7eb; box-shadow: 0 2px 16px rgba(0,0,0,0.06); }
        .wc-card-light:hover { box-shadow: 0 16px 40px rgba(0,100,92,0.12); }
        .wc-card-dark:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.28); }

        .wc-noise {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .wc-tag {
          display: inline-flex;
          align-items: center;
          border-radius: 100px;
          padding: 3px 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 18px;
          width: fit-content;
        }

        .wc-icon-wrap {
          margin-bottom: 20px;
          transition: transform 0.4s cubic-bezier(.22,1,.36,1);
        }
        .wc-card:hover .wc-icon-wrap { transform: scale(1.08) rotate(-3deg); }

        .wc-arrow {
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-top: 20px;
          transition: transform 0.25s ease, background 0.25s ease;
          align-self: flex-start;
        }

        .wc-divider {
          width: 40px; height: 2px;
          border-radius: 2px;
          margin: 10px auto 0;
        }

        /* Decorative corner blob */
        .wc-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          transition: transform 0.4s ease;
        }
        .wc-card:hover .wc-blob { transform: scale(1.15); }
      `}</style>

      <section className="wc-root py-16 sm:py-20" style={{ background: '#f5f5f1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#00645c] font-semibold mb-3">
              Categories
            </p>
            <h2 className="wc-display text-3xl sm:text-4xl text-gray-900 leading-tight">
              Wellness for Every Need
            </h2>
            <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg,#00645c,#a35e4e)', borderRadius: 2, margin: '12px auto 0' }} />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {cardsData.map((card, index) => {
              const isLight = card.bgColor === '#ffffff';
              const isDark = card.bgColor === '#1a1a2e';

              return (
                <a
                  key={index}
                  href={card.href}
                  className={`wc-card wc-fade wc-fade-${index} ${isLight ? 'wc-card-light' : 'wc-card-dark'}`}
                  style={{ background: card.bgColor, textDecoration: 'none' }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Noise texture */}
                  <div className="wc-noise" />

                  {/* Decorative corner blob */}
                  <div
                    className="wc-blob"
                    style={{
                      width: 130, height: 130,
                      background: isLight ? 'rgba(0,100,92,0.07)' : isDark ? 'rgba(232,116,84,0.12)' : 'rgba(255,255,255,0.06)',
                      top: -30, right: -30,
                    }}
                  />
                  <div
                    className="wc-blob"
                    style={{
                      width: 70, height: 70,
                      background: isLight ? 'rgba(0,100,92,0.05)' : 'rgba(255,255,255,0.04)',
                      bottom: 20, left: -20,
                    }}
                  />

                  {/* Tag */}
                  <div
                    className="wc-tag"
                    style={{ background: card.tagBg, color: card.tagText }}
                  >
                    {card.tag}
                  </div>

                  {/* Icon */}
                  <div className="wc-icon-wrap">
                    {card.icon}
                  </div>

                  {/* Text */}
                  <h3
                    className="wc-display mb-1 leading-tight"
                    style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.75rem)', color: card.textColor }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                    style={{ color: card.subtitleColor }}
                  >
                    {card.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: isLight ? '#6b7280' : 'rgba(255,255,255,0.6)', fontWeight: 300 }}
                  >
                    {card.description}
                  </p>

                  {/* Arrow CTA */}
                  <div
                    className="wc-arrow"
                    style={{
                      background: hovered === index
                        ? card.accentColor
                        : isLight ? 'rgba(0,100,92,0.08)' : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4"
                        stroke={hovered === index ? '#fff' : (isLight ? card.accentColor : 'rgba(255,255,255,0.7)')}
                        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                </a>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default WellnessCards;