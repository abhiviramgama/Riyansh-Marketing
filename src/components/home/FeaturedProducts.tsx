import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../common/ProductCard';

export const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Floor' | 'Wall' | 'Marble' | 'Sanitary'>('All');

  const filterTab = (tab: typeof activeTab) => {
    switch (tab) {
      case 'Floor':
        return PRODUCTS.filter((p) => p.category === 'Floor Tiles');
      case 'Wall':
        return PRODUCTS.filter((p) => p.category === 'Wall Tiles');
      case 'Marble':
        return PRODUCTS.filter((p) => p.category === 'Marble-Look Tiles' || p.category === 'Large-Format Tiles');
      case 'Sanitary':
        return PRODUCTS.filter((p) => p.category === 'Sanitary Ware');
      case 'All':
      default:
        return PRODUCTS.filter((p) => p.featured);
    }
  };

  const displayedProducts = filterTab(activeTab).slice(0, 8);

  const tabs: { label: string; key: typeof activeTab }[] = [
    { label: 'Featured Picks', key: 'All' },
    { label: 'Floor Tiles', key: 'Floor' },
    { label: 'Wall Tiles', key: 'Wall' },
    { label: 'Marble & Slabs', key: 'Marble' },
    { label: 'Sanitary Ware', key: 'Sanitary' }
  ];

  return (
    <section className="py-20 bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-brand-red mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Showroom Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-charcoal tracking-tight">
              Featured Tiles & Sanitary
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150 ${
                  activeTab === tab.key
                    ? 'bg-brand-charcoal text-white shadow-sm'
                    : 'bg-gray-100 text-brand-charcoal hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to All Products */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-brand-charcoal hover:text-white bg-transparent hover:bg-brand-charcoal border-2 border-brand-charcoal rounded-xl transition-all duration-200"
          >
            <span>View Complete Catalogue ({PRODUCTS.length} Products)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-brand-stone mt-3">
            * Showcase models shown for demonstration. Pricing and real inventory availability confirmed upon enquiry.
          </p>
        </div>
      </div>
    </section>
  );
};
