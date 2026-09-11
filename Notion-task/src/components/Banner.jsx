import React, { useState } from 'react';

export default function FloatingBottomBanner({onRegisterClick}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-6 sm:p-8 flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-950 px-6 py-2.5 shadow-lg ring-1 ring-white/10 rounded-xl max-w-4xl w-full">
        
        {/* Banner Text Content */}
        <p className="text-sm leading-6 text-white">
          <a onClick={onRegisterClick} href="#events" className="hover:underline flex flex-wrap items-center gap-x-2">
            <strong className="font-semibold">Notion Club 2026</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline size-0.5 fill-current text-gray-400" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <span>Join us in Advitya from June 7 to 9 to see what’s coming next.</span>
            <span aria-hidden="true" className="ml-1">&rarr;</span>
          </a>
        </p>

        <div className="flex flex-1 justify-end">
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <svg className="size-5 text-white hover:text-gray-300 transition" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}