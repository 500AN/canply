export interface Brand {
  id: string;
  name: string;
  description: string;
  logo: string;
  established: number;
  products: number;
  certifications: string[];
  regions: string[];
}

export const brands: Brand[] = [
  {
    id: 'birch-master',
    name: 'BIRCH MASTER',
    description: 'Premium hardwood plywood manufacturer with 25+ years of excellence',
    logo: '/brands/birch-master.svg',
    established: 1998,
    products: 3,
    certifications: ['FSC Certified', 'ISO 9001:2015', 'CARB Compliant'],
    regions: ['Europe', 'North America', 'Asia-Pacific'],
  },
  {
    id: 'ocean-shield',
    name: 'OCEAN SHIELD',
    description: 'Specialist in marine-grade plywood for nautical applications',
    logo: '/brands/ocean-shield.svg',
    established: 2005,
    products: 2,
    certifications: ['Lloyds Register', 'DNV GL', 'ISO 9001:2015'],
    regions: ['Global'],
  },
  {
    id: 'industrial-pro',
    name: 'INDUSTRIAL PRO',
    description: 'Industrial plywood solutions for demanding applications',
    logo: '/brands/industrial-pro.svg',
    established: 2002,
    products: 2,
    certifications: ['ISO 9001:2015', 'BS 1088', 'CE Mark'],
    regions: ['Europe', 'Middle East', 'Asia'],
  },
  {
    id: 'eco-wood',
    name: 'ECO WOOD',
    description: 'Sustainable and environmentally conscious plywood production',
    logo: '/brands/eco-wood.svg',
    established: 2010,
    products: 2,
    certifications: ['FSC Certified', 'ISO 9001:2015', 'PEFC'],
    regions: ['North America', 'Europe'],
  },
  {
    id: 'premium-select',
    name: 'PREMIUM SELECT',
    description: 'High-performance decorative plywood for luxury applications',
    logo: '/brands/premium-select.svg',
    established: 2008,
    products: 2,
    certifications: ['FSC Certified', 'ISO 9001:2015'],
    regions: ['Europe', 'Asia-Pacific', 'Africa'],
  },
];

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}

export function getAllBrands(): Brand[] {
  return brands;
}
