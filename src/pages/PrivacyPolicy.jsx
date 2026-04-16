import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white pt-36 pb-20">
      {/* YAHAN UPDATE KIYA: pt-24 ko pt-36 kar diya */}
      <div className="w-[90%] max-w-[1000px] mx-auto">
        
        {/* Breadcrumb */}
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-8">
          <a href="#" className="hover:text-[#00645c] transition-colors">Home</a> / <span className="text-gray-800 font-semibold">Privacy Policy</span>
        </p>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 tracking-wide mb-10 text-center border-b border-gray-100 pb-10">
          Privacy Policy
        </h1>

        {/* Content Area */}
        <div className="prose max-w-none text-gray-600 space-y-10 text-sm sm:text-base leading-relaxed">
          
          <section>
            <p className="text-lg text-gray-700">
              At <span className="font-semibold text-gray-900">Himalaya Wellness Company</span>, we respect every individual's right to privacy. Our relationship with you is our most valuable asset and is the very basis of our name and reputation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">1. Information Collection and Use</h2>
            <p>
              This privacy policy notice tells you about the information we collect from you when you use our website, our Himalaya Store mobile app and at our exclusive Himalaya brand stores. In collecting this information, we are acting as a data controller and, by law, we are required to provide you with information about us, about why and how we use your data, and about the rights you have over your data. Be informed that we strictly do not share your Personal Information to any third parties in any manner other than for the reasons mentioned herein this Privacy Policy.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">2. Who are we?</h2>
            <p>We are Himalaya Wellness Company.</p>
            <p className="mt-4">
              <strong>Our address:</strong><br />
              Himalaya Wellness Company, Makali,<br />
              Bengaluru – 562 162, India
            </p>
            <p className="mt-4">
              You can contact us by post at the above address, by email at <a href="mailto:contactus@himalayawellness.com" className="text-[#00645c] font-semibold hover:underline">contactus@himalayawellness.com</a> or by telephone on <strong>1(800) 208-1930</strong> (India Toll Free) (Available between 0900 hrs IST to 1700 hrs IST, Monday to Friday).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">3. What information do we collect?</h2>
            <p>
              We collect information about you at our Website, mobile app, exclusive brand outlets and at our customer service centers. Some of this information does not identify you personally, but provides us with information about how you use our services and engage with us. The information we collect about you, your spouse or children includes some or all the following:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
              <ul className="list-disc pl-5 space-y-2">
                <li>Name (including title)</li>
                <li>Address & Country</li>
                <li>Phone number & Email address</li>
                <li>Gender</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2">
                <li>Date of birth & Anniversary Date</li>
                <li>Your IP address</li>
                <li>Order details</li>
                <li>Queries and Comments</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">4. Why do we collect this information?</h2>
            <div className="space-y-4">
              <p><strong>Name & Address:</strong> We require your details to provide a personalized experience, generate order invoices, and share shipment details with our delivery partners.</p>
              <p><strong>Phone Number & Email ID:</strong> Required to identify you as a member of the loyalty program, send order updates, and (if subscribed) send promotional offers and surveys.</p>
              <p><strong>Date of Birth & Anniversary:</strong> Required to offer special anniversary discounts and age-relevant offers.</p>
              <p><strong>IP address & Order Details:</strong> We record IP addresses for security tracking and to ensure correct taxes are applied by law. Order details help fulfil orders and analyze sales trends.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">5. How long do we keep your information?</h2>
            <p>
              There is no stipulation to preserve your personal information in an identifiable format for longer than the provisioned time limit. If we have a relationship with you, we hold your personal information for 2 years from the date our relationship ends. We only store your personal information for this period to establish, bring or defend legal claims as a mandatory legal requirement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">6. Your rights as a data subject</h2>
            <p>
              By law, you can ask us what information we hold about you, and you can ask us to correct it if it is inaccurate. If we have asked for your consent to process your personal data, you may withdraw that consent at any time.
            </p>
            <p className="mt-3">
              If we are processing your personal data for reasons of consent or to fulfil a contract, you can ask us to give you a copy of the information in a machine-readable format so that you can transfer it to another provider. If we are processing your data for legitimate interest, you can request that your data be erased.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00645c] mb-4 uppercase tracking-wider text-sm">7. Your right to complain</h2>
            <p>
              If you have a complaint about our use of your information, we would prefer you to contact us directly so that we can address your complaint. If you have any specific data protection concerns, you can contact our privacy team at <a href="mailto:privacy.team@himalayawellness.com" className="text-[#00645c] font-semibold hover:underline">privacy.team@himalayawellness.com</a>.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Updates to this privacy policy</h2>
            <p className="text-sm">
              We regularly review and, if appropriate, update this privacy policy from time to time, and as our services and use of personal data evolve. If we want to make use of your personal data in a way that we haven't previously identified, we will contact you to provide information about this and, if necessary, to ask for your consent.
            </p>
            <p className="mt-4 text-xs font-bold text-gray-400 tracking-widest uppercase">Version 1.5 | Date: 06/03/2025</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;