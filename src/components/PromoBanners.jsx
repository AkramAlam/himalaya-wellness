import React from 'react';

const PromoBanners = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ------------------------------------------------- */}
          {/* Banner 1: Shilajit (Dark & Premium Theme)           */}
          {/* ------------------------------------------------- */}
          <div className="relative bg-[#0a0a0a] rounded-2xl p-6 sm:p-10 h-[350px] sm:h-[450px] overflow-hidden flex flex-col justify-center group cursor-pointer shadow-lg">
            
            {/* Background Glows (Simulating the 3D studio lighting) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-900/10 to-transparent"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-600/10 rounded-full blur-[80px]"></div>

            {/* Left Side: Product Placeholders (Simulating the jars) */}
            <div className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-10">
              <div className="w-24 h-32 sm:w-32 sm:h-40 bg-gradient-to-t from-gray-900 to-gray-800 rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center transform -translate-y-4 group-hover:scale-105 transition-transform duration-500">
                 <span className="text-gray-500 text-[10px] sm:text-xs font-bold text-center">Shilajit<br/>Capsules</span>
              </div>
              <div className="w-32 h-20 sm:w-40 sm:h-24 bg-gradient-to-t from-gray-900 to-gray-800 rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 delay-75">
                 <span className="text-gray-500 text-[10px] sm:text-xs font-bold text-center">Shilajit<br/>Resin</span>
              </div>
            </div>

            {/* Right Side: Typography */}
            <div className="relative z-10 w-full md:w-[60%] ml-auto text-right pr-2">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-2 sm:mb-4 tracking-tight">
                Discover <br/> your <span className="text-white">Power</span>
              </h3>
              
              {/* Gold Ribbon Text */}
              <div className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 text-black font-bold px-4 py-1.5 sm:py-2 text-sm sm:text-lg transform -skew-x-12 mb-6 sm:mb-8 shadow-lg">
                <span className="transform skew-x-12 block">with Nature's Best</span>
              </div>

              {/* Highlights */}
              <div className="flex flex-col items-end space-y-3 mt-4 sm:mt-8">
                 <div className="flex items-center space-x-2 text-yellow-500 font-bold">
                    <span className="text-3xl sm:text-4xl">100%</span>
                    <span className="text-left text-[9px] sm:text-[11px] leading-tight text-gray-300 uppercase tracking-wider">Pure<br/>Himalayan<br/>Shilajit</span>
                 </div>
              </div>
            </div>
          </div>


          {/* ------------------------------------------------- */}
          {/* Banner 2: PartySmart (Vibrant Orange & Teal Theme)  */}
          {/* ------------------------------------------------- */}
          <div className="relative bg-[#f68324] rounded-2xl p-6 sm:p-10 h-[350px] sm:h-[450px] overflow-hidden flex items-center group cursor-pointer shadow-lg">
            
            {/* Big Teal Circular Shape on the Left */}
            <div className="absolute -left-16 sm:-left-20 top-1/2 -translate-y-1/2 w-[55%] h-[120%] bg-[#009b90] rounded-full group-hover:scale-105 transition-transform duration-700 ease-in-out"></div>

            {/* Model Placeholder */}
            <div className="absolute left-8 sm:left-12 bottom-0 w-32 sm:w-48 h-56 sm:h-72 bg-white/10 backdrop-blur-sm rounded-t-3xl border-t border-l border-white/20 flex flex-col justify-end p-4 z-10">
                <span className="text-white/60 font-bold text-xs sm:text-sm text-center mb-10">Smiling<br/>Model Image</span>
            </div>

            {/* Right Side: Typography */}
            <div className="relative z-10 w-[60%] sm:w-1/2 ml-auto text-left pl-4 sm:pl-8">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4 sm:mb-6">
                After-party <br/> mornings <br/> louder than <br/> the party?
              </h3>
              
              <div className="mb-4">
                <p className="text-yellow-300 font-bold text-sm sm:text-lg mb-1 tracking-wide">
                  #OutSmartHangovers
                </p>
                <p className="text-white font-medium text-sm sm:text-base">
                  with
                </p>
              </div>

              {/* Fake PartySmart Logo Text */}
              <h4 className="text-3xl sm:text-5xl font-black text-[#009b90] drop-shadow-sm bg-white/90 px-3 py-1 rounded-lg inline-block tracking-tighter">
                PartySmart
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanners;