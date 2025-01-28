const Policy = () => {
   return (
      <div className="max-w-7xl mx-auto px-3 mt-24">
         <h1 className="text-5xl sm:text-6xl font-bold py-10">Privacy Policy</h1>

         <div className="border p-10 bg-slate-50 space-y-8">
            <div className="space-y-3">
               <h3 className="font-semibold text-2xl">Introduction</h3>
               <p className="font-light text-gray-700 leading-7">At Greenfield University, we value your privacy and are committed to protecting your personal information. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your data. By using our website or services, you consent to the practices described in this policy.</p>
            </div>
            <div className="space-y-3">
               <h3 className="font-semibold text-2xl">Information We Collect</h3>
               <p className="font-light text-gray-700 leading-7">We may collect various types of information from you, including:</p>
               <ul className="font-light text-gray-700 leading-7 list-disc ml-5">
                  <li>Personal Information: Name, email address, contact details.</li>
                  <li>Billing Information: Payment card details, billing address.</li>
                  <li>Usage Data: Information about how you use our website.</li>
                  <li>Cookies and Tracking Data: Data collected through cookies, web beacons, and similar technologies.</li>
               </ul>
            </div>
            <div className="space-y-3">
               <h3 className="font-semibold text-2xl">How We Use Your Information</h3>
               <p className="font-light text-gray-700 leading-7">We use your information for the following purposes:</p>
               <ul className="font-light text-gray-700 leading-7 list-disc ml-5">
                  <li>To provide, maintain, and improve our services.</li>
                  <li>To process transactions and send transaction notifications.</li>
                  <li>To respond to your requests, comments, or questions.</li>
                  <li>To personalize your user experience.</li>
                  <li>To send you important information and updates.</li>
               </ul>
            </div>
            <div className="space-y-3">
               <h3 className="font-semibold text-2xl">Information Sharing</h3>
               <p className="font-light text-gray-700 leading-7">We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your information with trusted third parties who assist us in operating our website and services, as long as they agree to keep this information confidential.</p>
            </div>
            <div className="space-y-3">
               <h3 className="font-semibold text-2xl">Data Security</h3>
               <p className="font-light text-gray-700 leading-7">We implement a variety of security measures to protect your personal information. We use encryption, secure socket layer technology, and regular security audits to safeguard your data.</p>
            </div>
            <div className="space-y-3">
               <h3 className="font-semibold text-2xl">Cookies and Tracking Technologies</h3>
               <p className="font-light text-gray-700 leading-7">We use cookies and similar tracking technologies to enhance your user experience. You can choose to disable cookies through your browser settings; however, this may affect your ability to use our website.</p>
            </div>

            <div className="space-y-3">
               <h3 className="font-semibold text-2xl">Your Choices</h3>
               <p className="font-light text-gray-700 leading-7">You can choose not to provide certain information; however, this may limit your access to some features of our website.</p>
            </div>

            <div className="space-y-3">
               <h3 className="font-semibold text-2xl">Changes to this Privacy Policy</h3>
               <p className="font-light text-gray-700 leading-7">We reserve the right to update or change this Privacy Policy at any time. When we do, we will revise the "Effective Date" at the beginning of this policy. We encourage you to periodically review this page for the latest information on our privacy practices.</p>
            </div>

            <div className="space-y-3">
               <h3 className="font-semibold text-2xl">Contact Us</h3>
               <p className="font-light text-gray-700 leading-7">If you have any questions or concerns regarding this Privacy Policy, please contact us at support@gu.net</p>
            </div>

            <small className="text-xs font-light text-gray-700 leading-7 mt-4 block">Last updated on October 15, 2023. ThemePure reserves the right to change or modify the above contents at any time without any prior notice.</small>

         </div>

      </div>
   );
};

export default Policy;