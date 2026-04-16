import React, { useState } from 'react';

const Products = ({ addToCart }) => {
  const [addedId, setAddedId] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('featured');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const productsPerPage = 20;

  const topCategories = [
    { title: 'All', key: 'ALL', emoji: '🌿', color: '#00645c', bg: '#f0fdfa' },
    { title: 'Pharmaceuticals', key: 'PHARMA', emoji: '💊', color: '#0284c7', bg: '#f0f9ff' },
    { title: 'Personal Care', key: 'PERSONAL', emoji: '✨', color: '#e87454', bg: '#fff7f5' },
    { title: 'Baby Care', key: 'BABY', emoji: '👶', color: '#8a63a6', bg: '#faf5ff' },
    { title: 'Wellness', key: 'WELLNESS', emoji: '⚡', color: '#d97706', bg: '#fffbeb' },
    { title: 'Animal Health', key: 'ANIMAL', emoji: '🐾', color: '#15803d', bg: '#f0fdf4' },
    { title: 'For Moms', key: 'MOMS', emoji: '💕', color: '#be123c', bg: '#fff1f2' },
    { title: 'Nutrition', key: 'NUTRITION', emoji: '🥗', color: '#7c3aed', bg: '#faf5ff' },
  ];

  const allProducts = [
    { id: 1,  name: "Shilajit Capsules",                   price: "₹ 375.00",      originalPrice: "₹ 450.00", inStock: true,  accent: "#374151", color1: "#f9fafb", color2: "#e5e7eb", icon: "⚡", subtitle: "Energy & Vitality",   category: 'PHARMA'   },
    { id: 2,  name: "Liv.52 DS",                           price: "₹ 281.00",      originalPrice: null,        inStock: true,  accent: "#00645c", color1: "#f0fdfa", color2: "#99f6e4", icon: "💊", subtitle: "Liver Care",         category: 'PHARMA'   },
    { id: 3,  name: "Himalaya Organic Ashwagandha",         price: "from ₹ 420.00", originalPrice: "₹ 520.00", inStock: true,  accent: "#ea580c", color1: "#fff7ed", color2: "#fed7aa", icon: "🌿", subtitle: "Stress Relief",      category: 'WELLNESS' },
    { id: 4,  name: "Purifying Neem Face Wash",             price: "from ₹ 90.00",  originalPrice: "₹ 120.00", inStock: true,  accent: "#16a34a", color1: "#f0fdf4", color2: "#bbf7d0", icon: "🌱", subtitle: "Deep Cleanse",       category: 'PERSONAL' },
    { id: 5,  name: "Tentex Forte",                        price: "₹ 150.00",      originalPrice: null,        inStock: true,  accent: "#0284c7", color1: "#eff6ff", color2: "#bfdbfe", icon: "💪", subtitle: "Men's Health",       category: 'PHARMA'   },
    { id: 6,  name: "Cystone",                             price: "₹ 165.00",      originalPrice: null,        inStock: false, accent: "#6b7280", color1: "#f9fafb", color2: "#e5e7eb", icon: "🪨", subtitle: "Kidney & Urinary",   category: 'PHARMA'   },
    { id: 7,  name: "Septilin",                            price: "₹ 257.00",      originalPrice: null,        inStock: true,  accent: "#00645c", color1: "#f0fdfa", color2: "#99f6e4", icon: "🛡️", subtitle: "Immunity",           category: 'PHARMA'   },
    { id: 8,  name: "Organic Gokshura",                    price: "₹ 210.00",      originalPrice: "₹ 260.00", inStock: true,  accent: "#15803d", color1: "#f0fdf4", color2: "#bbf7d0", icon: "🌾", subtitle: "Vitality",           category: 'WELLNESS' },
    { id: 9,  name: "Guduchi",                             price: "₹ 240.00",      originalPrice: "₹ 290.00", inStock: true,  accent: "#16a34a", color1: "#f0fdf4", color2: "#bbf7d0", icon: "🌿", subtitle: "Immunity Booster",   category: 'PHARMA'   },
    { id: 10, name: "Baby Massage Oil",                    price: "from ₹ 120.00", originalPrice: "₹ 160.00", inStock: true,  accent: "#d97706", color1: "#fffbeb", color2: "#fde68a", icon: "🍼", subtitle: "Gentle Nourishment", category: 'BABY'     },
    { id: 11, name: "Gentle Baby Bath",                    price: "from ₹ 95.00",  originalPrice: "₹ 130.00", inStock: true,  accent: "#0284c7", color1: "#eff6ff", color2: "#bfdbfe", icon: "🛁", subtitle: "Soft Cleanse",       category: 'BABY'     },
    { id: 12, name: "PartySmart",                          price: "₹ 150.00",      originalPrice: null,        inStock: true,  accent: "#be123c", color1: "#fff1f2", color2: "#fecdd3", icon: "🎉", subtitle: "After Party Care",   category: 'WELLNESS' },
    { id: 13, name: "Mentat Tablets",                      price: "₹ 165.00",      originalPrice: null,        inStock: true,  accent: "#7c3aed", color1: "#faf5ff", color2: "#e9d5ff", icon: "🧠", subtitle: "Brain & Memory",     category: 'PHARMA'   },
    { id: 14, name: "Cocoa Butter Intensive Body Lotion",  price: "from ₹ 140.00", originalPrice: "₹ 180.00", inStock: true,  accent: "#b45309", color1: "#fffbeb", color2: "#fde68a", icon: "🧴", subtitle: "Deep Moisture",      category: 'PERSONAL' },
    { id: 15, name: "Anti-Hair Fall Bhringaraja Shampoo",  price: "from ₹ 61.00",  originalPrice: "₹ 85.00",  inStock: true,  accent: "#0d9488", color1: "#f0fdfa", color2: "#ccfbf1", icon: "🌊", subtitle: "Root Strength",      category: 'PERSONAL' },
    { id: 16, name: "Neem & Turmeric Soap",               price: "₹ 45.00",       originalPrice: "₹ 60.00",  inStock: true,  accent: "#ca8a04", color1: "#fefce8", color2: "#fef08a", icon: "🌿", subtitle: "Purifying Care",     category: 'PERSONAL' },
    { id: 17, name: "Koflet Lozenges",                    price: "₹ 45.00",       originalPrice: "₹ 55.00",  inStock: true,  accent: "#0f766e", color1: "#f0fdfa", color2: "#99f6e4", icon: "🍯", subtitle: "Soothing Honey",     category: 'PHARMA'   },
    { id: 18, name: "Cold Balm",                           price: "from ₹ 46.00",  originalPrice: null,        inStock: true,  accent: "#1d4ed8", color1: "#eff6ff", color2: "#bfdbfe", icon: "❄️", subtitle: "Instant Relief",     category: 'PHARMA'   },
    { id: 19, name: "Bresol Syrup",                        price: "₹ 110.00",      originalPrice: "₹ 130.00", inStock: true,  accent: "#15803d", color1: "#f0fdf4", color2: "#bbf7d0", icon: "🌱", subtitle: "Gentle Formula",     category: 'PHARMA'   },
    { id: 20, name: "Pilex Ointment",                      price: "₹ 105.00",      originalPrice: null,        inStock: true,  accent: "#00645c", color1: "#f0fdfa", color2: "#99f6e4", icon: "💚", subtitle: "Piles Relief",       category: 'PHARMA'   },
    { id: 21, name: "Rumalaya Forte",                      price: "₹ 180.00",      originalPrice: "₹ 220.00", inStock: true,  accent: "#0284c7", color1: "#eff6ff", color2: "#bfdbfe", icon: "💪", subtitle: "Joint Wellness",     category: 'PHARMA'   },
    { id: 22, name: "Diabecon DS",                         price: "₹ 200.00",      originalPrice: null,        inStock: true,  accent: "#7c3aed", color1: "#faf5ff", color2: "#e9d5ff", icon: "🩺", subtitle: "Blood Sugar",        category: 'PHARMA'   },
    { id: 23, name: "EvesCare",                            price: "₹ 155.00",      originalPrice: null,        inStock: true,  accent: "#be123c", color1: "#fff1f2", color2: "#fecdd3", icon: "🌸", subtitle: "Women's Health",     category: 'PHARMA'   },
    { id: 24, name: "Speman",                              price: "₹ 160.00",      originalPrice: "₹ 200.00", inStock: true,  accent: "#0284c7", color1: "#eff6ff", color2: "#bfdbfe", icon: "💊", subtitle: "Men's Health",       category: 'PHARMA'   },
    { id: 25, name: "Gasex Tablets",                       price: "₹ 120.00",      originalPrice: null,        inStock: true,  accent: "#ea580c", color1: "#fff7ed", color2: "#fed7aa", icon: "🌿", subtitle: "Digestive Care",     category: 'PHARMA'   },
    { id: 26, name: "Herbolax",                            price: "₹ 95.00",       originalPrice: "₹ 115.00", inStock: true,  accent: "#16a34a", color1: "#f0fdf4", color2: "#bbf7d0", icon: "🌱", subtitle: "Gentle Laxative",    category: 'PHARMA'   },
    { id: 27, name: "Clarina Anti-Acne Cream",            price: "₹ 115.00",      originalPrice: "₹ 140.00", inStock: true,  accent: "#d97706", color1: "#fffbeb", color2: "#fde68a", icon: "✨", subtitle: "Acne Control",       category: 'PERSONAL' },
    { id: 28, name: "Lip Balm",                            price: "₹ 40.00",       originalPrice: "₹ 55.00",  inStock: true,  accent: "#e87454", color1: "#fff7f5", color2: "#fde4d8", icon: "💋", subtitle: "Lip Nourishment",    category: 'PERSONAL' },
  ];

  const getDiscount = (price, original) => {
    if (!original) return null;
    const p = parseFloat(price.replace(/[^\d.]/g, ''));
    const o = parseFloat(original.replace(/[^\d.]/g, ''));
    return isNaN(p) || isNaN(o) ? null : Math.round((1 - p / o) * 100);
  };

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

  const filtered = activeCategory === 'ALL' ? allProducts : allProducts.filter(p => p.category === activeCategory);
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, ''));
    if (sortBy === 'price-desc') return parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, ''));
    if (sortBy === 'az') return a.name.localeCompare(b.name);
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / productsPerPage);
  const currentProducts = sorted.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .pd-root { font-family: 'DM Sans', sans-serif; }
        .pd-display { font-family: 'Playfair Display', serif; }

        @keyframes pd-fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pd-fade { animation: pd-fadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }

        /* category pill */
        .pd-cat {
          display: inline-flex; align-items: center; gap: 7px;
          border-radius: 100px; padding: 9px 18px;
          font-size: 12px; font-weight: 600;
          border: 1.5px solid transparent;
          cursor: pointer; transition: all 0.22s;
          white-space: nowrap;
        }

        /* product card */
        .pd-card {
          background: #fff; border: 1px solid #f0f0ee;
          border-radius: 20px; overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
        }
        .pd-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.09); }
        .pd-img { transition: transform 0.45s cubic-bezier(.22,1,.36,1); }
        .pd-card:hover .pd-img { transform: scale(1.07) translateY(-3px); }

        .pd-wish {
          position: absolute; top: 10px; right: 10px;
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(255,255,255,0.92); border: 1px solid #e5e7eb;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 3; transition: border-color 0.2s;
        }
        .pd-wish:hover { border-color: #fca5a5; }
        .pd-badge { position: absolute; top: 10px; left: 10px; padding: 2px 8px; border-radius: 100px; font-size: 8px; font-weight: 700; letter-spacing: 0.08em; color: #fff; z-index: 3; }
        .pd-offer { background: #fef2f2; color: #dc2626; border-radius: 4px; font-size: 8px; font-weight: 700; padding: 1px 5px; margin-left: 4px; }

        .pd-btn { width: 100%; padding: 12px; font-size: 9.5px; font-weight: 700; letter-spacing: 0.14em; border: none; cursor: pointer; transition: all 0.2s; border-radius: 0 0 20px 20px; }
        .pd-btn-active { background: #00645c; color: #fff; }
        .pd-btn-active:hover { background: #004d47; }
        .pd-btn-added { background: #166534; color: #fff; }
        .pd-btn-sold { background: #f3f4f6; color: #9ca3af; cursor: not-allowed; }

        /* pagination */
        .pd-page {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 600; cursor: pointer;
          border: 1.5px solid #e5e7eb; background: #fff; color: #374151;
          transition: all 0.2s;
        }
        .pd-page:hover { border-color: #00645c; color: #00645c; }
        .pd-page-active { background: #00645c; color: #fff; border-color: #00645c; }
        .pd-page-disabled { opacity: 0.35; cursor: not-allowed; }

        /* filter/sort bar */
        .pd-select {
          appearance: none; border: 1.5px solid #e5e7eb; border-radius: 10px;
          padding: 9px 36px 9px 14px; font-size: 12px; color: #374151;
          background: #fff; cursor: pointer; outline: none;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.2s;
        }
        .pd-select:focus { border-color: #00645c; }
      `}</style>

      <div className="pd-root bg-white pt-20">

        {/* ── Breadcrumb ── */}
        <div style={{ background: '#f5f5f1', borderBottom: '1px solid #e5e7eb', padding: '12px 0' }}>
          <div className="w-[92%] max-w-[1380px] mx-auto flex items-center gap-2">
            <a href="#" style={{ fontSize: 11, color: '#9ca3af', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.06em' }}>Home</a>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" /></svg>
            <span style={{ fontSize: 11, color: '#374151', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Products</span>
          </div>
        </div>

        <div className="w-[92%] max-w-[1380px] mx-auto py-12">

          {/* ── Section header ── */}
          <div className="pd-fade" style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.28em', color: '#00645c', fontWeight: 700, marginBottom: 10 }}>Explore Our Range</p>
            <h1 className="pd-display" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#111827' }}>All Products</h1>
            <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg,#00645c,#a35e4e)', borderRadius: 2, margin: '12px auto 0' }} />
          </div>

          {/* ── Category filter pills ── */}
          <div className="pd-fade" style={{ marginBottom: 36 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {topCategories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    className="pd-cat"
                    onClick={() => handleCategoryChange(cat.key)}
                    style={{
                      background: isActive ? cat.color : cat.bg,
                      color: isActive ? '#fff' : cat.color,
                      borderColor: isActive ? cat.color : 'transparent',
                      boxShadow: isActive ? `0 4px 14px ${cat.color}30` : 'none',
                    }}
                  >
                    <span style={{ fontSize: 14 }}>{cat.emoji}</span>
                    {cat.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Filter bar ── */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, paddingBottom: 18, borderBottom: '1px solid #f0f0ee', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: 13, color: '#6b7280', fontWeight: 400 }}>
              Showing <strong style={{ color: '#111827' }}>{(currentPage - 1) * productsPerPage + 1}–{Math.min(currentPage * productsPerPage, sorted.length)}</strong> of <strong style={{ color: '#111827' }}>{sorted.length}</strong> products
            </p>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <select className="pd-select" value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}>
                <option value="featured">Featured</option>
                <option value="az">Alphabetically, A–Z</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <svg style={{ position: 'absolute', right: 12, pointerEvents: 'none', color: '#9ca3af' }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* ── Product Grid ── */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" style={{ minHeight: 400 }}>
            {currentProducts.map((product, i) => {
              const isAdded = addedId === product.id;
              const isWished = wishlist.includes(product.id);
              const discount = getDiscount(product.price, product.originalPrice);
              return (
                <div key={product.id} className="pd-card pd-fade" style={{ animationDelay: `${i * 0.04}s` }}>
                  {/* Image area */}
                  <div style={{ position: 'relative', background: `linear-gradient(145deg,${product.color1},${product.color2})`, height: 170 }}>
                    {!product.inStock && <div className="pd-badge" style={{ background: '#6b7280' }}>Sold Out</div>}
                    <button className="pd-wish" onClick={(e) => toggleWish(e, product.id)}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill={isWished ? '#ef4444' : 'none'} stroke={isWished ? '#ef4444' : '#9ca3af'} strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <div className="pd-img" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: product.inStock ? 1 : 0.45 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                        <div style={{ width: 24, height: 12, borderRadius: '50% 50% 0 0', background: product.accent }} />
                        <div style={{ width: 30, minHeight: 70, borderRadius: '0 0 9px 9px', background: `linear-gradient(160deg,${product.color2} 0%,${product.color1} 100%)`, border: `1.5px solid ${product.accent}20`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, padding: '7px 4px' }}>
                          <span style={{ fontSize: 16 }}>{product.icon}</span>
                          <span style={{ fontSize: 5.5, color: product.accent, fontWeight: 800, letterSpacing: '0.1em', textAlign: 'center', lineHeight: 1.3 }}>HIM<br />ALAYA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '12px 12px 8px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: 8.5, color: product.accent, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 3 }}>{product.subtitle}</p>
                    <h3 style={{ fontSize: 12, fontWeight: 700, color: '#111827', lineHeight: 1.35, marginBottom: 7, minHeight: 32 }} className="line-clamp-2">{product.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: 3, marginTop: 'auto', marginBottom: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: '#111827' }}>{product.price}</span>
                      {product.originalPrice && <span style={{ fontSize: 9.5, color: '#9ca3af', textDecoration: 'line-through' }}>{product.originalPrice}</span>}
                      {discount && <span className="pd-offer">{discount}%</span>}
                    </div>
                  </div>

                  <button disabled={!product.inStock} onClick={() => handleAdd(product)}
                    className={`pd-btn ${!product.inStock ? 'pd-btn-sold' : isAdded ? 'pd-btn-added' : 'pd-btn-active'}`}>
                    {!product.inStock ? 'SOLD OUT' : isAdded ? '✓ ADDED' : 'ADD TO CART'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, paddingTop: 28, borderTop: '1px solid #f0f0ee' }}>
              <button
                className={`pd-page ${currentPage === 1 ? 'pd-page-disabled' : ''}`}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button key={i + 1} className={`pd-page ${currentPage === i + 1 ? 'pd-page-active' : ''}`} onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              ))}

              <button
                className={`pd-page ${currentPage === totalPages ? 'pd-page-disabled' : ''}`}
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Products;