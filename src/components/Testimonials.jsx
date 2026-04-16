import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const reviews = [
    { id: 1, rating: 4, title: "Solid!", text: "Exactly what I needed. Simple, effective, no fuss.", author: "M Shanmugam", verified: true, location: "Hosur, TN", product: "Liv.52", avatar: "MS" },
    { id: 2, rating: 5, title: "Experience bhut hi acha ha", text: "Product is very good for use baby. Skin feels so soft.", author: "Narendra Rawat", verified: false, location: "Uttarakhand", product: "Baby Lotion", avatar: "NR" },
    { id: 3, rating: 4, title: "I trust it", text: "Using it for years. Never switched to anything else.", author: "Undeswar Rao Bheri", verified: true, location: "Secunderabad, TG", product: "Ashwagandha", avatar: "UR" },
    { id: 4, rating: 5, title: "Very Effective", text: "Results are visible in just a few days. Highly impressed.", author: "Rahul Verma", verified: true, location: "Mumbai, MH", product: "Neem Face Wash", avatar: "RV" },
    { id: 5, rating: 5, title: "Best for daily use", text: "Gentle on the skin and totally natural. Love it!", author: "Sneha Kapoor", verified: true, location: "Delhi", product: "Face Cream", avatar: "SK" },
    { id: 6, rating: 4, title: "Authentic Ayurveda", text: "You can feel the quality of ingredients. Amazing.", author: "David Smith", verified: false, location: "Goa", product: "Hair Oil", avatar: "DS" },
    { id: 7, rating: 5, title: "Value for money", text: "Affordable yet premium quality. Will repurchase.", author: "Anjali Sharma", verified: true, location: "Pune, MH", product: "Shilajit", avatar: "AS" },
    { id: 8, rating: 4, title: "Highly Recommended", text: "My whole family uses this now. Great for all ages.", author: "Mohd Tariq", verified: true, location: "Lucknow, UP", product: "Septilin", avatar: "MT" },
    { id: 9, rating: 5, title: "Great Quality", text: "Never disappoints. Been using for 3 years.", author: "Priya Singh", verified: true, location: "Bangalore, KA", product: "Guduchi", avatar: "PS" },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const trackRef = useRef(null);

  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(p => (p + 1) % totalPages), 4200);
    return () => clearInterval(t);
  }, [totalPages, paused]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent(p => (p - 1 + totalPages) % totalPages);
  const next = () => setCurrent(p => (p + 1) % totalPages);

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  const StarRow = ({ rating, size = 14 }) => (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20"
          fill={i <= rating ? '#f59e0b' : '#e5e7eb'}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const avatarColors = [
    ['#bbf7d0','#166534'], ['#fed7aa','#9a3412'], ['#e9d5ff','#6b21a8'],
    ['#bae6fd','#075985'], ['#fde68a','#78350f'], ['#fecdd3','#9f1239'],
    ['#ccfbf1','#134e4a'], ['#ddd6fe','#4c1d95'], ['#fef08a','#713f12'],
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .tm-root { font-family: 'DM Sans', sans-serif; }
        .tm-display { font-family: 'Playfair Display', serif; }

        @keyframes tm-fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .tm-fade { animation: tm-fadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }

        .tm-card {
          background: #fff;
          border: 1px solid #f0f0ee;
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: transform 0.28s cubic-bezier(.22,1,.36,1), box-shadow 0.28s ease;
          height: 100%;
        }
        .tm-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }

        .tm-big-quote {
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          line-height: 0.6;
          color: #e5e7eb;
          user-select: none;
          margin-bottom: 12px;
        }

        .tm-avatar {
          width: 38px; height: 38px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700; flex-shrink: 0;
        }

        .tm-verified {
          display: inline-flex; align-items: center; gap: 3px;
          font-size: 9px; font-weight: 700; color: #00645c;
          background: rgba(0,100,92,0.08); border-radius: 100px;
          padding: 2px 7px; margin-top: 6px; width: fit-content;
        }

        .tm-product-tag {
          font-size: 9px; font-weight: 600; letter-spacing: 0.1em;
          color: #a35e4e; background: rgba(163,94,78,0.08);
          border-radius: 100px; padding: 2px 8px;
          width: fit-content; margin-bottom: 10px;
        }

        .tm-nav-btn {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid #e5e7eb;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; background: #fff;
          transition: all 0.2s;
        }
        .tm-nav-btn:hover {
          background: #00645c; border-color: #00645c;
        }
        .tm-nav-btn:hover svg path { stroke: #fff; }

        .tm-dot {
          border-radius: 100px;
          transition: all 0.35s cubic-bezier(.22,1,.36,1);
          cursor: pointer; border: none;
        }

        .tm-stat {
          text-align: center; padding: 0 20px;
        }
        .tm-stat + .tm-stat { border-left: 1.5px solid #e5e7eb; }
      `}</style>

      <section
        className="tm-root py-16 sm:py-20"
        style={{ background: '#fafaf8' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="w-[92%] max-w-[1380px] mx-auto">

          {/* ── Header ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-8 tm-fade">

            {/* Left text */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#a35e4e] font-semibold mb-3">
                What People Say
              </p>
              <h2 className="tm-display text-3xl sm:text-4xl text-gray-900 leading-tight">
                Loved by Millions,<br />
                <em className="text-[#00645c]">Trusted for Generations</em>
              </h2>
              <div style={{ width:44, height:2, background:'linear-gradient(90deg,#00645c,#a35e4e)', borderRadius:2, marginTop:12 }} />
            </div>

            {/* Right: stats + nav */}
            <div className="flex flex-col gap-5 items-start lg:items-end">
              {/* Stats row */}
              <div className="flex items-center">
                <div className="tm-stat">
                  <div className="tm-display text-3xl font-bold text-gray-900">{avgRating}</div>
                  <StarRow rating={Math.round(parseFloat(avgRating))} size={13} />
                  <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Avg Rating</div>
                </div>
                <div className="tm-stat">
                  <div className="tm-display text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Happy Customers</div>
                </div>
                <div className="tm-stat">
                  <div className="tm-display text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Recommend Us</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Carousel ── */}
          <div className="overflow-hidden" ref={trackRef}>
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {/* Group reviews into pages */}
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <div
                  key={pageIdx}
                  className="w-full flex-shrink-0 grid gap-4"
                  style={{ gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0,1fr))` }}
                >
                  {reviews.slice(pageIdx * itemsPerPage, pageIdx * itemsPerPage + itemsPerPage).map((review, ri) => {
                    const [bg, fg] = avatarColors[(pageIdx * itemsPerPage + ri) % avatarColors.length];
                    return (
                      <div key={review.id} className="tm-card">

                        {/* Product tag */}
                        <div className="tm-product-tag">{review.product}</div>

                        {/* Stars */}
                        <StarRow rating={review.rating} size={14} />

                        {/* Big quote */}
                        <div className="tm-big-quote">"</div>

                        {/* Title */}
                        <h3 className="tm-display text-[17px] text-gray-900 italic leading-snug mb-2">
                          {review.title}
                        </h3>

                        {/* Body */}
                        {review.text && (
                          <p className="text-sm text-gray-500 leading-relaxed mb-4" style={{ fontWeight:300 }}>
                            {review.text}
                          </p>
                        )}

                        {/* Author */}
                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                          <div className="tm-avatar" style={{ background: bg, color: fg }}>
                            {review.avatar}
                          </div>
                          <div>
                            <p className="text-[12px] font-semibold text-gray-800 uppercase tracking-wide leading-tight">
                              {review.author}
                            </p>
                            {review.location && (
                              <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                                {review.location}
                              </p>
                            )}
                            {review.verified && (
                              <div className="tm-verified">
                                <svg width="9" height="9" viewBox="0 0 20 20" fill="#00645c">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Verified Purchase
                              </div>
                            )}
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* ── Controls ── */}
          <div className="flex items-center justify-between mt-10">

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className="tm-dot"
                  onClick={() => goTo(i)}
                  style={{
                    width: current === i ? 24 : 8,
                    height: 8,
                    background: current === i ? '#00645c' : '#d1d5db',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-3">
              <button className="tm-nav-btn" onClick={prev} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="tm-nav-btn" onClick={next} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Testimonials;