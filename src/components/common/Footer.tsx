import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ExternalLink, QrCode } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Products', path: '/products' },
    { name: 'Tiles Catalogue', path: '/tiles' },
    { name: 'Sanitary Ware', path: '/sanitary-ware' },
    { name: 'About Riyansh Marketing', path: '/about' },
    { name: 'Contact & Location', path: '/contact' }
  ];

  const categoryLinks = [
    { name: 'Floor Tiles', path: '/products?category=Floor+Tiles' },
    { name: 'Wall Tiles', path: '/products?category=Wall+Tiles' },
    { name: 'Bathroom Tiles', path: '/products?category=Bathroom+Tiles' },
    { name: 'Kitchen Tiles', path: '/products?category=Kitchen+Tiles' },
    { name: 'Outdoor & Parking Tiles', path: '/products?category=Outdoor+Tiles' },
    { name: 'Decorative & Mosaic Tiles', path: '/products?category=Decorative+Tiles' },
    { name: 'Sanitary Ware Collection', path: '/sanitary-ware' }
  ];

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-brand-charcoal-light relative overflow-hidden">
      {/* Decorative top red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-brand-charcoal-light">
          {/* Column 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="lg" showSubtitle />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mt-3">
              Riyansh Marketing is a premier tiles and sanitary ware destination in Morbi, Gujarat.
              We provide architectural tile solutions, floor & wall ceramics, vitrified slabs, and
              designer sanitary fittings for residential and commercial projects.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-gray-400">
              <span className="px-2.5 py-1 bg-brand-charcoal-dark rounded border border-gray-700">Morbi Ceramic Hub</span>
              <span className="px-2.5 py-1 bg-brand-charcoal-dark rounded border border-gray-700">Vitrified Slabs</span>
              <span className="px-2.5 py-1 bg-brand-charcoal-dark rounded border border-gray-700">Sanitary Ware</span>
            </div>

            {/* Direct Contact Actions */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-brand-red rounded-lg hover:bg-brand-red-hover transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-brand-charcoal-light rounded-lg hover:bg-gray-700 border border-gray-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-red mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tile Categories */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-red mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {categoryLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address & Location QR */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-red mb-2">
              Showroom Location
            </h3>
            <div className="text-sm text-gray-300 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <address className="not-italic text-xs leading-relaxed text-gray-300">
                  <strong className="text-white block text-sm mb-0.5">Riyansh Marketing</strong>
                  Unchi Mandal, Morbi-Halvad Road,<br />
                  Opposite Mahashakti Hotel,<br />
                  Near HP Petrol Pump,<br />
                  Morbi, Gujarat – 363642, India
                </address>
              </div>

              {/* QR Code Card */}
              <div className="mt-3 p-3 bg-white rounded-xl text-brand-charcoal inline-block shadow-md">
                <div className="flex items-center gap-3">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative"
                    title="Scan or click to open Google Maps location"
                  >
                    <img
                      src={BUSINESS_INFO.qrCodePath}
                      alt="Google Maps Location QR Code - Riyansh Marketing"
                      className="w-20 h-20 object-contain rounded border border-gray-200"
                    />
                  </a>
                  <div className="text-left">
                    <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand-red">
                      <QrCode className="w-3 h-3" />
                      Map Location
                    </span>
                    <p className="text-[10px] text-gray-600 mt-0.5">
                      Scan with your phone camera or click to open directions
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-brand-red font-semibold hover:underline mt-1"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Riyansh Marketing. All rights reserved. Registered in Morbi, Gujarat.</p>

          <div className="flex items-center gap-2 font-medium">
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">
              Website crafted by <strong className="text-white hover:text-brand-red transition-colors">Abhi Viramgama</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
