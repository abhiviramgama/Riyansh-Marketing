import { Product } from '../types/product';

/**
 * Riyansh Marketing Central Product Catalogue
 * Note: Demonstration / showroom reference entries are marked with isSample: true.
 * Real inventory and pricing are confirmed directly upon enquiry with Riyansh Marketing.
 */
export const PRODUCTS: Product[] = [
  // 1. Statuario White Marble-Look Tile
  {
    id: 'RM-001',
    name: 'Statuario Elegance Glazed Vitrified Tile',
    category: 'Floor Tiles',
    subcategory: 'Polished Glazed Vitrified Tiles (PGVT)',
    sizes: ['600 x 1200 mm', '800 x 1600 mm', '1200 x 2400 mm'],
    material: 'Glazed Vitrified (GVT / PGVT)',
    finish: 'High Gloss',
    colour: 'White & Grey Veins',
    productCode: 'RM-GVT-101',
    price: null,
    description: 'A timeless Italian Statuario marble reproduction featuring fluid charcoal and silver veins on a pristine white crystalline background. Engineered with high-strength vitrified body for opulent living rooms, master suites, and upscale commercial spaces.',
    images: [
      '/images/products/statuario-marble.jpg',
      '/images/categories/marble-look-tiles.jpg',
      '/images/gallery/living-1.jpg'
    ],
    featured: true,
    isSample: true,
    thickness: '9 mm',
    piecesPerBox: 2,
    coveragePerBox: '15.50 sq. ft (1.44 sq. m)',
    suitableApplications: ['Living Room Flooring', 'Commercial Lobbies', 'Master Bedroom', 'Feature Walls']
  },

  // 2. Calacatta Gold Glossy Floor Tile
  {
    id: 'RM-002',
    name: 'Calacatta Oro Luxury Porcelain Slab',
    category: 'Marble-Look Tiles',
    subcategory: 'Continuous Vein Slabs',
    sizes: ['800 x 1600 mm', '1200 x 1800 mm'],
    material: 'Vitrified Porcelain',
    finish: 'Glossy',
    colour: 'Warm White & Gold Veins',
    productCode: 'RM-GVT-102',
    price: null,
    description: 'Epitomising contemporary Italian luxury, Calacatta Oro features warm honey-gold and light taupe veins flowing organically across an off-white base. Reflects ambient light with pristine clarity.',
    images: [
      '/images/products/calacatta-gold.jpg',
      '/images/hero/hero-tile-living.jpg'
    ],
    featured: true,
    isSample: true,
    thickness: '9.5 mm',
    piecesPerBox: 2,
    coveragePerBox: '27.56 sq. ft (2.56 sq. m)',
    suitableApplications: ['Dining Rooms', 'Penthouse Floors', 'Hotel Lobbies', 'Designer Foyers']
  },

  // 3. Royal Portoro Black Marble Tile
  {
    id: 'RM-003',
    name: 'Royal Portoro Nero Marble Tile',
    category: 'Large-Format Tiles',
    subcategory: 'Continuous Vein Slabs',
    sizes: ['600 x 1200 mm', '800 x 1600 mm'],
    material: 'Vitrified Glazed',
    finish: 'High Gloss',
    colour: 'Deep Charcoal Black & Gold',
    productCode: 'RM-GVT-103',
    price: null,
    description: 'An alluring deep obsidian-black glazed tile infused with striking streaks of liquid amber and rich gold. Perfect for dramatic feature walls, luxury powder rooms, and reception backdrops.',
    images: [
      '/images/products/portoro-black.jpg',
      '/images/categories/large-format-tiles.jpg'
    ],
    featured: true,
    isSample: true,
    thickness: '9 mm',
    piecesPerBox: 2,
    coveragePerBox: '15.50 sq. ft (1.44 sq. m)',
    suitableApplications: ['Feature Wall Cladding', 'Executive Offices', 'Bar Fronts', 'Vanity Accent Walls']
  },

  // 4. Nordic Natural Oak Wood Planks
  {
    id: 'RM-004',
    name: 'Nordic Oak Wood-Grain Strip Planks',
    category: 'Wooden-Look Tiles',
    subcategory: 'Natural Oak Planks',
    sizes: ['200 x 1200 mm', '200 x 1000 mm'],
    material: 'Porcelain Vitrified',
    finish: 'Satin Matte',
    colour: 'Natural Warm Oak',
    productCode: 'RM-WD-201',
    price: null,
    description: 'Authentic Scandinavian timber aesthetics with realistic wood grain knots and textured micro-relief. Resistant to water, termites, and stains, making it ideal for bedrooms, lounges, and balconies.',
    images: [
      '/images/products/oak-wood-plank.jpg',
      '/images/categories/wooden-look-tiles.jpg'
    ],
    featured: true,
    isSample: true,
    thickness: '9.5 mm',
    piecesPerBox: 5,
    coveragePerBox: '12.91 sq. ft (1.20 sq. m)',
    suitableApplications: ['Bedrooms', 'Balconies & Verandahs', 'Boutique Cafes', 'Study Rooms']
  },

  // 5. Armani Bronze Polished Vitrified Tile
  {
    id: 'RM-005',
    name: 'Armani Bronze Polished Vitrified Tile',
    category: 'Living Room Tiles',
    subcategory: 'Carving Vitrified Surfaces',
    sizes: ['600 x 1200 mm', '800 x 1600 mm'],
    material: 'Double Charge Vitrified',
    finish: 'Carving',
    colour: 'Earthy Bronze & Chocolate Grey',
    productCode: 'RM-GVT-104',
    price: null,
    description: 'Warm, earthy elegance with carved vein technology that provides a subtle tactile texture along veins while retaining an easy-to-clean polished surface.',
    images: [
      '/images/products/armani-bronze.jpg',
      '/images/gallery/commercial-1.jpg'
    ],
    featured: false,
    isSample: true,
    thickness: '9 mm',
    piecesPerBox: 2,
    coveragePerBox: '15.50 sq. ft (1.44 sq. m)',
    suitableApplications: ['Living Rooms', 'Corporate Boardrooms', 'Showroom Floors', 'Dining Areas']
  },

  // 6. Charcoal Slate Anti-Skid Bathroom Tile
  {
    id: 'RM-006',
    name: 'Charcoal Basalt Anti-Skid Tile',
    category: 'Bathroom Tiles',
    subcategory: 'Anti-Skid Floor Tiles',
    sizes: ['600 x 600 mm', '300 x 300 mm'],
    material: 'Full Body Ceramic / Vitrified',
    finish: 'Anti-Skid',
    colour: 'Charcoal Grey',
    productCode: 'RM-BTH-301',
    price: null,
    description: 'Specialised anti-skid floor tile offering superior wet-grip friction (R10 rating) for modern bathrooms, wet areas, and pool surrounds. Neutral slate texture pairs effortlessly with modern chrome and matte black fixtures.',
    images: [
      '/images/products/charcoal-anti-skid.jpg',
      '/images/gallery/bathroom-1.jpg'
    ],
    featured: true,
    isSample: true,
    thickness: '8.5 mm',
    piecesPerBox: 4,
    coveragePerBox: '15.50 sq. ft (1.44 sq. m)',
    suitableApplications: ['Bathroom Shower Floors', 'Wet Areas', 'Balconies', 'Laundry Rooms']
  },

  // 7. Fluted Ivory 3D Ceramic Wall Tile
  {
    id: 'RM-007',
    name: 'Fluted Architectural 3D Wall Tile',
    category: 'Wall Tiles',
    subcategory: 'Textured & 3D Ceramic Tiles',
    sizes: ['300 x 600 mm', '300 x 450 mm'],
    material: 'Ceramic Body',
    finish: 'Satin Matte',
    colour: 'Ivory Cream',
    productCode: 'RM-WL-401',
    price: null,
    description: 'Linear vertical fluting creates mesmerizing light-and-shadow play across walls. Designed for modern bathroom vanity walls, kitchen backsplashes, and boutique feature pillars.',
    images: [
      '/images/products/fluted-wall-tile.jpg',
      '/images/categories/wall-tiles.jpg'
    ],
    featured: false,
    isSample: true,
    thickness: '9 mm',
    piecesPerBox: 6,
    coveragePerBox: '11.62 sq. ft (1.08 sq. m)',
    suitableApplications: ['Bathroom Walls', 'Backsplashes', 'TV Unit Feature Walls', 'Hotel Bathrooms']
  },

  // 8. Moroccan Heritage Geometric Accent Tile
  {
    id: 'RM-008',
    name: 'Moroccan Heritage Motif Accent Tile',
    category: 'Decorative Tiles',
    subcategory: 'Moroccan & Bohemian Patterns',
    sizes: ['300 x 300 mm', '600 x 600 mm'],
    material: 'Ceramic Glazed',
    finish: 'Matte',
    colour: 'Navy, Terracotta & White',
    productCode: 'RM-DEC-501',
    price: null,
    description: 'Handcrafted Mediterranean-inspired motif with intricate interlocking geometric patterns. Creates a dynamic artisan accent for breakfast counters, stair risers, and decorative floor rugs.',
    images: [
      '/images/products/moroccan-geometric.jpg',
      '/images/categories/decorative-tiles.jpg'
    ],
    featured: true,
    isSample: true,
    thickness: '8 mm',
    piecesPerBox: 8,
    coveragePerBox: '7.75 sq. ft (0.72 sq. m)',
    suitableApplications: ['Kitchen Backsplashes', 'Foyer Rugs', 'Courtyard Nooks', 'Stair Risers']
  },

  // 9. Carrara White Subway Beveled Kitchen Tile
  {
    id: 'RM-009',
    name: 'Carrara Marble Glossy Subway Tile',
    category: 'Kitchen Tiles',
    subcategory: 'Kitchen Backsplash Tiles',
    sizes: ['300 x 600 mm', '100 x 300 mm'],
    material: 'Ceramic Wall Body',
    finish: 'Glossy',
    colour: 'Carrara Pure White',
    productCode: 'RM-KT-601',
    price: null,
    description: 'Bright reflective glazed finish with subtle grey marbling, engineered for smooth wipe-clean maintenance against cooking splatters and steam.',
    images: [
      '/images/products/carrara-white-subway.jpg',
      '/images/gallery/kitchen-1.jpg'
    ],
    featured: false,
    isSample: true,
    thickness: '7.5 mm',
    piecesPerBox: 8,
    coveragePerBox: '15.50 sq. ft (1.44 sq. m)',
    suitableApplications: ['Kitchen Backsplashes', 'Pantry Walls', 'Coffee Stations', 'Utility Walls']
  },

  // 10. Terrazzo Modern Grey Floor Tile
  {
    id: 'RM-009B',
    name: 'Terrazzo Venetian Aggregate Tile',
    category: 'Floor Tiles',
    subcategory: 'Glazed Vitrified Tiles (GVT)',
    sizes: ['600 x 600 mm', '600 x 1200 mm'],
    material: 'Full Body Vitrified',
    finish: 'Matte',
    colour: 'Cool Grey with Mineral Chips',
    productCode: 'RM-TRZ-105',
    price: null,
    description: 'Reinterprets Italian Venetian terrazzo with multicolored natural marble granules embedded in a dense grey vitrified matrix. Extremely resilient to high footfall.',
    images: [
      '/images/products/terrazzo-grey.jpg',
      '/images/categories/floor-tiles.jpg'
    ],
    featured: false,
    isSample: true,
    thickness: '9 mm',
    piecesPerBox: 4,
    coveragePerBox: '15.50 sq. ft (1.44 sq. m)',
    suitableApplications: ['Cafes & Restaurants', 'Modern Residences', 'Covered Porches', 'Boutique Studios']
  },

  // 11. Heavy-Duty Industrial Parking Paver
  {
    id: 'RM-010',
    name: 'Heavy-Duty Driveway Parking Paver',
    category: 'Parking Tiles',
    subcategory: 'Full Body Heavy Duty',
    sizes: ['400 x 400 mm', '300 x 300 mm'],
    material: 'Full Body Heavy-Duty Vitrified',
    finish: 'Textured',
    colour: 'Graphite Grey & Terracotta',
    productCode: 'RM-PRK-701',
    price: null,
    description: 'Engineered with a dense 12 mm thick vitrified core to withstand heavy SUV loads, parking movement, and extreme temperature variations without cracking.',
    images: [
      '/images/products/heavy-parking-paver.jpg',
      '/images/categories/parking-tiles.jpg'
    ],
    featured: false,
    isSample: true,
    thickness: '12 mm',
    piecesPerBox: 5,
    coveragePerBox: '8.61 sq. ft (0.80 sq. m)',
    suitableApplications: ['Residential Driveways', 'Commercial Parking Lots', 'Car Wash Bays', 'Industrial Walkways']
  },

  // 12. Travertine Beige Outdoor Terrace Paver
  {
    id: 'RM-011',
    name: 'Travertine Natural Beige Outdoor Slab',
    category: 'Outdoor Tiles',
    subcategory: 'Anti-Skid Outdoor Pavers',
    sizes: ['600 x 600 mm', '600 x 1200 mm'],
    material: 'Outdoor Vitrified Paver',
    finish: 'Rustic',
    colour: 'Earthy Travertine Beige',
    productCode: 'RM-OUT-801',
    price: null,
    description: 'Replicates porous Tuscan travertine with non-porous vitrified durability. Anti-slip textured face stays cool under direct sunlight and resists algae accumulation.',
    images: [
      '/images/products/travertine-exterior.jpg',
      '/images/gallery/outdoor-1.jpg'
    ],
    featured: false,
    isSample: true,
    thickness: '10 mm',
    piecesPerBox: 3,
    coveragePerBox: '11.62 sq. ft (1.08 sq. m)',
    suitableApplications: ['Swimming Pool Decks', 'Terraces & Patios', 'Garden Pathways', 'Courtyards']
  },

  // SANITARY WARE PRODUCTS
  // 13. Oval Luxury Countertop Ceramic Basin
  {
    id: 'RM-SW-001',
    name: 'Aura Oval Countertop Ceramic Basin',
    category: 'Sanitary Ware',
    subcategory: 'Countertop & Table-Top Basins',
    sizes: ['550 x 380 x 130 mm', '600 x 400 x 140 mm'],
    material: 'High-Grade Vitreous China Ceramic',
    finish: 'Glossy',
    colour: 'Gloss Alpine White',
    productCode: 'RM-SW-BSN-01',
    price: null,
    description: 'Gracefully contoured oval table-top wash basin with ultra-thin rim technology and self-cleaning nano glaze. Resists bacteria and water spotting.',
    images: [
      '/images/sanitary-ware/countertop-basin-white.jpg',
      '/images/categories/sanitary-ware.jpg'
    ],
    featured: true,
    isSample: true,
    sanitaryType: 'wash-basin',
    suitableApplications: ['Master Bathrooms', 'Powder Rooms', 'Luxury Hotel Ensuites']
  },

  // 14. Matte Black Vessel Basin
  {
    id: 'RM-SW-002',
    name: 'Nero Minimalist Matte Black Basin',
    category: 'Sanitary Ware',
    subcategory: 'Countertop & Table-Top Basins',
    sizes: ['480 x 370 x 135 mm'],
    material: 'Vitreous China with Matte Glaze',
    finish: 'Matte Black',
    colour: 'Matte Charcoal Black',
    productCode: 'RM-SW-BSN-02',
    price: null,
    description: 'Dramatic architectural vessel basin finished in velvety matte charcoal black. Designed to be paired with tall rose gold or chrome basin mixers.',
    images: [
      '/images/sanitary-ware/countertop-basin-matte-black.jpg'
    ],
    featured: true,
    isSample: true,
    sanitaryType: 'wash-basin',
    suitableApplications: ['Modern Restrooms', 'Executive Bathrooms', 'Contemporary Vanity Counters']
  },

  // 15. Rimless Wall-Hung Water Closet
  {
    id: 'RM-SW-003',
    name: 'Vortex Rimless Wall-Hung Water Closet',
    category: 'Sanitary Ware',
    subcategory: 'Wall-Hung Rimless Water Closets',
    sizes: ['540 x 360 x 350 mm'],
    material: 'High-Density Ceramic with Nano Glaze',
    finish: 'Glossy',
    colour: 'Pure Snow White',
    productCode: 'RM-SW-WC-01',
    price: null,
    description: 'Features advanced 360-degree vortex rimless flush technology for hygiene without splashing. Includes soft-close UF seat cover with quick-release hinges.',
    images: [
      '/images/sanitary-ware/wall-hung-toilet.jpg'
    ],
    featured: true,
    isSample: true,
    sanitaryType: 'toilet',
    suitableApplications: ['Residential Bathrooms', 'Corporate Restrooms', 'Compact Powder Rooms']
  },

  // 16. Designer Single-Lever Basin Mixer
  {
    id: 'RM-SW-004',
    name: 'Elegance Single-Lever Brass Basin Mixer',
    category: 'Sanitary Ware',
    subcategory: 'Single-Lever Basin Mixers',
    sizes: ['Tall Body (280 mm)', 'Regular Body (180 mm)'],
    material: 'Solid Virgin Forged Brass',
    finish: 'Chrome',
    colour: 'Mirror Polished Chrome',
    productCode: 'RM-SW-FCT-01',
    price: null,
    description: 'Precision-machined forged brass mixer featuring smooth ceramic disc cartridge for precise temperature blending and honeycomb aerator for splash-free water flow.',
    images: [
      '/images/sanitary-ware/designer-basin-mixer.jpg'
    ],
    featured: false,
    isSample: true,
    sanitaryType: 'faucet',
    suitableApplications: ['Countertop Basins', 'Under-Counter Sinks']
  },

  // 17. Thermostatic Concealed Shower System
  {
    id: 'RM-SW-005',
    name: 'HydroRain Concealed Thermostatic Shower Set',
    category: 'Sanitary Ware',
    subcategory: 'Thermostatic Shower Sets',
    sizes: ['300 mm Rain Head + Hand Shower'],
    material: 'Brass & Stainless Steel SS304',
    finish: 'Chrome',
    colour: 'Polished Chrome & White Accents',
    productCode: 'RM-SW-SHW-01',
    price: null,
    description: 'Multi-outlet thermostatic shower mixer with instant anti-scald safety valve, 12-inch slim stainless steel rain shower head, and multi-function handheld wand.',
    images: [
      '/images/sanitary-ware/thermostatic-shower.jpg'
    ],
    featured: true,
    isSample: true,
    sanitaryType: 'shower',
    suitableApplications: ['Luxury Master Ensuites', 'Spa Shower Enclosures']
  },

  // 18. Premium One-Piece Commode
  {
    id: 'RM-SW-006',
    name: 'Monolith Ergonomic One-Piece Toilet',
    category: 'Sanitary Ware',
    subcategory: 'One-Piece & Two-Piece Toilets',
    sizes: ['680 x 370 x 740 mm (S-Trap 300 mm)'],
    material: 'Vitreous China',
    finish: 'Glossy',
    colour: 'Gloss White',
    productCode: 'RM-SW-WC-02',
    price: null,
    description: 'Seamless single-piece seamless ceramic design eliminating hard-to-clean crevices. Dual-flush siphon jet mechanism achieves maximum waste removal with minimal water usage.',
    images: [
      '/images/sanitary-ware/one-piece-commode.jpg'
    ],
    featured: false,
    isSample: true,
    sanitaryType: 'toilet',
    suitableApplications: ['Family Bathrooms', 'Commercial Guest Restrooms']
  }
];
