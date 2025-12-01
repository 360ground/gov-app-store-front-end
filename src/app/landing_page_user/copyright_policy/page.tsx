"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 md:py-20">

        <div className="container text-center px-4 md:px-0 w-full lg:w-[960px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Copyright and Intellectual Property Policy</h1>
          <p className="mt-4 text-base md:text-lg">Legal Information & Notices</p>
          
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 flex-1 text-black w-full lg:w-[960px] mx-auto min-h-screen">
        <h1 className='text-3xl font-bold text-black text-center mb-10'>Ownership of Site; Agreement to Terms of Use</h1>
            <h1 className='text-bold text-xl'>1. Introduction and Scope</h1>

            <p>This Copyright and Intellectual Property Policy ("Policy") governs the use of the App Store website, mobile application, and related services (collectively, the "Platform"). This Policy outlines the rights of intellectual property owners and the procedures for reporting and addressing intellectual property infringement on the Platform.

            By accessing or using the Platform, you agree to be bound by the terms of this Policy.</p>

            <h1 className='text-bold text-xl'>2. Our Intellectual Property Rights</h1>

            <p>All content available on the Platform (excluding content uploaded by third-party developers, which is covered in Section 3), including text, graphics, logos, images, software, and the compilation of such content, is the property of App Store or its content suppliers and is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

            You may not use our intellectual property without our prior written consent.</p>

            <h1 className='text-bold text-xl'>3. Third-Party Developer Content</h1>

            <p>The Platform operates as a distribution channel for software applications ("Apps") submitted by third-party developers ("Developers").</p>

            <h2 className='text-bold'>3.1 Developer Responsibility</h2>

            <p>Developers are solely responsible for ensuring that all Apps and related metadata (e.g., descriptions, screenshots, icons) submitted to the Platform comply with all applicable laws and do not infringe the copyright, trademark, trade secret, or other proprietary rights of any third party.</p>

            <h2 className='text-bold'>3.2 Licensing to App Store</h2>

            <p>By submitting an App, the Developer grants App Store a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, display, and market the App and its metadata solely for the purpose of making it available to end-users through the Platform.</p>

            <h1 className='text-bold text-xl'>4. Notice and Takedown Procedure (DMCA Compliant)</h1>

            <p>We respect the intellectual property rights of others and comply with the Digital Millennium Copyright Act (DMCA) and similar international laws. If you believe that an App or its content available on the Platform infringes your intellectual property rights, please send a written notification to our designated agent following the procedure below.</p>

            <h2 className='text-extrabold text-black'>4.1 Requirements for Notification</h2>

            <p>To be effective, the notification ("Notice") must be a written communication that includes substantially the following:

            Physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.

            Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works.

            Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material (e.g., the direct link to the App on the store).

            Information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address.

            A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.

            A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</p>
        
      </section>
      


      

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className=' w-full lg:w-[960px] mx-auto py-5 px-5 lg:px-0'>
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6 gap-4 ">
            {/* Logo Section */}
            <div className="flex flex-col space-y-3 items-start w-full md:w-auto">
              <Image 
                src="/whiteemblem.svg" 
                alt="Logo" 
                width={35} 
                height={25} 
                className="object-contain h-full"
              />
              <p style={{ fontSize: "12px", color: "white"}}>
                {t('copyright').replace('{year}', new Date().getFullYear().toString())}
              </p>
              <div className="flex justify-start space-x-4 mt-2 text-white">
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-cols-2 justify-between gap-4 md:gap-8 text-sm text-white w-full md:w-[20rem] md:mt-4 mt-0">
              {/* Column 1 */}
              <div>
                <h4 className="font-bold mb-2">{t('developers')}</h4>
                <ul>
                  <li>
                    <a href="/login" className="hover:underline">
                      {t('developer_console')}
                    </a>
                  </li>
                  <li>
                    <a href="/login" className="hover:underline">
                      {t('submit_apk')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="md:ml-20">
                <h4 className="font-bold mb-2">{t('company')}</h4>
                <ul>
                  <li>
                    <a
                      href="/landing_page_user/about_us"
                      className="hover:underline"
                    >
                      {t('about_us')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/landing_page_user/contact_us"
                      className="hover:underline"
                    >
                      {t('contact_us')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/landing_page_user/faq"
                      className="hover:underline"
                    >
                      {t('faq')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-4 text-white flex flex-col justify-center items-center text-center text-[10px] lg:text-[12px]">
            <div className='flex flex-wrap justify-center'>
              <p >
                {t('copyright_bottom').replace('{year}', new Date().getFullYear().toString())} 
              </p>
              <a href='http://www.mint.gov.et/' className='mx-1 text-slate-200 hover:text-white border-b'>{t('mint')}.</a>
              <p>{t('developed_by')}</p>
              <a href="https://360ground.com/" className='mx-1 text-slate-200 hover:text-white border-b'>{t('360ground')}.</a>
              <p>{t('all_rights')}</p>
            </div>
            <p >
              <a href="/landing_page_user/privacy_policy">
              {t('privacy_policy')}</a>  |  
              <a href="/landing_page_user/copyright_policy"> {t('copyright_policy')} </a> |  
              <a href="/landing_page_user/terms"> {t('terms')}</a>
            </p>
            <p >
              Ethiopia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
