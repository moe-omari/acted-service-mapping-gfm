"use client";

import { useEffect, useState } from 'react';
import { Noto_Sans_Arabic } from 'next/font/google';

const notoArabic = Noto_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'] });

export default function ResourceHeader({ lang = 'en', onLangChange }) {
  const showSwitcher = typeof onLangChange === 'function';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(max-width: 1024px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  const handleToggleLanguage = () => {
    if (!showSwitcher) return;
    onLangChange?.(lang === 'en' ? 'ar' : 'en');
  };

  const logoSrc = isMobile ? '/ACTED_LOGO_white.png' : '/acted-logo.png';
  const switchLabel = lang === 'ar' ? 'English' : 'العربية';
  const switchLabelClass = lang === 'ar' ? '' : notoArabic.className;

  return (
    <header
      className="shadow-md border-b border-gray-200 dark:border-zinc-800 px-2 sm:px-6 py-2"
      style={{ backgroundColor: '#1b1464' }}
    >
      <div className="flex items-center gap-2 sm:gap-4 w-full max-w-6xl mx-auto">
        <img src={logoSrc} alt="ACTED Logo" className="h-10 sm:h-16 w-auto flex-shrink-0" />
        <h1 className="flex-1 text-center text-base sm:text-2xl font-bold text-white truncate">
          {lang === 'ar' ? 'بوابة الموارد' : 'Resources Hub'}
        </h1>
        {showSwitcher ? (
          <button
            type="button"
            onClick={handleToggleLanguage}
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#1b1464] font-semibold text-xs sm:text-sm px-3 py-2 shadow hover:bg-blue-50 transition w-[110px] sm:w-[170px]"
            aria-label={lang === 'ar' ? 'التبديل إلى الإنجليزية' : 'Switch to Arabic'}
          >
            <img src="/translate.png" alt="" aria-hidden="true" className="h-4 w-4" />
            <span className={switchLabelClass}>{switchLabel}</span>
          </button>
        ) : (
          <div className="flex-shrink-0 w-[110px] sm:w-[170px]" />
        )}
      </div>
    </header>
  );
}
