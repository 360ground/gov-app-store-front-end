"use client";
import { SetStateAction, useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import Footer from '@/components/Footer';
import { buildBackendUrl } from '@/utils/api-config';

interface FaqItem {
  id: number;
  category: 'Platform' | 'Citizen' | 'Developer'; // Use specific types for categories
  question: string;
  answer: string;
}

export default function FAQPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'Platform' | 'Citizen' | 'Developer'>('Platform');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // The tabs now match the categories from the backend model
  const tabs: ('Platform' | 'Citizen' | 'Developer')[] = ['Platform', 'Citizen', 'Developer'];

  useEffect(() => {
    const fetchFaqs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(buildBackendUrl('/apps/faqs/'));
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data: FaqItem[] = await response.json();
        setFaqs(data);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching FAQs:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []); // Empty dependency array means this runs once on component mount

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const filteredFaqs = faqs.filter(faq => faq.category === activeTab);
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="text-center bg-blue-50 py-8 md:py-12 px-4">
        <h2 className="text-lg md:text-xl text-blue-600 font-semibold">{t('government_appstore')}</h2>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          {t('faq_title')}
          <br />
          {t('faq_subtitle')}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          {t('faq_description')}
        </p>
      </section>

      {/* Tabs */}
      <section className="w-full lg:w-[960px] mx-auto h-full px-4 lg:px-0 py-6 flex-1">
        <div className="flex justify-center flex-wrap gap-2 mb-6 md:mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-[40px] text-sm md:text-base font-medium ${
                activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              // This onClick is the key to making it work
              onClick={() => setActiveTab(tab)}
            >
              {t(tab.toLowerCase())}
            </button>
          ))}
        </div>
        <div className="mx-4 md:mx-20 bg-white rounded-md shadow-md p-4 md:p-6">
          {isLoading ? (
            <div className="text-center py-4">Loading FAQs...</div>
          ) : error ? (
            <div className="text-center py-4 text-red-500">{error}</div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div key={faq.id} className="border-b last:border-none">
                <button
                  className="w-full flex justify-between items-center py-3 md:py-4 text-left text-gray-800 text-sm md:text-base font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span>{activeIndex === index ? '-' : '+'}</span>
                </button>
                {activeIndex === index && <p className="text-gray-600 text-sm md:text-base pb-3 md:pb-4">{faq.answer}</p>}
              </div>
            ))
          )}
          {!isLoading && !error && filteredFaqs.length === 0 && (
            <div className="text-center text-gray-500 py-4">No questions found for this category.</div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}


