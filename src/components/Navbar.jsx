import React, { useState, useEffect, useRef } from 'react';
// ROUTER HOOKS IMPORT KIYE
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ cartCount = 0, setCartCount = () => {}, toggleCart = () => {} }) => {
  const [isVisible, setIsVisible]                       = useState(true);
  const [lastScrollY, setLastScrollY]                   = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen]             = useState(false);
  const [openMobileSection, setOpenMobileSection]       = useState(null);
  const [openMobileSubSection, setOpenMobileSubSection] = useState(null);
  const [searchOpen, setSearchOpen]                     = useState(false);
  const [searchQuery, setSearchQuery]                   = useState('');

  // ROUTER HOOKS SETUP
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const searchInputRef = useRef(null);

  const navLinks = [
    {
      name: 'About Us', href: '/#story',
      megaMenu: [
        [{ title: 'CORPORATE PROFILE', items: ['Our Story','What We Do','What We Stand For','Our Mission and Vision','Our Legacy'] }],
        [{ title: 'LEADERSHIP', items: ['People and Culture','A Message from Manal Foundation',"Global CEO's Message",'Global Leadership Team','Management Structure-HGML'] }],
        [{ title: 'MEDIA', items: ['Podcast','Blog'] }],
        [{ title: 'CAREERS', items: [] }],
        [{ title: 'PARTNERS', items: ['Himalaya Drug Company Private Limited'] }],
      ],
    },
    {
      name: 'Our Research', href: '/#research',
      megaMenu: [
        [{ title: 'OUR SCIENCE', items: ['Our Science','Ayurveda and Wellness','Research at the Heart'] }],
        [{ title: 'OUR PRODUCTS', items: ['Innovation in Health Care','Innovation in Personal Care','Innovation in Animal Health Products'] }],
      ],
    },
    {
      name: 'Products', href: '/#products',
      megaMenu: [
        [{ title: 'PHARMACEUTICALS', items: ["Children's Health","Derma Care","General Health","Oral Health","Women's Health","Men's Health"] }],
        [{ title: 'PERSONAL CARE', items: ['Body Care','Eye Care','Face Care','Hair Care','Lip Care',"Men's Care",'Oral Care','Kits'] }],
        [{ title: 'BABY CARE', items: ['Parent Education','Sensitive Baby Care','Baby Laundry Wash','Bath','Diapers','Gift Packs','Post-Bath','Pre-Bath','Kids Oral Care'] }],
        [
          { title: 'WELLNESS',  items: ['General','Pure Herbs','Adult Diapers','PartySmart','Kits'] },
          { title: 'NUTRITION', items: ['Adult','Kids'] },
        ],
        [
          { title: 'ANIMAL HEALTH',     items: ['Aquaculture','Companion Care','Livestock','Poultry'] },
          { title: 'HIMALAYA FOR MOMS', items: ['Nursing Care'] },
        ],
      ],
    },
    { name: 'Store Locator', href: '/#store-locator' },
    { name: 'CSR',           href: '/#csr' },
    { name: 'Careers',       href: '/#careers' },
  ];

  // NAYE PATHS YAHAN DEFINE KIYE
  const PAGE_MAP = {
    'What We Do': '/what-we-do',
    'What We Stand For': '/what-we-stand-for',
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY && y > 60) setIsVisible(false);
      else if (y < lastScrollY) setIsVisible(true);
      setLastScrollY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape') { setMobileMenuOpen(false); setSearchOpen(false); }
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  const closeAll = () => { setMobileMenuOpen(false); setSearchOpen(false); };

  // LOGO CLICK AB DIRECTLY '/' PAR BHEJEGA
  const handleLogoClick = () => {
    closeAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/'); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const getItemPage = (item) => PAGE_MAP[item] || null;
  const getItemHref = (item) => {
    if (PAGE_MAP[item]) return null;
    const map = { 'Our Story': '/#story', 'Our Science': '/#research', 'Blog': '/#blog', 'Careers': '/#careers' };
    return map[item] || '/#';
  };

  const toggleMobileSection    = (idx) => { setOpenMobileSection(p => p === idx ? null : idx); setOpenMobileSubSection(null); };
  const toggleMobileSubSection = (key) =>   setOpenMobileSubSection(p => p === key ? null : key);

  const IconBtn = ({ children, label, onClick, style = {} }) => (
    <button onClick={onClick} aria-label={label}
      style={{ background:'none', border:'none', cursor:'pointer', color:'#6b7280', padding:4, display:'flex', alignItems:'center', justifyContent:'center', transition:'color 0.18s', ...style }}
      onMouseEnter={e => e.currentTarget.style.color = '#00645c'}
      onMouseLeave={e => e.currentTarget.style.color = style.color || '#6b7280'}
    >{children}</button>
  );

  // ── Mega menu item renderer (USING LINK HOOK) ──
  const MegaItem = ({ item }) => {
    const path = getItemPage(item);
    const isActive = path === currentPath;
    
    if (path) {
      return (
        <Link
          to={path}
          onClick={() => { closeAll(); window.scrollTo(0, 0); }}
          style={{ position:'relative', display:'inline-block', fontSize:13, lineHeight:1.6, cursor:'pointer', fontWeight: isActive ? 700 : 400, color: isActive ? '#00645c' : '#6b7280', transition:'color 0.18s', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00645c'}
          onMouseLeave={e => e.currentTarget.style.color = isActive ? '#00645c' : '#6b7280'}
        >
          {item}
          {isActive && <span style={{ marginLeft:5, fontSize:8, color:'#00645c' }}>●</span>}
        </Link>
      );
    }
    return (
      <a href={getItemHref(item)} className="nb-mlink" onClick={closeAll}>{item}</a>
    );
  };

  // ── Mobile menu item renderer (USING LINK HOOK) ──
  const MobileItem = ({ item }) => {
    const path = getItemPage(item);
    const isActive = path === currentPath;
    if (path) {
      return (
        <Link
          to={path}
          onClick={() => { closeAll(); window.scrollTo(0, 0); }}
          style={{ fontSize:13, color: isActive ? '#00645c' : '#6b7280', fontWeight: isActive ? 700 : 400, display:'block', cursor:'pointer', transition:'color 0.18s', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00645c'}
          onMouseLeave={e => e.currentTarget.style.color = isActive ? '#00645c' : '#6b7280'}
        >
          {item}{isActive && ' ●'}
        </Link>
      );
    }
    return (
      <a href={getItemHref(item)} onClick={closeAll}
        style={{ fontSize:13, color:'#6b7280', textDecoration:'none', display:'block', transition:'color 0.18s' }}
        onMouseEnter={e => e.currentTarget.style.color = '#00645c'}
        onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
      >{item}</a>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box;}
        .nb-root { font-family: 'DM Sans', sans-serif; }
        .nb-link-group:hover .nb-mega { visibility:visible !important; opacity:1 !important; transform:translateY(0) !important; pointer-events:auto !important; }
        .nb-link-group:hover .nb-chevron { transform:rotate(180deg); }
        .nb-link-group:hover .nb-underline { transform:scaleX(1) !important; }
        .nb-acc { max-height:0; overflow:hidden; transition:max-height 0.35s cubic-bezier(.22,1,.36,1); }
        .nb-acc.open { max-height:800px; }
        .nb-srch-ov { position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:60; display:flex; align-items:flex-start; justify-content:center; padding-top:105px; opacity:0; pointer-events:none; transition:opacity 0.22s ease; }
        .nb-srch-ov.open { opacity:1; pointer-events:auto; }
        .nb-srch-box { width:min(90vw,620px); background:#fff; border-radius:18px; padding:20px 22px; box-shadow:0 28px 60px rgba(0,0,0,0.2); transform:translateY(-14px); transition:transform 0.25s cubic-bezier(.22,1,.36,1); }
        .nb-srch-ov.open .nb-srch-box { transform:translateY(0); }
        .nb-mlink { position:relative; display:inline-block; color:#6b7280; font-size:13px; text-decoration:none; transition:color 0.18s; line-height:1.6; }
        .nb-mlink:hover { color:#00645c; }
        .nb-mlink::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:#00645c; transition:width 0.2s; }
        .nb-mlink:hover::after { width:100%; }
        @keyframes pop { 0%{transform:scale(1)} 50%{transform:scale(1.4)} 100%{transform:scale(1)} }
        .nb-badge-pop { animation:pop 0.28s ease; }
        .nb-scroll::-webkit-scrollbar { width:3px; }
        .nb-scroll::-webkit-scrollbar-thumb { background:#e5e7eb; border-radius:4px; }
        @media (min-width: 1024px) {
          .nb-hamburger-btn { display: none !important; }
        }
      `}</style>

      {/* ── SEARCH OVERLAY ── */}
      <div className={`nb-srch-ov ${searchOpen ? 'open' : ''}`} onClick={e => { if (e.target === e.currentTarget) setSearchOpen(false); }}>
        <div className="nb-srch-box nb-root">
          <form onSubmit={handleSearchSubmit} style={{ display:'flex', alignItems:'center', gap:10 }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" style={{ flexShrink:0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input ref={searchInputRef} type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search products, herbs, remedies…"
              style={{ flex:1, border:'none', outline:'none', fontSize:15, color:'#111827', fontFamily:'inherit', background:'transparent' }} />
            {searchQuery && <button type="button" onClick={() => setSearchQuery('')} style={{ background:'none', border:'none', cursor:'pointer', color:'#9ca3af', fontSize:20, lineHeight:1, padding:0 }}>×</button>}
            <button type="submit" style={{ background:'#00645c', color:'#fff', border:'none', borderRadius:8, padding:'8px 18px', fontSize:11, fontWeight:700, letterSpacing:'0.1em', cursor:'pointer', flexShrink:0, fontFamily:'inherit' }}>SEARCH</button>
          </form>
          <div style={{ marginTop:14, display:'flex', flexWrap:'wrap', gap:7 }}>
            {['Neem Face Wash','Ashwagandha','Liv.52','Baby Care','Hair Oil'].map(t => (
              <button key={t} onClick={() => setSearchQuery(t)} style={{ fontSize:11, fontWeight:600, color:'#00645c', background:'rgba(0,100,92,0.07)', border:'none', borderRadius:100, padding:'4px 12px', cursor:'pointer', fontFamily:'inherit' }}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="nb-root" style={{ position:'fixed', width:'100%', zIndex:50, top:0, transition:'transform 0.3s ease', transform: isVisible ? 'translateY(0)' : 'translateY(-36px)' }}>
        <div style={{ background:'#a35e4e', height:36, display:'flex', alignItems:'center', justifyContent:'center', padding:'0 16px' }}>
          <p style={{ fontSize:10, color:'#fff', fontWeight:700, letterSpacing:'0.25em', textTransform:'uppercase', margin:0 }}>WELCOME TO HIMALAYA WELLNESS INDIA!</p>
        </div>

        <nav style={{ background:'#fff', borderBottom:'1px solid #f0f0ee', boxShadow:'0 1px 8px rgba(0,0,0,0.06)', position:'relative', zIndex:50 }}>
          <div style={{ padding:'0 16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', height:66 }}>

              {/* Logo -> Routes to '/' */}
              <button onClick={handleLogoClick} aria-label="Himalaya Home"
                style={{ background:'none', border:'none', cursor:'pointer', padding:0, display:'flex', alignItems:'baseline', gap:5, flexShrink:0 }}>
                <span style={{ fontSize:'clamp(1.3rem,2.8vw,1.65rem)', fontWeight:900, color:'#e87454', letterSpacing:'-0.02em' }}>Himalaya</span>
                <span className="hidden sm:block" style={{ fontSize:8.5, color:'#00645c', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.2em' }}>Since 1930</span>
              </button>

              {/* Desktop nav */}
              <div className="hidden lg:flex" style={{ height:66, alignItems:'center' }}>
                {navLinks.map(link => (
                  <div key={link.name} className="nb-link-group" style={{ position:'relative', height:66, display:'flex', alignItems:'center', padding:'0 10px' }}>
                    <a href={link.href} onClick={closeAll}
                      style={{ position:'relative', display:'flex', alignItems:'center', gap:3, padding:'4px 0', fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', whiteSpace:'nowrap', textDecoration:'none', color: currentPath === link.href ? '#111827' : '#6b7280', transition:'color 0.18s' }}>
                      {link.name}
                      {link.megaMenu && (
                        <svg className="nb-chevron" width="13" height="13" viewBox="0 0 20 20" fill="#aaa" style={{ transition:'transform 0.28s ease', flexShrink:0 }}>
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="nb-underline" style={{ position:'absolute', bottom:-1, left:0, width:'100%', height:2, background:'#111827', borderRadius:1, transformOrigin:'left', transform: currentPath === link.href ? 'scaleX(1)' : 'scaleX(0)', transition:'transform 0.24s ease' }} />
                    </a>

                    {link.megaMenu && (
                      <div className="nb-mega"
                        style={{ position:'fixed', left:0, top:102, width:'100vw', background:'#fff', borderTop:'1px solid #f0f0ee', boxShadow:'0 16px 48px rgba(0,0,0,0.09)', zIndex:49, visibility:'hidden', opacity:0, transform:'translateY(6px)', pointerEvents:'none', transition:'all 0.25s ease' }}>
                        <div style={{ maxWidth:1380, margin:'0 auto', padding:'32px 48px' }}>
                          <div style={{ display:'grid', gridTemplateColumns:`repeat(${link.megaMenu.length},1fr)`, gap:32 }}>
                            {link.megaMenu.map((col, ci) => (
                              <div key={ci} style={{ display:'flex', flexDirection:'column', gap:24 }}>
                                {col.map((sec, si) => (
                                  <div key={si}>
                                    <p style={{ fontSize:10, fontWeight:800, color:'#111827', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:12 }}>{sec.title}</p>
                                    {sec.items.length > 0 && (
                                      <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:9 }}>
                                        {sec.items.map(item => <li key={item}><MegaItem item={item} /></li>)}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Icons */}
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div onClick={() => setSearchOpen(true)} className="hidden md:flex"
                  style={{ alignItems:'center', gap:8, border:'1.5px solid #e5e7eb', borderRadius:8, padding:'7px 12px', cursor:'pointer', transition:'border-color 0.2s', minWidth:155 }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#00645c'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e7eb'}
                  role="button" aria-label="Open search">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <span style={{ fontSize:12, color:'#9ca3af' }}>Search…</span>
                </div>

                <IconBtn label="Search" onClick={() => setSearchOpen(true)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </IconBtn>

                <IconBtn label="My Account" onClick={() => navigate('/login')}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </IconBtn>

                <button onClick={toggleCart} aria-label={`Cart, ${cartCount} items`}
                  style={{ background:'none', border:'none', cursor:'pointer', color:'#6b7280', position:'relative', padding:4, display:'flex', transition:'color 0.18s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#00645c'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  {cartCount > 0 && (
                    <span key={cartCount} className="nb-badge-pop"
                      style={{ position:'absolute', top:-5, right:-6, background:'#a35e4e', color:'#fff', fontSize:8.5, fontWeight:800, borderRadius:100, minWidth:17, height:17, display:'flex', alignItems:'center', justifyContent:'center', padding:'0 3px' }}>
                      {cartCount > 99 ? '99+' : cartCount}
                    </span>
                  )}
                </button>

                <button className="nb-hamburger-btn lg:hidden" onClick={() => setMobileMenuOpen(p => !p)}
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}
                  style={{ background:'none', border:'none', cursor:'pointer', padding:4, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:5, width:30, height:30 }}>
                  <span style={{ display:'block', width:21, height:2, background:'#374151', borderRadius:2, transition:'all 0.28s', transformOrigin:'center', transform: mobileMenuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
                  <span style={{ display:'block', width:21, height:2, background:'#374151', borderRadius:2, transition:'all 0.28s', opacity: mobileMenuOpen ? 0 : 1 }} />
                  <span style={{ display:'block', width:21, height:2, background:'#374151', borderRadius:2, transition:'all 0.28s', transformOrigin:'center', transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ── MOBILE OVERLAY & DRAWER ── */}
      <div onClick={() => setMobileMenuOpen(false)} className="lg:hidden"
        style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.45)', zIndex:47, transition:'opacity 0.28s', opacity: mobileMenuOpen ? 1 : 0, pointerEvents: mobileMenuOpen ? 'auto' : 'none' }} />

      <div className="lg:hidden nb-root" role="dialog" aria-modal="true" aria-label="Navigation"
        style={{ position:'fixed', top:0, left:0, height:'100dvh', width:'min(86vw,360px)', background:'#fff', zIndex:48, boxShadow:'4px 0 40px rgba(0,0,0,0.14)', display:'flex', flexDirection:'column', transition:'transform 0.32s cubic-bezier(.22,1,.36,1)', transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>

        <div style={{ background:'#a35e4e', height:36, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 18px', flexShrink:0 }}>
          <p style={{ fontSize:10, color:'#fff', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', margin:0 }}>Himalaya Wellness</p>
          <button onClick={() => setMobileMenuOpen(false)} aria-label="Close" style={{ background:'none', border:'none', cursor:'pointer', color:'#fff', padding:2, display:'flex' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div style={{ padding:'16px 18px', borderBottom:'1px solid #f0f0ee', flexShrink:0 }}>
          <button onClick={handleLogoClick} style={{ background:'none', border:'none', cursor:'pointer', padding:0, display:'flex', alignItems:'baseline', gap:4 }}>
            <span style={{ fontSize:20, fontWeight:900, color:'#e87454', letterSpacing:'-0.02em' }}>Himalaya</span>
            <span style={{ fontSize:8.5, color:'#00645c', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.2em' }}>Since 1930</span>
          </button>
        </div>

        <div className="nb-scroll" style={{ flex:1, overflowY:'auto' }}>
          {navLinks.map((link, idx) => (
            <div key={link.name} style={{ borderBottom:'1px solid #f5f5f3' }}>
              {link.megaMenu ? (
                <>
                  <button onClick={() => toggleMobileSection(idx)} aria-expanded={openMobileSection === idx}
                    style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px 18px', background:'none', border:'none', cursor:'pointer' }}>
                    <span style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color: currentPath === link.href ? '#00645c' : '#374151' }}>{link.name}</span>
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="#b0b0b0" style={{ flexShrink:0, transition:'transform 0.28s', transform: openMobileSection === idx ? 'rotate(180deg)' : 'none' }}>
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>

                  <div className={`nb-acc ${openMobileSection === idx ? 'open' : ''}`}>
                    <div style={{ background:'#fafaf8', paddingBottom:6 }}>
                      {link.megaMenu.map((col, ci) =>
                        col.map((sec, si) => {
                          const subKey = `${ci}-${si}`;
                          return (
                            <div key={subKey} style={{ borderBottom:'1px solid #f0f0ee' }}>
                              {sec.items.length > 0 ? (
                                <>
                                  <button onClick={() => toggleMobileSubSection(subKey)} aria-expanded={openMobileSubSection === subKey}
                                    style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'11px 18px 11px 28px', background:'none', border:'none', cursor:'pointer' }}>
                                    <span style={{ fontSize:10, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.15em', color:'#374151' }}>{sec.title}</span>
                                    <svg width="12" height="12" viewBox="0 0 20 20" fill="#c4c4c4" style={{ flexShrink:0, transition:'transform 0.25s', transform: openMobileSubSection === subKey ? 'rotate(180deg)' : 'none' }}>
                                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                  </button>
                                  <div className={`nb-acc ${openMobileSubSection === subKey ? 'open' : ''}`}>
                                    <ul style={{ listStyle:'none', padding:'4px 18px 14px 40px', margin:0, display:'flex', flexDirection:'column', gap:9 }}>
                                      {sec.items.map(item => <li key={item}><MobileItem item={item} /></li>)}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                <div style={{ padding:'11px 28px', fontSize:10, fontWeight:800, textTransform:'uppercase', letterSpacing:'0.15em', color:'#374151' }}>{sec.title}</div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <a href={link.href} onClick={closeAll}
                  style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'15px 18px', textDecoration:'none', fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color: currentPath === link.href ? '#00645c' : '#374151', transition:'color 0.18s' }}>
                  {link.name}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" /></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;