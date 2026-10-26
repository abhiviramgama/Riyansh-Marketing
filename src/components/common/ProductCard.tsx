import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Eye, Layers, Maximize2 } from 'lucide-react';
import { Product } from '../../types/product';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0] || 'Standard';

  const whatsappUrl = getProductWhatsAppUrl(product.name, currentSize);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-brand-border/80 shadow-tile hover:shadow-tile-hover transition-all duration-300 flex flex-col h-full relative">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={product.images[0] || '/images/hero/hero-tile-living.jpg'}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay for badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-brand-charcoal/90 text-white backdrop-blur-sm rounded-md shadow-sm">
            {product.category}
          </span>

          {product.isSample && (
            <span className="px-2 py-0.5 text-[10px] font-semibold bg-white/90 text-brand-charcoal backdrop-blur-sm rounded border border-gray-200">
              Showroom Sample
            </span>
          )}
        </div>

        {/* Finish Badge (Bottom left of image) */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span className="px-2 py-0.5 text-[11px] font-semibold bg-white/95 text-brand-charcoal rounded shadow-sm">
            {product.finish}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 right-3 p-2 rounded-full bg-white text-brand-charcoal shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 hover:bg-brand-red hover:text-white"
            title="Quick View"
            aria-label="Quick View"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Subcategory & Code */}
          <div className="flex items-center justify-between text-xs text-brand-stone mb-1.5">
            <span className="truncate">{product.subcategory}</span>
            {product.productCode && (
              <span className="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
                {product.productCode}
              </span>
            )}
          </div>

          {/* Product Name */}
          <Link
            to={`/product/${product.id}`}
            className="block font-heading font-bold text-base text-brand-charcoal hover:text-brand-red transition-colors line-clamp-1 mb-2"
          >
            {product.name}
          </Link>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs text-brand-stone mb-3 bg-brand-off-white/70 p-2.5 rounded-lg border border-gray-100">
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-400">Material</span>
              <span className="font-medium text-brand-charcoal truncate block">{product.material}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-400">Colour</span>
              <span className="font-medium text-brand-charcoal truncate block">{product.colour}</span>
            </div>
          </div>

          {/* Available Sizes Pills */}
          {product.sizes.length > 0 && (
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-1.5">
                Available Sizes
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((sz, idx) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`text-[11px] px-2.5 py-1 rounded-md font-medium border transition-colors ${
                      selectedSizeIndex === idx
                        ? 'bg-brand-charcoal text-white border-brand-charcoal'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-gray-100 mt-2">
          {/* Price status */}
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="text-brand-stone font-medium">Pricing:</span>
            <span className="font-bold text-brand-red">
              {product.price ? `₹${product.price}` : 'Price on Request'}
            </span>
          </div>

          {/* Two Buttons: View Details & WhatsApp Enquiry */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/product/${product.id}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-charcoal bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-brand-red rounded-lg hover:bg-brand-red-hover shadow-sm transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
