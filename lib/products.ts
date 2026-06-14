export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'hardwood' | 'commercial' | 'marine' | 'industrial';
  grade: string;
  thickness: string[];
  waterResistance: 'standard' | 'moisture-resistant' | 'waterproof';
  warranty: string;
  certifications: string[];
  applications: string[];
  features: string[];
  specifications: {
    density: string;
    bendingStrength: string;
    compressionStrength: string;
    surfaceFinish: string;
  };
  image: string;
  galleryImages: string[];
  videoUrl?: string;
  description: string;
  longDescription: string;
  price?: string;
  stock?: boolean;
}

export const products: Product[] = [
  {
    id: 'product-1',
    slug: 'premium-birch',
    name: 'Premium Birch Plywood',
    category: 'hardwood',
    grade: 'A/A Grade',
    thickness: ['6mm', '9mm', '12mm', '18mm'],
    waterResistance: 'moisture-resistant',
    warranty: '5 Years',
    certifications: ['FSC Certified', 'ISO 9001:2015', 'CARB Compliant'],
    applications: ['Furniture Manufacturing', 'Interior Design', 'Cabinetry', 'Decorative Paneling'],
    features: [
      'Superior surface quality with minimal defects',
      'Excellent adhesion for veneering and finishing',
      'Consistent color and grain patterns',
      'Low emission formaldehyde (E0)',
    ],
    specifications: {
      density: '550-650 kg/m³',
      bendingStrength: '45-55 MPa',
      compressionStrength: '35-45 MPa',
      surfaceFinish: 'Sanded & Ready for Finishing',
    },
    image: '/products/premium-birch.png',
    galleryImages: [
      '/products/premium-birch.png',
      '/products/premium-birch.png',
      '/products/premium-birch.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Premium quality birch plywood for discerning furniture makers and designers',
    longDescription: 'Our Premium Birch Plywood is sourced from sustainably managed forests and manufactured to the highest international standards. Each sheet is carefully inspected to ensure uniform color, grain, and structural integrity. Perfect for high-end furniture, luxury cabinetry, and architectural applications where beauty and durability are paramount.',
    price: 'Custom Quote',
    stock: true,
  },
  {
    id: 'product-2',
    slug: 'commercial-grade',
    name: 'Commercial Grade Plywood',
    category: 'commercial',
    grade: 'B/BB Grade',
    thickness: ['12mm', '18mm', '25mm'],
    waterResistance: 'moisture-resistant',
    warranty: '3 Years',
    certifications: ['ISO 9001:2015', 'CARB Compliant', 'CE Mark'],
    applications: ['Construction', 'Structural Framework', 'Temporary Structures', 'General Purpose'],
    features: [
      'High strength-to-weight ratio',
      'Cost-effective solution for construction',
      'Weather-resistant outer veneer',
      'Easy to cut and work with',
    ],
    specifications: {
      density: '600-700 kg/m³',
      bendingStrength: '50-60 MPa',
      compressionStrength: '40-50 MPa',
      surfaceFinish: 'Standard Sanded',
    },
    image: '/products/commercial-grade.png',
    galleryImages: [
      '/products/commercial-grade.png',
      '/products/commercial-grade.png',
      '/products/commercial-grade.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Versatile commercial plywood for construction and industrial applications',
    longDescription: 'Commercial Grade Plywood offers excellent value without compromising on quality. Engineered for structural applications, it meets international building codes and standards. Ideal for construction sites, temporary structures, and general-purpose applications where reliability and cost-effectiveness are key.',
    price: 'Custom Quote',
    stock: true,
  },
  {
    id: 'product-3',
    slug: 'marine-grade',
    name: 'Marine Grade Plywood',
    category: 'marine',
    grade: 'Marine Grade',
    thickness: ['9mm', '12mm', '18mm'],
    waterResistance: 'waterproof',
    warranty: '10 Years',
    certifications: ['Lloyds Register Approved', 'DNV GL Certified', 'ISO 9001:2015'],
    applications: ['Boat Building', 'Marine Structures', 'Coastal Construction', 'Water Features'],
    features: [
      'Superior water resistance with waterproof adhesives',
      'Rot and insect resistant core',
      'Excellent durability in saltwater environments',
      'Zero delamination guarantee',
    ],
    specifications: {
      density: '700-800 kg/m³',
      bendingStrength: '60-70 MPa',
      compressionStrength: '50-60 MPa',
      surfaceFinish: 'Teak or Birch Veneer',
    },
    image: '/products/marine-grade.png',
    galleryImages: [
      '/products/marine-grade.png',
      '/products/marine-grade.png',
      '/products/marine-grade.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Engineered for extreme marine environments with unmatched durability',
    longDescription: 'Marine Grade Plywood is the gold standard for boat building and marine construction. Manufactured with specialized waterproof adhesives and premium veneers, it withstands saltwater exposure, UV radiation, and extreme weather conditions. Trusted by shipyards and marine architects worldwide.',
    price: 'Custom Quote',
    stock: true,
  },
  {
    id: 'product-4',
    slug: 'phenol-formaldehyde',
    name: 'Phenol Formaldehyde Plywood',
    category: 'industrial',
    grade: 'WBP Grade',
    thickness: ['12mm', '18mm', '25mm'],
    waterResistance: 'waterproof',
    warranty: '7 Years',
    certifications: ['ISO 9001:2015', 'BS 1088', 'CARB Compliant'],
    applications: ['Industrial Storage', 'Concrete Formwork', 'Extreme Weather Applications', 'Heavy Machinery Support'],
    features: [
      'Excellent water and weather resistance',
      'High modulus of elasticity',
      'Superior bonding strength',
      'Resistant to fungal and insect attack',
    ],
    specifications: {
      density: '680-760 kg/m³',
      bendingStrength: '55-65 MPa',
      compressionStrength: '45-55 MPa',
      surfaceFinish: 'Industrial Grade Sanded',
    },
    image: '/products/phenol-formaldehyde.png',
    galleryImages: [
      '/products/phenol-formaldehyde.png',
      '/products/phenol-formaldehyde.png',
      '/products/phenol-formaldehyde.png',
    ],
    description: 'Industrial-strength plywood for demanding applications',
    longDescription: 'Phenol Formaldehyde Plywood is engineered for the harshest industrial environments. With superior moisture and weather resistance, it excels in concrete formwork, heavy industrial applications, and outdoor structures. The waterproof WBP grade adhesive ensures long-term performance in challenging conditions.',
    price: 'Custom Quote',
    stock: true,
  },
  {
    id: 'product-5',
    slug: 'film-faced',
    name: 'Film Faced Plywood',
    category: 'commercial',
    grade: 'Film Faced',
    thickness: ['12mm', '18mm', '21mm'],
    waterResistance: 'waterproof',
    warranty: '5 Years',
    certifications: ['ISO 9001:2015', 'CE Mark'],
    applications: ['Concrete Formwork', 'Shuttering', 'Concrete Finishes', 'Reusable Structures'],
    features: [
      'Phenolic film-coated surface for smooth finishes',
      'Reusable up to 50+ times',
      'Anti-slip surface for worker safety',
      'Waterproof adhesive for extended durability',
    ],
    specifications: {
      density: '650-750 kg/m³',
      bendingStrength: '52-62 MPa',
      compressionStrength: '42-52 MPa',
      surfaceFinish: 'Film Coated (Brown or Black)',
    },
    image: '/products/film-faced.png',
    galleryImages: [
      '/products/film-faced.png',
      '/products/film-faced.png',
      '/products/film-faced.png',
    ],
    description: 'Durable film-faced solution for concrete shuttering and formwork',
    longDescription: 'Film Faced Plywood is the preferred choice for concrete formwork applications across construction sites. The phenolic film coating provides a smooth surface that produces excellent concrete finishes while allowing multiple reuses. The anti-slip texture ensures worker safety in demanding construction environments.',
    price: 'Custom Quote',
    stock: true,
  },
  {
    id: 'product-6',
    slug: 'hardwood-veneer',
    name: 'Hardwood Veneer Plywood',
    category: 'hardwood',
    grade: 'A Grade Veneer',
    thickness: ['6mm', '9mm', '12mm'],
    waterResistance: 'moisture-resistant',
    warranty: '5 Years',
    certifications: ['FSC Certified', 'ISO 9001:2015'],
    applications: ['Fine Furniture', 'Interior Cladding', 'Decorative Panels', 'Architectural Features'],
    features: [
      'Premium hardwood veneer with natural grain patterns',
      'Multiple wood species available',
      'Excellent dimensional stability',
      'Perfect for architectural detailing',
    ],
    specifications: {
      density: '550-650 kg/m³',
      bendingStrength: '48-58 MPa',
      compressionStrength: '38-48 MPa',
      surfaceFinish: 'Natural Finish or Pre-finished',
    },
    image: '/products/hardwood-veneer.png',
    galleryImages: [
      '/products/hardwood-veneer.png',
      '/products/hardwood-veneer.png',
      '/products/hardwood-veneer.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Luxurious hardwood veneer plywood for premium applications',
    longDescription: 'Hardwood Veneer Plywood brings natural beauty and elegance to interior spaces. With a wide selection of exotic and domestic wood species, each sheet is unique. Perfect for luxury interiors, high-end retail spaces, and architectural showpieces where aesthetic appeal is paramount.',
    price: 'Custom Quote',
    stock: true,
  },
  {
    id: 'product-7',
    slug: 'moisture-resistant',
    name: 'Moisture Resistant (MR) Grade',
    category: 'commercial',
    grade: 'MR Grade',
    thickness: ['9mm', '12mm', '18mm', '25mm'],
    waterResistance: 'moisture-resistant',
    warranty: '5 Years',
    certifications: ['ISO 9001:2015', 'CARB Compliant', 'BIS Approved'],
    applications: ['Kitchen Cabinetry', 'Bathroom Furniture', 'Areas with High Humidity', 'Institutional Kitchens'],
    features: [
      'Moisture-resistant adhesive for humid environments',
      'Prevents swelling and warping',
      'Ideal for wet areas',
      'Easy to clean and maintain',
    ],
    specifications: {
      density: '600-700 kg/m³',
      bendingStrength: '50-60 MPa',
      compressionStrength: '40-50 MPa',
      surfaceFinish: 'Standard or Custom Finish',
    },
    image: '/products/moisture-resistant.png',
    galleryImages: [
      '/products/moisture-resistant.png',
      '/products/moisture-resistant.png',
      '/products/moisture-resistant.png',
    ],
    description: 'Engineered for humid and moisture-prone environments',
    longDescription: 'Moisture Resistant Grade Plywood is specifically formulated for kitchens, bathrooms, and other high-humidity areas. The specialized adhesive system resists moisture absorption, preventing dimensional changes and ensuring long-lasting structural integrity in challenging environments.',
    price: 'Custom Quote',
    stock: true,
  },
];

export const productCategories = [
  { id: 'hardwood', label: 'Hardwood Plywood', color: '#8B4513' },
  { id: 'commercial', label: 'Commercial Grade', color: '#4A5568' },
  { id: 'marine', label: 'Marine Grade', color: '#0066CC' },
  { id: 'industrial', label: 'Industrial', color: '#6B2C00' },
];

export const brands = [
  { name: 'BIRCH MASTER', logo: '/brands/birch-master.svg' },
  { name: 'OCEAN SHIELD', logo: '/brands/ocean-shield.svg' },
  { name: 'INDUSTRIAL PRO', logo: '/brands/industrial-pro.svg' },
  { name: 'ECO WOOD', logo: '/brands/eco-wood.svg' },
  { name: 'PREMIUM SELECT', logo: '/brands/premium-select.svg' },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function filterProducts(filters: {
  category?: string;
  waterResistance?: string;
  warranty?: string;
  grade?: string;
}): Product[] {
  return products.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.waterResistance && product.waterResistance !== filters.waterResistance)
      return false;
    if (filters.warranty && product.warranty !== filters.warranty) return false;
    if (filters.grade && product.grade !== filters.grade) return false;
    return true;
  });
}
