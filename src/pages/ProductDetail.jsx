import React, { useState } from 'react';

const ProductDetail = () => {
  // 1. Image Gallery State
  const images = [
    { id: 1, src: "from-orange-100 to-orange-50", label: "Front View" },
    { id: 2, src: "from-orange-200 to-orange-100", label: "Back View" },
    { id: 3, src: "from-orange-50 to-white", label: "Ingredients Info" },
    { id: 4, src: "from-gray-100 to-gray-50", label: "Lifestyle Shot" }
  ];
  const [activeImage, setActiveImage] = useState(images[0]);

  // 2. Quantity State
  const [quantity, setQuantity] = useState(1);

  // 3. Accordion State
  const [openSection, setOpenSection] = useState('description');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <div className="bg-white pt-20 pb-20">
      
      {/* Breadcrumb Navigation */}
      <div className="w-[90%] max-w-[1400px] mx-auto py-6">
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          <a href="#" className="hover:text-[#00645c]">Home</a> / <a href="#products" className="hover:text-[#00645c]">Products</a> / <a href="#products" className="hover:text-[#00645c]">Wellness</a> / <span className="text-gray-800 font-semibold">Organic Ashwagandha</span>
        </p>
      </div>

      <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 mt-6">
        
        {/* ========================================= */}
        {/* LEFT COLUMN: Image Gallery                */}
        {/* ========================================= */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
          
          {/* Main Large Image */}
          <div className="w-full md:w-4/5 bg-gray-50 border border-gray-100 rounded-2xl h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center relative overflow-hidden transition-all duration-500">
            <div className={`w-3/4 h-3/4 bg-gradient-to-b ${activeImage.src} rounded-xl flex items-center justify-center shadow-lg transition-all duration-500`}>
              <span className="text-gray-500/50 text-xl font-bold uppercase tracking-widest">{activeImage.label}</span>
            </div>
          </div>

          {/* Thumbnails (Vertical on Desktop, Horizontal on Mobile) */}
          <div className="w-full md:w-1/5 flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0 hide-scrollbar">
            {images.map((img) => (
              <div 
                key={img.id} 
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 w-20 h-24 md:w-full md:h-32 rounded-xl cursor-pointer border-2 transition-all p-2 flex items-center justify-center
                  ${activeImage.id === img.id ? 'border-[#00645c] shadow-md' : 'border-gray-100 hover:border-gray-300 bg-gray-50'}
                `}
              >
                <div className={`w-full h-full bg-gradient-to-b ${img.src} rounded-md`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT COLUMN: Product Details             */}
        {/* ========================================= */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          {/* Brand & Title */}
          <h2 className="text-[#00645c] text-xs font-bold tracking-[0.2em] uppercase mb-3">Himalaya Wellness</h2>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Himalaya Organic Ashwagandha
          </h1>

          {/* Reviews/Stars */}
          <div className="flex items-center gap-2 mb-6 cursor-pointer group">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map(star => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 group-hover:text-[#00645c] underline underline-offset-4">128 Reviews</span>
          </div>

          {/* Price */}
          <div className="mb-8">
            <p className="text-3xl font-bold text-gray-900 mb-1">₹ 420.00</p>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          </div>

          {/* Variant Selection (Size) */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Size / Pack</p>
            <div className="flex gap-4">
              <button className="border-2 border-[#00645c] bg-teal-50 text-[#00645c] font-semibold py-2 px-6 rounded-md text-sm">
                60 Tablets
              </button>
              <button className="border border-gray-200 text-gray-600 hover:border-gray-400 font-medium py-2 px-6 rounded-md text-sm transition-colors">
                Twin Pack (Save 10%)
              </button>
            </div>
          </div>

          {/* Add to Cart Area */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 border-b border-gray-200 pb-10">
            {/* Quantity Control */}
            <div className="flex items-center border border-gray-300 rounded-md w-32 h-14">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-full text-gray-600 hover:text-[#00645c] text-xl transition-colors">−</button>
              <div className="flex-grow text-center font-semibold text-gray-800">{quantity}</div>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-full text-gray-600 hover:text-[#00645c] text-xl transition-colors">+</button>
            </div>
            
            {/* Action Buttons */}
            <button className="flex-grow bg-[#00645c] text-white h-14 rounded-md font-bold tracking-widest hover:bg-[#004c46] transition-colors shadow-md">
              ADD TO CART
            </button>
          </div>

          {/* Accordion Details Section */}
          <div className="flex flex-col gap-2">
            
            {/* Description Tab */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => toggleSection('description')} className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-800 uppercase tracking-widest text-sm">Description</span>
                <span className="text-gray-500 text-xl">{openSection === 'description' ? '−' : '+'}</span>
              </button>
              {openSection === 'description' && (
                <div className="p-5 text-sm text-gray-600 leading-relaxed bg-white">
                  Rejuvenates mind and body. Ashwagandha is a widely used Ayurvedic herb known to promote energy and stamina. It helps the body build resilience to stress, improves sleep quality, and supports overall vitality.
                </div>
              )}
            </div>

            {/* Key Ingredients Tab */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => toggleSection('ingredients')} className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-800 uppercase tracking-widest text-sm">Key Ingredients</span>
                <span className="text-gray-500 text-xl">{openSection === 'ingredients' ? '−' : '+'}</span>
              </button>
              {openSection === 'ingredients' && (
                <div className="p-5 text-sm text-gray-600 leading-relaxed bg-white">
                  <p className="font-semibold text-gray-800 mb-2">Organic Ashwagandha (Withania somnifera) root extract</p>
                  100% USDA Certified Organic. Free from synthetics, additives, and artificial fillers. Cultivated using sustainable farming practices.
                </div>
              )}
            </div>

            {/* Directions for Use Tab */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => toggleSection('usage')} className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-800 uppercase tracking-widest text-sm">Directions for Use</span>
                <span className="text-gray-500 text-xl">{openSection === 'usage' ? '−' : '+'}</span>
              </button>
              {openSection === 'usage' && (
                <div className="p-5 text-sm text-gray-600 leading-relaxed bg-white">
                  1 caplet daily before food, or as directed by your healthcare professional. For best results, consume with warm water or milk.
                </div>
              )}
            </div>

          </div>
          
          {/* Trust Badges */}
          <div className="flex gap-6 mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-xs font-semibold text-gray-600">100% Herbal</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-xs font-semibold text-gray-600">Global Shipping</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;