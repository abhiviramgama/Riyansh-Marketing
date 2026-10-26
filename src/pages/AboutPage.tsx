import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Riyansh Marketing | Tiles & Sanitary Ware Morbi';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 bg-brand-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-brand-charcoal text-white rounded-3xl p-8 sm:p-14 mb-16 relative overflow-hidden shadow-elevated">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-3">
              Morbi, Gujarat Showroom
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mb-6">
              About Riyansh Marketing
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal mb-8">
              Riyansh Marketing offers a range of tiles and sanitary ware products for residential
              and commercial spaces. Our product catalogue helps customers explore different sizes,
              finishes, colours, and designs for their projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Owner Kapil Patel</span>
              </a>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-brand-charcoal bg-white rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Business Leadership & Showroom Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden bg-white border border-brand-border shadow-tile">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/images/hero/hero-architectural-hall.jpg"
                alt="Riyansh Marketing Showroom Concept"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-white border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-charcoal text-white flex items-center justify-center font-heading font-bold text-lg">
                  KP
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-charcoal">
                    {BUSINESS_INFO.owner}
                  </h3>
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider">
                    {BUSINESS_INFO.ownerTitle} • Riyansh Marketing
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs text-brand-stone">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-brand-charcoal">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>Unchi Mandal, Morbi-Halvad Road, Morbi, Gujarat</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-2">
                Our Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-charcoal tracking-tight">
                Connecting You with Morbi's Ceramic Excellence
              </h2>
            </div>

            <p className="text-sm sm:text-base text-brand-stone leading-relaxed">
              Morbi is recognized worldwide as the ceramics hub of India, housing state-of-the-art
              manufacturing units producing millions of square meters of vitrified, porcelain, and
              ceramic tiles every year.
            </p>

            <p className="text-sm sm:text-base text-brand-stone leading-relaxed">
              At Riyansh Marketing, we assist homeowners, interior architects, civil engineers,
              and contractors in selecting the exact sizes, textures, and load ratings required for
              each architectural space. Rather than relying on guesswork, customers can review
              photographs, inspect specifications, and coordinate pricing directly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal font-medium">
                  Diverse Tile Sizes & Formats
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal font-medium">
                  Vitrified, Ceramic & Porcelain
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal font-medium">
                  Residential & Commercial Solutions
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal font-medium">
                  Sanitary Ware & Faucets
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Business Card Reference Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-tile">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-1">
              Official Identity
            </span>
            <h3 className="text-2xl font-heading font-extrabold text-brand-charcoal tracking-tight">
              Riyansh Marketing Official Card & Coordinates
            </h3>
            <p className="text-xs sm:text-sm text-brand-stone mt-2 leading-relaxed">
              Official dealership identity verified from the business card of Kapil Patel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Front Card Photo */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 p-2">
              <img
                src={BUSINESS_INFO.cardFrontPath}
                alt="Riyansh Marketing Business Card Front - Kapil Patel"
                className="w-full h-auto rounded-xl object-contain"
              />
              <p className="text-[11px] text-center text-gray-500 mt-2 font-medium">
                Official Business Card (Front Side) • Morbi-Halvad Road, Morbi
              </p>
            </div>

            {/* Reverse Card Photo */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 p-2">
              <img
                src={BUSINESS_INFO.cardBackPath}
                alt="Riyansh Marketing Business Card Reverse Side"
                className="w-full h-auto rounded-xl object-contain"
              />
              <p className="text-[11px] text-center text-gray-500 mt-2 font-medium">
                Official Business Card (Reverse Side) • RM Monogram Brand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
