import React, { useState, useMemo, useEffect } from 'react';
import { Bath, Droplets, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const SanitaryWarePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    document.title = 'Sanitary Ware & Bath Fittings | Riyansh Marketing Morbi';
    window.scrollTo(0, 0);
  }, []);

  const sanitaryProducts = PRODUCTS.filter((p) => p.category === 'Sanitary Ware');

  const filteredProducts = useMemo(() => {
    if (selectedType === 'all') return sanitaryProducts;
    return sanitaryProducts.filter((p) => p.sanitaryType === selectedType);
  }, [selectedType, sanitaryProducts]);

  const typeTabs = [
    { label: 'All Sanitary Ware', value: 'all' },
    { label: 'Wash & Countertop Basins', value: 'wash-basin' },
    { label: 'Water Closets & Toilets', value: 'toilet' },
    { label: 'Faucets & Basin Mixers', value: 'faucet' },
    { label: 'Showers & Bath Systems', value: 'shower' }
  ];

  return (
    <div className="py-12 bg-brand-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <div className="bg-brand-charcoal text-white rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden shadow-elevated">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none hidden md:block">
            <img
              src="/images/sanitary-ware/countertop-basin-white.jpg"
              alt="Sanitary Ware Banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-brand-red mb-3">
              <Bath className="w-4 h-4" />
              <span>Bathroom Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mb-4">
              Sanitary Ware & Bath Fittings
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Complete your bathroom aesthetics with coordinated ceramic wash basins, rimless wall-hung
              toilets, solid brass single-lever mixers, and thermostatic rainfall showers.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire Sanitary Pricing on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {typeTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedType(tab.value)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all ${
                  selectedType === tab.value
                    ? 'bg-brand-charcoal text-white shadow-sm'
                    : 'bg-white text-brand-charcoal border border-gray-200 hover:border-gray-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-brand-stone font-medium">
            Showing {filteredProducts.length} sanitary fittings
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Sanitary Ware Quality Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 sm:p-10 rounded-3xl border border-brand-border shadow-tile">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-red-light text-brand-red flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-brand-charcoal mb-1">
                Self-Cleaning Nano Glaze
              </h4>
              <p className="text-xs text-brand-stone leading-relaxed">
                Vitreous ceramic surfaces treated with ultra-smooth nano glaze to prevent limescale and bacterial buildup.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-red-light text-brand-red flex items-center justify-center flex-shrink-0">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-brand-charcoal mb-1">
                Water-Efficient 360° Flushing
              </h4>
              <p className="text-xs text-brand-stone leading-relaxed">
                Vortex rimless technology delivers quiet, thorough bowl cleansing using dual-flush eco-valves.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-red-light text-brand-red flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-brand-charcoal mb-1">
                Solid Forged Brass Faucets
              </h4>
              <p className="text-xs text-brand-stone leading-relaxed">
                Precision cartridges tested for durability, preventing drips and ensuring silky-smooth temperature control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
