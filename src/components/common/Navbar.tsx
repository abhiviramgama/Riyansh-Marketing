import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, MessageSquare, Menu, X, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Products', path: '/products' },
    { name: 'Tiles', path: '/tiles' },
    { name: 'Sanitary Ware', path: '/sanitary-ware' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-brand-charcoal text-white text-xs py-1.5 px-4 hidden sm:block border-b border-brand-charcoal-light">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-brand-stone-light">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              Morbi-Halvad Road, Morbi, Gujarat
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <span>Owner:</span>
              <strong className="text-white font-medium">{BUSINESS_INFO.owner}</strong>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-brand-stone-light hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-brand-charcoal-light">|</span>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-stone-light hover:text-green-400 font-medium transition-colors"
            >
              Quick WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-md py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-brand-border py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Logo */}
            <Logo size="md" />

            {/* Center Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-semibold rounded-md transition-all duration-150 ${
                      isActive
                        ? 'text-brand-red bg-brand-red-light'
                        : 'text-brand-charcoal hover:text-brand-red hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search Toggle / Bar */}
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tiles, sizes..."
                    autoFocus
                    className="w-56 pl-9 pr-8 py-1.5 text-sm bg-gray-50 border border-brand-red rounded-full focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                  />
                  <Search className="w-4 h-4 text-brand-stone absolute left-3 pointer-events-none" />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-2.5 text-brand-stone hover:text-brand-charcoal"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-brand-charcoal hover:text-brand-red rounded-full hover:bg-gray-100 transition-colors"
                  title="Search products"
                  aria-label="Search products"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}

              {/* Call Button */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-brand-charcoal border border-gray-200 rounded-full hover:border-brand-red hover:text-brand-red transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>Call Showroom</span>
              </a>

              {/* WhatsApp Enquiry Button */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-brand-red rounded-full hover:bg-brand-red-hover shadow-sm hover:shadow transition-all duration-200 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Enquire Now</span>
              </a>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-brand-charcoal hover:text-brand-red rounded-lg"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-brand-red rounded-full"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-charcoal hover:text-brand-red focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Input when toggled */}
          {searchOpen && (
            <div className="mt-3 pt-3 border-t border-gray-100 lg:hidden">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tile names, sizes (e.g. 600x1200), finishes..."
                  className="w-full pl-10 pr-10 py-2.5 text-sm bg-gray-50 border border-brand-red rounded-lg focus:outline-none"
                  autoFocus
                />
                <Search className="w-4 h-4 text-brand-stone absolute left-3.5" />
                <button
                  type="submit"
                  className="absolute right-3 px-2 py-1 text-xs font-semibold text-white bg-brand-red rounded"
                >
                  Go
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-brand-charcoal/60 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <Logo size="sm" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-brand-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                        isActive
                          ? 'text-brand-red bg-brand-red-light border-l-4 border-brand-red'
                          : 'text-brand-charcoal hover:bg-gray-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* Showroom Contact Card in Drawer */}
              <div className="mt-8 p-4 bg-brand-off-white rounded-xl border border-brand-border">
                <p className="text-xs uppercase font-bold tracking-wider text-brand-red">Showroom Contact</p>
                <p className="text-sm font-semibold text-brand-charcoal mt-1">{BUSINESS_INFO.owner} (Owner)</p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-brand-charcoal font-medium mt-2 hover:text-brand-red"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <p className="text-xs text-brand-stone mt-2 leading-relaxed">
                  {BUSINESS_INFO.address.landmark}, {BUSINESS_INFO.address.line1}, Morbi
                </p>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-brand-red rounded-lg shadow-sm hover:bg-brand-red-hover transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-brand-charcoal bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
