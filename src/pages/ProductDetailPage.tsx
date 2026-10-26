import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MessageSquare,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Maximize2,
  X,
  Share2
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { getProductWhatsAppUrl } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ProductCard } from '../components/common/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = PRODUCTS.find((p: Product) => p.id === id);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImageIndex(0);
    setSelectedSizeIndex(0);
    if (product) {
      document.title = `${product.name} | Riyansh Marketing Morbi`;
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="py-24 bg-brand-off-white min-h-[60vh] flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl text-center max-w-md shadow-tile border border-gray-200">
          <h2 className="font-heading font-bold text-2xl text-brand-charcoal mb-3">
            Product Not Found
          </h2>
          <p className="text-sm text-brand-stone mb-6">
            The tile or sanitary item you are looking for may have been updated or moved.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Catalogue</span>
          </Link>
        </div>
      </div>
    );
  }

  const selectedSize = product.sizes[selectedSizeIndex] || product.sizes[0] || 'Standard';
  const whatsappUrl = getProductWhatsAppUrl(product.name, selectedSize);

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p: Product) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at Riyansh Marketing Morbi`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-10 bg-brand-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-charcoal hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-brand-charcoal bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
              title="Share product link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Main Product Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Image Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Large Image */}
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-brand-border/80 shadow-tile">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={`${product.name} - ${product.category}`}
                className="w-full h-full object-cover object-center cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              />

              {/* Sample Showroom Notice Badge */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-brand-charcoal/90 text-white backdrop-blur-md rounded-lg shadow-sm">
                  {product.category}
                </span>
                {product.isSample && (
                  <span className="px-2.5 py-1 text-xs font-semibold bg-white/95 text-brand-charcoal backdrop-blur-md rounded-lg border border-gray-200">
                    Showroom Display Model
                  </span>
                )}
              </div>

              {/* Lightbox Trigger Button */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 hover:bg-white text-brand-charcoal shadow-md backdrop-blur-sm transition-all hover:scale-105"
                title="Enlarge photograph"
                aria-label="Enlarge photograph"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={img + idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-brand-red scale-105 shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Enquiry Actions (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-brand-border/80 shadow-tile flex flex-col justify-between">
            <div>
              {/* Product Code & Subcategory */}
              <div className="flex items-center justify-between text-xs text-brand-stone mb-2">
                <span className="font-medium">{product.subcategory}</span>
                {product.productCode && (
                  <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-700 font-semibold">
                    Code: {product.productCode}
                  </span>
                )}
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-charcoal tracking-tight mb-4">
                {product.name}
              </h1>

              {/* Pricing Box */}
              <div className="p-4 bg-brand-off-white rounded-2xl border border-gray-100 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-gray-400 block">
                      Price Status
                    </span>
                    <span className="text-xl font-extrabold text-brand-red">
                      {product.price ? `₹${product.price}` : 'Price on Request'}
                    </span>
                  </div>
                  <span className="text-xs text-brand-stone font-medium text-right max-w-[160px]">
                    Direct showroom consultation for batch rates & bulk quotes
                  </span>
                </div>
              </div>

              {/* Interactive Size Selector */}
              {product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase font-bold tracking-wider text-brand-charcoal">
                      Select Tile Size / Format
                    </label>
                    <span className="text-xs text-brand-stone font-medium">
                      Selected: <strong className="text-brand-charcoal">{selectedSize}</strong>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz: string, idx: number) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSizeIndex(idx)}
                        className={`text-xs px-3.5 py-2 rounded-xl font-bold border transition-all ${
                          selectedSizeIndex === idx
                            ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-sm'
                            : 'bg-white text-brand-charcoal border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Table */}
              <div className="border-t border-gray-100 pt-4 mb-6">
                <h2 className="text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-3">
                  Technical Specifications
                </h2>
                <div className="grid grid-cols-2 gap-y-2.5 text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-semibold">Material</span>
                    <span className="font-semibold text-brand-charcoal">{product.material}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-semibold">Surface Finish</span>
                    <span className="font-semibold text-brand-charcoal">{product.finish}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-semibold">Colour / Shade</span>
                    <span className="font-semibold text-brand-charcoal">{product.colour}</span>
                  </div>
                  {product.thickness && (
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-semibold">Thickness</span>
                      <span className="font-semibold text-brand-charcoal">{product.thickness}</span>
                    </div>
                  )}
                  {product.piecesPerBox && (
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-semibold">Pieces / Box</span>
                      <span className="font-semibold text-brand-charcoal">{product.piecesPerBox} Pcs</span>
                    </div>
                  )}
                  {product.coveragePerBox && (
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-semibold">Box Coverage</span>
                      <span className="font-semibold text-brand-charcoal">{product.coveragePerBox}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-100 pt-4 mb-6">
                <h2 className="text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-2">
                  Product Overview
                </h2>
                <p className="text-xs sm:text-sm text-brand-stone leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Suitable Applications */}
              {product.suitableApplications && (
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <h2 className="text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-2">
                    Recommended Applications
                  </h2>
                  <div className="flex flex-wrap gap-1.5">
                    {product.suitableApplications.map((app: string) => (
                      <span
                        key={app}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium bg-gray-100 text-brand-charcoal rounded-md"
                      >
                        <CheckCircle2 className="w-3 h-3 text-brand-red" />
                        <span>{app}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Enquiry Buttons */}
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover shadow-md hover:shadow-brand-red/30 transition-all duration-200 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp ({selectedSize})</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold text-brand-charcoal bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call Showroom for Price ({BUSINESS_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-brand-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-1">
                  Coordinated Designs
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-brand-charcoal tracking-tight">
                  Related in {product.category}
                </h3>
              </div>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-bold text-brand-red hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel: Product) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 text-white hover:text-brand-red bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={product.images[selectedImageIndex] || product.images[0]}
            alt={product.name}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
