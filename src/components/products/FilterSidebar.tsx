import React from 'react';
import { Filter, RotateCcw, Check } from 'lucide-react';
import { FilterState } from '../../types/product';
import { getAvailableFilterOptions } from '../../utils/productFilters';
import { PRODUCTS } from '../../data/products';

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (newFilters: FilterState) => void;
  onReset: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onChange, onReset }) => {
  const options = getAvailableFilterOptions(PRODUCTS);

  const updateField = (field: keyof FilterState, value: string) => {
    onChange({
      ...filters,
      [field]: value
    });
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.subcategory !== 'all' ||
    filters.size !== 'all' ||
    filters.material !== 'all' ||
    filters.finish !== 'all' ||
    filters.colour !== 'all' ||
    filters.search !== '';

  return (
    <div className="bg-white rounded-2xl p-6 border border-brand-border/80 shadow-tile">
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
        <div className="flex items-center gap-2 font-heading font-bold text-base text-brand-charcoal">
          <Filter className="w-4 h-4 text-brand-red" />
          <span>Filters</span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-red hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => updateField('category', e.target.value)}
            className="w-full text-xs font-medium bg-gray-50 border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red text-brand-charcoal"
          >
            <option value="all">All Categories</option>
            {options.categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Size Filter */}
        <div>
          <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-2">
            Size Format
          </label>
          <select
            value={filters.size}
            onChange={(e) => updateField('size', e.target.value)}
            className="w-full text-xs font-medium bg-gray-50 border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red text-brand-charcoal"
          >
            <option value="all">All Sizes</option>
            {options.sizes.map((sz) => (
              <option key={sz} value={sz}>
                {sz}
              </option>
            ))}
          </select>
        </div>

        {/* Finish Filter */}
        <div>
          <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-2">
            Surface Finish
          </label>
          <select
            value={filters.finish}
            onChange={(e) => updateField('finish', e.target.value)}
            className="w-full text-xs font-medium bg-gray-50 border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red text-brand-charcoal"
          >
            <option value="all">All Finishes</option>
            {options.finishes.map((fn) => (
              <option key={fn} value={fn}>
                {fn}
              </option>
            ))}
          </select>
        </div>

        {/* Material Filter */}
        <div>
          <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-2">
            Body Material
          </label>
          <select
            value={filters.material}
            onChange={(e) => updateField('material', e.target.value)}
            className="w-full text-xs font-medium bg-gray-50 border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red text-brand-charcoal"
          >
            <option value="all">All Materials</option>
            {options.materials.map((mat) => (
              <option key={mat} value={mat}>
                {mat}
              </option>
            ))}
          </select>
        </div>

        {/* Colour Filter */}
        <div>
          <label className="block text-xs uppercase font-bold tracking-wider text-brand-charcoal mb-2">
            Colour Tone
          </label>
          <select
            value={filters.colour}
            onChange={(e) => updateField('colour', e.target.value)}
            className="w-full text-xs font-medium bg-gray-50 border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red text-brand-charcoal"
          >
            <option value="all">All Colours</option>
            {options.colours.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Helpful note */}
      <div className="mt-8 p-3.5 bg-brand-off-white rounded-xl border border-gray-200 text-[11px] text-brand-stone leading-relaxed">
        <p className="font-semibold text-brand-charcoal mb-1">Custom Sizes & Enquiries</p>
        Don't see your specific tile size? Contact Kapil Patel on WhatsApp for custom factory orders from Morbi.
      </div>
    </div>
  );
};
