import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles, MapPin, Phone } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden bg-brand-charcoal text-white">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-tile-living.jpg"
          alt="Luxury architectural interior tiled with large-format vitrified slabs - Riyansh Marketing"
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Layered Gradient Overlays for contrast and brand identity */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-black/30 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Subtle RM Monogram & Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Morbi, Gujarat • Tiles & Sanitary Ware Showroom
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Discover Tiles That <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-brand-red-muted">
              Transform Every Space
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8 max-w-xl font-normal">
            Explore a wide range of tile designs, sizes, finishes, and sanitary ware for
            residential and commercial spaces. Sourced from the ceramic heart of Morbi.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover shadow-lg hover:shadow-brand-red/30 transition-all duration-200 active:scale-95"
            >
              <span>Explore Our Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-xl border border-white/25 transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-green-400 fill-green-400" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>15+ Tile Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>Vitrified & Porcelain</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>Morbi-Halvad Road</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
