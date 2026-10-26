import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowUpRight } from 'lucide-react';

export const InspirationGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const spaces = [
    {
      title: 'Living Rooms',
      desc: 'Seamless continuous vein marble-look slabs reflecting grand ambiance',
      image: '/images/gallery/living-1.jpg',
      category: 'Living Room Tiles',
      span: 'lg:col-span-2 lg:row-span-2'
    },
    {
      title: 'Luxury Bathrooms',
      desc: 'Anti-skid basalt floors and spa-inspired wall ceramics',
      image: '/images/gallery/bathroom-1.jpg',
      category: 'Bathroom Tiles',
      span: 'lg:col-span-1 lg:row-span-1'
    },
    {
      title: 'Culinary Kitchens',
      desc: 'Subway gloss backsplashes and oil-resistant vitrified flooring',
      image: '/images/gallery/kitchen-1.jpg',
      category: 'Kitchen Tiles',
      span: 'lg:col-span-1 lg:row-span-1'
    },
    {
      title: 'Outdoor & Terraces',
      desc: 'Textured weatherproof stone pavers for open-air durability',
      image: '/images/gallery/outdoor-1.jpg',
      category: 'Outdoor Tiles',
      span: 'lg:col-span-1 lg:row-span-1'
    },
    {
      title: 'Commercial Interiors',
      desc: 'High-traffic double charge vitrified tiles for lobbies and offices',
      image: '/images/gallery/commercial-1.jpg',
      category: 'Floor Tiles',
      span: 'lg:col-span-2 lg:row-span-1'
    },
    {
      title: 'Cozy Bedrooms',
      desc: 'Warm oak timber vitrified planks for relaxing retreats',
      image: '/images/gallery/bedroom-1.jpg',
      category: 'Bedroom Tiles',
      span: 'lg:col-span-1 lg:row-span-1'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-2">
              Design Inspiration
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-charcoal tracking-tight">
              Tiles in Real Architectural Spaces
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-brand-stone text-sm sm:text-base max-w-md">
            Visualize how different tile textures, finishes, and formats elevate residential and commercial environments.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[260px]">
          {spaces.map((space) => (
            <div
              key={space.title}
              className={`group relative rounded-2xl overflow-hidden shadow-tile border border-gray-100 ${space.span}`}
            >
              <img
                src={space.image}
                alt={`${space.title} tile application - Riyansh Marketing`}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Space details overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <Link
                    to={`/products?category=${encodeURIComponent(space.category)}`}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-brand-red backdrop-blur-md text-white transition-colors"
                    title={`Explore ${space.title} Tiles`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-red-muted block mb-1">
                    {space.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mb-1.5">
                    {space.title}
                  </h3>
                  <p className="text-xs text-gray-200 line-clamp-2 max-w-md">
                    {space.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
