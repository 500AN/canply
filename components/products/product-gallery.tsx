'use client';

import { Product } from '@/lib/products';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const allImages = [product.image, ...product.galleryImages];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-secondary rounded-lg overflow-hidden aspect-square">
        <Image
          src={allImages[selectedImage]}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gallery Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {allImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
            }`}
          >
            <Image
              src={image}
              alt={`${product.name} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Video Section */}
      {product.videoUrl && (
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Product Video</h3>
          <div className="relative bg-secondary rounded-lg overflow-hidden aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={product.videoUrl}
              title={`${product.name} Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
