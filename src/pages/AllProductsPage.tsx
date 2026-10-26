import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layers, PackageSearch, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { FilterState } from '../types/product';
import { filterProducts, sortProducts } from '../utils/productFilters';
import { ProductCard } from '../components/common/ProductCard';
import { FilterSidebar } from '../components/products/FilterSidebar';
import { FilterDrawer } from '../components/products/FilterDrawer';
import { SearchBar } from '../components/products/SearchBar';

const defaultFilters: FilterState = {
  category: 'all',
  subcategory: 'all',
  size: 'all',
  material: 'all',
  finish: 'all',
  colour: 'all',
  search: '',
  sortBy: 'featured'
};

export const AllProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    document.title = 'Product Catalogue | Riyansh Marketing Morbi';
    window.scrollTo(0, 0);

    const catParam = searchParams.get('category');
    const queryParam = searchParams.get('q');
    const sizeParam = searchParams.get('size');

    setFilters((prev) => ({
      ...prev,
      category: catParam || 'all',
      search: queryParam || '',
      size: sizeParam || 'all'
    }));
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const list = filterProducts(PRODUCTS, filters);
    return sortProducts(list, filters.sortBy);
  }, [filters]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    const params: Record<string, string> = {};
    if (newFilters.category !== 'all') params.category = newFilters.category;
    if (newFilters.search) params.q = newFilters.search;
    if (newFilters.size !== 'all') params.size = newFilters.size;
    setSearchParams(params, { replace: true });
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    setSearchParams({}, { replace: true });
  };

  return (
    <div className="py-12 bg-brand-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-brand-red mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Digital Product Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-charcoal tracking-tight">
            All Tiles & Sanitary Ware
          </h1>
          <p className="mt-2 text-brand-stone text-sm max-w-2xl leading-relaxed">
            Browse our comprehensive collection by space, size, finish, and material.
            Contact showroom owner Kapil Patel for current rates and custom factory orders.
          </p>
        </div>

        <SearchBar
          filters={filters}
          onChange={handleFilterChange}
          totalCount={PRODUCTS.length}
          filteredCount={filteredProducts.length}
          onOpenMobileFilters={() => setMobileDrawerOpen(true)}
          onReset={handleResetFilters}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="hidden lg:block lg:col-span-1 sticky top-24">
            <FilterSidebar
              filters={filters}
              onChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </div>

          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-brand-stone mb-4">
                  <PackageSearch className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-charcoal mb-2">
                  No matching products found
                </h3>
                <p className="text-sm text-brand-stone max-w-md mx-auto mb-6">
                  We couldn't find any products matching your current filters or search query.
                  Try clearing your filters or search for another finish or size.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover transition-colors shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <FilterDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleResetFilters}
        resultCount={filteredProducts.length}
      />
    </div>
  );
};
