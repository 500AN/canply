'use client';

import { useParams } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/products';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ProductGallery from '@/components/products/product-gallery';
import ProductSpecs from '@/components/products/product-specs';
import RelatedProducts from '@/components/products/related-products';
import GetQuoteForm from '@/components/forms/get-quote-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Button href="/products">View All Products</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </a>
            <span className="text-muted-foreground">/</span>
            <a href="/products" className="text-muted-foreground hover:text-foreground">
              Products
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{product.category.replace('-', ' ').toUpperCase()}</Badge>
                <Badge variant="outline">{product.grade}</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Quick View */}
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-semibold mb-4">Quick Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Thickness Options</p>
                  <p className="font-medium">{product.thickness.join(', ')}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Water Resistance</p>
                  <p className="font-medium capitalize">{product.waterResistance.replace('-', ' ')}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Warranty</p>
                  <p className="font-medium">{product.warranty}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Applications</p>
                  <p className="font-medium">{product.applications.length} Use Cases</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Quote
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Download Brochure
              </Button>
            </div>

            {/* Certifications */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <Badge key={cert} variant="secondary">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="space-y-6">
              <ProductSpecs product={product} />
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.applications.map((app) => (
                  <Card key={app} className="p-6">
                    <h4 className="font-semibold mb-2">{app}</h4>
                    <p className="text-sm text-muted-foreground">
                      {product.name} is ideal for {app.toLowerCase()} applications.
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-6">
              <div className="prose prose-sm max-w-none">
                <p className="text-lg text-muted-foreground">{product.longDescription}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Quote Form Section */}
        <div id="quote-form" className="mt-16 py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Request a Quote</h2>
          <GetQuoteForm product={product} />
        </div>

        {/* Related Products */}
        <div className="mt-16 py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Related Products</h2>
          <RelatedProducts product={product} />
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
