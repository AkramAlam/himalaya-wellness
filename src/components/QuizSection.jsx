import React, { useState } from 'react';

const quizCategories = [
  {
    id: 1,
    title: "Cardiac Wellness",
    subtitle: "Heart & Circulation",
    emoji: "❤️",
    accentColor: "#e11d48",
    bgFrom: "#fff1f2",
    bgTo: "#ffe4e6",
    iconPath: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
  {
    id: 2,
    title: "Digestive Wellness",
    subtitle: "Gut Health & Detox",
    emoji: "🔥",
    accentColor: "#ea580c",
    bgFrom: "#fff7ed",
    bgTo: "#fed7aa",
    iconPath: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.866 8.21 8.21 0 003.001 2.48z",
  },
  {
    id: 3,
    title: "Daily Skincare",
    subtitle: "Glow & Radiance",
    emoji: "✨",
    accentColor: "#7c3aed",
    bgFrom: "#faf5ff",
    bgTo: "#e9d5ff",
    iconPath: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
  {
    id: 4,
    title: "Joint Wellness",
    subtitle: "Mobility & Strength",
    emoji: "⚡",
    accentColor: "#d97706",
    bgFrom: "#fffbeb",
    bgTo: "#fde68a",
    iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    id: 5,
    title: "Reproductive Wellness",
    subtitle: "Hormonal Balance",
    emoji: "🌸",
    accentColor: "#db2777",
    bgFrom: "#fdf2f8",
    bgTo: "#fbcfe8",
    iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    id: 6,
    title: "Hair Concern",
    subtitle: "Strength & Shine",
    emoji: "🌿",
    accentColor: "#00645c",
    bgFrom: "#f0fdf4",
    bgTo: "#bbf7d0",
    iconPath: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 00-1.5 1.5v0c0 .355-.186.676-.401.959a1.64 1.64 0 01-1.349.541v1.875c0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003-.215-.283-.401-.604-.401-.959v0a1.5 1.5 0 011.5-1.5h3.75a1.5 1.5 0 001.5-1.5v0c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875z",
  },
  {
    id: 7,
    title: "Urinary Wellness",
    subtitle: "Kidney & Bladder",
    emoji: "💧",
    accentColor: "#0284c7",
    bgFrom: "#f0f9ff",
    bgTo: "#bae6fd",
    iconPath: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 7.5v4.5l3 3",
  },
  {
    id: 8,
    title: "Immune Wellness",
    subtitle: "Defence & Vitality",
    emoji: "🛡️",
    accentColor: "#15803d",
    bgFrom: "#f0fdf4",
    bgTo: "#a7f3d0",
    iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
];

const QuizSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .qs-root { font-family: 'DM Sans', sans-serif; }
        .qs-display { font-family: 'Playfair Display', serif; }

        @keyframes qs-fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .qs-fade { animation: qs-fadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }

        .qs-card {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          border: 1px solid transparent;
          transition: transform 0.32s cubic-bezier(.22,1,.36,1), box-shadow 0.32s ease, border-color 0.25s;
          display: flex;
          flex-direction: column;
          height: 220px;
        }
        .qs-card:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12);
        }

        /* Large bg icon */
        .qs-bg-icon {
          position: absolute;
          bottom: -10px; right: -10px;
          opacity: 0.1;
          transition: opacity 0.35s, transform 0.45s cubic-bezier(.22,1,.36,1);
        }
        .qs-card:hover .qs-bg-icon {
          opacity: 0.18;
          transform: scale(1.15) rotate(8deg);
        }

        /* Decorative circle blobs */
        .qs-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          transition: transform 0.5s cubic-bezier(.22,1,.36,1);
        }
        .qs-card:hover .qs-blob { transform: scale(1.2); }

        /* Number tag */
        .qs-num {
          position: absolute;
          top: 14px; right: 14px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.45;
        }

        /* Arrow button */
        .qs-arrow {
          width: 34px; height: 34px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.25s, transform 0.25s;
          flex-shrink: 0;
        }
        .qs-card:hover .qs-arrow {
          transform: translateX(3px);
        }

        /* Pill tag */
        .qs-pill {
          display: inline-flex; align-items: center;
          border-radius: 100px;
          padding: 2px 9px;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 10px;
          width: fit-content;
        }

        /* Progress bar decoration */
        .qs-bar {
          height: 2px;
          border-radius: 2px;
          width: 100%;
          margin-top: 8px;
          transition: width 0.4s ease;
        }
      `}</style>

      <section className="qs-root py-16 sm:py-20" style={{ background: '#f5f5f1' }}>
        <div className="w-[92%] max-w-[1380px] mx-auto">

          {/* ── Header ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6 qs-fade">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#00645c] font-semibold mb-3">
                Personalised For You
              </p>
              <h2 className="qs-display text-3xl sm:text-4xl text-gray-900 leading-tight">
                Find Your Perfect <br />
                <em className="text-[#00645c]">Wellness Match</em>
              </h2>
              <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg,#00645c,#a35e4e)', borderRadius: 2, marginTop: 12 }} />
            </div>
            <div className="max-w-xs">
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Answer a few simple questions and get Ayurvedic product recommendations tailored just for you.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex -space-x-2">
                  {['#bbf7d0','#fed7aa','#e9d5ff','#bae6fd'].map((c,i) => (
                    <div key={i} style={{ width:28, height:28, borderRadius:'50%', background:c, border:'2px solid #f5f5f1' }} />
                  ))}
                </div>
                <span className="text-xs text-gray-400">50,000+ quizzes taken</span>
              </div>
            </div>
          </div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quizCategories.map((cat, i) => (
              <div
                key={cat.id}
                className="qs-card qs-fade"
                style={{
                  background: `linear-gradient(145deg, ${cat.bgFrom} 0%, ${cat.bgTo} 100%)`,
                  borderColor: hovered === cat.id ? `${cat.accentColor}30` : 'transparent',
                  animationDelay: `${i * 0.06}s`,
                }}
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Decorative blobs */}
                <div className="qs-blob" style={{ width:100, height:100, background: cat.accentColor, opacity:0.08, top:-20, left:-20 }} />
                <div className="qs-blob" style={{ width:60, height:60, background: cat.accentColor, opacity:0.06, bottom:30, right:-10 }} />

                {/* Large background icon */}
                <div className="qs-bg-icon">
                  <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke={cat.accentColor} strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d={cat.iconPath} />
                  </svg>
                </div>

                {/* Number */}
                <span className="qs-num" style={{ color: cat.accentColor }}>0{cat.id}</span>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-5">

                  {/* Pill */}
                  <div className="qs-pill" style={{ background: `${cat.accentColor}14`, color: cat.accentColor }}>
                    Quiz
                  </div>

                  {/* Emoji + Title */}
                  <div className="mb-1">
                    <span style={{ fontSize: 28 }}>{cat.emoji}</span>
                  </div>
                  <h3 className="qs-display text-[15px] text-gray-900 leading-snug mb-0.5">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] mb-auto" style={{ color: cat.accentColor }}>
                    {cat.subtitle}
                  </p>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between mt-4">
                    <span style={{ fontSize: 10, color: '#9ca3af', letterSpacing:'0.08em', fontWeight:500 }}>
                      TAKE QUIZ →
                    </span>
                    <div
                      className="qs-arrow"
                      style={{ background: hovered === cat.id ? cat.accentColor : `${cat.accentColor}14` }}
                    >
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10"
                          stroke={hovered === cat.id ? '#fff' : cat.accentColor}
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Accent bar */}
                  <div className="qs-bar" style={{ background: `${cat.accentColor}20` }}>
                    <div style={{ height:'100%', width: hovered === cat.id ? '100%' : '30%', background: cat.accentColor, borderRadius:2, transition:'width 0.5s ease' }} />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 rounded-2xl" style={{ background:'#00645c' }}>
            <div>
              <p className="qs-display text-xl text-white mb-1">Not sure where to start?</p>
              <p className="text-sm font-light" style={{ color:'rgba(255,255,255,0.65)' }}>
                Take our general wellness quiz and we'll guide you.
              </p>
            </div>
            <button
              className="flex-shrink-0 flex items-center gap-3 bg-white rounded-full px-7 py-3.5 text-sm font-bold transition-all hover:bg-green-50 hover:shadow-lg group"
              style={{ color:'#00645c', letterSpacing:'0.04em' }}
            >
              Start General Quiz
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M2 8h12M10 4l4 4-4 4" stroke="#00645c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default QuizSection;