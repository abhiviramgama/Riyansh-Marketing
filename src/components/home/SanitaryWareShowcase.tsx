import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Bath, Droplets, CheckCircle2 } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const SanitaryWareShowcase: React.FC = () => {
  const items = [
    {
      title: 'Countertop & Table-Top Basins',
      desc: 'Slim-rim vitreous china ceramics with stain-resistant nano-glazes.',
      image: '/images/sanitary-ware/countertop-basin-white.jpg'
    },
    {
      title: 'Vortex Rimless Water Closets',
      desc: 'Wall-hung and one-piece toilets with hygienic 360-degree flushing.',
      image: '/images/sanitary-ware/wall-hung-toilet.jpg'
    },
    {
      title: 'Designer Brass Faucets & Mixers',
      desc: 'Single-lever tall and regular basin mixers in polished chrome and matte black.',
      image: '/images/sanitary-ware/designer-basin-mixer.jpg'
    },
    {
      title: 'Concealed Shower Systems',
      desc: 'Thermostatic anti-scald diverters with generous rain shower heads.',
      image: '/images/sanitary-ware/thermostatic-shower.jpg'
    }
  ];

  return (
    <section className="py-20 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-brand-red mb-3">
              <Bath className="w-4 h-4" />
              <span>Bath & Ceramic Fittings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Premium Sanitary Ware Collection
            </h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              Complement your tile selections with coordinated bathroom suites, designer wash basins,
              wall-hung water closets, and precision brass fittings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/sanitary-ware"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-brand-charcoal bg-white rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
            >
              <span>Explore Sanitary Ware</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire Pricing</span>
            </a>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-brand-charcoal-dark rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-base text-white group-hover:text-brand-red-muted transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
