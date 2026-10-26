import React, { useState, useMemo, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/common/ProductCard';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const TilesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFinish, setSelectedFinish] = useState<string>('All');

  useEffect(() => {
    document.title = 'Tile Collections | Riyansh Marketing Morbi';
    window.scrollTo(0, 0);
  }, []);

  const tileCategories = CATEGORIES.filter((c) => !c.isSanitary);
  const tileProducts = PRODUCTS.filter((p) => p.category !== 'Sanitary Ware');

  const filteredTiles = useMemo(() => {
    return tileProducts.filter((product) => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedFinish !== 'All' && product.finish !== selectedFinish) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, selectedFinish, tileProducts]);

  const tileSizes = [
    { size: '300 x 300 mm', type: 'Anti-skid & Parking', desc: 'Compact pavers for wet zones, balconies, and driveways' },
    { size: '300 x 600 mm', type: 'Wall & Backsplash', desc: 'Versatile format for bathroom elevations and kitchen backsplashes' },
    { size: '600 x 600 mm', type: 'Standard Floor Vitrified', desc: 'Popular residential room flooring with high strength' },
    { size: '600 x 1200 mm', type: 'GVT / PGVT Slabs', desc: 'Contemporary elongated format offering fewer grout joints' },
    { size: '800 x 1600 mm', type: 'Grand Porcelain Slab', desc: 'Architectural statements for spacious living areas and foyers' },
    { size: '1200 x 2400 mm', type: 'Full-Height Porcelain', desc: 'Seamless floor-to-ceiling cladding and continuous marble slabs' }
  ];

  return (
    <div className="py-12 bg-brand-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Banner */}
        <div className="bg-brand-charcoal text-white rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden shadow-elevated">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
            <img
              src="/images/categories/marble-look-tiles.jpg"
              alt="Tiles Banner Texture"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-3">
              Morbi Ceramic Dealership
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mb-4">
              Tiles Collection
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Explore diverse tile designs across vitrified, ceramic, and porcelain bodies.
              From high-gloss Italian marble replicas to organic timber planks and heavy-duty pavers.
            </p>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover shadow-md transition-colors"
            >
              <span>Enquire Tile Rates on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Pill Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm uppercase font-bold tracking-wider text-brand-charcoal">
              Filter By Tile Space & Type
            </h2>
            <span className="text-xs text-brand-stone">{filteredTiles.length} designs shown</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedCategory === 'All'
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'bg-white text-brand-charcoal border border-gray-200 hover:border-gray-400'
              }`}
            >
              All Tile Spaces
            </button>
            {tileCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.name)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  selectedCategory === c.name
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'bg-white text-brand-charcoal border border-gray-200 hover:border-gray-400'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredTiles.map((tile) => (
            <ProductCard key={tile.id} product={tile} />
          ))}
        </div>

        {/* Tile Size & Specifications Guide */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-tile">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-2">
              Buyer's Reference
            </span>
            <h3 className="text-2xl font-heading font-extrabold text-brand-charcoal tracking-tight">
              Standard Tile Sizes & Applications
            </h3>
            <p className="text-xs sm:text-sm text-brand-stone mt-2 leading-relaxed">
              We supply standard and custom tile dimensions directly from Morbi manufacturing units.
              Review common size options below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tileSizes.map((item) => (
              <div
                key={item.size}
                className="p-5 rounded-2xl bg-brand-off-white border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-brand-red bg-red-50 px-2 py-0.5 rounded">
                      {item.size}
                    </span>
                    <span className="text-[11px] font-semibold text-brand-charcoal">{item.type}</span>
                  </div>
                  <p className="text-xs text-brand-stone leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
