import React, { useState } from 'react';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer'; // <-- NAYA IMPORT
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import WhatWeDo from './pages/WhatWeDo';
import WhatWeStandFor from './pages/WhatWeStandFor';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ── CART DRAWER STATE ──
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Click karne par open/close hoga
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Optional: Product add karte hi direct cart open karna ho toh isko uncomment kar dein
    // setIsCartOpen(true); 
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white min-h-screen">

        <Navbar cartCount={cartCount} toggleCart={toggleCart} />

        <div className="pt-[102px]">
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/what-we-stand-for" element={<WhatWeStandFor />} />

            <Route
              path="/checkout"
              element={<Checkout cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
            />

            <Route path="*" element={<Home addToCart={addToCart} />} />
          </Routes>
        </div>

        {/* ── CART DRAWER COMPONENT YAHAN HAI ── */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />

      </div>
    </Router>
  );
}

export default App;