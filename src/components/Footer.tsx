'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import { ArrowUp } from 'lucide-react';

export default function Footer({ locale, sections }: { locale: string, sections: any[] }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <footer className="bg-gray-50 border-t">

      <div className="container mx-auto p-4">

        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-semibold text-gray-900">
              TalkNews
            </Link>
          </div>
          <div className="flex-grow">
            <Navigation locale={locale} extraClasses="justify-end" sections={sections}/>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mt-6 text-center md:text-left text-xs text-gray-500">
            <p>© {new Date().getFullYear()} TalkNews. All rights reserved.</p>
          </div>
          <ul className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
            <li>
              <a href="mailto:contact@talknews.ie" className="hover:text-gray-900">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Terms</a>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Go to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        } hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}
        aria-label="Go to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
