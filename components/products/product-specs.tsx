'use client';

import { Product } from '@/lib/products';
import { Card } from '@/components/ui/card';

interface ProductSpecsProps {
  product: Product;
}

export default function ProductSpecs({ product }: ProductSpecsProps) {
  const specs = [
    { label: 'Density', value: product.specifications.density },
    { label: 'Bending Strength', value: product.specifications.bendingStrength },
    { label: 'Compression Strength', value: product.specifications.compressionStrength },
    { label: 'Surface Finish', value: product.specifications.surfaceFinish },
    { label: 'Available Thickness', value: product.thickness.join(', ') },
    { label: 'Water Resistance', value: product.waterResistance.replace('-', ' ') },
    { label: 'Warranty Period', value: product.warranty },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {specs.map((spec) => (
        <Card key={spec.label} className="p-6">
          <p className="text-sm text-muted-foreground mb-2">{spec.label}</p>
          <p className="text-lg font-semibold">{spec.value}</p>
        </Card>
      ))}
    </div>
  );
}
