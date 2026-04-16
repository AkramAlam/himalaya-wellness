import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const floatRef = useRef(null);

  useEffect(() => {
    // Floating animation for the product card
    let frame;
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      const t = (ts - start) / 1000;
      if (floatRef.current) {
        floatRef.current.style.transform = `translateY(${Math.sin(t * 0.9) * 10}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root {
          font-family: 'DM Sans', sans-serif;
        }
        .hero-display {
          font-family: 'Playfair Display', serif;
        }

        /* Fade-up on load */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.1s both; }
        .fade-up-2 { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.28s both; }
        .fade-up-3 { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.44s both; }
        .fade-up-4 { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.6s both; }
        .fade-up-5 { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.72s both; }

        /* Rotating leaf ring */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .spin-slow { animation: spinSlow 22s linear infinite; }
        .spin-slow-rev { animation: spinSlow 18s linear infinite reverse; }

        /* Badge pulse */
        @keyframes pulseBadge {
          0%, 100% { box-shadow: 0 0 0 0 rgba(163,94,78,0.22); }
          50%       { box-shadow: 0 0 0 10px rgba(163,94,78,0); }
        }
        .badge-pulse { animation: pulseBadge 2.5s ease-in-out infinite; }

        /* Shimmer on button */
        .btn-shimmer {
          position: relative;
          overflow: hidden;
        }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          animation: shimmer 2.4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%   { left: -100%; }
          60%  { left: 130%; }
          100% { left: 130%; }
        }

        /* Leaf SVG blobs */
        .leaf-blob {
          position: absolute;
          pointer-events: none;
          opacity: 0.13;
        }

        /* Stats counter */
        .stat-divider { border-left: 1.5px solid #d1fae5; }

        /* Product card glass */
        .product-glass {
          background: linear-gradient(145deg, rgba(255,255,255,0.92) 60%, rgba(209,250,229,0.55) 100%);
          backdrop-filter: blur(18px);
          border: 1.5px solid rgba(209,250,229,0.7);
        }

        /* Scroll hint */
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(7px); }
        }
        .scroll-hint { animation: scrollBounce 1.6s ease-in-out infinite; }

        /* Tag pill */
        .tag-pill {
          background: rgba(0,100,92,0.07);
          border: 1px solid rgba(0,100,92,0.15);
        }
      `}</style>

      <div
        id="home"
        className="hero-root relative bg-[#f9faf7] overflow-hidden"
        style={{ minHeight: '88vh', display: 'flex', alignItems: 'center' }}
      >
        {/* ── Background botanical blobs ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large soft green circle - right */}
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full"
            style={{ background: 'radial-gradient(circle, #bbf7d0 0%, transparent 70%)', opacity: 0.45 }} />
          {/* Warm coral - top left */}
          <div className="absolute -left-16 -top-16 w-72 h-72 rounded-full"
            style={{ background: 'radial-gradient(circle, #fde4d8 0%, transparent 70%)', opacity: 0.5 }} />
          {/* Mint - bottom right */}
          <div className="absolute right-1/3 -bottom-10 w-60 h-60 rounded-full"
            style={{ background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)', opacity: 0.3 }} />

          {/* Decorative thin grid lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#d1fae5" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Leaf SVG decorations */}
          <svg className="leaf-blob" style={{ width: 180, height: 180, top: '8%', right: '5%' }} viewBox="0 0 180 180">
            <ellipse cx="90" cy="90" rx="70" ry="40" fill="#166534" transform="rotate(-30 90 90)" />
          </svg>
          <svg className="leaf-blob" style={{ width: 120, height: 120, bottom: '12%', left: '3%' }} viewBox="0 0 120 120">
            <ellipse cx="60" cy="60" rx="52" ry="28" fill="#166534" transform="rotate(45 60 60)" />
          </svg>
        </div>

        {/* ── Main Content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full z-10 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

            {/* ── LEFT: Text ── */}
            <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left">

              {/* Tag pill */}
              <div className="fade-up-1 inline-flex items-center gap-2 tag-pill rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00645c] inline-block"></span>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#00645c]">New Face Care Range 2025</span>
              </div>

              {/* Headline */}
              <h1 className="hero-display fade-up-2 mb-5 leading-[1.08] tracking-tight text-gray-900"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)' }}>
                Healthy Skin.
                <br />
                <em className="text-[#00645c] not-italic">Always</em>{' '}
                <span className="relative inline-block">
                  in.
                  {/* Underline flourish */}
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none" style={{ height: 7 }}>
                    <path d="M0 6 Q50 0 100 6" stroke="#a35e4e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              {/* Subtext */}
              <p className="fade-up-3 mb-8 text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0"
                style={{ fontSize: 'clamp(0.97rem, 1.4vw, 1.1rem)', fontWeight: 300 }}>
                Rooted in Ayurveda, backed by science. Himalaya Face Care brings you
                nature's finest — gentle, effective, and loved for 90+ years.
              </p>

              {/* CTA Row */}
              <div className="fade-up-4 flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10">
                <button
                  className="btn-shimmer rounded-full bg-[#00645c] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#004d47] transition-all shadow-lg hover:-translate-y-0.5"
                  style={{ letterSpacing: '0.04em' }}
                >
                  Shop Now
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#00645c] transition-colors group">
                  <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#00645c] transition-colors">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Explore All Products
                </button>
              </div>

              {/* Stats */}
              <div className="fade-up-5 flex items-center justify-center lg:justify-start gap-0 divide-x divide-green-100">
                {[
                  { val: '90+', label: 'Years of Trust' },
                  { val: '300+', label: 'Products' },
                  { val: '4.8★', label: 'Avg. Rating' },
                ].map((s, i) => (
                  <div key={i} className={`px-5 ${i === 0 ? 'pl-0' : ''}`}>
                    <div className="hero-display text-xl font-bold text-gray-900">{s.val}</div>
                    <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Product Visual ── */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end fade-up-3">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">

                {/* Rotating dashed ring - outer */}
                <div className="spin-slow absolute inset-0 rounded-full"
                  style={{ border: '1.5px dashed rgba(0,100,92,0.18)' }} />

                {/* Rotating solid ring - inner */}
                <div className="spin-slow-rev absolute"
                  style={{
                    inset: '18px',
                    borderRadius: '50%',
                    border: '1px solid rgba(163,94,78,0.12)'
                  }} />

                {/* Soft glow */}
                <div className="absolute inset-8 rounded-full"
                  style={{ background: 'radial-gradient(circle, #bbf7d0 0%, transparent 70%)', opacity: 0.6 }} />

                {/* Floating product card */}
                <div ref={floatRef} className="product-glass relative z-10 rounded-3xl shadow-2xl flex flex-col items-center justify-between p-5"
                  style={{ width: 148, height: 230 }}>

                  {/* Brand tag on card */}
                  <div className="w-full flex items-center justify-between mb-1">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-[#00645c] font-semibold">Himalaya</span>
                    <span className="text-[8px] text-gray-300">●</span>
                  </div>

                  {/* Product shape (stylised tube) */}
                  <div className="flex-1 flex items-center justify-center w-full">
                    <div className="relative flex flex-col items-center">
                      {/* Cap */}
                      <div className="w-10 h-4 rounded-t-full bg-[#00645c]" />
                      {/* Body */}
                      <div className="w-12 flex flex-col items-center justify-center rounded-b-2xl py-4 px-2"
                        style={{
                          background: 'linear-gradient(160deg, #d1fae5 0%, #a7f3d0 60%, #6ee7b7 100%)',
                          minHeight: 90,
                        }}>
                        <span className="text-[7px] text-[#065f46] font-bold uppercase tracking-widest leading-tight text-center">Pure Neem</span>
                        <span className="text-[6px] text-[#047857] mt-1 text-center leading-tight">Face Wash</span>
                        <div className="mt-2 w-6 h-6">
                          {/* Leaf icon */}
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6 8 4 14 12 22C20 14 18 8 12 2Z" fill="rgba(4,120,87,0.35)" />
                            <path d="M12 2C12 12 12 17 12 22" stroke="rgba(4,120,87,0.5)" strokeWidth="0.8" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom label */}
                  <div className="w-full text-center mt-1">
                    <span className="text-[8px] text-gray-400 tracking-wider">100ml • Ayurvedic</span>
                  </div>
                </div>

                {/* Floating badge - top right */}
                <div className="badge-pulse absolute top-3 right-3 bg-[#a35e4e] text-white rounded-full px-3 py-1.5 shadow-md z-20"
                  style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em' }}>
                  #1 Loved
                </div>

                {/* Floating ingredient tag - bottom left */}
                <div className="absolute bottom-5 -left-4 bg-white rounded-xl shadow-md px-3 py-2 flex items-center gap-2 z-20 border border-green-50">
                  <span className="text-base">🌿</span>
                  <div>
                    <div style={{ fontSize: 9, color: '#6b7280', letterSpacing: '0.1em' }} className="uppercase">Key Herb</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#111827' }}>Neem Extract</div>
                  </div>
                </div>

                {/* Floating rating - bottom right */}
                <div className="absolute -bottom-2 right-6 bg-white rounded-xl shadow-md px-3 py-2 flex items-center gap-1.5 z-20 border border-green-50">
                  <span style={{ fontSize: 12 }}>⭐</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>4.8</span>
                  <span style={{ fontSize: 10, color: '#9ca3af' }}>(2.1k)</span>
                </div>

                {/* Small dot accents */}
                <div className="absolute top-8 left-6 w-3 h-3 rounded-full bg-[#a35e4e] opacity-30" />
                <div className="absolute bottom-14 right-2 w-2 h-2 rounded-full bg-[#00645c] opacity-40" />

              </div>
            </div>

          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div className="scroll-hint absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span style={{ fontSize: 9, letterSpacing: '0.2em', color: '#6b7280' }} className="uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M3 9l5 5 5-5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;