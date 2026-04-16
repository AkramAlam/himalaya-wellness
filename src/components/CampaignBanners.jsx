import React, { useState } from 'react';

const CampaignBanners = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&family=DM+Sans:wght@300;400;600;700&display=swap');
        .cb-root { font-family: 'DM Sans', sans-serif; }
        .cb-display { font-family: 'Playfair Display', serif; }

        /* ── Banner shared ── */
        .cb-banner {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          height: 460px;
          transition: box-shadow 0.35s ease;
        }
        .cb-banner:hover { box-shadow: 0 24px 60px rgba(0,0,0,0.16); }

        /* ── Shimmer on CTA ── */
        .cb-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 8px;
          border-radius: 100px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          padding: 12px 26px;
          transition: transform 0.22s, box-shadow 0.22s;
          text-decoration: none;
        }
        .cb-cta:hover { transform: translateY(-2px); }
        .cb-cta::after {
          content: '';
          position: absolute; top:0; left:-100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          animation: cb-shimmer 2.6s ease-in-out infinite;
        }
        @keyframes cb-shimmer {
          0%   { left: -100%; }
          60%  { left: 130%; }
          100% { left: 130%; }
        }

        /* ── Spin badge ── */
        @keyframes cb-spin { to { transform: rotate(360deg); } }
        .cb-spin-text { animation: cb-spin 12s linear infinite; }

        /* ── Float ── */
        @keyframes cb-float {
          0%,100% { transform: translateY(0) rotate(12deg); }
          50%      { transform: translateY(-10px) rotate(12deg); }
        }
        .cb-float { animation: cb-float 4s ease-in-out infinite; }
        .cb-banner:hover .cb-float { animation-play-state: paused; transform: translateY(-6px) rotate(0deg); transition: transform 0.5s cubic-bezier(.22,1,.36,1); }

        /* ── Stagger blobs ── */
        .cb-blob {
          position: absolute; border-radius: 50%;
          pointer-events: none;
          transition: transform 0.5s ease;
        }
        .cb-banner:hover .cb-blob { transform: scale(1.18); }

        /* ── Tag pills ── */
        .cb-tag {
          display: inline-flex; align-items: center; gap: 6px;
          border-radius: 100px; padding: 5px 12px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
        }

        /* Brush stroke text */
        .cb-brush {
          display: block;
          padding: 4px 16px;
          font-weight: 900;
          font-style: italic;
          transform: rotate(-2deg);
          width: fit-content;
          line-height: 1.15;
        }

        /* Feature pill */
        .cb-feat {
          display: flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 100px;
          padding: 5px 12px 5px 5px;
          font-size: 10px; font-weight: 600; color: #fff;
          letter-spacing: 0.06em;
        }
        .cb-feat-dot {
          width: 20px; height: 20px; border-radius: 50%;
          background: rgba(255,255,255,0.9);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      <section className="cb-root py-10 sm:py-14" style={{ background: '#fafaf8' }}>
        <div className="w-[92%] max-w-[1380px] mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-7">
            <span style={{ width: 32, height: 2, background: '#a35e4e', borderRadius: 2, display: 'block' }} />
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a35e4e] font-semibold">Featured Campaigns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* ══════════════════════════════════════════
                BANNER 1 — Baby Ghee Range (Warm Cream)
            ══════════════════════════════════════════ */}
            <div
              className="cb-banner"
              style={{ background: 'linear-gradient(135deg, #fdfaf3 0%, #fef3e2 55%, #fde8c8 100%)' }}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background blobs */}
              <div className="cb-blob" style={{ width:260, height:260, background:'#fde68a', opacity:0.25, top:-60, right:-60 }} />
              <div className="cb-blob" style={{ width:150, height:150, background:'#fed7aa', opacity:0.3, bottom:20, left:-40 }} />
              <div className="cb-blob" style={{ width:80, height:80, background:'#f97316', opacity:0.08, top:'40%', left:'30%' }} />

              {/* Decorative dots */}
              <div style={{ position:'absolute', top:28, left:28, width:8, height:8, borderRadius:'50%', background:'#f97316', opacity:0.35 }} />
              <div style={{ position:'absolute', top:44, left:48, width:5, height:5, borderRadius:'50%', background:'#f59e0b', opacity:0.4 }} />
              <div style={{ position:'absolute', bottom:40, right:40, width:6, height:6, borderRadius:'50%', background:'#f97316', opacity:0.3 }} />

              {/* Grid pattern */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity:0.04 }}>
                <defs>
                  <pattern id="g1" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M32 0L0 0 0 32" fill="none" stroke="#92400e" strokeWidth="0.6" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#g1)" />
              </svg>

              {/* ── Baby product visual (left) ── */}
              <div style={{ position:'absolute', left:0, bottom:0, width:200, zIndex:2 }}>
                {/* Baby skin illustration */}
                <div style={{ position:'relative', width:'100%', height:280, display:'flex', alignItems:'flex-end', justifyContent:'center' }}>
                  {/* Soft glow under */}
                  <div style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', width:160, height:40, background:'rgba(249,115,22,0.15)', borderRadius:'50%', filter:'blur(16px)' }} />
                  {/* Baby body shape */}
                  <div style={{ width:110, height:200, background:'linear-gradient(160deg,#fed7aa,#fde68a)', borderRadius:'60px 60px 40px 40px', position:'relative', marginBottom:12 }}>
                    {/* Face */}
                    <div style={{ position:'absolute', top:-30, left:'50%', transform:'translateX(-50%)', width:70, height:70, borderRadius:'50%', background:'linear-gradient(135deg,#fed7aa,#fdba74)' }}>
                      {/* Eyes */}
                      <div style={{ position:'absolute', top:26, left:14, width:8, height:8, borderRadius:'50%', background:'#92400e' }} />
                      <div style={{ position:'absolute', top:26, right:14, width:8, height:8, borderRadius:'50%', background:'#92400e' }} />
                      {/* Smile */}
                      <svg style={{ position:'absolute', bottom:14, left:'50%', transform:'translateX(-50%)' }} width="22" height="10" viewBox="0 0 22 10">
                        <path d="M2 2 Q11 10 20 2" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                    {/* Product jar on tummy */}
                    <div style={{ position:'absolute', bottom:30, left:'50%', transform:'translateX(-50%)', width:36, height:28, background:'linear-gradient(135deg,#fff,#fef3c7)', borderRadius:8, border:'1.5px solid rgba(251,191,36,0.4)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <span style={{ fontSize:10, fontWeight:800, color:'#b45309', letterSpacing:'0.05em', textAlign:'center', lineHeight:1.2 }}>HIM<br/>ALAYA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── NEW badge ── */}
              <div style={{ position:'absolute', left:36, bottom:80, zIndex:10 }}>
                <div style={{ background:'#f97316', color:'#fff', borderRadius:'50%', width:52, height:52, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:15, boxShadow:'0 4px 14px rgba(249,115,22,0.4)' }}>
                  New
                </div>
              </div>

              {/* ── pH 5.5 spinning badge ── */}
              <div style={{ position:'absolute', right:24, top:'28%', zIndex:10 }}>
                <div style={{ position:'relative', width:72, height:72 }}>
                  {/* Spinning ring text */}
                  <svg className="cb-spin-text" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} viewBox="0 0 72 72">
                    <defs>
                      <path id="circ" d="M36,36 m-28,0 a28,28 0 1,1 56,0 a28,28 0 1,1 -56,0" />
                    </defs>
                    <text fontSize="7.5" fontWeight="700" fill="#7c3aed" letterSpacing="2">
                      <textPath href="#circ">DERMATOLOGICALLY TESTED • </textPath>
                    </text>
                  </svg>
                  {/* Inner circle */}
                  <div style={{ position:'absolute', inset:12, borderRadius:'50%', background:'#fff', border:'2px solid #7c3aed', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 10px rgba(124,58,237,0.2)' }}>
                    <span style={{ color:'#7c3aed', fontWeight:900, fontSize:9, lineHeight:1 }}>pH</span>
                    <span style={{ color:'#7c3aed', fontWeight:900, fontSize:16, lineHeight:1 }}>5.5</span>
                  </div>
                </div>
              </div>

              {/* ── Typography (right side) ── */}
              <div style={{ position:'absolute', right:28, top:36, zIndex:5, maxWidth:220, textAlign:'right' }}>
                <div className="cb-tag" style={{ background:'rgba(249,115,22,0.1)', color:'#c2410c', marginLeft:'auto', marginBottom:12 }}>
                  <span style={{ width:6, height:6, borderRadius:'50%', background:'#f97316', display:'inline-block' }} />
                  Baby Care
                </div>
                <h3 className="cb-display" style={{ fontSize:'clamp(1.6rem,3.2vw,2.5rem)', lineHeight:1.1, color:'#92400e' }}>
                  The <em style={{ color:'#f97316' }}>Goodness</em><br />
                  of <strong style={{ color:'#d97706' }}>GHEE</strong>
                </h3>
                <p style={{ fontSize:13, color:'#b45309', fontWeight:600, marginTop:8, lineHeight:1.4 }}>
                  for baby's<br /><strong style={{ fontSize:16 }}>Sensitive Skin</strong>
                </p>
                <p style={{ fontSize:9, color:'#d97706', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginTop:10 }}>
                  Himalaya Baby Ghee Range
                </p>
                <a href="#baby-ghee" className="cb-cta" style={{ background:'#f97316', color:'#fff', marginTop:16, boxShadow:'0 4px 18px rgba(249,115,22,0.35)' }}>
                  Shop Now
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5h9M7 3l3.5 3.5L7 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

            </div>


            {/* ══════════════════════════════════════════
                BANNER 2 — Neem Face Wash (Deep Forest)
            ══════════════════════════════════════════ */}
            <div
              className="cb-banner"
              style={{ background: 'linear-gradient(145deg, #052e16 0%, #14532d 40%, #166534 100%)' }}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background blobs */}
              <div className="cb-blob" style={{ width:300, height:300, background:'#16a34a', opacity:0.18, top:-80, right:-80 }} />
              <div className="cb-blob" style={{ width:180, height:180, background:'#4ade80', opacity:0.1, bottom:-40, left:60 }} />

              {/* Leaf pattern overlay */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity:0.06 }}>
                <defs>
                  <pattern id="leaf" width="60" height="60" patternUnits="userSpaceOnUse">
                    <ellipse cx="30" cy="30" rx="22" ry="12" fill="#4ade80" transform="rotate(-30 30 30)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leaf)" />
              </svg>

              {/* ── Floating product tube ── */}
              <div className="cb-float" style={{ position:'absolute', right:40, top:40, zIndex:5, transformOrigin:'center center' }}>
                <div style={{ width:80, height:190, position:'relative' }}>
                  {/* Cap */}
                  <div style={{ width:56, height:22, borderRadius:'50% 50% 0 0', background:'#052e16', margin:'0 auto', position:'relative', zIndex:2 }} />
                  {/* Neck */}
                  <div style={{ width:48, height:12, background:'#065f46', margin:'-2px auto 0', borderRadius:3 }} />
                  {/* Body */}
                  <div style={{ width:80, height:150, borderRadius:'6px 6px 20px 20px', background:'linear-gradient(160deg,#15803d,#166534)', border:'1.5px solid rgba(74,222,128,0.25)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:6, padding:'12px 8px', position:'relative', overflow:'hidden' }}>
                    {/* Shine */}
                    <div style={{ position:'absolute', top:0, left:'15%', width:'25%', height:'100%', background:'linear-gradient(180deg,rgba(255,255,255,0.12) 0%,transparent 100%)', borderRadius:'0 0 50% 50%' }} />
                    <span style={{ fontSize:18 }}>🌿</span>
                    <span style={{ fontSize:7, color:'rgba(255,255,255,0.9)', fontWeight:800, letterSpacing:'0.12em', textAlign:'center', lineHeight:1.4 }}>PURE<br />NEEM</span>
                    <span style={{ fontSize:6, color:'rgba(255,255,255,0.5)', letterSpacing:'0.1em', textAlign:'center' }}>FACE WASH</span>
                    {/* Label strip */}
                    <div style={{ position:'absolute', bottom:0, left:0, right:0, height:28, background:'rgba(0,0,0,0.2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <span style={{ fontSize:6.5, color:'rgba(255,255,255,0.7)', fontWeight:700, letterSpacing:'0.2em' }}>HIMALAYA</span>
                    </div>
                  </div>
                  {/* Shadow */}
                  <div style={{ width:60, height:10, background:'rgba(0,0,0,0.25)', borderRadius:'50%', filter:'blur(6px)', margin:'4px auto 0' }} />
                </div>
              </div>

              {/* ── Neem leaf illustration ── */}
              <div style={{ position:'absolute', top:20, left:20, opacity:0.12, zIndex:1 }}>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <ellipse cx="60" cy="60" rx="48" ry="26" fill="#4ade80" transform="rotate(-35 60 60)" />
                  <line x1="60" y1="28" x2="60" y2="92" stroke="#16a34a" strokeWidth="1.5" transform="rotate(-35 60 60)" />
                </svg>
              </div>

              {/* ── Typography ── */}
              <div style={{ position:'absolute', left:28, bottom:36, zIndex:10, maxWidth:240 }}>
                <div className="cb-tag" style={{ background:'rgba(74,222,128,0.15)', color:'#86efac', marginBottom:14 }}>
                  <span style={{ width:5, height:5, borderRadius:'50%', background:'#4ade80', display:'inline-block', animation:'cb-shimmer 2s ease-in-out infinite' }} />
                  Ayurvedic Formula
                </div>

                {/* Brush stroke words */}
                <div style={{ display:'flex', flexDirection:'column', gap:2, marginBottom:16 }}>
                  <span className="cb-brush" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:'clamp(1rem,2.2vw,1.25rem)', backdropFilter:'blur(8px)' }}>
                    Pimple ka
                  </span>
                  <span className="cb-brush" style={{ background:'#4ade80', color:'#052e16', fontSize:'clamp(1.5rem,3.5vw,2.2rem)' }}>
                    Original
                  </span>
                  <span className="cb-brush" style={{ background:'#4ade80', color:'#052e16', fontSize:'clamp(1.5rem,3.5vw,2.2rem)', marginTop:2 }}>
                    Solution.
                  </span>
                </div>

                {/* Feature pills */}
                <div style={{ display:'flex', flexDirection:'column', gap:7, marginBottom:20 }}>
                  {[
                    { icon:'🌿', text:'Soap Free' },
                    { icon:'🧪', text:'Paraben Free' },
                    { icon:'♻️', text:'100% Recyclable' },
                  ].map((f) => (
                    <div key={f.text} className="cb-feat">
                      <div className="cb-feat-dot">
                        <span style={{ fontSize:11 }}>{f.icon}</span>
                      </div>
                      {f.text}
                    </div>
                  ))}
                </div>

                <a href="#neem-face-wash" className="cb-cta" style={{ background:'#4ade80', color:'#052e16', boxShadow:'0 4px 20px rgba(74,222,128,0.3)' }}>
                  Shop Now
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5h9M7 3l3.5 3.5L7 10" stroke="#052e16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* ── Rating badge top-left ── */}
              <div style={{ position:'absolute', top:28, left:28, background:'rgba(255,255,255,0.1)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:12, padding:'8px 12px', zIndex:8 }}>
                <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                  <span style={{ fontSize:13, color:'#fbbf24' }}>★</span>
                  <span style={{ fontSize:14, fontWeight:800, color:'#fff' }}>4.8</span>
                </div>
                <p style={{ fontSize:9, color:'rgba(255,255,255,0.5)', marginTop:2, letterSpacing:'0.08em' }}>3.2K REVIEWS</p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CampaignBanners;