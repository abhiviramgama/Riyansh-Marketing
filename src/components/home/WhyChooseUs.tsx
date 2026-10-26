import React from 'react';
import { Palette, Maximize, Home, Bath, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Palette,
      title: 'A Variety of Tile Designs',
      description:
        'From classic Italian Statuario and Calacatta marbles to organic wooden planks, textured stone slates, and Moroccan geometric patterns.'
    },
    {
      icon: Maximize,
      title: 'Multiple Sizes & Finishes',
      description:
        'Spanning compact 300x300 mm pavers up to seamless 1200x2400 mm porcelain slabs in high-gloss, satin matte, carving, and anti-skid textures.'
    },
    {
      icon: Home,
      title: 'Options for Different Spaces',
      description:
        'Carefully curated tile selections specifically tailored for living rooms, master bedrooms, kitchens, shower zones, outdoor terraces, and driveways.'
    },
    {
      icon: Bath,
      title: 'Sanitary Ware Collection',
      description:
        'Coordinated bathroom solutions including designer countertop wash basins, rimless water closets, brass faucets, and thermostatic showers.'
    },
    {
      icon: PhoneCall,
      title: 'Assistance With Product Enquiries',
      description:
        'Direct consultation with showroom owner Kapil Patel for technical specifications, size recommendations, pricing, and project requirements.'
    }
  ];

  return (
    <section className="py-20 bg-brand-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-2">
            Why Riyansh Marketing
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-charcoal tracking-tight">
            Tiles & Sanitary Solutions Designed for Your Projects
          </h2>
          <p className="mt-4 text-brand-stone text-sm sm:text-base leading-relaxed">
            Conveniently located on Morbi-Halvad Road in Morbi, Gujarat, we assist builders, architects,
            homeowners, and contractors with diverse tile formats and reliable product guidance.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className={`bg-white p-8 rounded-2xl border border-brand-border/80 shadow-tile hover:shadow-tile-hover transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-red-light text-brand-red flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-charcoal mb-3">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-brand-stone leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-brand-red">
                  <span>Showroom Focus</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
