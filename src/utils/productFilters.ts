import { Product, FilterState } from '../types/product';

export const filterProducts = (products: Product[], filters: FilterState): Product[] => {
  return products.filter((product) => {
    // 1. Category Filter
    if (filters.category && filters.category !== 'all') {
      if (product.category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }
    }

    // 2. Subcategory Filter
    if (filters.subcategory && filters.subcategory !== 'all') {
      if (product.subcategory.toLowerCase() !== filters.subcategory.toLowerCase()) {
        return false;
      }
    }

    // 3. Size Filter
    if (filters.size && filters.size !== 'all') {
      const hasSize = product.sizes.some((s) => s.toLowerCase() === filters.size.toLowerCase());
      if (!hasSize) return false;
    }

    // 4. Material Filter
    if (filters.material && filters.material !== 'all') {
      if (!product.material.toLowerCase().includes(filters.material.toLowerCase())) {
        return false;
      }
    }

    // 5. Finish Filter
    if (filters.finish && filters.finish !== 'all') {
      if (product.finish.toLowerCase() !== filters.finish.toLowerCase()) {
        return false;
      }
    }

    // 6. Colour Filter
    if (filters.colour && filters.colour !== 'all') {
      if (!product.colour.toLowerCase().includes(filters.colour.toLowerCase())) {
        return false;
      }
    }

    // 7. Free Text Search (Name, Code, Category, Material, Finish, Colour, Sizes)
    if (filters.search && filters.search.trim() !== '') {
      const q = filters.search.trim().toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchCode = product.productCode?.toLowerCase().includes(q) ?? false;
      const matchCategory = product.category.toLowerCase().includes(q);
      const matchSubcategory = product.subcategory.toLowerCase().includes(q);
      const matchMaterial = product.material.toLowerCase().includes(q);
      const matchFinish = product.finish.toLowerCase().includes(q);
      const matchColour = product.colour.toLowerCase().includes(q);
      const matchSize = product.sizes.some((s) => s.toLowerCase().includes(q));

      if (
        !matchName &&
        !matchCode &&
        !matchCategory &&
        !matchSubcategory &&
        !matchMaterial &&
        !matchFinish &&
        !matchColour &&
        !matchSize
      ) {
        return false;
      }
    }

    return true;
  });
};

export const sortProducts = (
  products: Product[],
  sortBy: FilterState['sortBy']
): Product[] => {
  const list = [...products];

  switch (sortBy) {
    case 'featured':
      return list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    case 'name-asc':
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return list.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return list;
  }
};

export const getAvailableFilterOptions = (products: Product[]) => {
  const categories = Array.from(new Set(products.map((p) => p.category))).sort();
  const subcategories = Array.from(new Set(products.map((p) => p.subcategory))).sort();
  const sizes = Array.from(new Set(products.flatMap((p) => p.sizes))).sort();
  const materials = Array.from(new Set(products.map((p) => p.material))).sort();
  const finishes = Array.from(new Set(products.map((p) => p.finish))).sort();
  const colours = Array.from(
    new Set(
      products.flatMap((p) =>
        p.colour
          .split(/[,&]/)
          .map((c) => c.trim())
          .filter(Boolean)
      )
    )
  ).sort();

  return {
    categories,
    subcategories,
    sizes,
    materials,
    finishes,
    colours
  };
};
