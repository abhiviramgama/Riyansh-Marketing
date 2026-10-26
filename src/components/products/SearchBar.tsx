import React from 'react';
import { Search, Filter, X, ArrowUpDown } from 'lucide-react';
import { FilterState } from '../../types/product';

interface SearchBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalCount: number;
  filteredCount: number;
  onOpenMobileFilters: () => void;
  onReset: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  filters,
  onChange,
  totalCount,
  filteredCount,
  onOpenMobileFilters,
  onReset
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...filters,
      search: e.target.value
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({
      ...filters,
      sortBy: e.target.value as FilterState['sortBy']
    });
  };

  const clearSearch = () => {
    onChange({
      ...filters,
      search: ''
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
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-border/80 shadow-tile mb-6">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input Box */}
        <div className="relative flex-grow max-w-lg">
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search by name, size (e.g. 600x1200), finish, code, colour..."
            className="w-full pl-10 pr-9 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red text-brand-charcoal transition-all"
          />
          <Search className="w-4 h-4 text-brand-stone absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          {filters.search && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Controls: Sort Dropdown & Mobile Filter Button */}
        <div className="flex items-center gap-3">
          {/* Mobile Filter Trigger */}
          <button
            type="button"
            onClick={onOpenMobileFilters}
            className="lg:hidden flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-brand-charcoal bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            <Filter className="w-4 h-4 text-brand-red" />
            <span>Filters {hasActiveFilters && '•'}</span>
          </button>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 flex-1 sm:flex-none">
            <ArrowUpDown className="w-3.5 h-3.5 text-brand-stone hidden sm:block" />
            <select
              value={filters.sortBy}
              onChange={handleSortChange}
              className="w-full sm:w-auto text-xs font-semibold bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red text-brand-charcoal"
            >
              <option value="featured">Sort: Featured</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count & Active Filter Pills */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-brand-stone font-medium">
          Showing <strong className="text-brand-charcoal font-bold">{filteredCount}</strong> of {totalCount} products
        </span>

        {hasActiveFilters && (
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-brand-stone">Active filters applied</span>
            <button
              onClick={onReset}
              className="text-[11px] font-bold text-brand-red hover:underline"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
