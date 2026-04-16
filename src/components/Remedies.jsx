import React, { useState } from 'react';

const Remedies = ({ addToCart }) => {
  const [addedId, setAddedId] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const remediesData = [
    { id: 201, name: "Guduchi", subtitle: "Immunity Booster", price: "₹ 240.00", originalPrice: "₹ 290.00", inStock: true, accent: "#16a34a", color1: "#f0fdf4", color2: "#bbf7d0", icon: "🌿", badge: null },
    { id: 202, name: "Septilin", subtitle: "Infection Defence", price: "₹ 257.00", originalPrice: null, inStock: true, accent: "#00645c", color1: "#f0fdfa", color2: "#99f6e4", icon: "🛡️", badge: "Popular" },
    { id: 203, name: "Tulasi", subtitle: "Respiratory Care", price: "₹ 240.00", originalPrice: "₹ 270.00", inStock: true, accent: "#0d9488", color1: "#f0fdfa", color2: "#ccfbf1", icon: "🌱", badge: null },
    { id: 204, name: "Cold Balm", subtitle: "Instant Relief", price: "from ₹ 46.00", originalPrice: null, inStock: true, accent: "#1d4ed8", color1: "#eff6ff", color2: "#bfdbfe", icon: "❄️", badge: "New" },
    { id: 205, name: "Koflet-SF Lozenges", subtitle: "Sugar Free Formula", price: "₹ 33.00", originalPrice: "₹ 45.00", inStock: true, accent: "#d97706", color1: "#fffbeb", color2: "#fde68a", icon: "🍋", badge: null },
    { id: 206, name: "Septilin Syrup", subtitle: "Kids Friendly", price: "₹ 135.00", originalPrice: null, inStock: true, accent: "#b45309", color1: "#fefce8", color2: "#fef08a", icon: "🧴", badge: "Family" },
    { id: 207, name: "Bresol", subtitle: "Bronchial Support", price: "₹ 170.00", originalPrice: null, inStock: false, accent: "#6b7280", color1: "#f9fafb", color2: "#e5e7eb", icon: "💊", badge: null },
    { id: 208, name: "Koflet Lozenges", subtitle: "Soothing Honey", price: "₹ 45.00", originalPrice: "₹ 55.00", inStock: true, accent: "#0f766e", color1: "#f0fdfa", color2: "#99f6e4", icon: "🍯", badge: null },
    { id: 209, name: "Koflet Cough Syrup", subtitle: "Fast Acting", price: "₹ 95.00", originalPrice: null, inStock: true, accent: "#c2410c", color1: "#fff7ed", color2: "#fed7aa", icon: "🌊", badge: "Best" },
    { id: 210, name: "Bresol Syrup", subtitle: "Gentle Formula", price: "₹ 110.00", originalPrice: "₹ 130.00", inStock: true, accent: "#15803d", color1: "#f0fdf4", color2: "#bbf7d0", icon: "🌿", badge: null },
  ];

  const handleAddToCart = (product) => {
    if (!product.inStock) return;
    addToCart && addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const toggleWishlist = (e, id) => {
    e.preventDefault();
    setWishlist(prev => prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]);
  };

  const getDiscount = (price, original) => {
    if (!original) return null;
    const p = parseFloat(price.replace(/[^\d.]/g, ''));
    const o = parseFloat(original.replace(/[^\d.]/g, ''));
    return Math.round((1 - p / o) * 100);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .rem-root { font-family: 'DM Sans', sans-serif; }
        .rem-display { font-family: 'Playfair Display', serif; }

        @keyframes rem-fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rem-fade { animation: rem-fadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }

        .rem-card {
          background: #fff;
          border: 1px solid #f0f0ee;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.28s cubic-bezier(.22,1,.36,1), box-shadow 0.28s ease;
          position: relative;
        }
        .rem-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.09);
        }

        .rem-img {
          transition: transform 0.45s cubic-bezier(.22,1,.36,1);
        }
        .rem-card:hover .rem-img { transform: scale(1.07) translateY(-3px); }

        .rem-wish {
          position: absolute; top: 10px; right: 10px;
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(255,255,255,0.92);
          border: 1px solid #e5e7eb;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 3;
          transition: border-color 0.2s;
        }
        .rem-wish:hover { border-color: #fca5a5; }

        .rem-badge {
          position: absolute; top: 10px; left: 10px;
          padding: 2px 8px; border-radius: 100px;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.08em; color: #fff; z-index: 3;
        }

        .rem-btn {
          width: 100%; padding: 11px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          border: none; cursor: pointer;
          transition: all 0.2s;
        }
        .rem-btn-active { background: #00645c; color: #fff; }
        .rem-btn-active:hover { background: #004d47; }
        .rem-btn-added { background: #166534; color: #fff; }
        .rem-btn-soldout { background: #f3f4f6; color: #9ca3af; cursor: not-allowed; }

        .rem-offer {
          background: #fef2f2; color: #dc2626;
          border-radius: 4px; font-size: 9px; font-weight: 700;
          padding: 1px 5px; margin-left: 4px;
        }

        .rem-soldout-overlay {
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.55);
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
        }
      `}</style>

      <section className="rem-root py-14 sm:py-18" style={{ background: '#fafaf8' }}>
        <div className="w-[92%] max-w-[1380px] mx-auto">

          {/* Header */}
          <div className="text-center mb-10 rem-fade">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a35e4e] font-semibold mb-2">
              Trusted Formulas
            </p>
            <h2 className="rem-display text-2xl sm:text-3xl text-gray-900">
              Remedies for Cough & Cold
            </h2>
            <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg,#00645c,#a35e4e)', borderRadius: 2, margin: '10px auto 0' }} />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {remediesData.map((product, i) => {
              const isAdded = addedId === product.id;
              const isWished = wishlist.includes(product.id);
              const discount = getDiscount(product.price, product.originalPrice);

              return (
                <div
                  key={product.id}
                  className="rem-card rem-fade"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Image area */}
                  <div className="relative" style={{ background: `linear-gradient(145deg, ${product.color1}, ${product.color2})`, height: 150 }}>

                    {/* Badge */}
                    {product.badge && (
                      <div className="rem-badge" style={{ background: product.accent }}>{product.badge}</div>
                    )}

                    {/* Wishlist */}
                    <button className="rem-wish" onClick={(e) => toggleWishlist(e, product.id)}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill={isWished ? '#ef4444' : 'none'} stroke={isWished ? '#ef4444' : '#9ca3af'} strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>

                    {/* Product visual */}
                    <div className="rem-img h-full flex items-center justify-center">
                      <div className="flex flex-col items-center gap-1">
                        {/* Tube cap */}
                        <div style={{ width: 28, height: 14, borderRadius: '50% 50% 0 0', background: product.accent, opacity: product.inStock ? 1 : 0.4 }} />
                        {/* Tube body */}
                        <div style={{
                          width: 34, minHeight: 72,
                          borderRadius: '0 0 10px 10px',
                          background: `linear-gradient(160deg, ${product.color2} 0%, ${product.color1} 100%)`,
                          border: `1.5px solid ${product.accent}30`,
                          display: 'flex', flexDirection: 'column',
                          alignItems: 'center', justifyContent: 'center',
                          gap: 4, padding: '8px 4px',
                          opacity: product.inStock ? 1 : 0.45,
                        }}>
                          <span style={{ fontSize: 16 }}>{product.icon}</span>
                          <span style={{ fontSize: 6, color: product.accent, fontWeight: 700, letterSpacing: '0.08em', textAlign: 'center' }}>
                            HIM<br />ALAYA
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Sold out overlay */}
                    {!product.inStock && (
                      <div className="rem-soldout-overlay">
                        <span style={{ fontSize: 9, fontWeight: 700, color: '#6b7280', letterSpacing: '0.15em', border: '1px solid #d1d5db', borderRadius: 100, padding: '3px 10px', background: '#fff' }}>
                          SOLD OUT
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="px-3 pt-3 pb-2 flex flex-col flex-1">
                    <p style={{ fontSize: 9, color: product.accent, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 3 }}>
                      {product.subtitle}
                    </p>
                    <h3 style={{ fontSize: 12, fontWeight: 700, color: '#111827', lineHeight: 1.35, marginBottom: 6, minHeight: 32 }}
                      className="line-clamp-2 group-hover:text-[#00645c] transition-colors">
                      {product.name}
                    </h3>

                    {/* Price row */}
                    <div className="flex items-baseline flex-wrap gap-x-1 mt-auto mb-2">
                      <span style={{ fontSize: 13, fontWeight: 800, color: '#111827' }}>{product.price}</span>
                      {product.originalPrice && (
                        <span style={{ fontSize: 10, color: '#9ca3af', textDecoration: 'line-through' }}>{product.originalPrice}</span>
                      )}
                      {discount && <span className="rem-offer">{discount}%</span>}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    disabled={!product.inStock}
                    onClick={() => handleAddToCart(product)}
                    className={`rem-btn ${!product.inStock ? 'rem-btn-soldout' : isAdded ? 'rem-btn-added' : 'rem-btn-active'}`}
                  >
                    {!product.inStock ? 'SOLD OUT' : isAdded ? '✓ ADDED' : 'ADD TO CART'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* View all */}
          <div className="text-center mt-10">
            <a href="#products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00645c] hover:text-[#004d47] transition-colors group">
              View All Remedies
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M2 7.5h11M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Remedies;