import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems, updateQuantity, removeFromCart }) => {
  // Price calculation with robust parsing (removes '₹' and spaces)
  const subtotal = cartItems.reduce((total, item) => {
    const priceNum = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
      : item.price;
    return total + (priceNum * item.quantity);
  }, 0);
  
  const shipping = (subtotal >= 699 || subtotal === 0) ? 0 : 50;
  const total = subtotal + shipping;

  const [email, setEmail] = useState('');

  // ── MODERN EMPTY STATE ──
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center bg-slate-50/50">
        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center max-w-md mx-4 border border-slate-100">
          <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-[#00645c]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h2>
          <p className="text-slate-500 mb-8 text-sm">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="bg-[#00645c] text-white px-8 py-3.5 rounded-xl hover:bg-[#004d47] hover:shadow-lg hover:shadow-teal-900/20 transition-all font-bold tracking-wider text-xs uppercase active:scale-[0.98]">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-[#00645c]/20 focus:border-[#00645c] block p-3.5 transition-all duration-200 placeholder-slate-400 shadow-sm";

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-7rem)] bg-white font-sans selection:bg-teal-100">
      
      {/* ========================================== */}
      {/* LEFT COLUMN: Modern Checkout Form          */}
      {/* ========================================== */}
      <div className="w-full lg:w-[55%] xl:w-[60%] px-6 lg:px-16 xl:px-32 pt-12 pb-20 bg-white z-10">
        
        {/* Modern Breadcrumb */}
        <nav className="flex items-center text-xs font-bold tracking-wider text-slate-400 mb-10 space-x-2 uppercase">
          <Link to="/" className="hover:text-[#00645c] transition-colors">Cart</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-[#00645c] bg-teal-50 px-2.5 py-1 rounded-md">Information</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span>Shipping</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span>Payment</span>
        </nav>

        {/* Contact Information */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Contact</h2>
            <p className="text-sm text-slate-500">
              Have an account? <Link to="/login" className="text-[#00645c] font-bold hover:text-[#004d47] transition-colors">Log in</Link>
            </p>
          </div>
          <input 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
          <div className="flex items-center mt-4">
            <input type="checkbox" id="newsletter" className="w-4 h-4 text-[#00645c] border-slate-300 rounded focus:ring-[#00645c] cursor-pointer" defaultChecked />
            <label htmlFor="newsletter" className="ml-3 text-sm text-slate-600 cursor-pointer select-none">Email me with news and exclusive offers</label>
          </div>
        </div>

        {/* Shipping Address */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">Shipping address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <select className={inputClass}>
                <option>India</option>
              </select>
            </div>
            <div><input type="text" placeholder="First name" className={inputClass} /></div>
            <div><input type="text" placeholder="Last name" className={inputClass} /></div>
            <div className="sm:col-span-2"><input type="text" placeholder="Complete Address" className={inputClass} /></div>
            <div className="sm:col-span-2"><input type="text" placeholder="Apartment, suite, etc. (optional)" className={inputClass} /></div>
            <div><input type="text" placeholder="City" className={inputClass} /></div>
            <div>
              <select className={inputClass} defaultValue="">
                <option value="" disabled>State</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
              </select>
            </div>
            <div><input type="text" placeholder="PIN code" className={inputClass} /></div>
            <div className="sm:col-span-2"><input type="tel" placeholder="Phone number" className={inputClass} /></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-12 gap-4">
          <Link to="/" className="text-slate-500 hover:text-slate-800 transition-colors text-sm font-bold flex items-center gap-2 tracking-wide uppercase">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Return to cart
          </Link>
          <button className="w-full sm:w-auto bg-[#00645c] hover:bg-[#004d47] text-white px-10 py-4 rounded-xl font-bold tracking-widest text-xs uppercase transition-all shadow-lg shadow-teal-900/20 active:scale-[0.98]">
            Continue to Shipping
          </button>
        </div>

      </div>

      {/* ========================================== */}
      {/* RIGHT COLUMN: Modern Order Summary         */}
      {/* ========================================== */}
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-slate-50/50 border-t lg:border-t-0 lg:border-l border-slate-200">
        
        <div className="sticky top-[102px] px-6 lg:px-12 pt-12 pb-20 max-h-[calc(100vh-102px)] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
          
          <h2 className="text-xl font-bold text-slate-800 mb-6 hidden lg:block">Order Summary</h2>

          {/* ── ITEM LIST WITH + / - BUTTONS ── */}
          <div className="space-y-4 mb-8">
            {cartItems.map((item) => {
               const itemPrice = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.]/g, '')) : item.price;
               
               return (
                <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative">
                  
                  {/* Image */}
                  <div className={`w-20 h-20 shrink-0 rounded-xl border border-slate-50 bg-gradient-to-br ${item.color || 'from-slate-100 to-slate-50'} flex items-center justify-center relative`}>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">IMG</span>
                  </div>
                  
                  {/* Product Info & Controls */}
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-slate-800 truncate pr-6">{item.name}</h3>
                      
                      {/* Trash/Remove Icon */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-300 hover:text-red-500 transition-colors absolute top-4 right-4"
                        aria-label="Remove item"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-3">
                      
                      {/* Quantity + / - Box */}
                      <div className="flex items-center border border-slate-200 rounded-lg h-8 bg-slate-50 w-24">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                          className="flex-1 h-full text-slate-500 hover:text-[#00645c] hover:bg-slate-100 rounded-l-lg transition-colors flex items-center justify-center font-medium"
                        >
                          −
                        </button>
                        <span className="flex-1 text-center text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                          className="flex-1 h-full text-slate-500 hover:text-[#00645c] hover:bg-slate-100 rounded-r-lg transition-colors flex items-center justify-center font-medium"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-slate-900">
                        ₹ {(itemPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>

                </div>
               );
            })}
          </div>

          {/* Modern Discount Code */}
          <div className="flex gap-2 py-6 border-t border-slate-200">
            <input 
              type="text" 
              placeholder="Gift card or discount code" 
              className="flex-1 bg-white border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-[#00645c]/20 focus:border-[#00645c] block p-3.5 placeholder-slate-400 shadow-sm transition-all"
            />
            <button className="bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-700 px-6 py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors">
              Apply
            </button>
          </div>

          {/* Price Breakdown */}
          <div className="py-6 space-y-3 border-t border-slate-200">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900">₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500 items-center">
              <span className="flex items-center gap-1.5">
                Shipping
                <div className="relative group flex items-center cursor-help">
                  <div className="w-4 h-4 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[10px] font-bold hover:bg-slate-300 transition-colors">?</div>
                  <div className="absolute right-0 bottom-full mb-2 w-48 bg-slate-800 text-white text-xs px-3 py-2.5 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-center font-medium">
                    Free shipping on orders over ₹699
                  </div>
                </div>
              </span>
              <span className="font-bold text-slate-900">
                {shipping === 0 ? <span className="text-[#00645c] bg-teal-50 px-2 py-0.5 rounded-md text-xs uppercase tracking-wider">Free</span> : `₹ ${shipping.toFixed(2)}`}
              </span>
            </div>
          </div>

          {/* Grand Total */}
          <div className="flex justify-between items-end pt-6 border-t border-slate-200">
            <span className="text-base text-slate-800 font-bold">Total</span>
            <div className="flex items-end gap-2">
              <span className="text-xs font-bold text-slate-400 mb-1.5">INR</span>
              <span className="text-3xl font-black text-slate-900 tracking-tight">₹ {total.toFixed(2)}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Checkout;