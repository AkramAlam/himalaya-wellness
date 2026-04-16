import React, { useState } from 'react';

const ShippingPolicy = () => {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { id: 1, key: 'charges', label: 'Shipping Charges', emoji: '💳' },
        { id: 2, key: 'timelines', label: 'Delivery Timelines', emoji: '🚚' },
        { id: 3, key: 'tracking', label: 'Order Tracking', emoji: '📍' },
        { id: 4, key: 'nonavail', label: 'Non-Availability', emoji: '📦' },
        { id: 5, key: 'intl', label: 'International Shipping', emoji: '🌍' },
        { id: 6, key: 'contact', label: 'Need Help?', emoji: '💬' },
    ];

    const deliveryTable = [
        { region: 'Metro Cities', time: '2 – 4 Business Days', icon: '🏙️', color: '#00645c' },
        { region: 'Tier 2 & Tier 3 Cities', time: '4 – 6 Business Days', icon: '🏘️', color: '#d97706' },
        { region: 'North East & Remote Areas', time: '6 – 8 Business Days', icon: '🏔️', color: '#be123c' },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .sp-root    { font-family: 'DM Sans', sans-serif; }
        .sp-display { font-family: 'Playfair Display', serif; }

        @keyframes sp-fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .sp-fade   { animation: sp-fadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }
        .sp-fade-1 { animation-delay:0.05s; }
        .sp-fade-2 { animation-delay:0.14s; }
        .sp-fade-3 { animation-delay:0.24s; }

        /* hero blobs */
        @keyframes sp-drift {
          0%,100% { transform:translate(0,0); }
          50%      { transform:translate(18px,-14px); }
        }
        .sp-drift-a { animation: sp-drift 14s ease-in-out infinite; }
        .sp-drift-b { animation: sp-drift 18s ease-in-out infinite reverse; }

        /* TOC pills */
        .sp-toc-pill {
          display:flex; align-items:center; gap:8px;
          border-radius:100px; padding:8px 16px;
          font-size:12px; font-weight:600; cursor:pointer;
          border:1.5px solid #e5e7eb; background:#fff;
          color:#374151; text-decoration:none;
          transition:all 0.22s; white-space:nowrap;
        }
        .sp-toc-pill:hover {
          border-color:#00645c; color:#00645c;
          background:rgba(0,100,92,0.04);
        }

        /* section card */
        .sp-section {
          background:#fff; border:1px solid #f0f0ee;
          border-radius:20px; padding:32px 32px 28px;
          margin-bottom:20px;
          transition:box-shadow 0.28s ease;
          position:relative; overflow:hidden;
        }
        .sp-section:hover { box-shadow:0 8px 28px rgba(0,0,0,0.06); }

        .sp-section-blob {
          position:absolute; border-radius:50%;
          pointer-events:none; opacity:0.06;
          right:-30px; top:-30px;
          width:120px; height:120px;
          transition:transform 0.4s ease;
        }
        .sp-section:hover .sp-section-blob { transform:scale(1.2); }

        /* highlight box */
        .sp-highlight {
          display:flex; align-items:flex-start; gap:14px;
          background:rgba(0,100,92,0.05);
          border:1px solid rgba(0,100,92,0.12);
          border-radius:14px; padding:18px 20px;
          margin-top:16px;
        }

        /* delivery table */
        .sp-table-row {
          display:flex; align-items:center; gap:14px;
          padding:14px 16px; border-radius:12px;
          border:1px solid #f0f0ee; background:#fff;
          margin-bottom:8px;
          transition:transform 0.22s ease, box-shadow 0.22s ease;
        }
        .sp-table-row:hover { transform:translateX(4px); box-shadow:0 4px 16px rgba(0,0,0,0.06); }

        /* free shipping banner */
        .sp-banner {
          background:linear-gradient(135deg,#00645c,#0d9488);
          border-radius:16px; padding:20px 24px;
          display:flex; align-items:center; gap:16px;
          margin-bottom:20px;
        }

        /* contact card */
        .sp-contact-card {
          border-radius:14px; padding:18px 20px;
          border:1.5px solid #f0f0ee;
          display:flex; align-items:center; gap:14px;
          transition:border-color 0.2s, box-shadow 0.2s;
          text-decoration:none;
        }
        .sp-contact-card:hover { border-color:#00645c; box-shadow:0 4px 14px rgba(0,100,92,0.1); }

        /* section number */
        .sp-num {
          font-family:'Playfair Display',serif;
          font-size:40px; font-weight:700;
          color:rgba(0,100,92,0.08);
          position:absolute; top:16px; right:24px;
          line-height:1;
        }
      `}</style>

            <div className="sp-root bg-white pt-20">

                {/* ══════════════════
            HERO
        ══════════════════ */}
                <div style={{ position: 'relative', background: 'linear-gradient(135deg,#03201d 0%,#003b36 50%,#00645c 100%)', overflow: 'hidden', minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="sp-drift-a" style={{ position: 'absolute', top: -80, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(74,222,128,0.18) 0%,transparent 70%)' }} />
                    <div className="sp-drift-b" style={{ position: 'absolute', bottom: -60, left: -40, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle,rgba(232,116,84,0.1) 0%,transparent 70%)' }} />
                    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05 }}>
                        <defs><pattern id="spg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="#4ade80" strokeWidth="0.6" /></pattern></defs>
                        <rect width="100%" height="100%" fill="url(#spg)" />
                    </svg>

                    <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '52px 20px' }} className="sp-fade sp-fade-1">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: 100, padding: '5px 16px', marginBottom: 18 }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: '#86efac', textTransform: 'uppercase' }}>Policies</span>
                        </div>
                        <h1 className="sp-display" style={{ fontSize: 'clamp(2rem,5vw,3.6rem)', color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>
                            Shipping <em style={{ color: '#4ade80' }}>Policy</em>
                        </h1>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 300, maxWidth: 440, margin: '0 auto' }}>
                            Fast, safe, and reliable delivery — because your wellness can't wait.
                        </p>
                    </div>
                </div>

                {/* ══════════════════
            CONTENT
        ══════════════════ */}
                <div className="w-[92%] max-w-[860px] mx-auto py-14">

                    {/* Breadcrumb */}
                    <div className="sp-fade sp-fade-1" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 36 }}>
                        <a href="#" style={{ fontSize: 11, color: '#9ca3af', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Home</a>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l3 3-3 3" stroke="#d1d5db" strokeWidth="1.3" strokeLinecap="round" /></svg>
                        <span style={{ fontSize: 11, color: '#374151', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Shipping Policy</span>
                    </div>

                    {/* TOC */}
                    <div className="sp-fade sp-fade-2" style={{ marginBottom: 40 }}>
                        <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9ca3af', fontWeight: 600, marginBottom: 12 }}>Jump to section</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {sections.map(s => (
                                <a key={s.key} href={`#${s.key}`} className="sp-toc-pill">
                                    <span style={{ fontSize: 14 }}>{s.emoji}</span>
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="sp-fade sp-fade-2" style={{ marginBottom: 28 }}>
                        <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.85, fontWeight: 300 }}>
                            At <strong style={{ color: '#111827', fontWeight: 600 }}>Himalaya Wellness Company</strong>, we are committed to delivering your orders in excellent condition and in the fastest time possible. We partner with reputed national courier companies to ensure your products reach you safely.
                        </p>
                    </div>

                    {/* ── 1. Shipping Charges ── */}
                    <div id="charges" className="sp-section sp-fade sp-fade-3">
                        <div className="sp-section-blob" style={{ background: '#00645c' }} />
                        <span className="sp-num">01</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                            <div style={{ width: 38, height: 38, borderRadius: 12, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>💳</div>
                            <h2 className="sp-display" style={{ fontSize: 20, color: '#111827' }}>Shipping Charges</h2>
                        </div>

                        {/* Free shipping banner */}
                        <div className="sp-banner">
                            <span style={{ fontSize: 28, flexShrink: 0 }}>🎉</span>
                            <div>
                                <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>FREE Shipping on orders above ₹ 399</p>
                                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}>No code needed — free shipping is applied automatically at checkout.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <div className="sp-highlight">
                                <span style={{ fontSize: 20, flexShrink: 0 }}>💰</span>
                                <div>
                                    <p style={{ fontSize: 13, fontWeight: 600, color: '#111827', marginBottom: 3 }}>Orders below ₹ 399</p>
                                    <p style={{ fontSize: 13, color: '#6b7280', fontWeight: 300 }}>A flat shipping charge of <strong style={{ color: '#111827' }}>₹ 50.00</strong> will be applied at checkout.</p>
                                </div>
                            </div>
                            <div style={{ fontSize: 12, color: '#9ca3af', padding: '10px 4px', fontWeight: 300 }}>
                                ⚠ Shipping charges (if any) are non-refundable in case of returns or cancellations after dispatch.
                            </div>
                        </div>
                    </div>

                    {/* ── 2. Delivery Timelines ── */}
                    <div id="timelines" className="sp-section sp-fade sp-fade-3">
                        <div className="sp-section-blob" style={{ background: '#d97706' }} />
                        <span className="sp-num">02</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <div style={{ width: 38, height: 38, borderRadius: 12, background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🚚</div>
                            <h2 className="sp-display" style={{ fontSize: 20, color: '#111827' }}>Delivery Timelines</h2>
                        </div>
                        <p style={{ fontSize: 13, color: '#6b7280', fontWeight: 300, marginBottom: 20, lineHeight: 1.7 }}>
                            Most orders are dispatched within <strong style={{ color: '#111827' }}>1–2 business days</strong> (excluding Sundays and public holidays). Estimated delivery times by region:
                        </p>

                        {deliveryTable.map((row) => (
                            <div key={row.region} className="sp-table-row">
                                <div style={{ width: 40, height: 40, borderRadius: 12, background: `${row.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                                    {row.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: 13, fontWeight: 600, color: '#111827', marginBottom: 2 }}>{row.region}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <span style={{ fontSize: 12, fontWeight: 700, color: row.color, background: `${row.color}12`, borderRadius: 100, padding: '4px 12px' }}>{row.time}</span>
                                </div>
                            </div>
                        ))}

                        <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 14, fontWeight: 300, lineHeight: 1.6 }}>
                            * Estimated times only. Unforeseen circumstances like extreme weather or logistical delays may occasionally cause slight extensions.
                        </p>
                    </div>

                    {/* ── 3. Order Tracking ── */}
                    <div id="tracking" className="sp-section sp-fade sp-fade-3">
                        <div className="sp-section-blob" style={{ background: '#7c3aed' }} />
                        <span className="sp-num">03</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <div style={{ width: 38, height: 38, borderRadius: 12, background: '#faf5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>📍</div>
                            <h2 className="sp-display" style={{ fontSize: 20, color: '#111827' }}>Order Tracking</h2>
                        </div>
                        <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.8, fontWeight: 300 }}>
                            Once your order is shipped, you will receive an <strong style={{ color: '#111827' }}>email and SMS notification</strong> containing your tracking link and the courier partner's details.
                        </p>
                        <div className="sp-highlight" style={{ marginTop: 16 }}>
                            <span style={{ fontSize: 20 }}>👤</span>
                            <p style={{ fontSize: 13, color: '#374151', fontWeight: 300 }}>You can also track your order by logging into your account and visiting the <strong style={{ color: '#00645c' }}>"My Orders"</strong> section.</p>
                        </div>
                    </div>

                    {/* ── 4. Non-Availability ── */}
                    <div id="nonavail" className="sp-section sp-fade sp-fade-3">
                        <div className="sp-section-blob" style={{ background: '#ea580c' }} />
                        <span className="sp-num">04</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <div style={{ width: 38, height: 38, borderRadius: 12, background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>📦</div>
                            <h2 className="sp-display" style={{ fontSize: 20, color: '#111827' }}>Non-Availability on Delivery</h2>
                        </div>
                        <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.8, fontWeight: 300 }}>
                            Our delivery partners will attempt to deliver your package up to <strong style={{ color: '#111827' }}>three (3) times</strong> before returning it to us.
                        </p>
                        <div className="sp-highlight" style={{ background: 'rgba(234,88,12,0.05)', borderColor: 'rgba(234,88,12,0.15)', marginTop: 16 }}>
                            <span style={{ fontSize: 20 }}>⚠️</span>
                            <p style={{ fontSize: 13, color: '#374151', fontWeight: 300 }}>Please ensure you provide a <strong style={{ color: '#111827' }}>complete and accurate shipping address</strong> including PIN code and a reachable mobile number to avoid delivery failures.</p>
                        </div>
                    </div>

                    {/* ── 5. International ── */}
                    <div id="intl" className="sp-section sp-fade sp-fade-3">
                        <div className="sp-section-blob" style={{ background: '#0284c7' }} />
                        <span className="sp-num">05</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <div style={{ width: 38, height: 38, borderRadius: 12, background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🌍</div>
                            <h2 className="sp-display" style={{ fontSize: 20, color: '#111827' }}>International Shipping</h2>
                        </div>
                        <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.8, fontWeight: 300 }}>
                            Currently, purchases made on this website (<strong style={{ color: '#111827' }}>himalayawellness.in</strong>) are restricted to deliveries <strong style={{ color: '#111827' }}>within India only</strong>.
                        </p>
                        <div className="sp-highlight" style={{ marginTop: 16 }}>
                            <span style={{ fontSize: 20 }}>🌐</span>
                            <p style={{ fontSize: 13, color: '#374151', fontWeight: 300 }}>For international orders, please visit our respective <strong style={{ color: '#00645c' }}>global websites</strong> for your country.</p>
                        </div>
                    </div>

                    {/* ── 6. Contact ── */}
                    <div id="contact" className="sp-section sp-fade sp-fade-3" style={{ background: 'linear-gradient(135deg,#f0fdfa,#fafaf8)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                            <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(0,100,92,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>💬</div>
                            <h2 className="sp-display" style={{ fontSize: 20, color: '#111827' }}>Need Help with Your Order?</h2>
                        </div>
                        <p style={{ fontSize: 13, color: '#6b7280', fontWeight: 300, marginBottom: 18, lineHeight: 1.7 }}>
                            If your order is delayed or you have any shipping questions, our support team is here to help.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <a href="mailto:contactus@himalayawellness.com" className="sp-contact-card">
                                <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(0,100,92,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>✉️</div>
                                <div>
                                    <p style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Email Us</p>
                                    <p style={{ fontSize: 13, fontWeight: 600, color: '#00645c' }}>contactus@himalayawellness.com</p>
                                </div>
                            </a>
                            <div className="sp-contact-card" style={{ cursor: 'default' }}>
                                <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(163,94,78,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>📞</div>
                                <div>
                                    <p style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Toll-Free</p>
                                    <p style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>1–800–208–1930</p>
                                    <p style={{ fontSize: 11, color: '#9ca3af', fontWeight: 300, marginTop: 1 }}>Mon–Fri: 9:00 AM – 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom note */}
                    <p style={{ textAlign: 'center', fontSize: 11, color: '#d1d5db', marginTop: 32, fontWeight: 300 }}>
                        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })} · Himalaya Wellness Company
                    </p>

                </div>
            </div>
        </>
    );
};

export default ShippingPolicy;