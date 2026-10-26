import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-[#1a1b1f] text-white relative overflow-hidden border-t border-brand-charcoal-light">
      {/* Decorative Brand Red Corner Flairs */}
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-red/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-red/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-3">
          Get in Touch
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-5">
          Looking for the Right Tiles for Your Project?
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Explore our collection and contact Riyansh Marketing for product details, available sizes,
          pricing, and assistance.
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-brand-charcoal bg-white rounded-xl hover:bg-gray-100 shadow-md transition-all active:scale-95"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-brand-charcoal-light border border-gray-600 rounded-xl hover:bg-gray-700 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-brand-red" />
            <span>Call Now ({BUSINESS_INFO.phone})</span>
          </a>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover shadow-lg shadow-brand-red/20 transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
          <MapPin className="w-3.5 h-3.5 text-brand-red" />
          <span>Showroom: Opposite Mahashakti Hotel, Near HP Petrol Pump, Morbi</span>
        </div>
      </div>
    </section>
  );
};
