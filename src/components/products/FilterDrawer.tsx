import React from 'react';
import { X, Filter, RotateCcw } from 'lucide-react';
import { FilterState } from '../../types/product';
import { FilterSidebar } from './FilterSidebar';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  resultCount: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onChange,
  onReset,
  resultCount
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-brand-charcoal/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Drawer Top */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-brand-red" />
              <h2 className="font-heading font-bold text-base text-brand-charcoal">Filter Catalogue</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-500 hover:text-brand-charcoal rounded-lg"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="p-4">
            <FilterSidebar filters={filters} onChange={onChange} onReset={onReset} />
          </div>
        </div>

        {/* Drawer Bottom Action */}
        <div className="p-4 border-t border-gray-100 bg-white sticky bottom-0 flex items-center gap-3">
          <button
            onClick={onReset}
            className="px-4 py-3 text-xs font-semibold text-brand-charcoal bg-gray-100 rounded-xl hover:bg-gray-200"
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="flex-grow py-3 px-4 text-xs font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover shadow-sm"
          >
            View {resultCount} {resultCount === 1 ? 'Product' : 'Products'}
          </button>
        </div>
      </div>
    </div>
  );
};
