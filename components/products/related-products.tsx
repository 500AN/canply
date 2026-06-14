'use client';

import { Product, products } from '@/lib/products';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {related.map((relatedProduct) => (
        <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          {/* Image */}
          <div className="relative bg-secondary aspect-video overflow-hidden">
            <Image
              src={relatedProduct.image}
              alt={relatedProduct.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-sm text-muted-foreground mb-2">{relatedProduct.category.replace('-', ' ')}</p>
            <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {relatedProduct.description}
            </p>

            <div className="flex gap-2 mb-4">
              <span className="text-xs bg-secondary px-2 py-1 rounded">{relatedProduct.grade}</span>
              <span className="text-xs bg-secondary px-2 py-1 rounded">{relatedProduct.warranty}</span>
            </div>

            <Link href={`/products/${relatedProduct.slug}`}>
              <Button className="w-full" variant="default">
                View Details
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
