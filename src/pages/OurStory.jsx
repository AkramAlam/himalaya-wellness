import React, { useEffect, useRef, useState } from 'react';

const OurStory = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const milestones = [
    { year: '1930', event: 'Founded by M. Manal in Dehradun', icon: '🌿' },
    { year: '1955', event: 'Liv.52 launched — world\'s most prescribed herbal liver formula', icon: '💊' },
    { year: '1994', event: 'Personal Care range introduced globally', icon: '🌸' },
    { year: '2002', event: 'Expanded to 100+ countries worldwide', icon: '🌍' },
    { year: '2023', event: '50,000+ employees, still rooted in Ayurveda', icon: '🏆' },
  ];

  const values = [
    { title: 'Pure Ingredients', desc: 'Every herb sourced with care from certified farms across India.', icon: '🌱', color: '#00645c', bg: '#f0fdfa' },
    { title: 'Science-Backed', desc: 'Ancient wisdom validated by modern clinical research.', icon: '🔬', color: '#a35e4e', bg: '#fdf6f4' },
    { title: 'For Everyone', desc: 'Products designed for every stage of life, for every family.', icon: '❤️', color: '#be123c', bg: '#fff1f2' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .os-root  { font-family: 'DM Sans', sans-serif; }
        .os-dp    { font-family: 'Playfair Display', serif; }

        @keyframes os-fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .os-fade  { animation: os-fadeUp 0.7s cubic-bezier(.22,1,.36,1) both; }
        .os-fade-1 { animation-delay:0.1s; }
        .os-fade-2 { animation-delay:0.22s; }
        .os-fade-3 { animation-delay:0.36s; }

        /* hero blobs */
        @keyframes os-drift {
          0%,100% { transform:translate(0,0); }
          50%      { transform:translate(24px,-18px); }
        }
        .os-drift-a { animation: os-drift 16s ease-in-out infinite; }
        .os-drift-b { animation: os-drift 20s ease-in-out infinite reverse; }

        /* timeline */
        .os-timeline { position:relative; padding-left:32px; }
        .os-timeline::before {
          content:''; position:absolute; left:10px; top:8px; bottom:8px;
          width:1.5px; background:linear-gradient(to bottom,#00645c,rgba(0,100,92,0.1));
          border-radius:2px;
        }
        .os-dot {
          position:absolute; left:-32px; top:4px;
          width:22px; height:22px; border-radius:50%;
          background:#fff; border:2px solid #00645c;
          display:flex; align-items:center; justify-content:center;
          font-size:11px; z-index:2;
          box-shadow:0 0 0 4px rgba(0,100,92,0.08);
        }

        /* value cards */
        .os-val {
          border-radius:20px; padding:28px 24px;
          border:1px solid #f0f0ee;
          transition:transform 0.28s cubic-bezier(.22,1,.36,1), box-shadow 0.28s ease;
          position:relative; overflow:hidden;
        }
        .os-val:hover { transform:translateY(-5px); box-shadow:0 16px 40px rgba(0,0,0,0.07); }
        .os-val-blob { position:absolute; border-radius:50%; pointer-events:none; transition:transform 0.5s ease; }
        .os-val:hover .os-val-blob { transform:scale(1.2); }

        /* drop cap */
        .os-drop::first-letter {
          font-family:'Playfair Display',serif;
          font-size:4.5rem; font-weight:700;
          float:left; line-height:0.82;
          margin:4px 10px 0 0; color:#00645c;
        }

        /* blockquote */
        .os-quote {
          border-left:3px solid #e87454;
          padding:20px 28px;
          background:linear-gradient(90deg,rgba(232,116,84,0.04),transparent);
          border-radius:0 12px 12px 0;
          font-family:'Playfair Display',serif;
          font-style:italic;
        }

        /* highlight box */
        .os-highlight {
          background:linear-gradient(135deg,#f0fdfa,#fafaf8);
          border:1px solid #d1fae5; border-radius:24px;
          padding:40px;
        }

        /* divider flourish */
        .os-flr { display:flex; align-items:center; gap:14px; margin:48px 0; }
        .os-flr-line { flex:1; height:1px; background:linear-gradient(to right,transparent,#e5e7eb,transparent); }

        /* closing quote card */
        .os-closing {
          background:linear-gradient(135deg,#052e16,#00645c);
          border-radius:28px; padding:52px 48px;
          text-align:center; position:relative; overflow:hidden;
        }
      `}</style>

      <div className="os-root bg-white pt-20">

        {/* ══════════════════
            1. HERO
        ══════════════════ */}
        <div
          ref={heroRef}
          style={{
            position:'relative',
            background:'linear-gradient(135deg,#03201d 0%,#003b36 45%,#00645c 100%)',
            overflow:'hidden',
            minHeight:420,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}
        >
          {/* Parallax blobs */}
          <div className="os-drift-a" style={{ position:'absolute', top:-100, right:-60, width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle,rgba(74,222,128,0.16) 0%,transparent 70%)' }} />
          <div className="os-drift-b" style={{ position:'absolute', bottom:-80, left:-40, width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(232,116,84,0.1) 0%,transparent 70%)' }} />

          {/* Grid */}
          <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.06 }}>
            <defs>
              <pattern id="og" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M44 0L0 0 0 44" fill="none" stroke="#4ade80" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#og)" />
          </svg>

          {/* Large leaf */}
          <svg style={{ position:'absolute', right:'6%', top:'10%', opacity:0.08, width:140, height:140 }} viewBox="0 0 140 140" fill="none">
            <ellipse cx="70" cy="70" rx="58" ry="30" fill="#4ade80" transform="rotate(-30 70 70)" />
            <line x1="70" y1="25" x2="70" y2="115" stroke="#16a34a" strokeWidth="1.5" transform="rotate(-30 70 70)" />
          </svg>
          <svg style={{ position:'absolute', left:'4%', bottom:'12%', opacity:0.06, width:100, height:100 }} viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="42" ry="22" fill="#4ade80" transform="rotate(20 50 50)" />
          </svg>

          {/* Content */}
          <div style={{ position:'relative', zIndex:10, textAlign:'center', padding:'72px 20px' }}>
            <div className="os-fade os-fade-1" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:100, padding:'5px 16px', marginBottom:22 }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'#4ade80', display:'inline-block' }} />
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.22em', color:'#86efac', textTransform:'uppercase' }}>Since 1930</span>
            </div>

            <h1 className="os-dp os-fade os-fade-2" style={{ fontSize:'clamp(2.8rem,7vw,5.5rem)', color:'#fff', lineHeight:1.05, marginBottom:22 }}>
              Our <em style={{ color:'#4ade80' }}>Story</em>
            </h1>

            <div className="os-fade os-fade-3" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, marginBottom:28 }}>
              <div style={{ width:36, height:1.5, background:'rgba(232,116,84,0.6)', borderRadius:2 }} />
              <span className="os-dp" style={{ fontSize:17, color:'rgba(255,255,255,0.65)', fontStyle:'italic' }}>Happiness Through Wellness</span>
              <div style={{ width:36, height:1.5, background:'rgba(232,116,84,0.6)', borderRadius:2 }} />
            </div>

            {/* Quick stats */}
            <div className="os-fade os-fade-3" style={{ display:'flex', justifyContent:'center', gap:0, flexWrap:'wrap' }}>
              {[['1930','Founded'],['100+','Countries'],['300+','Products'],['90+','Years'],].map(([v,l],i) => (
                <div key={i} style={{ padding:'0 22px', borderLeft:i>0?'1px solid rgba(255,255,255,0.12)':'none', textAlign:'center' }}>
                  <div className="os-dp" style={{ fontSize:26, color:'#fff', fontWeight:700 }}>{v}</div>
                  <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'0.15em', marginTop:2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* ══════════════════
            2. MAIN CONTENT
        ══════════════════ */}
        <div style={{ maxWidth:900, margin:'0 auto', padding:'72px 20px' }}>

          {/* Mission headline */}
          <div className="os-fade" style={{ textAlign:'center', marginBottom:56 }}>
            <p style={{ fontSize:11, textTransform:'uppercase', letterSpacing:'0.28em', color:'#a35e4e', fontWeight:700, marginBottom:14 }}>Our Mission</p>
            <h2 className="os-dp" style={{ fontSize:'clamp(1.9rem,4vw,3rem)', color:'#111827', lineHeight:1.2, marginBottom:16 }}>
              Spreading the Promise of<br />
              <em style={{ color:'#e87454' }}>'Happiness Through Wellness'</em>
            </h2>
            <div style={{ width:44, height:2, background:'linear-gradient(90deg,#00645c,#a35e4e)', borderRadius:2, margin:'0 auto' }} />
          </div>

          {/* Founder intro */}
          <p className="os-fade os-drop" style={{ fontSize:17, color:'#374151', lineHeight:1.85, fontWeight:300, marginBottom:40 }}>
            fter diligently researching the science of Ayurveda, a young visionary named{' '}
            <strong style={{ color:'#111827', fontWeight:600 }}>M. Manal</strong> foresaw the benefits of herbal remedies while riding through the forests surrounding Dehradun in{' '}
            <strong style={{ color:'#00645c', fontWeight:600 }}>1930</strong>. He decided to dedicate his life to creating products that would improve people's health, lives, and overall well-being.
          </p>

          {/* Blockquote */}
          <div className="os-quote os-fade" style={{ marginBottom:44 }}>
            <p className="os-dp" style={{ fontSize:20, color:'#374151', lineHeight:1.55 }}>
              "Himalaya is a leading global health care brand — bringing the healing touch of Ayurveda to over{' '}
              <span style={{ color:'#e87454' }}>100 countries</span>, with products like Liv.52 endorsed by doctors worldwide."
            </p>
          </div>

          {/* Highlight box */}
          <div className="os-highlight os-fade" style={{ marginBottom:56 }}>
            <p style={{ fontSize:16, color:'#374151', lineHeight:1.85, fontWeight:300, marginBottom:20 }}>
              Today, we are one of the most trusted herbal brands offering{' '}
              <em style={{ color:'#00645c', fontStyle:'italic' }}>"head-to-heel"</em> wellness solutions. We are committed to catering to the specific needs of our customers through innovative health care and personal care products.
            </p>
            <p style={{ fontSize:16, color:'#374151', lineHeight:1.85, fontWeight:300 }}>
              Globally, Himalaya has brought a healing touch to over{' '}
              <strong style={{ color:'#e87454' }}>100 countries</strong>. Our products like Liv.52 are endorsed by doctors worldwide — pointing to a universal need for herbal medicine rooted in ancient wisdom.
            </p>
          </div>

          {/* Divider flourish */}
          <div className="os-flr">
            <div className="os-flr-line" />
            <span style={{ fontSize:20 }}>🌿</span>
            <div className="os-flr-line" />
          </div>


          {/* ── Values row ── */}
          <div className="os-fade" style={{ marginBottom:64 }}>
            <p style={{ fontSize:11, textTransform:'uppercase', letterSpacing:'0.28em', color:'#00645c', fontWeight:700, marginBottom:10, textAlign:'center' }}>What We Stand For</p>
            <h3 className="os-dp" style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)', color:'#111827', textAlign:'center', marginBottom:32 }}>Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((v) => (
                <div key={v.title} className="os-val" style={{ background:'#fff' }}>
                  <div className="os-val-blob" style={{ width:100, height:100, background:v.color, opacity:0.06, top:-20, right:-20 }} />
                  <div style={{ width:48, height:48, borderRadius:14, background:v.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, marginBottom:16 }}>
                    {v.icon}
                  </div>
                  <h4 className="os-dp" style={{ fontSize:17, color:'#111827', marginBottom:8 }}>{v.title}</h4>
                  <p style={{ fontSize:13, color:'#6b7280', lineHeight:1.65, fontWeight:300 }}>{v.desc}</p>
                  <div style={{ marginTop:16, height:2, width:28, background:v.color, borderRadius:2, opacity:0.5 }} />
                </div>
              ))}
            </div>
          </div>


          {/* ── Timeline ── */}
          <div className="os-fade" style={{ marginBottom:72 }}>
            <p style={{ fontSize:11, textTransform:'uppercase', letterSpacing:'0.28em', color:'#a35e4e', fontWeight:700, marginBottom:10, textAlign:'center' }}>Our Journey</p>
            <h3 className="os-dp" style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)', color:'#111827', textAlign:'center', marginBottom:36 }}>90+ Years of Legacy</h3>

            <div className="os-timeline">
              {milestones.map((m, i) => (
                <div key={m.year} style={{ position:'relative', marginBottom: i < milestones.length-1 ? 32 : 0, display:'flex', alignItems:'flex-start', gap:16 }}>
                  <div className="os-dot">{m.icon}</div>
                  <div style={{ flex:1, background:'#fafaf8', border:'1px solid #f0f0ee', borderRadius:14, padding:'16px 20px' }}>
                    <span className="os-dp" style={{ fontSize:22, fontWeight:700, color:'#00645c', display:'block', lineHeight:1 }}>{m.year}</span>
                    <p style={{ fontSize:14, color:'#374151', marginTop:6, lineHeight:1.5, fontWeight:300 }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* ── Closing quote ── */}
          <div className="os-closing os-fade">
            {/* Decorative blobs */}
            <div style={{ position:'absolute', top:-60, right:-60, width:220, height:220, borderRadius:'50%', background:'rgba(74,222,128,0.1)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:-40, left:-40, width:160, height:160, borderRadius:'50%', background:'rgba(232,116,84,0.08)', pointerEvents:'none' }} />

            <div style={{ position:'relative', zIndex:2 }}>
              {/* Large quote mark */}
              <div className="os-dp" style={{ fontSize:80, color:'rgba(255,255,255,0.12)', lineHeight:0.6, marginBottom:20 }}>"</div>

              <p className="os-dp" style={{ fontSize:'clamp(1.2rem,2.5vw,1.7rem)', color:'#fff', lineHeight:1.55, fontStyle:'italic', marginBottom:24 }}>
                From our humble beginnings in 1930, we continue to deliver on our promise of spreading
              </p>
              <p className="os-dp" style={{ fontSize:'clamp(1.4rem,3vw,2rem)', color:'#4ade80', fontWeight:700, marginBottom:28 }}>
                "Wellness in every Home, and Happiness in every Heart!"
              </p>

              <div style={{ display:'flex', justifyContent:'center', gap:16, flexWrap:'wrap' }}>
                <a href="#products" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#4ade80', color:'#052e16', borderRadius:100, padding:'13px 28px', fontSize:11, fontWeight:700, letterSpacing:'0.1em', textDecoration:'none', transition:'all 0.22s', boxShadow:'0 4px 18px rgba(74,222,128,0.35)' }}>
                  Explore Products
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7.5 3l4 4-4 4" stroke="#052e16" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#research" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.1)', color:'#fff', border:'1.5px solid rgba(255,255,255,0.25)', borderRadius:100, padding:'13px 28px', fontSize:11, fontWeight:700, letterSpacing:'0.1em', textDecoration:'none' }}>
                  Our Research
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default OurStory;