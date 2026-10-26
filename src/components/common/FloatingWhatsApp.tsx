import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-2xl shadow-xl border border-gray-100 animate-bounce duration-1000 max-w-xs">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          <div className="text-xs">
            <p className="font-bold text-brand-charcoal">Need Tiles or Sanitary advice?</p>
            <p className="text-[11px] text-brand-stone">Chat directly with {BUSINESS_INFO.owner}</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-red"></span>
        </span>
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
