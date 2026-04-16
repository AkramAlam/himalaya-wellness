import React from 'react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart, addToCart }) => {
  // Recommendations Data (Inhe hum baad mein API se bhi la sakte hain)
  const recommendations = [
    { id: 101, name: 'Ashvagandha (60 Tablets)', price: '₹ 250.00', color: 'from-orange-50 to-orange-100' },
    { id: 102, name: 'Liv.52 DS Syrup', price: '₹ 170.00', color: 'from-red-50 to-red-100' },
  ];

  const subtotal = cartItems.reduce((total, item) => {
    const priceNum = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
      : item.price;
    return total + (priceNum * item.quantity);
  }, 0);

  const shippingThreshold = 699;
  const shippingCharge = subtotal > shippingThreshold || subtotal === 0 ? 0 : 50;
  const progressPercent = Math.min((subtotal / shippingThreshold) * 100, 100);

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

      <div className={`fixed top-0 right-0 h-[100dvh] w-full sm:w-[450px] bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* HEADER */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Your Shopping Bag ({cartItems.length})</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-800"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>

        <div className="flex-1 overflow-y-auto bg-slate-50/30">
          {/* 1. FREE SHIPPING PROGRESS */}
          {cartItems.length > 0 && (
            <div className="px-6 py-4 bg-white border-b border-slate-100">
              <p className="text-xs font-medium text-slate-600 mb-2">
                {subtotal >= shippingThreshold 
                  ? "🎉 You've unlocked FREE SHIPPING!" 
                  : `Add ₹${(shippingThreshold - subtotal).toFixed(2)} more for FREE SHIPPING`}
              </p>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal-600 transition-all duration-500" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          )}

          {/* 2. OFFERS BANNER */}
          <div className="mx-6 mt-4 p-3 bg-teal-50 border border-teal-100 rounded-xl flex items-center gap-3">
            <span className="text-xl">🎁</span>
            <div>
              <p className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">Offer Applied</p>
              <p className="text-xs text-teal-700">Use code <span className="font-bold text-teal-900">FSMR25</span> for 25% off on ₹699+</p>
            </div>
          </div>

          {/* 3. CART ITEMS */}
          <div className="px-6 py-6 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${item.color} shrink-0`} />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-slate-800 leading-tight truncate w-32">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-red-500 transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-slate-100 rounded-lg h-7 bg-slate-50 w-20">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="flex-1 text-slate-400">−</button>
                      <span className="text-xs font-bold text-slate-700">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="flex-1 text-slate-400">+</button>
                    </div>
                    <span className="text-sm font-black text-slate-900">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4. PRODUCT RECOMMENDATIONS (PEOPLE ALSO BOUGHT) */}
          <div className="px-6 py-4">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Complete your routine</h4>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {recommendations.map((rec) => (
                <div key={rec.id} className="min-w-[160px] bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className={`w-full h-24 rounded-xl bg-gradient-to-br ${rec.color} mb-3`} />
                  <h5 className="text-[11px] font-bold text-slate-800 h-8 line-clamp-2 leading-tight">{rec.name}</h5>
                  <p className="text-xs font-medium text-slate-500 my-2">{rec.price}</p>
                  <button 
                    onClick={() => addToCart(rec)}
                    className="w-full py-1.5 text-[10px] font-black uppercase tracking-wider text-teal-700 border border-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition-all"
                  >
                    Add +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER: TOTALS & CHECKOUT */}
        <div className="p-6 bg-white border-t border-slate-100">
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900">₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500">
              <span>Shipping</span>
              <span className="font-bold text-teal-600">{shippingCharge === 0 ? 'FREE' : `₹ ${shippingCharge.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-slate-100">
              <span className="text-base font-black text-slate-900 uppercase">Grand Total</span>
              <span className="text-xl font-black text-slate-900">₹ {(subtotal + shippingCharge).toFixed(2)}</span>
            </div>
          </div>
          <Link to="/checkout" onClick={onClose} className="w-full block text-center bg-[#00645c] py-4 rounded-xl font-black text-xs text-white uppercase tracking-widest shadow-xl shadow-teal-900/20 active:scale-95 transition-all">
            Checkout Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;