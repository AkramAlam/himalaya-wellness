import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail('');
  };

  const quickLinks = [
    'Ask the Experts', 'Blog', 'Careers', 'Contact Us',
    'FAQs', 'Health Help', 'Herb Finder', 'Loyalty Program',
    'Research Papers', 'Store Locator', 'Refund Policy', 'Terms of Service',
  ];

  const policies = [
    { label: 'Shipping Policy', href: '#shipping' },
    { label: 'Returns & Cancellation', href: '#returns' },
    { label: 'Terms of Use', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ];

  const socials = [
    {
      label: 'Instagram',
      href: '#',
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
    },
    {
      label: 'Twitter / X',
      href: '#',
      icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
    },
    {
      label: 'YouTube',
      href: '#',
      icon: <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />,
    },
    {
      label: 'Facebook',
      href: '#',
      icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .ft-root { font-family: 'DM Sans', sans-serif; }
        .ft-display { font-family: 'Playfair Display', serif; }

        .ft-link {
          color: #6b7280;
          font-size: 13px;
          transition: color 0.2s;
          text-decoration: none;
          display: block;
        }
        .ft-link:hover { color: #111827; }

        .ft-social {
          width: 36px; height: 36px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid #e5e7eb;
          transition: all 0.22s;
          color: #6b7280;
        }
        .ft-social:hover {
          background: #00645c; border-color: #00645c; color: #fff;
        }

        .ft-input {
          width: 100%; background: transparent;
          border: none; border-bottom: 1.5px solid #d1d5db;
          padding: 10px 40px 10px 0;
          font-size: 13px; color: #111827;
          outline: none; font-family: 'DM Sans', sans-serif;
          transition: border-color 0.2s;
        }
        .ft-input::placeholder { color: #9ca3af; }
        .ft-input:focus { border-color: #00645c; }

        .ft-sub-btn {
          position: absolute; right: 0; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: #6b7280; transition: color 0.2s;
          display: flex; align-items: center;
        }
        .ft-sub-btn:hover { color: #00645c; }

        .ft-divider { border: none; border-top: 1px solid #e5e7eb; }

        .ft-col-head {
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.2em;
          color: #9ca3af; margin-bottom: 18px;
        }

        @keyframes ft-fadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ft-fade { animation: ft-fadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      <footer className="ft-root" style={{ background: '#f5f5f1' }}>

        {/* ── Top brand strip ── */}
        <div style={{ background: '#00645c' }} className="py-8">
          <div className="w-[92%] max-w-[1380px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="ft-display text-3xl font-bold text-white tracking-tight">Himalaya</span>
              <span className="text-xs text-white/50 ml-2 font-semibold uppercase tracking-[0.2em]">Since 1930</span>
            </div>
            <p className="text-white/60 text-sm font-light text-center sm:text-right max-w-sm">
              Rooted in Ayurveda. Backed by science. Trusted by generations.
            </p>
          </div>
        </div>

        {/* ── Main footer body ── */}
        <div className="w-[92%] max-w-[1380px] mx-auto py-14">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">

            {/* Col 1: Quick Links */}
            <div>
              <p className="ft-col-head">Quick Links</p>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="ft-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Policies + Contact */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="ft-col-head">Policies</p>
                <ul className="space-y-2.5">
                  {policies.map((p) => (
                    <li key={p.label}>
                      <a href={p.href} className="ft-link">{p.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="ft-col-head">Contact Us</p>
                <ul className="space-y-3 text-[13px] text-gray-500" style={{ fontWeight: 300 }}>
                  <li className="leading-relaxed">Himalaya Wellness Company,<br />Makali, Bengaluru – 562162</li>
                  <li>
                    <a href="tel:18002081930" className="ft-link font-medium" style={{ fontSize: 13 }}>📞 1–800–208–1930</a>
                    <span className="block text-[11px] text-gray-400 mt-0.5">Mon–Fri: 9:00am – 5:00pm</span>
                  </li>
                  <li>
                    <a href="mailto:contactus@himalayawellness.com" className="ft-link" style={{ fontSize: 12, wordBreak: 'break-word' }}>
                      ✉ contactus@himalayawellness.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ft-link font-semibold" style={{ color: '#a35e4e', fontSize: 12 }}>
                      ⚠ Report Product Issues
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 3: Newsletter */}
            <div>
              <p className="ft-col-head">Newsletter</p>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                Get Ayurvedic tips, wellness guides, and exclusive offers — straight to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="relative mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="ft-input"
                  required
                />
                <button type="submit" className="ft-sub-btn" aria-label="Subscribe">
                  {subscribed ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00645c" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L18 12M13 7l5 5-5 5" />
                    </svg>
                  )}
                </button>
                {subscribed && (
                  <p className="text-[11px] text-[#00645c] font-semibold mt-2">✓ You're subscribed!</p>
                )}
              </form>

              {/* Social icons */}
              <div>
                <p className="ft-col-head mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} className="ft-social" aria-label={s.label}>
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                        {s.icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 4: Trust badges */}
            <div>
              <p className="ft-col-head">Why Himalaya</p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: '🌿', title: '100% Ayurvedic', desc: 'Pure herbs, no harmful chemicals' },
                  { icon: '🔬', title: 'Science-Backed', desc: 'Research-driven formulations' },
                  { icon: '🏆', title: '90+ Years Legacy', desc: 'Trusted since 1930' },
                  { icon: '🌍', title: 'Global Presence', desc: 'Loved in 100+ countries' },
                ].map((badge) => (
                  <div key={badge.title} className="flex items-start gap-3">
                    <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1.3 }}>{badge.icon}</span>
                    <div>
                      <p className="text-[12px] font-semibold text-gray-800">{badge.title}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5" style={{ fontWeight: 300 }}>{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment badges */}
              <div className="mt-8">
                <p className="ft-col-head mb-3">Secure Payments</p>
                <div className="flex flex-wrap gap-2">
                  {['Visa', 'Mastercard', 'UPI', 'Paytm', 'GPay'].map((p) => (
                    <span key={p} style={{
                      fontSize: 10, fontWeight: 700, color: '#6b7280',
                      border: '1px solid #e5e7eb', borderRadius: 6,
                      padding: '3px 8px', background: '#fff',
                    }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── Divider ── */}
          <hr className="ft-divider" />

          {/* ── Bottom bar ── */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pr-16">
            <p className="text-[12px] text-gray-500">
              © {new Date().getFullYear()} Himalaya Wellness Company. All Rights Reserved.
            </p>
            <p className="text-[11px] text-gray-400 leading-relaxed max-w-2xl" style={{ fontWeight: 300 }}>
              Information on this website is for informational purposes only and is not a substitute for medical advice. Product images are for representation purposes only. Actual product may vary slightly.
            </p>
          </div>



        </div>
      </footer>
    </>
  );
};

export default Footer;