import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="bg-white pt-36 pb-20">
      {/* YAHAN UPDATE KIYA: pt-24 ko pt-36 kar diya */}
      <div className="w-[90%] max-w-[1000px] mx-auto">
        
        {/* Breadcrumb */}
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-8">
          <a href="#" className="hover:text-[#00645c] transition-colors">Home</a> / <span className="text-gray-800 font-semibold">Terms of Use</span>
        </p>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 tracking-wide mb-10 text-center border-b border-gray-100 pb-10">
          Terms of Use
        </h1>

        {/* Content Area */}
        <div className="prose max-w-none text-gray-600 space-y-10 text-sm sm:text-base leading-relaxed">
          
          <section>
            <p className="text-lg text-gray-700">
              This site (the "Site") is owned and operated by <span className="font-semibold text-gray-900">Himalaya Wellness Company</span> ("we" or "us") for your information, education and communication. Please feel free to browse the Site; however, your access and use of the Site is subjected to the following terms and conditions ("Terms and Conditions") and all applicable laws.
            </p>
            <p className="mt-4">
              By accessing and browsing this Site, you accept, without limitation or qualification, the Terms and Conditions. If you do not agree with any of the below Terms and Conditions, do not use this Site. We reserve the right, in our sole discretion, to modify, alter or otherwise update these Terms and Conditions at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">1. Intellectual Property Rights</h2>
            <p>
              All material on this Site ("Material"), including but not limited to text, images, and illustrations etc. is protected by copyrights which are owned and controlled by us or by other parties that have licensed their material to us. Material from the Site or any website owned, operated, licensed or controlled by us may not be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way.
            </p>
            <p className="mt-3">
              Specifically, you should not attempt to "pass off" any of the Material as your own work. Modification of the Material or use of the Material for any other purpose is a violation of the copyrights and other proprietary rights. The trademarks, logos and service marks ("Marks") displayed on the Site are our property and the property of other parties. Users are prohibited from using any Marks without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">2. Linked Sites</h2>
            <p>
              We may provide links and pointers to Internet sites maintained by others ("Third Party Sites"). We are not responsible for the contents of or any products or services offered in such Third Party Sites.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">3. Disclaimer of Liability</h2>
            <p className="uppercase text-xs font-bold text-gray-500 mb-2 tracking-widest">Medical Disclaimer</p>
            <p className="font-medium text-gray-800 mb-4">
              Please do not rely upon information provided in this website as "medical advice". You should not rely on any of the Material and instead should seek other opinions before taking any action.
            </p>
            <p>
              TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, NEITHER WE NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SITE IS LIABLE FOR ANY DIRECT, INCIDENTAL, CONSEQUENTIAL, INDIRECT, OR PUNITIVE DAMAGES ARISING OUT OF YOUR ACCESS TO, OR USE OF, THE MATERIAL OR THE SITE. 
            </p>
            <p className="mt-3">
              WITHOUT LIMITING THE FOREGOING, EVERYTHING ON THE SITE IS PROVIDED TO YOU "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED. WE SHALL HAVE ABSOLUTELY NO LIABILITY FOR DAMAGE TO YOUR COMPUTER HARDWARE, DATA, INFORMATION, AND BUSINESS RESULTING FROM THE MATERIAL OR THE LACK OF INFORMATION AVAILABLE ON THE SITE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">4. Limitation of Remedy</h2>
            <p>
              If you are damaged or injured by any of the Material contained in the Site, or you are dissatisfied with the Site or Material for any reason, then your sole and exclusive remedy is to discontinue accessing and using the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">5. Jurisdictional Issues</h2>
            <p>
              The Site is controlled and operated by us from our offices in Bengaluru, India. We make no representation that Material in the Site is appropriate or available for use in other locations or countries. Those who choose to access this Site from other locations do so on their own initiative and are responsible for compliance with local laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">6. Termination</h2>
            <p>
              This agreement will terminate immediately without notice from us if in our sole discretion you fail to comply with any term or provision of this Agreement. Upon termination, you must destroy all materials obtained from this Site and all copies thereof, whether made under the terms of this Agreement or otherwise.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;