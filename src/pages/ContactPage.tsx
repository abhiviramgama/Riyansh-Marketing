import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
  Send,
  Building,
  Clock
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getFormWhatsAppUrl, getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { CATEGORIES } from '../data/categories';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact & Location | Riyansh Marketing Morbi';
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Floor Tiles',
    size: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    // Generate formatted WhatsApp message and redirect to WhatsApp chat
    const waUrl = getFormWhatsAppUrl(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-12 bg-brand-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-2">
            Showroom Enquiries
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-brand-charcoal tracking-tight">
            Contact Riyansh Marketing
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-stone leading-relaxed">
            Reach out directly to owner Kapil Patel for product specifications, available sizes,
            pricing, and order coordination in Morbi, Gujarat.
          </p>
        </div>

        {/* 3 Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone Card */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-tile flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-red-light text-brand-red flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal mb-1">
                Direct Phone Call
              </h3>
              <p className="text-xs text-brand-stone mb-4">
                Speak directly with Kapil Patel during showroom hours.
              </p>
              <p className="font-mono text-base font-bold text-brand-charcoal">
                {BUSINESS_INFO.phone}
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-brand-charcoal bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>Call Now</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-tile flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal mb-1">
                WhatsApp Messaging
              </h3>
              <p className="text-xs text-brand-stone mb-4">
                Share photos, project measurements, or request instant brochures.
              </p>
              <p className="font-mono text-base font-bold text-green-700">
                {BUSINESS_INFO.whatsapp}
              </p>
            </div>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-brand-red hover:bg-brand-red-hover rounded-xl transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Open WhatsApp</span>
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-tile flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-charcoal text-white flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal mb-1">
                Showroom Location
              </h3>
              <p className="text-xs text-brand-stone leading-relaxed">
                Unchi Mandal, Morbi-Halvad Road, Opposite Mahashakti Hotel, Near HP Petrol Pump, Morbi.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-brand-charcoal bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
            >
              <span>Google Maps Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Main Grid: Enquiry Form & Location QR Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-brand-border shadow-tile">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-1">
                Project Consultation
              </span>
              <h2 className="text-2xl font-heading font-extrabold text-brand-charcoal">
                Send an Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-brand-stone mt-1">
                Fill out the details below. Submitting will open your WhatsApp with all project details pre-formatted for instant reply.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className={`w-full text-xs font-medium bg-gray-50 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 ${
                      formErrors.name ? 'border-red-500' : 'border-gray-200 focus:border-brand-red'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-[11px] text-red-500 mt-1 block">{formErrors.name}</span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full text-xs font-medium bg-gray-50 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-200 focus:border-brand-red'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-[11px] text-red-500 mt-1 block">{formErrors.phone}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-1.5">
                    Product Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full text-xs font-medium bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-brand-red text-brand-charcoal"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Size */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-1.5">
                    Preferred Size (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    placeholder="e.g. 600 x 1200 mm"
                    className="w-full text-xs font-medium bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-1.5">
                  Project Requirements / Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project, required square footage, finish preference, or delivery requirements..."
                  className="w-full text-xs font-medium bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-brand-red"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover shadow-md transition-all duration-200 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Chat on WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-brand-stone mt-2">
                * Your message will be formatted directly into WhatsApp to start an instant discussion with Kapil Patel.
              </p>
            </form>
          </div>

          {/* Right: Location QR Code & Showroom Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location QR Code Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-border shadow-tile text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-red block mb-1">
                Scan & Navigate
              </span>
              <h3 className="font-heading font-extrabold text-xl text-brand-charcoal mb-2">
                Official Location QR Code
              </h3>
              <p className="text-xs text-brand-stone mb-6">
                Scan this QR code with your phone camera to open Google Maps navigation directly to Riyansh Marketing showroom.
              </p>

              {/* QR Code Container */}
              <div className="inline-block p-4 bg-brand-off-white rounded-2xl border-2 border-brand-border shadow-inner mb-4">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img
                    src={BUSINESS_INFO.qrCodePath}
                    alt="Riyansh Marketing Official Location QR Code"
                    className="w-48 h-48 mx-auto object-contain rounded-xl"
                  />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-brand-charcoal hover:bg-black rounded-xl transition-colors shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Official Showroom Details Card */}
            <div className="bg-brand-charcoal text-white p-6 rounded-3xl border border-brand-charcoal-light shadow-tile space-y-4">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-brand-red flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    Riyansh Marketing Showroom
                  </h4>
                  <p className="text-xs text-gray-400">Proprietor: {BUSINESS_INFO.owner}</p>
                </div>
              </div>

              <div className="text-xs text-gray-300 leading-relaxed border-t border-brand-charcoal-light pt-3">
                <p className="font-semibold text-white mb-1">Registered Address:</p>
                {BUSINESS_INFO.address.fullFormatted}
              </div>

              <div className="text-xs text-gray-300 border-t border-brand-charcoal-light pt-3 flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Visiting Hours:</p>
                  <p className="text-gray-400">{BUSINESS_INFO.businessHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
