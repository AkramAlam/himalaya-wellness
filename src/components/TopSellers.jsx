import React, { useState, useEffect } from 'react';

const TopSellers = ({ addToCart }) => {
  const [wishlist, setWishlist] = useState([]);
  const [addedId, setAddedId] = useState(null);

  const [allProducts, setAllProducts] = useState([]); // सारे प्रोडक्ट यहाँ रहेंगे
  const [activeTab, setActiveTab] = useState('ALL'); // कौन सा टैब खुला है?
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => {
        setAllProducts(data); // डेटाबेस से आये सारे प्रोडक्ट सेव कर लिए
        setLoading(false);
      })
      .catch(error => {
        console.error("Backend se data laane mein error:", error);
        setLoading(false);
      });
  }, []);

  // 🚀 NAYA LOGIC: यूज़र ने जो टैब चुना है, सिर्फ वही प्रोडक्ट दिखाओ
  const displayedProducts = allProducts.filter(product => {
    if (activeTab === 'ALL') return true; // All में सब दिखाओ
    if (activeTab === 'BESTSELLER') return product.isBestSeller === true || product.isBestSeller === 'true'; // Best Seller में सिर्फ टिक वाले
    return product.category === activeTab; // बाकी में सिर्फ कैटेगरी वाले
  });

  const handleAddToCart = (product) => {
    if (!product.inStock) return;
    addToCart && addToCart(product);
    setAddedId(product._id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
    );
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="9" height="9" viewBox="0 0 12 12" fill={i <= Math.round(rating) ? '#f59e0b' : '#e5e7eb'}>
          <path d="M6 1l1.3 2.7 3 .4-2.2 2.1.5 3L6 7.8 3.4 9.2l.5-3L1.7 4.1l3-.4z" />
        </svg>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ts-root { font-family: 'DM Sans', sans-serif; }
        .ts-display { font-family: 'Playfair Display', serif; }

        @keyframes ts-fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ts-fade-1 { animation: ts-fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.05s both; }
        .ts-fade-2 { animation: ts-fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.15s both; }

        .ts-card {
          background: #fff;
          border: 1px solid #f0f0ee;
          border-radius: 18px;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .ts-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
          transform: translateY(-4px);
        }

        .ts-img-wrap {
          position: relative;
          overflow: hidden;
        }
        
        /* 📸 NAYA: Image Slider CSS */
        .ts-image-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          scroll-snap-align: center;
          object-fit: contain; /* Yeh photo ko kaatne se rokega */
          padding: 0; 
          background-color: transparent; 
        }
        .ts-image-slider::-webkit-scrollbar {
          display: none; /* Chrome/Safari ke liye scrollbar hide */
        }
        .ts-image-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          scroll-snap-align: center;
          object-fit: contain;
          padding: 1rem;
          /* mix-blend-multiply photo ke white background ko card ke color se match kar deta hai */
          mix-blend-multiply: normal; 
        }

        .ts-wish {
          position: absolute;
          top: 12px; right: 12px;
          width: 32px; height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          border: 1px solid #e5e7eb;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10;
        }
        .ts-wish:hover { background: #fff; border-color: #fca5a5; }

        .ts-badge {
          position: absolute;
          top: 12px; left: 12px;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #fff;
          z-index: 10;
        }

        .ts-btn {
          width: 100%;
          padding: 10px; /* पहले 13px था, इसे कम करके 10px कर दिया */
          border-radius: 0 0 18px 18px;
          font-size: 10px; /* पहले 11px था */
          font-weight: 700;
          letter-spacing: 0.14em;
          transition: all 0.22s;
          border: none;
          cursor: pointer;
          margin-top: auto;
        }
        .ts-btn-active { background: #00645c; color: #fff; }
        .ts-btn-active:hover { background: #004d47; }
        .ts-btn-added { background: #166534; color: #fff; }
        .ts-btn-soldout { background: #f3f4f6; color: #9ca3af; cursor: not-allowed; }

        .ts-divider {
          width: 48px; height: 2px;
          background: linear-gradient(90deg, #00645c, #a35e4e);
          border-radius: 2px;
          margin: 10px auto 0;
        }

        .ts-offer {
          display: inline-block;
          background: #fef2f2;
          color: #dc2626;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 700;
          padding: 1px 6px;
          margin-left: 6px;
        }
      `}</style>

      <section className="ts-root bg-[#fafaf8] py-16 sm:py-20">
        <div className="w-[92%] max-w-[1380px] mx-auto">

          {/* 🚀 NAYA: Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 ts-fade-2">
            {[
              { id: 'ALL', label: 'All Products' },
              { id: 'BESTSELLER', label: '⭐ Best Sellers' },
              { id: 'PERSONAL', label: 'Personal Care' },
              { id: 'BABY', label: 'Baby Care' },
              { id: 'PHARMA', label: 'Wellness' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-[12px] font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#00645c] text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-[#00645c] hover:text-[#00645c]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00645c]"></div>
              <span className="ml-3 text-[#00645c] font-medium">Loading Products from MongoDB...</span>
            </div>
          ) : (
            <div className="ts-fade-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {displayedProducts.map((product) => {

                const isAdded = addedId === product._id;
                const isWished = wishlist.includes(product._id);

                // Fallback colors
                const color1 = product.color1 || "#f0fdfa";
                const color2 = product.color2 || "#99f6e4";
                const accent = product.accent || "#00645c";
                const badgeColor = product.badgeColor || "#00645c";
                const badgeText = product.badge || "Best Seller";

                let discount = null;
                if (product.originalPrice && product.price) {
                  const originalP = parseFloat(product.originalPrice.replace(/[^\d.]/g, ''));
                  const currentP = parseFloat(product.price.replace(/[^\d.]/g, ''));
                  if (originalP > currentP) {
                    discount = Math.round((1 - currentP / originalP) * 100);
                  }
                }

                return (
                  <div key={product._id} className="ts-card relative group max-w-[260px] mx-auto w-full">

                    {/* Image Area */}
                    <div className="ts-img-wrap relative group w-full bg-white" style={{ aspectRatio: '1 / 1' }}>

                      <div className="ts-badge opacity-80" style={{ background: badgeColor }}>
                        {badgeText}
                      </div>

                      <button className="ts-wish" onClick={() => toggleWishlist(product._id)} aria-label="Wishlist">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill={isWished ? '#ef4444' : 'none'} stroke={isWished ? '#ef4444' : '#9ca3af'} strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>

                      {/* 📸 NAYA LOGIC: Yahan hum photo dikhayenge */}
                      <div className="h-full w-full">
                        {product.images && product.images.length > 0 ? (
                          // Agar Database mein Photos hain toh unka Swipeable Slider dikhao
                          <div className="ts-image-slider">
                            {product.images.map((imgUrl, index) => (
                              <img
                                key={index}
                                src={imgUrl}
                                alt={`${product.name} - view ${index + 1}`}
                                className="ts-image-slide mix-blend-multiply drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                              />
                            ))}
                          </div>
                        ) : (
                          // Agar Photo nahi hai toh purana Emoji dikhao
                          <div className="h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                            <div className="flex flex-col items-center gap-2">
                              <div className="relative">
                                <div className="mx-auto w-9 h-5 rounded-t-full" style={{ background: accent }} />
                                <div className="w-12 rounded-b-2xl flex flex-col items-center justify-center gap-1 py-4"
                                  style={{
                                    background: `linear-gradient(160deg, ${color2} 0%, ${color1} 100%)`,
                                    border: `1.5px solid ${accent}22`,
                                    minHeight: 90,
                                  }}>
                                  <span style={{ fontSize: 22 }}>{product.icon || "🌿"}</span>
                                  <span style={{ fontSize: 7, color: accent, fontWeight: 700, letterSpacing: '0.1em', textAlign: 'center', lineHeight: 1.3, padding: '0 4px' }}>
                                    HIMALAYA
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 📸 Agar ek se zyada photo hain toh chote Dots dikhao neeche */}
                      {product.images && product.images.length > 1 && (
                        <div className="absolute bottom-2 w-full flex justify-center gap-1 z-10">
                          {product.images.map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400 opacity-60"></div>
                          ))}
                        </div>
                      )}

                      {!product.inStock && (
                        <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-20">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-300 rounded-full px-4 py-1.5 bg-white/80">
                            Sold Out
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="px-3 pt-2 pb-2 flex flex-col flex-1 text-left">
                      {/* Subtitle */}
                      <p className="text-[9px] uppercase tracking-[0.1em] font-medium mb-0.5" style={{ color: accent }}>
                        {product.subtitle || product.category}
                      </p>

                      {/* Title */}
                      <h3 className="text-[12px] font-semibold text-gray-800 leading-tight mb-1">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <StarRating rating={product.rating || 4.5} />
                        <span className="text-[10px] text-gray-400">
                          {product.rating || 4.5} ({product.reviews ? product.reviews.toLocaleString() : "1.2k"})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-1.5 mt-auto mb-0.5">
                        <span className="text-sm font-bold text-gray-900">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-[10px] text-gray-400 line-through">₹{product.originalPrice}</span>
                        )}
                        {discount && (
                          <span className="ts-offer text-[9px] px-1 py-0.5">{discount}% off</span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      disabled={!product.inStock}
                      onClick={() => handleAddToCart(product)}
                      className={`ts-btn ${!product.inStock ? 'ts-btn-soldout' : isAdded ? 'ts-btn-added' : 'ts-btn-active'}`}
                    >
                      {!product.inStock ? 'SOLD OUT' : isAdded ? '✓ ADDED TO CART' : 'ADD TO CART'}
                    </button>

                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TopSellers;