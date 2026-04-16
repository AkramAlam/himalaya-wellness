import React, { useState } from 'react';

const NewLaunches = ({ addToCart }) => {
  const [addedId, setAddedId] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const newProducts = [
    {
      id: 301,
      name: "Baby Cream & Extra Moisturizing Baby Lotion Combo",
      subtitle: "Sensitive Baby Care",
      price: "₹ 274.00",
      originalPrice: "₹ 349.00",
      accent: "#0284c7",
      color1: "#f0f9ff",
      color2: "#bae6fd",
      icon: "👶",
      tag: "Combo Pack",
      tagColor: "#0284c7",
      inStock: true,
    },
    {
      id: 302,
      name: "Himalaya Ayurveda Secrets Ghee Lip Butter",
      subtitle: "Deep Nourishment",
      price: "₹ 399.00",
      originalPrice: null,
      accent: "#b45309",
      color1: "#fffbeb",
      color2: "#fde68a",
      icon: "💛",
      tag: "Trending",
      tagColor: "#b45309",
      inStock: true,
    },
    {
      id: 303,
      name: "Himalaya Ayurveda Secrets Repairing Shampoo",
      subtitle: "Damage Repair Formula",
      price: "from ₹ 249.00",
      originalPrice: "₹ 310.00",
      accent: "#c2410c",
      color1: "#fff7ed",
      color2: "#fed7aa",
      icon: "🧴",
      tag: "New",
      tagColor: "#c2410c",
      inStock: true,
    },
    {
      id: 304,
      name: "Himalaya Ayurveda Secrets Hair Growth Oil",
      subtitle: "Scalp & Root Strength",
      price: "from ₹ 479.00",
      originalPrice: "₹ 580.00",
      accent: "#be123c",
      color1: "#fff1f2",
      color2: "#fecdd3",
      icon: "🌺",
      tag: "Best Seller",
      tagColor: "#be123c",
      inStock: true,
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .nl-root { font-family: 'DM Sans', sans-serif; }
        .nl-display { font-family: 'Playfair Display', serif; }

        @keyframes nl-fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nl-fade { animation: nl-fadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }
        .nl-fade-0 { animation-delay: 0.05s; }
        .nl-fade-1 { animation-delay: 0.14s; }
        .nl-fade-2 { animation-delay: 0.23s; }
        .nl-fade-3 { animation-delay: 0.32s; }

        .nl-card {
          background: #fff;
          border: 1px solid #f0f0ee;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
          position: relative;
        }
        .nl-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 48px rgba(0,0,0,0.1);
        }

        .nl-product-visual {
          transition: transform 0.48s cubic-bezier(.22,1,.36,1);
        }
        .nl-card:hover .nl-product-visual {
          transform: scale(1.07) translateY(-4px);
        }

        .nl-wish {
          position: absolute; top: 12px; right: 12px;
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(255,255,255,0.92);
          border: 1px solid #e5e7eb;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 3;
          transition: border-color 0.2s;
        }
        .nl-wish:hover { border-color: #fca5a5; }

        .nl-badge {
          position: absolute; top: 12px; left: 12px;
          padding: 3px 9px; border-radius: 100px;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.08em; color: #fff; z-index: 3;
        }

        .nl-new-dot {
          display: inline-block;
          width: 6px; height: 6px; border-radius: 50%;
          margin-right: 6px;
          animation: nl-pulse 2s ease-in-out infinite;
        }
        @keyframes nl-pulse {
          0%,100% { transform: scale(1); opacity:1; }
          50%      { transform: scale(1.4); opacity:0.6; }
        }

        .nl-btn {
          width: 100%; padding: 13px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          border: none; cursor: pointer;
          transition: all 0.2s;
          border-radius: 0 0 20px 20px;
        }
        .nl-btn-active  { background: #00645c; color: #fff; }
        .nl-btn-active:hover { background: #004d47; }
        .nl-btn-added   { background: #166534; color: #fff; }
        .nl-btn-sold    { background: #f3f4f6; color: #9ca3af; cursor:not-allowed; }

        .nl-offer {
          background: #fef2f2; color: #dc2626;
          border-radius: 4px; font-size: 9px; font-weight: 700;
          padding: 1px 6px; margin-left: 5px;
        }

        .nl-view-all {
          display: inline-flex; align-items: center; gap: 10px;
          background: #00645c; color: #fff;
          border-radius: 100px; padding: 14px 36px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          transition: all 0.25s; text-decoration: none;
          box-shadow: 0 4px 18px rgba(0,100,92,0.25);
        }
        .nl-view-all:hover {
          background: #004d47;
          box-shadow: 0 8px 28px rgba(0,100,92,0.32);
          transform: translateY(-2px);
        }
        .nl-view-all svg { transition: transform 0.25s; }
        .nl-view-all:hover svg { transform: translateX(4px); }
      `}</style>

      <section className="nl-root py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="w-[92%] max-w-[1380px] mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-12 nl-fade nl-fade-0">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="nl-new-dot" style={{ background: '#a35e4e' }} />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#a35e4e] font-semibold">Just Arrived</span>
            </div>
            <h2 className="nl-display text-3xl sm:text-4xl text-gray-900 leading-tight">
              New Launches
            </h2>
            <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg,#a35e4e,#00645c)', borderRadius: 2, margin: '12px auto 0' }} />
            <p className="mt-4 text-sm text-gray-400 font-light max-w-sm mx-auto">
              Fresh from our labs — Ayurvedic innovation meets modern care.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {newProducts.map((product, i) => {
              const isAdded = addedId === product.id;
              const isWished = wishlist.includes(product.id);
              const discount = getDiscount(product.price, product.originalPrice);

              return (
                <div key={product.id} className={`nl-card nl-fade nl-fade-${i}`}>

                  {/* ── Image area ── */}
                  <div
                    className="relative"
                    style={{
                      background: `linear-gradient(145deg, ${product.color1}, ${product.color2})`,
                      height: 220,
                    }}
                  >
                    {/* Tag badge */}
                    <div className="nl-badge" style={{ background: product.tagColor }}>{product.tag}</div>

                    {/* Wishlist */}
                    <button className="nl-wish" onClick={(e) => toggleWish(e, product.id)}>
                      <svg width="13" height="13" viewBox="0 0 24 24"
                        fill={isWished ? '#ef4444' : 'none'}
                        stroke={isWished ? '#ef4444' : '#9ca3af'}
                        strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>

                    {/* Product visual */}
                    <div className="nl-product-visual h-full flex items-center justify-center">
                      <div className="flex flex-col items-center gap-1.5">
                        {/* Cap */}
                        <div style={{ width: 32, height: 16, borderRadius: '50% 50% 0 0', background: product.accent }} />
                        {/* Body */}
                        <div style={{
                          width: 42, minHeight: 90,
                          borderRadius: '0 0 12px 12px',
                          background: `linear-gradient(165deg, ${product.color2} 0%, ${product.color1} 100%)`,
                          border: `1.5px solid ${product.accent}25`,
                          display: 'flex', flexDirection: 'column',
                          alignItems: 'center', justifyContent: 'center',
                          gap: 5, padding: '10px 5px',
                        }}>
                          <span style={{ fontSize: 20 }}>{product.icon}</span>
                          <span style={{ fontSize: 6.5, color: product.accent, fontWeight: 800, letterSpacing: '0.1em', textAlign: 'center', lineHeight: 1.4 }}>
                            HIM<br />ALAYA
                          </span>
                        </div>
                        {/* Neck label */}
                        <div style={{
                          width: 46, height: 10,
                          background: product.accent,
                          borderRadius: 3,
                          opacity: 0.7,
                        }} />
                      </div>
                    </div>

                    {/* Corner glow */}
                    <div style={{
                      position: 'absolute', bottom: -20, right: -20,
                      width: 80, height: 80, borderRadius: '50%',
                      background: product.accent, opacity: 0.08,
                      pointerEvents: 'none',
                    }} />
                  </div>

                  {/* ── Content ── */}
                  <div className="px-4 pt-4 pb-2 flex flex-col flex-1">
                    <p style={{ fontSize: 9.5, color: product.accent, fontWeight: 600, letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 4 }}>
                      {product.subtitle}
                    </p>
                    <h3 style={{ fontSize: 13, fontWeight: 700, color: '#111827', lineHeight: 1.4, marginBottom: 8, minHeight: 36 }} className="line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline flex-wrap gap-x-1 mt-auto mb-2">
                      <span style={{ fontSize: 14, fontWeight: 800, color: '#111827' }}>{product.price}</span>
                      {product.originalPrice && (
                        <span style={{ fontSize: 11, color: '#9ca3af', textDecoration: 'line-through' }}>{product.originalPrice}</span>
                      )}
                      {discount && <span className="nl-offer">{discount}% off</span>}
                    </div>
                  </div>

                  {/* ── CTA ── */}
                  <button
                    disabled={!product.inStock}
                    onClick={() => handleAdd(product)}
                    className={`nl-btn ${!product.inStock ? 'nl-btn-sold' : isAdded ? 'nl-btn-added' : 'nl-btn-active'}`}
                  >
                    {!product.inStock ? 'SOLD OUT' : isAdded ? '✓ ADDED TO CART' : 'ADD TO CART'}
                  </button>

                </div>
              );
            })}
          </div>

          {/* ── View All ── */}
          <div className="mt-12 flex justify-center">
            <a href="#products" className="nl-view-all">
              VIEW ALL NEW LAUNCHES
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M8 3l5 5-5 5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default NewLaunches;