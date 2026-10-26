import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-brand-red mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Comprehensive Product Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-charcoal tracking-tight">
              Explore Tile Categories
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-brand-stone text-sm sm:text-base max-w-md">
            From seamless large-format slabs to non-skid bathroom pavers and designer sanitary ware.
          </p>
        </div>

        {/* 15 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={cat.isSanitary ? '/sanitary-ware' : `/products?category=${encodeURIComponent(cat.name)}`}
              className="group bg-white rounded-2xl overflow-hidden border border-brand-border/70 shadow-tile hover:shadow-tile-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Image with Zoom on Hover */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={`${cat.name} - Riyansh Marketing`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Red corner accent on hover */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-brand-red/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-xl">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-heading font-bold text-base text-brand-charcoal group-hover:text-brand-red transition-colors mb-1.5">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-brand-stone line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-4 pb-4 pt-1 flex items-center justify-between text-xs font-semibold text-brand-red">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
