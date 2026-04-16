import React, { useState } from 'react';

const OurResearch = ({ addToCart }) => {
  const [addedId, setAddedId] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const bestsellers = [
    { id: 1, name: "Himalaya Organic Ashwagandha", subtitle: "Stress & Stamina", price: "from ₹ 420.00", originalPrice: "₹ 520.00", accent: "#ea580c", color1: "#fff7ed", color2: "#fed7aa", icon: "🌿", badge: "Best Seller", inStock: true },
    { id: 2, name: "Liv.52 DS", subtitle: "Liver Care", price: "₹ 281.00", originalPrice: null, accent: "#00645c", color1: "#f0fdfa", color2: "#99f6e4", icon: "💊", badge: "Doctor's Choice", inStock: true },
    { id: 3, name: "Purifying Neem Face Wash", subtitle: "Deep Cleanse", price: "from ₹ 90.00", originalPrice: "₹ 120.00", accent: "#16a34a", color1: "#f0fdf4", color2: "#bbf7d0", icon: "🌱", badge: "Trending", inStock: true },
    { id: 4, name: "Shilajit Capsules", subtitle: "Energy & Vitality", price: "₹ 375.00", originalPrice: "₹ 450.00", accent: "#374151", color1: "#f9fafb", color2: "#e5e7eb", icon: "⚡", badge: "Premium", inStock: true },
    { id: 5, name: "Anti-Hair Fall Bhringaraja Shampoo", subtitle: "Root Strengthening", price: "from ₹ 61.00", originalPrice: "₹ 85.00", accent: "#0d9488", color1: "#f0fdfa", color2: "#ccfbf1", icon: "🌊", badge: "Popular", inStock: true },
    { id: 6, name: "Guduchi", subtitle: "Immunity Booster", price: "₹ 240.00", originalPrice: "₹ 290.00", accent: "#15803d", color1: "#f0fdf4", color2: "#bbf7d0", icon: "🛡️", badge: null, inStock: true },
    { id: 7, name: "Septilin", subtitle: "Infection Defence", price: "₹ 257.00", originalPrice: null, accent: "#00645c", color1: "#f0fdfa", color2: "#99f6e4", icon: "🌿", badge: null, inStock: true },
    { id: 8, name: "Baby Massage Oil", subtitle: "Gentle Nourishment", price: "from ₹ 120.00", originalPrice: "₹ 160.00", accent: "#d97706", color1: "#fffbeb", color2: "#fde68a", icon: "🍼", badge: "New", inStock: true },
  ];

  const pillars = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width:28, height:28 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      title: "Phytochemistry",
      stat: "300+",
      statLabel: "Herbs Studied",
      desc: "Advanced chromatographic techniques profile herbs and identify active markers, ensuring batch-to-batch consistency across all products.",
      color: "#00645c",
      bg: "#f0fdfa",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width:28, height:28 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: "Clinical Trials",
      stat: "200+",
      statLabel: "Publications",
      desc: "Rigorous clinical trials following international GCP protocols validate the safety and efficacy of every product we bring to market.",
      color: "#a35e4e",
      bg: "#fdf6f4",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width:28, height:28 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      title: "Good Agricultural Practices",
      stat: "50+",
      statLabel: "Partner Farms",
      desc: "We work closely with local farmers to ensure sustainable, standardized cultivation of herbs from seed to shelf.",
      color: "#15803d",
      bg: "#f0fdf4",
    },
  ];

  const handleAdd = (product) => {
    if (!product.inStock) return;
    addToCart && addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const toggleWish = (e, id) => {
    e.preventDefault();
    setWishlist(prev => prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]);
  };

  const getDiscount = (price, original) => {
    if (!original) return null;
    const p = parseFloat(price.replace(/[^\d.]/g, ''));
    const o = parseFloat(original.replace(/[^\d.]/g, ''));
    return isNaN(p) || isNaN(o) ? null : Math.round((1 - p / o) * 100);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .or-root  { font-family: 'DM Sans', sans-serif; }
        .or-display { font-family: 'Playfair Display', serif; }

        @keyframes or-fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .or-fade { animation: or-fadeUp 0.65s cubic-bezier(.22,1,.36,1) both; }

        /* hero parallax blobs */
        @keyframes or-drift {
          0%,100% { transform:translate(0,0) scale(1); }
          33%      { transform:translate(30px,-20px) scale(1.08); }
          66%      { transform:translate(-20px,15px) scale(0.95); }
        }
        .or-drift-a { animation: or-drift 18s ease-in-out infinite; }
        .or-drift-b { animation: or-drift 22s ease-in-out infinite reverse; }

        /* product cards */
        .or-card {
          background:#fff; border:1px solid #f0f0ee;
          border-radius:20px; overflow:hidden;
          display:flex; flex-direction:column;
          transition:transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
        }
        .or-card:hover { transform:translateY(-5px); box-shadow:0 16px 40px rgba(0,0,0,0.09); }
        .or-img { transition:transform 0.45s cubic-bezier(.22,1,.36,1); }
        .or-card:hover .or-img { transform:scale(1.07) translateY(-3px); }

        .or-wish {
          position:absolute; top:12px; right:12px;
          width:30px; height:30px; border-radius:50%;
          background:rgba(255,255,255,0.92); border:1px solid #e5e7eb;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; z-index:3; transition:border-color 0.2s;
        }
        .or-wish:hover { border-color:#fca5a5; }

        .or-badge { position:absolute; top:12px; left:12px; padding:3px 9px; border-radius:100px; font-size:9px; font-weight:700; letter-spacing:0.08em; color:#fff; z-index:3; }
        .or-offer { background:#fef2f2; color:#dc2626; border-radius:4px; font-size:9px; font-weight:700; padding:1px 6px; margin-left:5px; }

        .or-btn { width:100%; padding:13px; font-size:10px; font-weight:700; letter-spacing:0.14em; border:none; cursor:pointer; transition:all 0.2s; border-radius:0 0 20px 20px; }
        .or-btn-active { background:#00645c; color:#fff; }
        .or-btn-active:hover { background:#004d47; }
        .or-btn-added { background:#166534; color:#fff; }
        .or-btn-sold { background:#f3f4f6; color:#9ca3af; cursor:not-allowed; }

        /* pillar cards */
        .or-pillar {
          border-radius:24px; padding:36px 32px;
          border:1px solid #f0f0ee; background:#fff;
          transition:transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
          position:relative; overflow:hidden;
        }
        .or-pillar:hover { transform:translateY(-5px); box-shadow:0 20px 50px rgba(0,0,0,0.08); }
        .or-pillar-blob { position:absolute; border-radius:50%; pointer-events:none; transition:transform 0.5s ease; }
        .or-pillar:hover .or-pillar-blob { transform:scale(1.2); }

        .or-icon-wrap {
          width:56px; height:56px; border-radius:16px;
          display:flex; align-items:center; justify-items:center;
          margin-bottom:20px;
          transition:transform 0.3s cubic-bezier(.22,1,.36,1);
        }
        .or-pillar:hover .or-icon-wrap { transform:scale(1.1) rotate(-4deg); }

        /* view all cta */
        .or-viewall {
          display:inline-flex; align-items:center; gap:10px;
          background:#00645c; color:#fff; border-radius:100px;
          padding:14px 36px; font-size:11px; font-weight:700;
          letter-spacing:0.14em; transition:all 0.25s;
          text-decoration:none; box-shadow:0 4px 18px rgba(0,100,92,0.25);
        }
        .or-viewall:hover { background:#004d47; transform:translateY(-2px); box-shadow:0 8px 28px rgba(0,100,92,0.3); }
        .or-viewall svg { transition:transform 0.22s; }
        .or-viewall:hover svg { transform:translateX(4px); }

        /* stat counter */
        .or-stat-val { font-family:'Playfair Display',serif; font-weight:700; }
      `}</style>

      <div className="or-root bg-white">

        {/* ══════════════════════════════
            1. HERO BANNER
        ══════════════════════════════ */}
        <div style={{ position:'relative', background:'linear-gradient(135deg,#03201d 0%,#003b36 50%,#00645c 100%)', overflow:'hidden', minHeight:420, display:'flex', alignItems:'center', justifyContent:'center' }}>

          {/* Drifting blobs */}
          <div className="or-drift-a" style={{ position:'absolute', top:-80, left:-80, width:360, height:360, borderRadius:'50%', background:'radial-gradient(circle,rgba(74,222,128,0.18) 0%,transparent 70%)' }} />
          <div className="or-drift-b" style={{ position:'absolute', bottom:-60, right:-60, width:320, height:320, borderRadius:'50%', background:'radial-gradient(circle,rgba(163,230,53,0.12) 0%,transparent 70%)' }} />

          {/* Grid */}
          <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.06 }}>
            <defs>
              <pattern id="hg" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0L0 0 0 48" fill="none" stroke="#4ade80" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hg)" />
          </svg>

          {/* Floating leaf SVGs */}
          <svg style={{ position:'absolute', top:32, right:'12%', opacity:0.1, width:90, height:90 }} viewBox="0 0 90 90" fill="none">
            <ellipse cx="45" cy="45" rx="38" ry="20" fill="#4ade80" transform="rotate(-35 45 45)" />
            <line x1="45" y1="18" x2="45" y2="72" stroke="#16a34a" strokeWidth="1.2" transform="rotate(-35 45 45)" />
          </svg>
          <svg style={{ position:'absolute', bottom:24, left:'8%', opacity:0.08, width:70, height:70 }} viewBox="0 0 70 70" fill="none">
            <ellipse cx="35" cy="35" rx="28" ry="15" fill="#4ade80" transform="rotate(25 35 35)" />
          </svg>

          {/* Content */}
          <div style={{ position:'relative', zIndex:10, textAlign:'center', padding:'60px 16px' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:100, padding:'5px 16px', marginBottom:20 }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'#4ade80', display:'inline-block' }} />
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.22em', color:'#86efac', textTransform:'uppercase' }}>Discover Our Science</span>
            </div>
            <h1 className="or-display" style={{ fontSize:'clamp(2.4rem,6vw,5rem)', color:'#fff', lineHeight:1.05, marginBottom:20 }}>
              Research at<br /><em style={{ color:'#4ade80' }}>the Heart</em>
            </h1>
            <div style={{ width:48, height:3, background:'linear-gradient(90deg,#e87454,#a35e4e)', borderRadius:2, margin:'0 auto 24px' }} />

            {/* Stats row */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:0, flexWrap:'wrap' }}>
              {[['90+','Years of R&D'],['300+','Herbs Studied'],['200+','Publications'],['50+','Partner Farms']].map(([val, label], i) => (
                <div key={i} style={{ padding:'0 24px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none', textAlign:'center' }}>
                  <div className="or-stat-val" style={{ fontSize:28, color:'#fff' }}>{val}</div>
                  <div style={{ fontSize:10, color:'rgba(255,255,255,0.45)', textTransform:'uppercase', letterSpacing:'0.15em', marginTop:2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="w-[92%] max-w-[1380px] mx-auto py-16 sm:py-20">

          {/* ══════════════════════════════
              2. BESTSELLERS
          ══════════════════════════════ */}
          <div style={{ marginBottom:80, paddingBottom:80, borderBottom:'1px solid #f0f0ee' }}>

            <div className="or-fade" style={{ textAlign:'center', marginBottom:48 }}>
              <p style={{ fontSize:11, textTransform:'uppercase', letterSpacing:'0.28em', color:'#00645c', fontWeight:700, marginBottom:10 }}>Top Picks</p>
              <h2 className="or-display" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', color:'#111827' }}>Our Bestsellers</h2>
              <div style={{ width:44, height:2, background:'linear-gradient(90deg,#00645c,#a35e4e)', borderRadius:2, margin:'12px auto 0' }} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bestsellers.map((product, i) => {
                const isAdded = addedId === product.id;
                const isWished = wishlist.includes(product.id);
                const discount = getDiscount(product.price, product.originalPrice);
                return (
                  <div key={product.id} className="or-card or-fade" style={{ animationDelay:`${i*0.06}s` }}>
                    {/* Image */}
                    <div style={{ position:'relative', background:`linear-gradient(145deg,${product.color1},${product.color2})`, height:190 }}>
                      {product.badge && <div className="or-badge" style={{ background:product.accent }}>{product.badge}</div>}
                      <button className="or-wish" onClick={(e) => toggleWish(e, product.id)}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill={isWished?'#ef4444':'none'} stroke={isWished?'#ef4444':'#9ca3af'} strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>
                      <div className="or-img" style={{ height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
                          <div style={{ width:26, height:13, borderRadius:'50% 50% 0 0', background:product.accent }} />
                          <div style={{ width:34, minHeight:80, borderRadius:'0 0 10px 10px', background:`linear-gradient(160deg,${product.color2} 0%,${product.color1} 100%)`, border:`1.5px solid ${product.accent}25`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4, padding:'8px 4px' }}>
                            <span style={{ fontSize:18 }}>{product.icon}</span>
                            <span style={{ fontSize:6, color:product.accent, fontWeight:800, letterSpacing:'0.1em', textAlign:'center' }}>HIMALAYA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div style={{ padding:'14px 14px 10px', flex:1, display:'flex', flexDirection:'column' }}>
                      <p style={{ fontSize:9, color:product.accent, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:4 }}>{product.subtitle}</p>
                      <h3 style={{ fontSize:12.5, fontWeight:700, color:'#111827', lineHeight:1.35, marginBottom:8, minHeight:34 }} className="line-clamp-2">{product.name}</h3>
                      <div style={{ display:'flex', alignItems:'baseline', flexWrap:'wrap', gap:4, marginTop:'auto', marginBottom:6 }}>
                        <span style={{ fontSize:13, fontWeight:800, color:'#111827' }}>{product.price}</span>
                        {product.originalPrice && <span style={{ fontSize:10, color:'#9ca3af', textDecoration:'line-through' }}>{product.originalPrice}</span>}
                        {discount && <span className="or-offer">{discount}%</span>}
                      </div>
                    </div>
                    <button disabled={!product.inStock} onClick={() => handleAdd(product)}
                      className={`or-btn ${!product.inStock?'or-btn-sold':isAdded?'or-btn-added':'or-btn-active'}`}>
                      {!product.inStock ? 'SOLD OUT' : isAdded ? '✓ ADDED' : 'ADD TO CART'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign:'center', marginTop:44 }}>
              <a href="#products" className="or-viewall">
                VIEW ALL PRODUCTS
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2 7.5h11M8.5 3.5l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>


          {/* ══════════════════════════════
              3. INTRO
          ══════════════════════════════ */}
          <div style={{ maxWidth:780, margin:'0 auto 80px', textAlign:'center' }} className="or-fade">
            <p style={{ fontSize:11, textTransform:'uppercase', letterSpacing:'0.28em', color:'#a35e4e', fontWeight:700, marginBottom:12 }}>Our Philosophy</p>
            <h2 className="or-display" style={{ fontSize:'clamp(1.6rem,3vw,2.5rem)', color:'#111827', lineHeight:1.25, marginBottom:20 }}>
              Where <span style={{ color:'#00645c' }}>Traditional Ayurveda</span> meets{' '}
              <span style={{ color:'#00645c' }}>Modern Science</span>.
            </h2>
            <p style={{ fontSize:16, color:'#6b7280', lineHeight:1.8, fontWeight:300 }}>
              For over nine decades, we have focused on developing safe, natural, and innovative remedies
              that help people lead richer, healthier lives — bridging ancient wisdom with rigorous science.
            </p>
          </div>


          {/* ══════════════════════════════
              4. RESEARCH PILLARS
          ══════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="or-pillar or-fade" style={{ animationDelay:`${i*0.12}s` }}>
                {/* Blob */}
                <div className="or-pillar-blob" style={{ width:120, height:120, background:pillar.color, opacity:0.06, top:-30, right:-30 }} />

                {/* Icon */}
                <div className="or-icon-wrap" style={{ background:pillar.bg, color:pillar.color }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', color:pillar.color }}>
                    {pillar.icon}
                  </div>
                </div>

                {/* Stat */}
                <div style={{ display:'flex', alignItems:'baseline', gap:6, marginBottom:8 }}>
                  <span className="or-stat-val" style={{ fontSize:32, color:pillar.color }}>{pillar.stat}</span>
                  <span style={{ fontSize:11, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:600 }}>{pillar.statLabel}</span>
                </div>

                <h3 style={{ fontSize:18, fontWeight:700, color:'#111827', marginBottom:10, fontFamily:"'Playfair Display',serif" }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize:13, color:'#6b7280', lineHeight:1.7, fontWeight:300 }}>{pillar.desc}</p>

                {/* Bottom accent line */}
                <div style={{ marginTop:24, height:2, width:36, background:pillar.color, borderRadius:2, opacity:0.5 }} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default OurResearch;