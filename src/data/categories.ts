import { CategoryInfo } from '../types/product';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'floor-tiles',
    name: 'Floor Tiles',
    slug: 'floor-tiles',
    tagline: 'Durable, elegant flooring for modern living',
    description: 'High-strength vitrified, ceramic, and porcelain floor tiles crafted for residential and commercial spaces.',
    image: '/images/categories/floor-tiles.jpg',
    subcategories: [
      'Glazed Vitrified Tiles (GVT)',
      'Polished Glazed Vitrified Tiles (PGVT)',
      'Double Charge Vitrified Tiles',
      'Full Body Vitrified Tiles',
      'Ceramic Floor Tiles',
      'Porcelain Floor Tiles'
    ],
    popularSizes: ['600 x 600 mm', '600 x 1200 mm', '800 x 1600 mm', '1200 x 1200 mm']
  },
  {
    id: 'wall-tiles',
    name: 'Wall Tiles',
    slug: 'wall-tiles',
    tagline: 'Artistic textures and statement feature walls',
    description: 'Transform interior and exterior walls with glossy, matte, textured 3D, and decorative ceramic tiles.',
    image: '/images/categories/wall-tiles.jpg',
    subcategories: [
      'Glossy Wall Tiles',
      'Matte Wall Tiles',
      'Textured & 3D Ceramic Tiles',
      'Subway & Chevron Wall Tiles',
      'Feature Wall Cladding'
    ],
    popularSizes: ['300 x 450 mm', '300 x 600 mm', '600 x 1200 mm']
  },
  {
    id: 'bathroom-tiles',
    name: 'Bathroom Tiles',
    slug: 'bathroom-tiles',
    tagline: 'Water-resistant, slip-safe spa aesthetics',
    description: 'Anti-skid floor tiles and coordinating wall tiles engineered for moisture resistance and luxury aesthetics.',
    image: '/images/categories/bathroom-tiles.jpg',
    subcategories: [
      'Anti-Skid Floor Tiles',
      'Designer Shower Walls',
      'Stone-Look Matte Tiles',
      'Hygienic Non-Porous Ceramics'
    ],
    popularSizes: ['300 x 300 mm', '300 x 600 mm', '600 x 600 mm', '600 x 1200 mm']
  },
  {
    id: 'kitchen-tiles',
    name: 'Kitchen Tiles',
    slug: 'kitchen-tiles',
    tagline: 'Stain-resistant backsplashes and enduring floors',
    description: 'Easy-to-clean, oil-resistant tiles designed for high-traffic culinary spaces and backsplashes.',
    image: '/images/categories/kitchen-tiles.jpg',
    subcategories: [
      'Kitchen Backsplash Tiles',
      'Glossy Wall Accents',
      'Stain-Proof Floor Tiles',
      'Modern Brick Patterns'
    ],
    popularSizes: ['300 x 450 mm', '300 x 600 mm', '600 x 600 mm']
  },
  {
    id: 'living-room-tiles',
    name: 'Living Room Tiles',
    slug: 'living-room-tiles',
    tagline: 'Grandeur and warmth for welcoming spaces',
    description: 'High-sheen Italian marble textures and satin matte surfaces that create a spacious, prestigious ambiance.',
    image: '/images/categories/living-room-tiles.jpg',
    subcategories: [
      'High Gloss Polished Tiles',
      'Satin Matte Finishes',
      'Continuous Vein Slabs',
      'Carving Vitrified Surfaces'
    ],
    popularSizes: ['600 x 1200 mm', '800 x 1600 mm', '1200 x 1800 mm']
  },
  {
    id: 'bedroom-tiles',
    name: 'Bedroom Tiles',
    slug: 'bedroom-tiles',
    tagline: 'Serene comfort and soothing tones',
    description: 'Warm neutral tones, soft wood grains, and matte ceramic surfaces designed for peaceful retreats.',
    image: '/images/categories/bedroom-tiles.jpg',
    subcategories: [
      'Warm Neutral Mattes',
      'Subtle Textile Textures',
      'Wood Finish Porcelain',
      'Soft Sugar Finishes'
    ],
    popularSizes: ['600 x 600 mm', '600 x 1200 mm', '200 x 1200 mm']
  },
  {
    id: 'outdoor-tiles',
    name: 'Outdoor Tiles',
    slug: 'outdoor-tiles',
    tagline: 'Weatherproof endurance for patios and terraces',
    description: 'Rugged, UV-resistant porcelain pavers and vitrified tiles designed to withstand sun, rain, and foot traffic.',
    image: '/images/categories/outdoor-tiles.jpg',
    subcategories: [
      'Terrace & Balcony Tiles',
      'Textured Stone Look',
      'Anti-Skid Outdoor Pavers',
      '16 mm Heavy Porcelain'
    ],
    popularSizes: ['400 x 400 mm', '600 x 600 mm', '600 x 1200 mm']
  },
  {
    id: 'parking-tiles',
    name: 'Parking Tiles',
    slug: 'parking-tiles',
    tagline: 'Heavy-duty load-bearing vehicle pavers',
    description: 'Extra-thick, high-breaking-strength pavers designed for vehicular driveways, parking zones, and ramps.',
    image: '/images/categories/parking-tiles.jpg',
    subcategories: [
      'Full Body Heavy Duty',
      'Chequered Industrial Pavers',
      'Ramp Gripper Tiles',
      'Granite Finish Pavers'
    ],
    popularSizes: ['300 x 300 mm', '400 x 400 mm']
  },
  {
    id: 'elevation-tiles',
    name: 'Elevation Tiles',
    slug: 'elevation-tiles',
    tagline: 'Striking exterior building facade finishes',
    description: 'Natural stone, slate, brick, and contemporary geometric cladding tiles for exterior elevation aesthetics.',
    image: '/images/categories/elevation-tiles.jpg',
    subcategories: [
      'Stone Brick Cladding',
      'Modern Geometric Relief',
      'Slate & Rock Finishes',
      'Weather-Resistant Vitrified'
    ],
    popularSizes: ['200 x 400 mm', '300 x 600 mm', '400 x 800 mm']
  },
  {
    id: 'decorative-tiles',
    name: 'Decorative Tiles',
    slug: 'decorative-tiles',
    tagline: 'Creative patterns, motifs, and focal points',
    description: 'Expressive geometric, Moroccan, and artisanal accent tiles to create signature focal areas.',
    image: '/images/categories/decorative-tiles.jpg',
    subcategories: [
      'Moroccan & Bohemian Patterns',
      'Geometric Monochromes',
      'Artistic Ceramic Borders',
      'Highlighter Wall Tiles'
    ],
    popularSizes: ['300 x 300 mm', '600 x 600 mm']
  },
  {
    id: 'marble-look-tiles',
    name: 'Marble-Look Tiles',
    slug: 'marble-look-tiles',
    tagline: 'The timeless majesty of natural Italian stone',
    description: 'Statuario, Calacatta, Botticino, and Armani marble looks with zero maintenance and stain proofing.',
    image: '/images/categories/marble-look-tiles.jpg',
    subcategories: [
      'Italian White Marble',
      'Exotic Black & Gold',
      'Warm Onyx Textures',
      'Beige & Travertine Finishes'
    ],
    popularSizes: ['600 x 1200 mm', '800 x 1600 mm', '1200 x 2400 mm']
  },
  {
    id: 'wooden-look-tiles',
    name: 'Wooden-Look Tiles',
    slug: 'wooden-look-tiles',
    tagline: 'Warm organic timber texture with vitrified durability',
    description: 'Realistic grain textures inspired by teak, oak, walnut, and pine without termite or moisture worries.',
    image: '/images/categories/wooden-look-tiles.jpg',
    subcategories: [
      'Natural Oak Planks',
      'Rustic Teak Strips',
      'Distressed Timber',
      'Chevron Wood Patterns'
    ],
    popularSizes: ['200 x 1000 mm', '200 x 1200 mm', '600 x 1200 mm']
  },
  {
    id: 'mosaic-tiles',
    name: 'Mosaic Tiles',
    slug: 'mosaic-tiles',
    tagline: 'Intricate detail for niches, pools, and borders',
    description: 'Glass, stone, and vitrified micro-tiles offering flexible installation for curved surfaces and niches.',
    image: '/images/categories/mosaic-tiles.jpg',
    subcategories: [
      'Swimming Pool Mosaics',
      'Glass & Mirror Accents',
      'Hexagonal Ceramics',
      'Niche Highlight Mesh'
    ],
    popularSizes: ['300 x 300 mm (Mesh Backed)']
  },
  {
    id: 'large-format-tiles',
    name: 'Large-Format Tiles',
    slug: 'large-format-tiles',
    tagline: 'Seamless architectural slabs with minimal grout',
    description: 'Massive porcelain slabs extending up to 2.4 meters for seamless contemporary architectural statements.',
    image: '/images/categories/large-format-tiles.jpg',
    subcategories: [
      'GVT / PGVT Slabs',
      'Continuous Vein Slabs',
      'Wall Cladding Slabs',
      'Kitchen Countertop Porcelain'
    ],
    popularSizes: ['800 x 1600 mm', '1200 x 1800 mm', '1200 x 2400 mm']
  },
  {
    id: 'sanitary-ware',
    name: 'Sanitary Ware',
    slug: 'sanitary-ware',
    tagline: 'Premium ceramics and bath fittings',
    description: 'Designer countertop basins, rimless wall-hung toilets, brass faucets, and luxury bathroom systems.',
    image: '/images/categories/sanitary-ware.jpg',
    subcategories: [
      'Countertop & Table-Top Basins',
      'Wall-Hung Rimless Water Closets',
      'One-Piece & Two-Piece Toilets',
      'Single-Lever Basin Mixers',
      'Thermostatic Shower Sets',
      'Luxury Bathroom Accessories'
    ],
    popularSizes: ['Standard & Custom Fitting Sizes'],
    isSanitary: true
  }
];
