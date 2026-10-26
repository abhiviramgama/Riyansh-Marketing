export type TileCategory =
  | 'Floor Tiles'
  | 'Wall Tiles'
  | 'Bathroom Tiles'
  | 'Kitchen Tiles'
  | 'Living Room Tiles'
  | 'Bedroom Tiles'
  | 'Outdoor Tiles'
  | 'Parking Tiles'
  | 'Elevation Tiles'
  | 'Decorative Tiles'
  | 'Marble-Look Tiles'
  | 'Wooden-Look Tiles'
  | 'Mosaic Tiles'
  | 'Large-Format Tiles'
  | 'Sanitary Ware';

export type FinishType =
  | 'Glossy'
  | 'High Gloss'
  | 'Matte'
  | 'Satin Matte'
  | 'Carving'
  | 'Sugar'
  | 'Rustic'
  | 'Anti-Skid'
  | 'Textured'
  | 'Polished'
  | 'Chrome'
  | 'Matte Black';

export interface Product {
  id: string;
  name: string;
  category: TileCategory;
  subcategory: string;
  sizes: string[];
  material: string;
  finish: FinishType;
  colour: string;
  productCode?: string;
  price: number | null;
  description: string;
  images: string[];
  featured?: boolean;
  isSample: boolean; // Flag to clearly distinguish showroom demonstration entries
  thickness?: string;
  piecesPerBox?: number;
  coveragePerBox?: string;
  suitableApplications?: string[];
  sanitaryType?: 'wash-basin' | 'toilet' | 'faucet' | 'shower' | 'accessory';
}

export interface CategoryInfo {
  id: string;
  name: TileCategory;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  subcategories: string[];
  popularSizes: string[];
  isSanitary?: boolean;
}

export interface FilterState {
  category: string;
  subcategory: string;
  size: string;
  material: string;
  finish: string;
  colour: string;
  search: string;
  sortBy: 'featured' | 'name-asc' | 'name-desc';
}
