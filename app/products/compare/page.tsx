'use client';

import { products } from '@/lib/products';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ComparisonPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleSelectProduct = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else if (selectedProducts.length < 4) {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter((id) => id !== productId));
  };

  const comparisonProducts = products.filter((p) => selectedProducts.includes(p.id));

  const comparisonAttributes = [
    { key: 'grade', label: 'Grade' },
    { key: 'waterResistance', label: 'Water Resistance' },
    { key: 'warranty', label: 'Warranty' },
    { key: 'density', label: 'Density (Approx)' },
    { key: 'bendingStrength', label: 'Bending Strength' },
    { key: 'compressionStrength', label: 'Compression Strength' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="border-b border-border bg-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Compare Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Compare up to 4 products side-by-side to find the perfect plywood solution for your needs.
          </motion.p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Product Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Select Products to Compare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const isSelected = selectedProducts.includes(product.id);
              return (
                <motion.button
                  key={product.id}
                  onClick={() => handleSelectProduct(product.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-lg border-2 text-left transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 bg-card'
                  }`}
                  disabled={selectedProducts.length >= 4 && !isSelected}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <Badge variant="secondary">{product.category.replace('-', ' ')}</Badge>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Comparison Section */}
        {selectedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Comparison Details</h2>

            {/* Mobile View - Cards */}
            <div className="md:hidden space-y-6">
              {comparisonProducts.map((product) => (
                <Card key={product.id} className="p-6 relative">
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="absolute top-4 right-4 p-1 hover:bg-secondary rounded-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <div className="relative w-full aspect-video mb-4 rounded-lg bg-secondary overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {comparisonAttributes.map((attr) => (
                      <div key={attr.key} className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-muted-foreground">{attr.label}</span>
                        <span className="text-sm font-semibold">
                          {attr.key === 'waterResistance'
                            ? product.waterResistance.replace('-', ' ')
                            : attr.key === 'density'
                              ? product.specifications.density
                              : attr.key === 'bendingStrength'
                                ? product.specifications.bendingStrength
                                : attr.key === 'compressionStrength'
                                  ? product.specifications.compressionStrength
                                  : (product[attr.key as keyof typeof product] as string)}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Desktop View - Table */}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    <th className="p-6 text-left font-semibold">Attribute</th>
                    {comparisonProducts.map((product) => (
                      <th key={product.id} className="p-6 text-left font-semibold">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <p className="font-bold text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">{product.grade}</p>
                          </div>
                          <button
                            onClick={() => handleRemoveProduct(product.id)}
                            className="p-1 hover:bg-background rounded-lg ml-2 flex-shrink-0"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="relative w-full aspect-video rounded-lg bg-background overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonAttributes.map((attr, idx) => (
                    <tr key={attr.key} className={idx % 2 === 0 ? 'bg-background' : 'bg-card'}>
                      <td className="p-6 font-semibold text-sm">{attr.label}</td>
                      {comparisonProducts.map((product) => (
                        <td key={product.id} className="p-6 text-sm">
                          {attr.key === 'waterResistance'
                            ? product.waterResistance.replace('-', ' ')
                            : attr.key === 'density'
                              ? product.specifications.density
                              : attr.key === 'bendingStrength'
                                ? product.specifications.bendingStrength
                                : attr.key === 'compressionStrength'
                                  ? product.specifications.compressionStrength
                                  : (product[attr.key as keyof typeof product] as string)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              {comparisonProducts.slice(0, 1).map((product) => (
                <Button key={product.id} className="gap-2">
                  Request Quote for Comparison
                </Button>
              ))}
              <Button variant="outline" onClick={() => setSelectedProducts([])}>
                Clear All
              </Button>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {selectedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center py-12 border border-dashed border-border rounded-lg"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Select up to 4 products above to see a detailed comparison
            </p>
          </motion.div>
        )}
      </div>
      </main>
      <Footer />
    </>
  );
}
