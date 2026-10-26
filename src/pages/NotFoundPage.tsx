import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 bg-brand-off-white min-h-[70vh] flex items-center justify-center">
      <div className="bg-white p-10 sm:p-14 rounded-3xl text-center max-w-lg shadow-tile border border-gray-200">
        <span className="text-6xl font-heading font-extrabold text-brand-red block mb-4">
          404
        </span>
        <h1 className="font-heading font-bold text-2xl text-brand-charcoal mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-brand-stone mb-8 leading-relaxed">
          The page or product catalogue link you requested does not exist or may have been relocated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-brand-charcoal bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
